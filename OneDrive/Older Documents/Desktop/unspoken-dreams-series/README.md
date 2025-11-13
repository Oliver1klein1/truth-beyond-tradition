# The Unspoken Hopes and Dreams Series

Repository for "The Unspoken Hopes and Dreams" book series by Ansilo Boff.

A whisper. A promise. A lifeline wrapped in verse.

## Structure

```
unspoken-dreams-series/
├── series-info/          # Series-wide documentation
│   ├── series-overview.md
│   └── reading-order.md
├── books/                # Individual book metadata
│   ├── book1.json
│   ├── book2.json
│   ├── book3.json
│   └── book4.json
├── assets/               # Media assets
│   └── covers/          # Book cover images
└── website/             # Simple static website
    ├── index.html
    ├── styles.css
    ├── script.js
    └── package.json
```

## Books

1. **Whispers to My Unborn Son: A Mum's Poetic Life Jacket** - A mother's tender verses for her son
2. **Whispers to My Unborn Son: A Dad's Poetic Life Jacket** - A father's legacy in verse for his son
3. **Whispers to My Unborn Daughter: A Dad's Poetic Life Jacket** - A father's embrace in rhyme for his daughter
4. **Whispers to My Unborn Daughter: A Mum's Poetic Life Jacket** - A mother's soul written in lullabies for her daughter

## About the Series

The Unspoken Hopes and Dreams series is a poetic love letter from parent to child … written before the first breath, the first step, the first word.

Each book is a tender collection of five-line verses that anchor a child's soul in love, courage, and belonging.

Perfect for parents to read with little ones aged 3–7, these keepsakes bridge generations and preserve the most sacred moments of early parenthood.

Whether you're expecting or already holding your miracle, these books are a timeless gift from your heart to theirs.

## Website

The `website/` directory contains a simple static site that displays all 4 books. Each book card pulls data from the corresponding JSON file in the `books/` directory.

To view the website:
1. Open `website/index.html` in a web browser
2. Or serve it with a local web server (e.g., `python -m http.server` or `npx serve`)

## Content Files

- **JSON files** (`books/*.json`): Contain book metadata (title, description, pages, cover image path, etc.)
- **Markdown files** (`series-info/*.md`): Series overview and reading order documentation
