# Truth Beyond Tradition Website

A modern, engaging website for the Truth Beyond Tradition movement brand.

## Features

- **Homepage** with hero section, trending topics, featured videos, and email capture
- **Bible Contradictions** section (BuzzFeed-style)
- **Jesus vs Yahweh** section
- **Paul vs Jesus** section
- **Baby Bible Teacher** videos section
- **Quotes Library** section
- **Articles/Blog** magazine-style section
- **Book Series** section

## Setup

1. Install dependencies:
```bash
npm install
```

2. Copy images to `public` folder:
   - Logo and branding images
   - Book covers
   - Video thumbnails
   - Magazine covers
   - Bible contradiction images

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
website/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── bible-contradictions/
│   ├── jesus-vs-yahweh/
│   ├── paul-vs-jesus/
│   ├── baby-bible-teacher/
│   ├── articles/
│   ├── quotes/
│   ├── books/
│   └── start-here/
├── components/            # React components
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── TrendingTopics.tsx
│   ├── FeaturedVideos.tsx
│   ├── StartHereTiles.tsx
│   ├── EmailCapture.tsx
│   └── Footer.tsx
├── public/                # Static assets
└── package.json
```

## Image Requirements

Make sure the following images are in the `public` folder:

### Branding
- `full_logo_black_bg.jpg`
- `brand_accent_element01.jpg` through `brand_accent_element04.jpg`

### Books
- `Escape-the-hell-myth-cover-final.jpg`
- `framing-jesus-cover-final.jpg`
- `liberating-humanity-cover.jpg`
- `reality-unveiled-final.jpg`
- `bible-contradictions-cover-final.jpg`
- `rediscover_boxed_set_final2.jpg`

### Videos
- `bbt-podcast-studio.png`
- `thumbnail01.jpg` through `thumbnail7.jpg`

### Articles
- `magazine_01_cover.jpg` through `magazine_06_cover.jpg`

### Bible Contradictions
- `books/bible-contradictions/c002-jehoiachin-age.jpg`
- `books/bible-contradictions/c003-jesus-david-lineage.jpg`
- `books/bible-contradictions/c004-royal-disqualification.jpg`
- (and other contradiction images)

## Customization

- Update colors in `tailwind.config.ts`
- Modify content in component files
- Add new pages in `app/` directory
- Update navigation in `components/Navigation.tsx`

## Deployment

This site can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- Any static hosting service (after `npm run build`)

