import { ref } from 'vue'

export function usePosts() {
  const posts = ref([])
  
  // Load posts at build time using Vite's glob import
  // Path is relative to this file: docs/.vitepress/theme/composables/
  const modules = import.meta.glob('../../../posts/*.md', { eager: true })
  
  const postsData = []
  for (const path in modules) {
    const module = modules[path]
    // VitePress stores frontmatter in __pageData.frontmatter
    const frontmatter = module.__pageData?.frontmatter || module.frontmatter
    if (frontmatter && frontmatter.title) {
      // Extract URL from path: ../../../posts/filename.md -> /posts/filename
      const url = path.replace('../../../posts/', '/posts/').replace('.md', '')
      postsData.push({
        frontmatter,
        url
      })
    }
  }
  
  // Sort by date descending
  postsData.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date || 0)
    const dateB = new Date(b.frontmatter.date || 0)
    return dateB - dateA
  })
  
  posts.value = postsData
  
  return posts
}
