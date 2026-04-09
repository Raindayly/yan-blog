<script setup>
  import { data as posts } from './posts.data.js';
</script>

<div v-for="post in posts.slice(0, 3)" :key="post.url" class="recent-post">
  <a :href="post.url" class="recent-post-link">
    <h3>{{ post.frontmatter.title }}</h3>
  </a>
  <p class="recent-post-date">
    {{ new Date(post.frontmatter.date).toLocaleDateString('en-US', { year:
    'numeric', month: 'short', day: 'numeric' }) }}
  </p>
  <p>{{ post.frontmatter.description }}</p>
</div>

[View all posts →](/posts/)

<style>
  .recent-post {
    margin-bottom: 1.5rem;
  }

  .recent-post-link {
    text-decoration: none;
    color: inherit;
  }

  .recent-post-link h3 {
    margin: 0 0 0.25rem 0;
    color: var(--vp-c-brand);
    transition: color 0.25s;
  }

  .recent-post-link h3:hover {
    color: var(--vp-c-brand-dark);
  }

  .recent-post-date {
    color: var(--vp-c-text-2);
    font-size: 0.75rem;
    margin: 0.25rem 0;
  }
</style>
