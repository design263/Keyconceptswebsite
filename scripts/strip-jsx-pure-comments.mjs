/**
 * Removes /* @__PURE__ *\/ prefixes that were left before JSX after the jsx-runtime codemod.
 * Standard hand-written React JSX does not use these markers.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SRC = path.join(__dirname, '..', 'src')

function* walkJsx(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) yield* walkJsx(full)
    else if (e.name.endsWith('.jsx')) yield full
  }
}

/** Matches rollup-style pure comment immediately before JSX `<` (same line or after newline/indent). */
const PURE_BEFORE_JSX = /\/\* @__PURE__ \*\/\s*</g

let updated = 0
for (const file of walkJsx(SRC)) {
  const src = fs.readFileSync(file, 'utf8')
  if (!src.includes('/* @__PURE__ */')) continue
  const out = src.replace(PURE_BEFORE_JSX, '<')
  if (out === src) continue
  fs.writeFileSync(file, out, 'utf8')
  updated++
  console.log(path.relative(SRC, file))
}
console.log(`Stripped JSX-adjacent markers in ${updated} files.`)
