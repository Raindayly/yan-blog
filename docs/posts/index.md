---
title: Blog Posts
description: All blog posts and articles
---

<script setup>
  import { data as posts } from './posts.data.js';
</script>

# Blog Posts

<div v-for="post in posts" :key="post.url" class="post-item">
  <a :href="post.url" class="post-link">
    <h2>{{ post.frontmatter.title }}</h2>
  </a>
  <p class="post-date">
    {{ new Date(post.frontmatter.date).toLocaleDateString('en-US', { year:
    'numeric', month: 'long', day: 'numeric' }) }}
  </p>
  <p>{{ post.frontmatter.description }}</p>
  <div v-if="post.frontmatter.tags" class="post-tags">
    <span v-for="tag in post.frontmatter.tags" :key="tag" class="tag"
      >{{ tag }}</span
    >
  </div>
</div>

<style>
  .post-item {
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--vp-c-divider);
  }

  .post-item:last-child {
    border-bottom: none;
  }

  .post-link {
    text-decoration: none;
    color: inherit;
  }

  .post-link h2 {
    margin: 0 0 0.5rem 0;
    color: var(--vp-c-brand);
    transition: color 0.25s;
  }

  .post-link h2:hover {
    color: var(--vp-c-brand-dark);
  }

  .post-date {
    color: var(--vp-c-text-2);
    font-size: 0.875rem;
    margin: 0.5rem 0;
  }

  .post-tags {
    margin-top: 0.75rem;
  }

  .tag {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    margin-right: 0.5rem;
    font-size: 0.75rem;
    background-color: var(--vp-c-bg-soft);
    color: var(--vp-c-text-2);
    border-radius: 9999px;
  }
</style>
