# Bilal Imamoglu - Portfolio

Personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles + Tailwind
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Home page
├── components/
│   ├── Navigation.tsx   # Top navbar
│   ├── Hero.tsx         # Hero section with animated orbs
│   ├── Expertise.tsx    # What I Build section
│   ├── Philosophy.tsx   # How I Think section
│   ├── About.tsx        # About section
│   ├── Writing.tsx      # Blog posts list
│   ├── Quote.tsx        # Quote section with glow
│   ├── Contact.tsx      # Contact section
│   ├── Footer.tsx       # Footer
│   ├── SectionHeader.tsx
│   ├── Icons.tsx
│   └── index.ts         # Export all components
└── data/
    └── siteData.ts      # All site content (easy to edit)
```

## ✏️ Editing Content

All site content is centralized in `src/data/siteData.ts`. Edit this file to update:

- Personal info (name, email, social links)
- Hero section (headline, description, tags)
- Expertise cards
- Philosophy principles
- About section
- Writing/blog posts
- Quote
- Consulting note

## 🎨 Design Features

- **Dark theme** with warm amber accent color
- **Animated orbs** in hero section (mouse-interactive)
- **Grain texture overlay** for editorial feel
- **Smooth scroll** navigation
- **Responsive** design for all screen sizes

## 🚀 Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## 🔧 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Instrument Serif, DM Sans, JetBrains Mono
- **Deployment**: Vercel-ready

## 📝 Adding Blog Posts

Currently, blog posts are placeholder links. To integrate with Medium:

1. Use Medium's RSS feed API
2. Or manually add posts to `siteData.ts`
3. Create dynamic routes in `app/writing/[slug]/page.tsx`

## 📄 License

MIT
