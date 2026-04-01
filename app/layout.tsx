import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.wastegridafrica.com";
const baseUrl = siteUrl.replace(/\/$/, "");
const siteName = "Waste Grid";
const defaultDescription =
  "WasteGrid is an industrial platform enabling Africa's industrial future — developing the foundational systems across materials, energy, and industrial infrastructure.";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    "waste management",
    "circular economy",
    "Africa",
    "climate solutions",
    "sustainability",
    "recycling",
    "waste transformation",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/new_logo.png", sizes: "any" },
      { url: "/new_logo.png", sizes: "32x32", type: "image/png" },
      { url: "/new_logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/new_logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteName,
    title: siteName,
    description: defaultDescription,
    images: [
      {
        url: "/new_logo.png",
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: defaultDescription,
    images: ["/new_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: baseUrl,
      name: siteName,
    },
    {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: siteName,
      url: baseUrl,
      logo: `${baseUrl}/new_logo.png`,
    },
    {
      "@type": "SiteNavigationElement",
      name: "Home",
      url: `${baseUrl}/`,
    },
    {
      "@type": "SiteNavigationElement",
      name: "About",
      url: `${baseUrl}/about`,
    },
    {
      "@type": "SiteNavigationElement",
      name: "Platform",
      url: `${baseUrl}/platform`,
    },
    {
      "@type": "SiteNavigationElement",
      name: "Sustainability",
      url: `${baseUrl}/sustainability`,
    },
    {
      "@type": "SiteNavigationElement",
      name: "Solar & Green Transition",
      url: `${baseUrl}/solar`,
    },
    {
      "@type": "SiteNavigationElement",
      name: "Contact",
      url: `${baseUrl}/contact`,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
          rel="stylesheet"
        />
        <link rel="icon" href="/new_logo.png" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${manrope.variable} font-display antialiased bg-background-light dark:bg-background-dark text-content-light dark:text-content-dark`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
