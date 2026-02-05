# Bilal Imamoglu – Portfolio

Personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.  
Designed as a minimal, content-focused personal site to present work, writing, and consulting areas.

## Overview

This repository contains the source code for a personal portfolio website.  
Content is intentionally separated from layout and components to allow easy iteration without touching the UI layer.


## Getting Started

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


## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Instrument Serif, DM Sans, JetBrains Mono

## 📝 Adding Blog Posts

Currently, blog posts are placeholder links. To integrate with Medium:

1. Use Medium's RSS feed API
2. Or manually add posts to `siteData.ts`
3. Create dynamic routes in `app/writing/[slug]/page.tsx`

## 📄 License

MIT
