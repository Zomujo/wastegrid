import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "Waste Grid",
  description:
    "The Future of Waste in Africa is Circular. We are transforming waste into climate solutions and empowering communities across Africa.",
  icons: {
    icon: [
      { url: "/new_logo.png", sizes: "any" },
      { url: "/new_logo.png", sizes: "32x32", type: "image/png" },
      { url: "/new_logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/new_logo.png",
  },
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
      </head>
      <body
        className={`${manrope.variable} font-display antialiased bg-background-light dark:bg-background-dark text-content-light dark:text-content-dark`}
      >
        {children}
      </body>
    </html>
  );
}
