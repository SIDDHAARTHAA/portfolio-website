import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner"; // ⬅️ ADD THIS
import {
  JetBrains_Mono,
  Work_Sans,
} from "next/font/google";
import SmoothScrollProvider from "./components/SmoothScrollProvider";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

const worksans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-worksans",
});

export const metadata: Metadata = {
  title: "Sid's PortFolio",
  description: "Let’s see if Bungee and JetBrains Mono actually apply",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${jetbrains.variable} ${worksans.variable}`}
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
      <body>
        <SmoothScrollProvider>
          {children}
          <Toaster
            theme="dark"
            position="top-right"
            toastOptions={{
              style: {
                borderRadius: '10px',
                background: '#1a1a1a',
                color: '#f5f5f5',
                border: '1px solid #333',
              },
            }}
          />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
