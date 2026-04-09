<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  lines: {
    type: Array,
    default: () => ['My Blog', 'A VitePress Blog']
  },
  lineDelay: {
    type: Number,
    default: 500
  },
  charDelay: {
    type: Number,
    default: 100
  },
  cursor: {
    type: String,
    default: '|'
  }
})

const displayedLines = ref([])
const currentLineIndex = ref(0)
const currentCharIndex = ref(0)
const showCursor = ref(true)
const isTyping = ref(false)

const startTyping = () => {
  isTyping.value = true
  displayedLines.value = []
  currentLineIndex.value = 0
  currentCharIndex.value = 0
  typeNextChar()
}

const typeNextChar = () => {
  if (currentLineIndex.value >= props.lines.length) {
    isTyping.value = false
    return
  }

  const currentLine = props.lines[currentLineIndex.value]
  
  if (currentCharIndex.value < currentLine.length) {
    // Initialize line if needed
    if (!displayedLines.value[currentLineIndex.value]) {
      displayedLines.value[currentLineIndex.value] = ''
    }
    
    displayedLines.value[currentLineIndex.value] = currentLine.substring(0, currentCharIndex.value + 1)
    currentCharIndex.value++
    
    setTimeout(typeNextChar, props.charDelay)
  } else {
    // Line complete, move to next line
    currentLineIndex.value++
    currentCharIndex.value = 0
    
    setTimeout(typeNextChar, props.lineDelay)
  }
}

// Cursor blink animation
setInterval(() => {
  showCursor.value = !showCursor.value
}, 530)

onMounted(() => {
  setTimeout(startTyping, 300)
})
</script>

<template>
  <div class="typewriter-hero">
    <div 
      v-for="(line, index) in displayedLines" 
      :key="index"
      class="typewriter-line"
      :class="{ 
        'is-title': index === 0, 
        'is-subtitle': index === 1,
        'is-tagline': index === 2
      }"
    >
      {{ line }}
      <span 
        v-if="index === displayedLines.length - 1 && isTyping" 
        class="cursor"
        :class="{ blink: !showCursor }"
      >{{ cursor }}</span>
    </div>
  </div>
</template>

<style scoped>
.typewriter-hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.typewriter-line {
  margin: 0.5rem 0;
  white-space: pre-wrap;
}

.typewriter-line.is-title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  line-height: 1.2;
}

.typewriter-line.is-subtitle {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.typewriter-line.is-tagline {
  font-size: 1.1rem;
  color: var(--vp-c-text-3);
}

.cursor {
  display: inline-block;
  color: var(--vp-c-brand);
  font-weight: 400;
}

.cursor.blink {
  opacity: 0;
}

@media (max-width: 768px) {
  .typewriter-line.is-title {
    font-size: 2rem;
  }
  
  .typewriter-line.is-subtitle {
    font-size: 1.2rem;
  }
}
</style>