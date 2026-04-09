<script setup>
import CustomHome from './CustomHome.vue';
import { useData } from 'vitepress';
import { computed } from 'vue';
import WaterfallPosts from './WaterfallPosts.vue';
const { page, frontmatter } = useData();
const isHome = computed(() => frontmatter.value.layout === 'home');
// 使用自定义的 home 组件
</script>

<template>
  <div class="custom-layout">
    <!-- TabBar - 只在首页显示 -->
    <header class="home-header">
      <div class="tabbar">
        <div class="logo" href="/">
            <a class="nav-link" href="/">
                <img src="https://avatars.githubusercontent.com/u/93691544?s=400&u=ede81930340c920d754290e59443eb1e0025561e&v=4" alt="Logo" />
            </a>
        </div>
        <nav class="nav-links">
          <a
            href="/"
            class="nav-link"
            >首页</a
          >
          <a
            href="/about"
            class="nav-link"
            >关于</a
          >
          <a
            href="/blog"
            class="nav-link"
            >博客</a
          >
        </nav>
      </div>
    </header>

    <!-- 主要内容区域 -->
    <main class="vp-doc">
      <div class="content-container">
        <div v-if="page.isNotFound">Custom 404 page!</div>
        <div v-if="frontmatter.layout === 'home'">
          <CustomHome />
        </div>
        <div v-else class="custom-layout">
            <!-- 确保 Content 组件被正确导入和渲染 -->
            <div class="content-wrapper">
            <Content />
            </div>
        </div>
        
      </div>
    </main>

    <footer>
      <!-- 页脚内容 -->
    </footer>
  </div>
</template>

<style scoped>
@import '../style.css';
.home-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #eaeaea;
  background: var(--vp-c-bg);
}

.tabbar {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  height: var(--vp-tabbar-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo img {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  display: block;
}

.nav-links {
  display: flex;
  gap: 32px;
}

.nav-link {
  text-decoration: none;
  color: var(--vp-c-text-1);
  transition: color 0.3s;
}

.nav-link:hover {
  color: var(--vp-c-brand);
}

.actions {
  display: flex;
  gap: 16px;
}

.btn {
  padding: 8px 20px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-primary {
  background: var(--vp-c-brand);
  color: white;
  border: none;
}

.btn-primary:hover {
  background: var(--vp-c-brand-dark);
}

.btn-outline {
  background: transparent;
  border: 1px solid var(--vp-c-brand);
  color: var(--vp-c-brand);
}

.btn-outline:hover {
  background: var(--vp-c-brand);
  color: white;
}

.custom-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--vp-c-bg);
}

.content-container {
  flex: 1;
  width: min(1200px, 100%);
  min-height: calc(100vh - var(--vp-tabbar-height));
  margin: 0 auto;
  padding: 24px 16px 48px;
}

.content-wrapper {
  width: 100%;
  margin: 0 auto;
}

</style>