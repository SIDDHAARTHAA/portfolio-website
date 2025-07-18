import type { Metadata } from "next";
import "./globals.css";
import {
  JetBrains_Mono,
  Bungee,
  Work_Sans,
  Bitcount_Grid_Double,
} from "next/font/google";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

const worksans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-worksans",
});

const bits = Bitcount_Grid_Double({
  subsets: ["latin"],
  variable: "--font-bits",
});

const bungee = Bungee({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bungee",
});

export const metadata: Metadata = {
  title: "Tailwind V4 Fonts Test",
  description: "Let’s see if Bungee and JetBrains Mono actually apply",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bungee.variable} ${jetbrains.variable} ${worksans.variable} ${bits.variable}`}
    >
      <head>
        {/* Load theme before page renders */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem("theme");
                if (theme === "dark" || theme === "light") {
                  document.documentElement.classList.add(theme);
                } else {
                  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                  document.documentElement.classList.add(prefersDark ? "dark" : "light");
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
