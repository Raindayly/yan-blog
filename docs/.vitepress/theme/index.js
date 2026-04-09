import DefaultTheme from 'vitepress/theme'
import './style.css'
import WaterfallPosts from './components/WaterfallPosts.vue'
import TypewriterHero from './components/TypewriterHero.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('WaterfallPosts', WaterfallPosts)
    app.component('TypewriterHero', TypewriterHero)
  }
}
