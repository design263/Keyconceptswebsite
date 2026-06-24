import {
  pageSeo,
  resolveFullTitle,
  trimMetaDescription,
  META_TITLE_MAX,
  META_DESC_MAX,
  META_DESC_MIN,
} from '../src/lib/seo.js'
import { blogPosts } from '../src/data/blog-posts.js'
import { caseStudies } from '../src/data/case-studies.js'

let issues = 0

function check(label, title, description) {
  const tLen = title?.length ?? 0
  const dLen = description?.length ?? 0
  const problems = []
  if (tLen > META_TITLE_MAX) problems.push(`title>${META_TITLE_MAX}(${tLen})`)
  if (tLen < 30) problems.push(`title<30(${tLen})`)
  if (dLen > META_DESC_MAX) problems.push(`desc>${META_DESC_MAX}(${dLen})`)
  if (dLen < META_DESC_MIN) problems.push(`desc<${META_DESC_MIN}(${dLen})`)
  if (problems.length) {
    console.log(`FAIL ${label}: ${problems.join(', ')}`)
    console.log(`  title: ${title}`)
    console.log(`  desc:  ${description}`)
    issues++
  }
}

for (const [key, page] of Object.entries(pageSeo)) {
  check(
    key,
    resolveFullTitle(page.title),
    trimMetaDescription(page.description),
  )
}

for (const post of blogPosts) {
  check(
    `blog/${post.id}`,
    resolveFullTitle(post.title),
    trimMetaDescription(post.excerpt),
  )
}

for (const study of caseStudies) {
  check(
    `case-study/${study.id}`,
    resolveFullTitle(`${study.title} Case Study`),
    trimMetaDescription(study.challenge),
  )
}

console.log(issues === 0 ? 'All metadata lengths OK' : `${issues} issue(s) found`)
