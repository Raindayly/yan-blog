import DefaultTheme from 'vitepress/theme';
import './style.css';
import WaterfallPosts from './components/WaterfallPosts.vue';
import CustomHome from './components/CustomHome.vue';
import MyLayout from './components/MyLayout.vue';

export default {
  extends: DefaultTheme,
  Layout: MyLayout,
  enhanceApp({ app }) {
    app.component('WaterfallPosts', WaterfallPosts);
    app.component('CustomHome', CustomHome);
  },
};
