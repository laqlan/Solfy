# Solfy - Solar Energy Marketing Site

Production-ready Astro project for Solfy, a solar panel installation company. Built with SEO, performance, and maintainability as top priorities.

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Build for Production

```bash
npm run build
```

The static site is generated in the `dist/` folder, ready for deployment.

### Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

```
/
├── public/              # Static assets (robots.txt, images, fonts)
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── BaseHead.astro      # SEO meta tags, OG, structured data
│   │   ├── Header.astro        # Site navigation
│   │   ├── Footer.astro        # Site footer
│   │   ├── Hero.astro          # Homepage hero section
│   │   ├── Solutions.astro     # Solutions grid
│   │   ├── FAQ.astro           # FAQ accordion
│   │   ├── Testimonials.astro  # Customer reviews
│   │   └── CTAFinal.astro      # Final call-to-action
│   ├── data/            # Typed content data (single source of truth)
│   │   ├── siteConfig.ts       # Site metadata, contact info
│   │   ├── solutions.ts        # Product offerings
│   │   ├── testimonials.ts     # Customer reviews
│   │   ├── faq.ts              # FAQ items
│   │   └── methodSteps.ts      # Process steps
│   ├── layouts/         # Page layout wrappers
│   │   └── BaseLayout.astro    # Main layout with Header/Footer
│   ├── pages/           # File-based routing (one file = one route)
│   │   ├── index.astro         # Homepage (/)
│   │   ├── about.astro         # About page (/about)
│   │   ├── products.astro      # Products page (/products)
│   │   └── contact.astro       # Contact page (/contact)
│   └── styles/          # Global styles and Tailwind imports
│       └── global.css
├── astro.config.mjs     # Astro configuration
├── tailwind.config.mjs  # Tailwind design tokens (colors, fonts, spacing)
└── package.json
```

---

## 📄 How to Add a New Page

1. **Create a new `.astro` file** in `src/pages/`
   
   Example: `src/pages/blog.astro`

2. **Use the BaseLayout** and add your content:

   ```astro
   ---
   import BaseLayout from '@layouts/BaseLayout.astro';
   ---

   <BaseLayout 
     title="Blog"
     description="Latest news about solar energy."
   >
     <section class="py-20 bg-bg">
       <div class="container-custom">
         <h1>Blog</h1>
         <!-- Your content here -->
       </div>
     </section>
   </BaseLayout>
   ```

3. **The page is automatically routed** at `/blog`

4. **Add navigation link** in `src/components/Header.astro` if needed.

---

## 🎨 How to Change Colors / Fonts

All design tokens are defined in **`tailwind.config.mjs`** — this is the single source of truth for:

- **Colors:** `bg`, `ink`, `brand-yellow`, `brand-sage`, `brand-sky`, etc.
- **Fonts:** `font-serif` (DM Serif Display), `font-sans` (DM Sans)
- **Spacing, shadows, border radius**

### Example: Changing the primary brand color

In `tailwind.config.mjs`:

```js
brand: {
  sage: {
    DEFAULT: '#9bc4a0',  // Change this hex value
    deep: '#7eaa84',
  },
}
```

All components using `text-brand-sage`, `bg-brand-sage`, etc. will update automatically.

---

## 📝 How to Add a New Product / Solution

1. **Open `src/data/solutions.ts`**

2. **Add a new object** to the `solutions` array:

   ```ts
   {
     id: 'new-product',
     number: '04',
     title: 'Nueva solución',
     description: 'Descripción de la nueva solución...',
     icon: 'home', // Choose: 'home', 'building', 'factory'
     link: '/products#new-product',
     iconColor: '#9bc4a0',
   }
   ```

3. **It will appear automatically** on the homepage and products page.

4. **(Optional)** Add a dedicated section in `src/pages/products.astro` for more details.

---

## 🔍 How to Update SEO Defaults

### Site-wide SEO settings

Edit **`src/data/siteConfig.ts`**:

```ts
export const siteConfig: SiteConfig = {
  name: 'Solfy',
  description: 'Your default meta description...',
  url: 'https://solfy.net',  // Update with production domain
  ogImage: '/og-image.jpg',   // Path to default OG image
  phone: '+34621409711',
  email: 'info@solfy.net',
  social: {
    twitter: '@solfy',
    facebook: 'solfy',
  },
};
```

### Per-page SEO

In each page's frontmatter (the `---` section at the top):

```astro
<BaseLayout 
  title="Custom Page Title"
  description="Custom meta description for this page."
  ogImage="/custom-og-image.jpg"  // Optional: override default
>
```

### Structured data (JSON-LD)

- **Organization schema** is site-wide (defined in `siteConfig.ts`)
- **Product schema** is auto-generated from `solutions.ts`
- **FAQ schema** is auto-generated from `faq.ts`
- **Review schema** can be generated from `testimonials.ts`

All schemas are automatically injected via `BaseHead.astro`.

---

## 🌐 Deployment

This is a **static site** (no server required). Deploy to:

