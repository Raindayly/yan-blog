---
layout: home

hero:
  name: ""
  text: ""
  tagline: ""
  image:
    src: /logo.png
    alt: My Blog Logo
  actions:
    - theme: brand
      text: Read Blog
      link: /posts/
    - theme: alt
      text: View on GitHub
      link: https://github.com

features:
  - icon: 📝
    title: Write Freely
    details: Express your thoughts and ideas through markdown-powered writing.
  - icon: 🎨
    title: Beautiful Design
    details: Clean and modern design that focuses on readability and user experience.
  - icon: ⚡
    title: Lightning Fast
    details: Powered by Vite for instant server start and HMR updates.
  - icon: 📱
    title: Responsive
    details: Looks great on all devices, from desktop to mobile.
---

<!-- Typewriter Hero Section -->
<div class="custom-hero-section">
  <TypewriterHero 
    :lines="['My Blog', 'A VitePress Blog', 'Sharing knowledge and ideas through writing']"
    :char-delay="120"
    :line-delay="800"
  />
  
  <div class="hero-actions" style="margin-top: 2rem;">
    <a href="/posts/" class="vp-external-link-icon" style="display: inline-block; margin: 0 0.5rem; padding: 0.75rem 1.5rem; background: var(--vp-c-brand); color: white; border-radius: 20px; text-decoration: none; font-weight: 500; transition: background 0.25s ease;">
      Read Blog
    </a>
    <a href="https://github.com" class="vp-external-link-icon" style="display: inline-block; margin: 0 0.5rem; padding: 0.75rem 1.5rem; background: var(--vp-c-bg-soft); color: var(--vp-c-text-1); border-radius: 20px; text-decoration: none; font-weight: 500; border: 1px solid var(--vp-c-divider); transition: background 0.25s ease;">
      View on GitHub
    </a>
  </div>
</div>

<style>
/* Hide default hero text when using custom typewriter */
.VPHomeHero .main h1,
.VPHomeHero .main .name,
.VPHomeHero .main .text,
.VPHomeHero .main .tagline {
  display: none !important;
}

/* Custom hero section centered */
.custom-hero-section {
  text-align: center;
  padding: 2rem 0;
  width: 100%;
}

.hero-actions a:hover {
  background: var(--vp-c-brand-dark) !important;
}

.hero-actions a:last-child:hover {
  background: var(--vp-c-bg-soft) !important;
  border-color: var(--vp-c-brand) !important;
}
</style>

## Recent Posts

<WaterfallPosts />

<div style="text-align: center; margin-top: 2rem;">
  <a href="/posts/" class="vp-external-link-icon" style="color: var(--vp-c-brand); text-decoration: none; font-weight: 500;">
    View all blog posts →
  </a>
</div>
