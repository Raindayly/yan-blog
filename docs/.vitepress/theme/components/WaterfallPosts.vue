<script setup>
import { withBase } from 'vitepress'
import { usePosts } from '../composables/usePosts'

const posts = usePosts()

function formatDate(dateStr) {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  })
}
</script>

<template>
  <div class="waterfall-container">
    <div class="waterfall-grid">
      <article 
        v-for="post in posts" 
        :key="post.url"
        class="post-card"
      >
        <a :href="post.url" class="post-card-link">
          <div class="post-card-image" v-if="post.frontmatter.image">
            <img :src="withBase(post.frontmatter.image)" :alt="post.frontmatter.title" />
          </div>
          <div class="post-card-content">
            <h3 class="post-card-title">{{ post.frontmatter.title }}</h3>
            <p class="post-card-excerpt" v-if="post.frontmatter.description">
              {{ post.frontmatter.description }}
            </p>
            <div class="post-card-meta">
              <span class="post-card-date" v-if="post.frontmatter.date">
                {{ formatDate(post.frontmatter.date) }}
              </span>
              <div class="post-card-tags" v-if="post.frontmatter.tags">
                <span 
                  v-for="tag in post.frontmatter.tags.slice(0, 3)" 
                  :key="tag"
                  class="post-card-tag"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </a>
      </article>
    </div>
    
    <div class="waterfall-empty" v-if="posts.length === 0">
      <p>No posts yet. Check back soon!</p>
    </div>
  </div>
</template>

<style scoped>
.waterfall-container {
  padding: 2rem 0;
}

.waterfall-grid {
  column-count: 3;
  column-gap: 1.5rem;
}

@media (max-width: 1200px) {
  .waterfall-grid {
    column-count: 2;
  }
}

@media (max-width: 768px) {
  .waterfall-grid {
    column-count: 1;
  }
}

.post-card {
  break-inside: avoid;
  margin-bottom: 1.5rem;
  background: var(--vp-c-bg);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.post-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.post-card-link {
  display: block;
  color: inherit;
  text-decoration: none;
}

.post-card-image {
  width: 100%;
  height: 180px;
  overflow: hidden;
  background: var(--vp-c-bg-soft);
}

.post-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.post-card:hover .post-card-image img {
  transform: scale(1.05);
}

.post-card-content {
  padding: 1.25rem;
}

.post-card-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 0.75rem 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.post-card-excerpt {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin: 0 0 1rem 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.post-card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.post-card-date {
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
}

.post-card-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.post-card-tag {
  font-size: 0.7rem;
  padding: 0.2rem 0.6rem;
  background: var(--vp-c-brand-lighter);
  color: var(--vp-c-brand-darker);
  border-radius: 9999px;
  font-weight: 500;
}

.waterfall-empty {
  text-align: center;
  padding: 3rem;
  color: var(--vp-c-text-3);
}
</style>