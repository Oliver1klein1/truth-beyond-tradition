# The Father's Heart Children's Book Series

Repository for "The Father's Heart Children's Book Series" by Ansilo Boff.

**See others and God through Jesus' eyes.**

## Structure

```
fathers-heart/
├── series-info/          # Series-wide documentation
│   ├── series-overview.md
│   └── reading-order.md
├── books/                # Individual book metadata
│   ├── book1.json
│   ├── book2.json
│   ├── book3.json
│   ├── book4.json
│   └── book5.json
├── assets/               # Media assets
│   └── covers/          # Book cover images
└── website/             # Simple static website
    ├── index.html
    ├── styles.css
    ├── script.js
    └── package.json
```

## Books

1. **When My Little Brother Broke My Toy** - So That's What "Forgive" Means!
2. **When I Decided I Won't Be Friends with Oliver Anymore** - So That's What "Not Holding a Grudge" Means!
3. **Why Saying Bad Words To or About Others Makes Everyone Sad** - So That's What "Guarding Our Tongue" Means!
4. **When Thunder Made Me Hide** - So That's What "Peace Inside" Means!
5. **When We Made Room at Our Table** - So That's What "Welcome" Means!

## Website

The `website/` directory contains a simple static site that displays all 5 books. Each book card pulls data from the corresponding JSON file in the `books/` directory.

To view the website:
1. Open `website/index.html` in a web browser
2. Or serve it with a local web server (e.g., `python -m http.server` or `npx serve`)

## Content Files

- **JSON files** (`books/*.json`): Contain book metadata (title, subtitle, description, cover image path, etc.)
- **Markdown files** (`series-info/*.md`): Series overview and reading order documentation

## About the Series

What if the stories we tell about God helped children feel safe, kind, and deeply loved?

In The Father's Heart Series, Ansilo Boff re-introduces children to the gentle, forgiving Father that Jesus revealed — not a God of punishment or fear, but one of peace, mercy, and inclusion.

Through tender storytelling and luminous watercolor illustrations, each book turns everyday moments into spiritual discoveries: forgiving a friend, using kind words, feeling peace during storms, sharing what we have, and welcoming others at our table.

Perfect for bedtime reading, family devotion, or Sunday-school story time, The Father's Heart Series nurtures young hearts to grow in empathy, peace, and joy.
