# Setup Guide for Truth Beyond Tradition Website

## Quick Start

1. **Navigate to the website directory:**
   ```bash
   cd website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Copy images to public folder:**
   
   Run the PowerShell script (Windows):
   ```powershell
   .\copy-images.ps1
   ```
   
   Or manually copy these images from the root directory to `website/public/`:
   - `full_logo_black_bg.jpg`
   - `brand_accent_element01.jpg` through `brand_accent_element04.jpg`
   - `bbt-podcast-studio.png`
   - `rediscover_boxed_set_final2.jpg`
   - `thumbnail01.jpg` through `thumbnail7.jpg`
   - `magazine_01_cover.jpg` through `magazine_06_cover.jpg`
   - `Escape-the-hell-myth-cover-final.jpg`
   - `framing-jesus-cover-final.jpg`
   - `liberating-humanity-cover.jpg`
   - `reality-unveiled-final.jpg`
   - `bible-contradictions-cover-final.jpg`
   - Bible contradiction images from `books/bible-contradictions/` to `public/books/bible-contradictions/`

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
website/
├── app/                          # Next.js app directory (routing)
│   ├── page.tsx                 # Homepage
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles
│   ├── bible-contradictions/   # Bible contradictions section
│   ├── jesus-vs-yahweh/        # Jesus vs Yahweh section
│   ├── paul-vs-jesus/          # Paul vs Jesus section
│   ├── baby-bible-teacher/     # Baby Bible Teacher videos
│   ├── articles/               # Articles/blog section
│   ├── quotes/                 # Quotes library
│   ├── books/                  # Book series page
│   └── start-here/             # Start here page
├── components/                  # React components
│   ├── Navigation.tsx          # Main navigation
│   ├── Hero.tsx                # Homepage hero section
│   ├── TrendingTopics.tsx      # Trending topics carousel
│   ├── FeaturedVideos.tsx     # Featured videos section
│   ├── StartHereTiles.tsx     # Start here tiles
│   ├── EmailCapture.tsx        # Email subscription form
│   └── Footer.tsx              # Site footer
├── public/                     # Static assets (images, etc.)
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
├── tailwind.config.ts          # Tailwind CSS config
└── next.config.js              # Next.js config
```

## Customization

### Adding Content

1. **Add Bible Contradictions:**
   - Edit `app/bible-contradictions/page.tsx`
   - Add new items to the `contradictions` array
   - Add corresponding images to `public/books/bible-contradictions/`

2. **Add Articles:**
   - Edit `app/articles/page.tsx`
   - Add new items to the `articles` array
   - Create individual article pages in `app/articles/[slug]/page.tsx`

3. **Add Videos:**
   - Edit `app/baby-bible-teacher/page.tsx`
   - Add new items to the `videos` array
   - Update thumbnails in `public/`

4. **Add Quotes:**
   - Edit `app/quotes/page.tsx`
   - Add new items to the `quotes` array

### Styling

- Colors: Edit `tailwind.config.ts` to change the color scheme
- Fonts: Update `app/globals.css` for custom fonts
- Components: Modify individual component files in `components/`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

1. Build the project:
   ```bash
   npm run build
   ```

2. The `out` folder contains the static export (if configured)
3. Deploy to any static hosting service

## Environment Variables

If you need to add environment variables (e.g., for email service integration):

1. Create `.env.local` file:
   ```
   NEXT_PUBLIC_SITE_URL=https://www.truthbeyondtradition.com
   EMAIL_SERVICE_API_KEY=your_key_here
   ```

2. Access in code:
   ```typescript
   const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
   ```

## Next Steps

1. **Integrate Email Service:**
   - Update `components/EmailCapture.tsx` to connect to your email service (Mailchimp, ConvertKit, etc.)

2. **Add YouTube Integration:**
   - Update video components to embed actual YouTube videos
   - Add YouTube API integration for dynamic video loading

3. **Add Content Management:**
   - Consider adding a CMS (Contentful, Sanity, or markdown files)
   - Create dynamic routes for articles and contradictions

4. **SEO Optimization:**
   - Update `app/layout.tsx` with proper meta tags
   - Add Open Graph images
   - Update `app/sitemap.ts` with all pages

5. **Analytics:**
   - Add Google Analytics or similar
   - Track user engagement and conversions

## Troubleshooting

### Images not showing:
- Make sure images are in the `public` folder
- Check image paths (should start with `/` not `../`)
- Verify file names match exactly (case-sensitive)

### Build errors:
- Run `npm install` again
- Delete `node_modules` and `.next` folders, then reinstall
- Check TypeScript errors: `npm run build`

### Styling issues:
- Clear browser cache
- Check Tailwind classes are correct
- Verify `tailwind.config.ts` includes all content paths

