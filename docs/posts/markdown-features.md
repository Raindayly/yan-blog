---
title: Markdown Features in VitePress
date: 2026-03-28
description: Explore the rich markdown features and Vue components available in VitePress for creating engaging content.
tags:
  - markdown
  - features
  - guide
---

# Markdown Features in VitePress

VitePress supports standard Markdown with some powerful extensions. Here's a quick overview of what you can do.

## Basic Formatting

You can use **bold**, *italic*, ***bold and italic***, and ~~strikethrough~~ text.

## Headings

VitePress supports headings from h1 to h6:

# H1 Heading
## H2 Heading
### H3 Heading
#### H4 Heading
##### H5 Heading
###### H6 Heading

## Lists

### Unordered List

- Item 1
- Item 2
  - Nested item 1
  - Nested item 2
- Item 3

### Ordered List

1. First item
2. Second item
3. Third item

## Code Blocks

Inline code: `const x = 10`

Syntax highlighted code blocks:

```javascript
function greet(name) {
  return `Hello, ${name}!`
}

console.log(greet('World'))
```

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
```

## Blockquotes

> This is a blockquote. It can span multiple lines and contain **formatted text**.
>
> — Someone famous

## Tables

| Feature | VitePress | Others |
|---------|-----------|--------|
| Fast    | ✅        | ✅     |
| Simple  | ✅        | ❌     |
| Vue     | ✅        | ❌     |

## Custom Containers

VitePress provides custom containers for tips, warnings, and danger messages:

::: tip
This is a tip that provides helpful information.
:::

::: warning
This is a warning about something important.
:::

::: danger
This is a danger message for critical information.
:::

::: details Click to expand
This content is hidden by default.
:::

## Links

[External Link](https://vitepress.dev)

[Internal Link](/posts/)

## Images

![VitePress Logo](https://vitepress.dev/vitepress-logo-large.webp)

## Conclusion

VitePress provides a rich set of markdown features that make it easy to create beautiful and engaging content. Combined with Vue components, you can build interactive and dynamic pages with ease.