### Recommended Hosts

1. **Netlify** ([netlify.com](https://netlify.com))
   - Best for: Ease of use, automatic deploys from Git
   - Build command: `npm run build`
   - Publish directory: `dist`

2. **Vercel** ([vercel.com](https://vercel.com))
   - Best for: Fast global CDN, zero config
   - Detects Astro automatically

3. **Cloudflare Pages** ([pages.cloudflare.com](https://pages.cloudflare.com))
   - Best for: Performance, global edge network
   - Build command: `npm run build`
   - Output directory: `dist`

### Why Static Hosting?

- ✅ **Blazing fast** - Pre-rendered HTML served from a CDN
- ✅ **No server costs** - Just pay for bandwidth
- ✅ **Excellent SEO** - All content is in the HTML
- ✅ **High security** - No server to hack
- ✅ **Easy scaling** - Handles traffic spikes effortlessly

### Cache Headers (Recommended)

Configure your host to set these headers for production:

```
/assets/*
  Cache-Control: public, max-age=31536000, immutable

/*.html
  Cache-Control: public, max-age=0, must-revalidate

/sitemap-index.xml
  Cache-Control: public, max-age=3600
```

---

## ⚡ Performance Features Implemented

- ✅ **Self-hosted fonts** via @fontsource (no external requests)
- ✅ **Font preloading** for primary font
- ✅ **Automatic image optimization** (use Astro's `<Image />` component when adding images)
- ✅ **Minimal client-side JS** (only for mobile menu and FAQ accordion)
- ✅ **Critical CSS inlined** (Astro default)
- ✅ **Lazy loading** for below-fold content
- ✅ **Static HTML generation** (zero server processing at runtime)

---

## 🔍 SEO Features Implemented

- ✅ **Meta tags** (title, description) on every page
- ✅ **Open Graph tags** for social sharing (Facebook, LinkedIn)
- ✅ **Twitter Card tags** for Twitter sharing
- ✅ **Canonical URLs** to prevent duplicate content
- ⚠️ **Sitemap** - @astrojs/sitemap is installed but commented out in config (uncomment after setting production URL)
- ✅ **robots.txt** in public/ (update sitemap URL when enabling)
- ✅ **JSON-LD structured data:**
  - Organization schema (site-wide)
  - Product schema (solutions)
  - FAQ schema (FAQ page)
- ✅ **Semantic HTML5** (`<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`)
- ✅ **One `<h1>` per page** with logical heading hierarchy
- ✅ **Lang attribute** on `<html>` (`lang="es"`)
- ✅ **Meaningful alt text** (add when inserting images)

---

## ♿ Accessibility Features

- ✅ **Keyboard navigation** for all interactive elements
- ✅ **Focus visible states** (outline on keyboard focus)
- ✅ **ARIA labels** where semantic HTML isn't sufficient
- ✅ **Color contrast** meets WCAG AA standards
- ✅ **Semantic HTML** for screen reader compatibility

---

## 📦 Dependencies

All dependencies are **justified** and **minimal**:

- **astro** - Static site framework
- **@astrojs/tailwind** - Tailwind CSS integration
- **@astrojs/sitemap** - Automatic sitemap generation
- **tailwindcss** - Utility-first CSS framework
- **@fontsource/dm-sans** - Self-hosted DM Sans font
- **@fontsource/dm-serif-display** - Self-hosted DM Serif Display font
- **typescript** - Type safety for data files

---

## 🛠️ Maintenance Tips for Junior Developers

### Adding Content

- **Text changes:** Find the component or data file and edit the text directly
- **New products:** Add to `src/data/solutions.ts`
- **New testimonials:** Add to `src/data/testimonials.ts`
- **New FAQ items:** Add to `src/data/faq.ts`

### Styling Changes

- **Colors, fonts, spacing:** Edit `tailwind.config.mjs` (design tokens)
- **Component-specific styles:** Edit the component's class names using Tailwind utilities
- **Global styles:** Edit `src/styles/global.css` (rarely needed)

### Common Tasks

- **Update contact info:** `src/data/siteConfig.ts`
- **Change navigation:** `src/components/Header.astro`
- **Update footer links:** `src/components/Footer.astro`
- **Modify homepage sections:** Edit components in `src/components/`

---

## ⚠️ Important Notes

### Before Production Deployment

1. **Update the site URL** in:
   - `astro.config.mjs` (`site` property)
   - `src/data/siteConfig.ts` (`url` property)
   - `public/robots.txt` (sitemap URL)

2. **Create actual images:**
   - `/public/og-image.jpg` (1200×630px for social sharing)
   - `/public/favicon.svg` (site icon)
   - `/public/logo.png` (for structured data)

3. **Update social handles** in `src/data/siteConfig.ts`

4. **Test the contact form** - currently just HTML, needs backend integration

5. **Review all content** for accuracy

---

## 📞 Support

For questions about this codebase, refer to:
- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

**Built with ❤️ using Astro, TypeScript, and Tailwind CSS**
