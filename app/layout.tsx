import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
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
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=optional"
          rel="stylesheet"
        />
        <link rel="icon" href="/new_logo.png" sizes="any" />
      </head>
      <body
        className={`${spaceGrotesk.variable} font-display antialiased bg-background-light dark:bg-background-dark text-content-light dark:text-content-dark`}
      >
        {children}
      </body>
    </html>
  );
}
