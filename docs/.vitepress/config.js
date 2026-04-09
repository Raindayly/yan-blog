export default {
  title: "My Blog",
  description: "A VitePress Blog",
  
  themeConfig: {
    // Site navigation
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/posts/' },
      { text: 'About', link: '/about' }
    ],

    // Sidebar configuration
    sidebar: {
      '/posts/': [
        {
          text: 'Blog Posts',
          items: [
            { text: 'All Posts', link: '/posts/' }
          ]
        }
      ]
    },

    // Social links
    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],

    // Footer
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026-present My Blog'
    }
  },

  // Markdown options
  markdown: {
    lineNumbers: true
  }
}