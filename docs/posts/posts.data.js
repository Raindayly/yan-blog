import { createContentLoader } from 'vitepress';

export default createContentLoader('posts/*.md', {
  excerpt: true,
  transform(raw) {
    return raw
      .filter(({ url }) => url !== '/posts/')
      .sort((a, b) => {
        const dateA = new Date(a.frontmatter.date);
        const dateB = new Date(b.frontmatter.date);
        return dateB - dateA;
      })
      .map(({ frontmatter, url }) => ({
        frontmatter,
        url,
      }));
  },
});
