---
title: Getting Started with VitePress
date: 2026-04-01
description: Learn how to create a modern static site with VitePress, the Vue-powered static site generator.
tags:
  - vitepress
  - tutorial
  - getting-started
---

# Getting Started with VitePress

VitePress is a static site generator powered by Vue and Vite. It's designed to be fast, simple, and powerful.

## What is VitePress?

VitePress is:

- **Fast**: Powered by Vite for instant server start and lightning-fast HMR
- **Simple**: Markdown-based with Vue components support
- **Powerful**: Built-in theme with responsive design and dark mode

## Installation

To get started with VitePress, you need Node.js 18+ installed.

```bash
# Create a new project
mkdir my-vitepress-blog
cd my-vitepress-blog

# Initialize npm project
npm init -y

# Install VitePress
npm install -D vitepress
```

## Project Structure

A typical VitePress project looks like this:

```
docs/
  .vitepress/
    config.js
  index.md
  posts/
    post-1.md
    post-2.md
```

## Configuration

Create a `.vitepress/config.js` file:

```js
export default {
  title: 'My Blog',
  description: 'My awesome blog',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/posts/' }
    ]
  }
}
```

## Scripts

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  }
}
```

## Start Development

```bash
npm run docs:dev
```

Your site will be available at `http://localhost:5173`.

## Conclusion

VitePress is an excellent choice for building documentation sites, blogs, and static websites. Its simplicity and performance make it a great alternative to other static site generators.

Happy writing! 🎉