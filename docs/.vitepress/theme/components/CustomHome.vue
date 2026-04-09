<script setup>
import { ref, onMounted, nextTick } from 'vue';

// Typewriter hero data
const lines = ref([
  'Yan 的博客',
  '探索，好奇，热爱',
  '欢迎来到我的技术世界！',
]);
const charDelay = 120;
const lineDelay = 800;

// Typewriter state
const displayedLines = ref([]);
const currentLineIndex = ref(0);
const currentCharIndex = ref(0);
const showCursor = ref(true);
const isTyping = ref(false);

const startTyping = () => {
  isTyping.value = true;
  displayedLines.value = [];
  currentLineIndex.value = 0;
  currentCharIndex.value = 0;
  typeNextChar();
};

const typeNextChar = () => {
  if (currentLineIndex.value >= lines.value.length) {
    isTyping.value = false;
    return;
  }

  const currentLine = lines.value[currentLineIndex.value];

  if (currentCharIndex.value < currentLine.length) {
    // Initialize line if needed
    if (!displayedLines.value[currentLineIndex.value]) {
      displayedLines.value[currentLineIndex.value] = '';
    }

    displayedLines.value[currentLineIndex.value] = currentLine.substring(
      0,
      currentCharIndex.value + 1
    );
    currentCharIndex.value++;

    setTimeout(typeNextChar, charDelay);
  } else {
    // Line complete, move to next line
    currentLineIndex.value++;
    currentCharIndex.value = 0;

    setTimeout(typeNextChar, lineDelay);
  }
};

// Cursor blink animation
setInterval(() => {
  showCursor.value = !showCursor.value;
}, 530);

onMounted(() => {
  setTimeout(startTyping, 300);
});
</script>

<template>
  <div class="custom-home">
    <!-- Hero Section with Typewriter Effect -->
    <div class="custom-home-hero">
      <div class="hero-content">
        <div class="typewriter-container">
          <div
            v-for="(line, index) in displayedLines"
            :key="index"
            class="typewriter-line"
            :class="{
              'is-title': index === 0,
              'is-subtitle': index === 1,
              'is-tagline': index === 2,
            }"
          >
            {{ line }}
            <span
              v-if="index === displayedLines.length - 1 && isTyping"
              class="cursor"
              :class="{
                blink: !showCursor,
              }"
              >|</span
            >
          </div>
        </div>
      </div>

      <!-- Hero Actions -->
      <div class="hero-actions">
        <a
          href="/posts/"
          class="btn btn-brand"
        >
          Read Blog
        </a>
        <a
          href="https://github.com"
          class="btn btn-outline"
        >
          View on GitHub
        </a>
      </div>
    </div>

    <WaterfallPosts />

    <!-- Blog Posts Section (placeholder for WaterfallPosts) -->
    <div class="custom-home-posts">
      <h2 class="section-title">Recent Posts</h2>
      <!-- WaterfallPosts will be used here -->
      <div class="posts-container">
        <div class="post-card">
          <div class="post-date">2026-04-09</div>
          <h4 class="post-title">Getting Started with VitePress</h4>
          <a
            href="/posts/getting-started-with-vitepress.md"
            class="read-more"
            >Read more →</a
          >
        </div>
        <div class="post-card">
          <div class="post-date">2026-04-08</div>
          <h4 class="post-title">Markdown Features Guide</h4>
          <a
            href="/posts/markdown-features.md"
            class="read-more"
            >Read more →</a
          >
        </div>
        <div class="post-card">
          <div class="post-date">2026-04-07</div>
          <h4 class="post-title">Web Development Trends 2026</h4>
          <a
            href="/posts/web-development-trends.md"
            class="read-more"
            >Read more →</a
          >
        </div>
      </div>
      <div class="view-all-posts">
        <a
          href="/posts/"
          class="view-all-link"
          >View all blog posts →</a
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Hero Section */
.custom-home-hero {
  padding: 6rem 0 4rem;
  text-align: center;
}

.hero-content {
  margin-bottom: 2rem;
}

.typewriter-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.typewriter-line {
  white-space: pre-wrap;
  animation: fadeIn 0.5s ease-in;
}

.typewriter-line.is-title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  line-height: 1.2;
  margin: 0;
}

.typewriter-line.is-subtitle {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
  margin: 0;
}

.typewriter-line.is-tagline {
  font-size: 1.1rem;
  color: var(--vp-c-text-3);
  margin: 0;
}

.cursor {
  display: inline;
  color: var(--vp-c-brand);
  font-weight: 400;
  width: 2px;
  height: 1.2em;
  margin-left: 2px;
}

.cursor.blink {
  opacity: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Hero Actions */
.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 20px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.25s ease;
  cursor: pointer;
}

.btn-brand {
  background: var(--vp-c-brand);
  color: white;
}

.btn-brand:hover {
  background: var(--vp-c-brand-dark);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.btn-outline {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
}

.btn-outline:hover {
  background: var(--vp-c-bg-mute);
  border-color: var(--vp-c-brand);
  transform: translateY(-2px);
}

/* Features Section */
.custom-home-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 4rem 0;
}

.feature-card {
  padding: 2rem;
  background: var(--vp-c-bg-soft);
  border-radius: 16px;
  text-align: center;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 0.75rem;
}

.feature-desc {
  color: var(--vp-c-text-3);
  font-size: 0.95rem;
  line-height: 1.6;
}

/* Blog Posts Section */
.custom-home-posts {
  padding: 4rem 0;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 2rem;
  text-align: center;
}

.posts-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.post-card {
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.post-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
}

.post-date {
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
  margin-bottom: 0.5rem;
}

.post-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 0.75rem;
  line-height: 1.5;
}

.read-more {
  color: var(--vp-c-brand);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.25s ease;
}

.read-more:hover {
  color: var(--vp-c-brand-dark);
}

.view-all-posts {
  text-align: center;
}

.view-all-link {
  color: var(--vp-c-brand);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.25s ease;
}

.view-all-link:hover {
  color: var(--vp-c-brand-dark);
}

/* Responsive Design */
@media (max-width: 768px) {
  .custom-home-hero {
    padding: 4rem 0 2rem;
  }

  .typewriter-line.is-title {
    font-size: 2rem;
  }

  .typewriter-line.is-subtitle {
    font-size: 1.2rem;
  }

  .hero-actions {
    flex-direction: column;
    width: 100%;
    max-width: 280px;
    margin: 0 auto;
  }

  .btn {
    width: 100%;
  }

  .custom-home-features {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .feature-card {
    padding: 1.5rem;
  }

  .posts-container {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .custom-home-hero {
    padding: 3rem 0 1.5rem;
  }

  .typewriter-line.is-title {
    font-size: 1.75rem;
  }

  .typewriter-line.is-subtitle {
    font-size: 1rem;
  }

  .btn {
    padding: 0.625rem 1.25rem;
    font-size: 0.9rem;
  }
}
</style>
