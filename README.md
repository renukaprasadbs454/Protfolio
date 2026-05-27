# Renuka Prasad B.S — Portfolio

Premium developer portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Shadcn UI**.

> Full Stack & AI Engineer — Building scalable software systems, AI-powered applications, and automation workflows.

---

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| UI | Shadcn UI + Radix UI |
| Icons | Lucide React |

---

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/renukaprasadbs454/renukaprasadbs-protfolio-info.git
cd renukaprasadbs-protfolio-info

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## Deploy to Vercel

The fastest way to deploy this portfolio:

### Option 1: Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Next.js.

### Option 2: GitHub Integration

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Vercel auto-configures:
   - **Framework Preset:** Next.js
   - **Build Command:** `next build`
   - **Output Directory:** `.next`
5. Click **Deploy**

### Post-Deploy Checklist

- [ ] Verify `/resume.pdf` downloads correctly
- [ ] Confirm GitHub stats images load (external API)
- [ ] Test mobile responsiveness
- [ ] Update project GitHub/demo links in `lib/data.ts`

---

## Folder Structure

```
renukaprasadbs-protfolio-info/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout, fonts, SEO metadata
│   ├── page.tsx                  # Main portfolio page
│   └── globals.css               # Global styles & CSS variables
│
├── components/
│   ├── layout/                   # Navbar, Footer
│   ├── sections/                 # Page sections
│   │   ├── hero.tsx              # Hero with typing animation
│   │   ├── about.tsx             # Professional summary
│   │   ├── skills.tsx            # Skill categories
│   │   ├── experience.tsx        # Timeline layout
│   │   ├── projects.tsx          # Featured project cards
│   │   ├── tech-stack.tsx        # Technology badges
│   │   ├── github-activity.tsx   # GitHub stats & graphs
│   │   └── contact.tsx           # Contact CTA
│   ├── shared/                   # Reusable components
│   │   ├── animated-background.tsx
│   │   ├── section-wrapper.tsx
│   │   ├── typing-animation.tsx
│   │   └── project-screenshot.tsx
│   └── ui/                       # Shadcn UI primitives
│       ├── button.tsx
│       ├── badge.tsx
│       └── card.tsx
│
├── lib/
│   ├── data.ts                   # Portfolio content (edit here)
│   └── utils.ts                  # cn() utility
│
├── public/
│   ├── images/                   # Profile photos
│   └── resume.pdf                # Downloadable resume
│
├── tailwind.config.ts
├── next.config.mjs
└── package.json
```

---

## Customization

All portfolio content lives in **`lib/data.ts`**. Update:

- Personal info & social links
- About summary & education
- Skills & tech stack
- Experience timeline
- Featured projects
- Navigation links

To swap the resume, replace `public/resume.pdf`.

To update project screenshots, replace placeholder components in `components/shared/project-screenshot.tsx` with real images in `public/images/projects/`.

---

## Sections

1. **Hero** — Animated intro, typing effect, CTAs, social links
2. **About** — Professional summary from resume
3. **Skills** — Grouped animated skill cards
4. **Experience** — Premium timeline layout
5. **Projects** — Visual cards with tech badges & links
6. **Tech Stack** — Interactive technology badges
7. **GitHub** — Stats, streak, languages, contribution graph
8. **Contact** — Email, LinkedIn, GitHub CTAs

---

## License

Private portfolio — © Renuka Prasad B.S
