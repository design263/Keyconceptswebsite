/**
 * Converts react/jsx-runtime jsx/jsxs() call expressions into standard JSX.
 * Preserves runtime behavior; output is re-printed by Babel generator.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { parse } from '@babel/parser'
import traverseModule from '@babel/traverse'
import generateModule from '@babel/generator'
import * as t from '@babel/types'

const traverse = traverseModule.default ?? traverseModule
const generate = generateModule.default ?? generateModule

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SRC = path.join(__dirname, '..', 'src')

function isJsxRuntimeCallee(callPath) {
  const callee = callPath.get('callee')
  if (!callee.isIdentifier()) return false
  const name = callee.node.name
  if (name !== 'jsx' && name !== 'jsxs') return false
  const binding = callPath.scope.getBinding(name)
  if (!binding || binding.kind !== 'module') return false
  const spec = binding.path
  if (!spec.isImportSpecifier()) return false
  const decl = spec.parentPath
  if (!decl.isImportDeclaration()) return false
  return decl.node.source.value === 'react/jsx-runtime'
}

function toJSXName(typeExpr) {
  if (t.isStringLiteral(typeExpr)) {
    return t.jsxIdentifier(typeExpr.value)
  }
  if (t.isIdentifier(typeExpr)) {
    return t.jsxIdentifier(typeExpr.name)
  }
  if (t.isMemberExpression(typeExpr) && !typeExpr.computed) {
    const obj = typeExpr.object
    const prop = typeExpr.property
    if (!t.isIdentifier(prop)) throw new Error('Unsupported member property')
    const jsxObj = toJSXName(obj)
    if (!t.isJSXIdentifier(jsxObj) && !t.isJSXMemberExpression(jsxObj)) {
      throw new Error('Unsupported member object for JSX')
    }
    return t.jsxMemberExpression(jsxObj, t.jsxIdentifier(prop.name))
  }
  throw new Error(`Unsupported JSX type: ${typeExpr.type}`)
}

function isFragmentType(typeExpr) {
  return t.isIdentifier(typeExpr) && typeExpr.name === 'Fragment'
}

function propKeyToAttrName(keyNode, computed) {
  if (computed) {
    throw new Error('Computed JSX prop keys are not supported by this codemod')
  }
  if (t.isIdentifier(keyNode)) {
    return { name: keyNode.name }
  }
  if (t.isStringLiteral(keyNode)) {
    return { name: keyNode.value }
  }
  throw new Error(`Unsupported prop key: ${keyNode.type}`)
}

function buildJSXAttribute(nameInfo, valueNode, shorthand) {
  const jsxName = t.jsxIdentifier(nameInfo.name)

  if (shorthand && t.isIdentifier(valueNode) && valueNode.name === nameInfo.name) {
    return t.jsxAttribute(jsxName, t.jsxExpressionContainer(valueNode))
  }

  if (t.isBooleanLiteral(valueNode) && valueNode.value === true) {
    return t.jsxAttribute(jsxName, null)
  }

  if (t.isStringLiteral(valueNode) || t.isNumericLiteral(valueNode) || t.isNullLiteral(valueNode)) {
    if (t.isStringLiteral(valueNode)) {
      return t.jsxAttribute(jsxName, t.stringLiteral(valueNode.value))
    }
    return t.jsxAttribute(jsxName, t.jsxExpressionContainer(valueNode))
  }

  return t.jsxAttribute(jsxName, t.jsxExpressionContainer(valueNode))
}

function exprToJSXChildren(expr) {
  if (expr == null) return []
  if (t.isJSXElement(expr) || t.isJSXFragment(expr)) {
    return [expr]
  }
  if (t.isStringLiteral(expr)) {
    const s = expr.value
    // Raw JSX text cannot contain `<` or `{` — they start tags/expressions.
    if (/[<{]/.test(s)) {
      return [t.jsxExpressionContainer(t.stringLiteral(s))]
    }
    return [t.jsxText(s)]
  }
  if (t.isNumericLiteral(expr)) {
    return [t.jsxExpressionContainer(expr)]
  }
  if (t.isBooleanLiteral(expr) || t.isNullLiteral(expr)) {
    return [t.jsxExpressionContainer(expr)]
  }
  return [t.jsxExpressionContainer(expr)]
}

function arrayExpressionToChildren(arr) {
  const hasSpread = arr.elements.some((el) => el && t.isSpreadElement(el))
  if (hasSpread) {
    return [t.jsxExpressionContainer(arr)]
  }
  const out = []
  for (const el of arr.elements) {
    if (el == null) continue
    out.push(...exprToJSXChildren(el))
  }
  return out
}

function childrenExprToJSXChildren(childrenExpr) {
  if (childrenExpr == null) return []
  if (t.isArrayExpression(childrenExpr)) {
    return arrayExpressionToChildren(childrenExpr)
  }
  return exprToJSXChildren(childrenExpr)
}

function convertJsxCall(callPath) {
  const node = callPath.node
  const args = node.arguments
  if (args.length < 2 || args.length > 3) return false

  const typeExpr = args[0]
  const propsArg = args[1]
  const keyArg = args[2] ?? null

  if (!t.isObjectExpression(propsArg)) return false

  const attrs = []
  let childrenExpr = null

  for (const prop of propsArg.properties) {
    if (t.isSpreadElement(prop)) {
      attrs.push(t.jsxSpreadAttribute(prop.argument))
      continue
    }
    if (!t.isObjectProperty(prop)) continue

    const keyInfo = propKeyToAttrName(prop.key, prop.computed)
    if (keyInfo.name === 'children') {
      childrenExpr = prop.value
      continue
    }

    attrs.push(buildJSXAttribute(keyInfo, prop.value, prop.shorthand))
  }

  const childNodes = childrenExprToJSXChildren(childrenExpr)

  if (isFragmentType(typeExpr)) {
    if (keyArg != null) {
      callPath.replaceWith(
        t.jsxElement(
          t.jsxOpeningElement(t.jsxIdentifier('Fragment'), [
            t.jsxAttribute(t.jsxIdentifier('key'), t.jsxExpressionContainer(keyArg)),
          ]),
          t.jsxClosingElement(t.jsxIdentifier('Fragment')),
          childNodes
        )
      )
      return true
    }
    callPath.replaceWith(t.jsxFragment(t.jsxOpeningFragment(), t.jsxClosingFragment(), childNodes))
    return true
  }

  if (keyArg != null) {
    attrs.push(t.jsxAttribute(t.jsxIdentifier('key'), t.jsxExpressionContainer(keyArg)))
  }

  let jsxName
  try {
    jsxName = toJSXName(typeExpr)
  } catch {
    return false
  }

  const selfClosing = childNodes.length === 0
  const opening = t.jsxOpeningElement(jsxName, attrs, selfClosing)
  callPath.replaceWith(
    t.jsxElement(
      opening,
      selfClosing ? null : t.jsxClosingElement(jsxName),
      selfClosing ? [] : childNodes
    )
  )
  return true
}

function cleanupJsxRuntimeImport(ast) {
  traverse(ast, {
    Program(programPath) {
      programPath.traverse({
        ImportDeclaration(p) {
          if (p.node.source.value !== 'react/jsx-runtime') return
          const remaining = p.node.specifiers.filter((s) => {
            if (!t.isImportSpecifier(s)) return true
            const n = s.imported.type === 'Identifier' ? s.imported.name : s.imported.value
            return n !== 'jsx' && n !== 'jsxs' && n !== 'Fragment'
          })
          if (remaining.length === 0) {
            p.remove()
          } else {
            p.node.specifiers = remaining
          }
        },
      })
    },
  })
}

function needsReactFragmentImport(ast) {
  let needed = false
  traverse(ast, {
    JSXOpeningElement(p) {
      if (t.isJSXIdentifier(p.node.name) && p.node.name.name === 'Fragment') {
        needed = true
      }
    },
  })
  return needed
}

function ensureReactFragmentImport(ast) {
  if (!needsReactFragmentImport(ast)) return
  let hasReactImport = false
  let reactImportPath = null
  traverse(ast, {
    ImportDeclaration(p) {
      if (p.node.source.value === 'react') {
        hasReactImport = true
        reactImportPath = p
      }
    },
  })

  if (!hasReactImport) {
    ast.program.body.unshift(
      t.importDeclaration(
        [t.importSpecifier(t.identifier('Fragment'), t.identifier('Fragment'))],
        t.stringLiteral('react')
      )
    )
    return
  }

  const hasFragment = reactImportPath.node.specifiers.some((s) => {
    if (t.isImportSpecifier(s)) {
      const n = s.imported.type === 'Identifier' ? s.imported.name : s.imported.value
      return n === 'Fragment'
    }
    return false
  })
  if (!hasFragment) {
    reactImportPath.node.specifiers.push(
      t.importSpecifier(t.identifier('Fragment'), t.identifier('Fragment'))
    )
  }
}

function* walkJsxFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const e of entries) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) {
      yield* walkJsxFiles(full)
    } else if (e.name.endsWith('.jsx')) {
      yield full
    }
  }
}

function transformSource(code, filename) {
  const ast = parse(code, {
    sourceType: 'module',
    sourceFilename: filename,
    plugins: ['jsx'],
  })

  traverse(ast, {
    CallExpression: {
      exit(callPath) {
        if (!isJsxRuntimeCallee(callPath)) return
        try {
          convertJsxCall(callPath)
        } catch (e) {
          throw new Error(`${filename}: ${e.message}`)
        }
      },
    },
  })

  cleanupJsxRuntimeImport(ast)
  ensureReactFragmentImport(ast)

  let out = generate(ast, { retainLines: false, comments: true }, code).code
  // Babel may preserve old leading comments so output still looks like compiled JSX.
  out = out.replace(/\/\* @__PURE__ \*\/\s*</g, '<')
  return out
}

function main() {
  const files = [...walkJsxFiles(SRC)]
  let changed = 0
  for (const file of files) {
    const src = fs.readFileSync(file, 'utf8')
    if (!src.includes('react/jsx-runtime')) continue
    const out = transformSource(src, file)
    if (out !== src) {
      fs.writeFileSync(file, out, 'utf8')
      changed++
      console.log('converted:', path.relative(SRC, file))
    }
  }
  console.log(`Done. Updated ${changed} files.`)
}

main()
