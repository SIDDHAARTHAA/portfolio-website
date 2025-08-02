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

## Deployment

You can deploy this project on [Vercel](https://vercel.com/) or any platform that supports Next.js.

## Credits

- UI blocks from [reactbits.dev](https://reactbits.dev/)
- Icons from [Lucide](https://lucide.dev/)
- Fonts from Google Fonts

---

**Made with ❤️ by Siddhaartha B
