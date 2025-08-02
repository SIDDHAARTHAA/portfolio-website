# Sid's Portfolio Website

This is a modern, minimal portfolio website built with [Next.js](https://nextjs.org), [React](https://react.dev), and [Tailwind CSS](https://tailwindcss.com/). It showcases my projects, skills, and contact information, with a focus on clean design, accessibility, and smooth user experience.

## Features

- **Responsive Design:** Looks great on all devices.
- **Theme Toggle:** Light and dark mode support.
- **Animated Dock Bar:** Quick navigation using a macOS-style dock.
- **Spotlight & Card Effects:** Interactive UI elements using custom components.
- **Contact Form:** Send messages directly (integrated with SheetDB).
- **Project Showcase:** Highlighted projects with images and tech stack.
- **About Me & Tools:** Education, skills, and toolbox sections.
- **Smooth, Customizable Scrolling:** Powered by Lenis, now with a snappier scroll feel (`lerp: 0.1`).

## Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) (animations)
- [Lenis](https://github.com/studio-freight/lenis) (smooth scrolling)
- [GSAP](https://greensock.com/gsap/) (DotGrid background)
- [Lucide React](https://lucide.dev/) (icons)
- [SheetDB](https://sheetdb.io/) (contact form backend)
- [Sonner](https://sonner.emilkowal.ski/) (toasts/notifications)

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

2. **Run the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `app/` — Main Next.js app directory (pages, layout, components)
- `reactBits/blocks/` — Custom and third-party UI blocks/components
- `public/` — Static assets (images, icons)
- `app/components/` — Main UI sections (Hero, AboutMe, Projects, Tools, Contact, DockBar)

## Customization

- **Theme:** Edit color variables in [`app/globals.css`](app/globals.css).
- **Projects/Tools:** Update data in [`app/components/Projects.tsx`](app/components/Projects.tsx) and [`app/components/Tools.tsx`](app/components/Tools.tsx).
- **Contact Form:** Uses SheetDB for submissions. Update the endpoint in [`app/components/Contact.tsx`](app/components/Contact.tsx) if needed.
- **Scroll Feel:** Adjust the `lerp` value in [`app/components/SmoothScrollProvider.tsx`](app/components/SmoothScrollProvider.tsx) for more or less smoothness.

## Deployment

### Deploying to Cloudflare

1. **Push your code to GitHub (or GitLab/Bitbucket).**
2. **Go to [Cloudflare Pages](https://pages.cloudflare.com/) and create a new project.**
3. **Connect your repository.**
4. **Set the build settings:**
   - **Framework preset:** Next.js
   - **Build command:** `npm run build`
   - **Output directory:** `.next`
5. **Set environment variables if needed (e.g., `NODE_VERSION`, `NEXT_PUBLIC_*`).**
6. **Deploy!**

#### Custom Domain

- In Cloudflare Pages, go to your project’s settings → Domains.
- Add your custom domain and follow the DNS instructions (usually a CNAME or A record).
- Make sure your DNS is managed by Cloudflare for easiest setup.

## Credits

- UI blocks from [reactbits.dev](https://reactbits.dev/)
- Icons from [Lucide](https://lucide.dev/)
- Fonts from Google Fonts

---

**Made with ❤️ by Siddhaartha B S**
