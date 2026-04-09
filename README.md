# VitePress Blog A modern, fast, and beautiful blog built with

[VitePress](https://vitepress.dev). ## Features - ⚡ **Lightning Fast** -
Powered by Vite for instant server start and HMR - 📝 **Markdown-Based** - Write
content in Markdown with Vue components support - 🎨 **Beautiful Design** -
Clean and modern design with dark mode support - 📱 **Responsive** - Looks great
on all devices - 🔍 **SEO Friendly** - Built-in SEO optimizations ## Quick Start

### Prerequisites - Node.js 18+ installed ### Installation ```bash # Clone or

download this project cd vitepress-blog # Install dependencies npm install ```

### Development Start the development server: `bash npm run docs:dev ` Your

site will be available at `http://localhost:5173` ### Build for Production
`bash npm run docs:build ` The built files will be in `.vitepress/dist`
directory. ### Preview Production Build `bash npm run docs:preview ` ##
Project Structure `vitepress-blog/ ├── docs/ # Documentation/blog source
files │ ├── .vitepress/ # VitePress configuration │ │ ├── config.js # Main
configuration file │ │ └── theme/ # Custom theme files │ │ ├── index.js # Theme
entry point │ │ └── style.css # Custom styles │ ├── posts/ # Blog posts
directory │ │ ├── index.md # Posts listing page │ │ ├── posts.data.js # Posts
data loader │ │ └── *.md # Individual blog posts │ ├── index.md # Homepage │ └──
about.md # About page ├── package.json # Project configuration └── README.md #
This file` ## Writing Blog Posts Create a new `.md` file in the `docs/posts/`
directory: `markdown --- title: Your Post Title date: 2026-04-07 description:
A brief description of your post tags: - tag1 - tag2 --- # Your Content Here
Write your blog post content in Markdown... ` ### Frontmatter Options -
`title` - The title of your post - `date` - Publication date (YYYY-MM-DD format)

- `description` - A brief description (shown in post listings) - `tags` - Array
  of tags for categorization ## Customization ### Theme Colors Edit
  `docs/.vitepress/theme/style.css` to customize colors: `css :root {
--vp-c-brand: #3eaf7c; --vp-c-brand-dark: #2d8f5c; } ` ### Site Configuration
  Edit `docs/.vitepress/config.js` to customize: - Site title and description -
  Navigation menu - Sidebar - Social links - Footer ## Deployment ### Build and
  Deploy `bash # Build the site npm run docs:build # Deploy the .vitepress/dist
folder to your hosting ` ### Popular Hosting Options - **Vercel** - Zero
  config deployment - **Netlify** - Drag and drop or Git integration - **GitHub
  Pages** - Free hosting for GitHub repositories - **Cloudflare Pages** - Fast
  global CDN ## License ISC
