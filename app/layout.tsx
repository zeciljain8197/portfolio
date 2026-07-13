import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/portfolio";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const title = `${profile.name} | ${profile.role}`;
const description = profile.tagline;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: profile.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  icons: {
    icon: [
      { url: "/favicon-light-32.png", sizes: "32x32", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-light-48.png", sizes: "48x48", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-dark-32.png", sizes: "32x32", media: "(prefers-color-scheme: dark)" },
      { url: "/favicon-dark-48.png", sizes: "48x48", media: "(prefers-color-scheme: dark)" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

// Runs before paint so a returning dark-theme visitor never sees a light flash.
// Default (no stored preference) stays light, matching the site's default theme.
const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-ink font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
