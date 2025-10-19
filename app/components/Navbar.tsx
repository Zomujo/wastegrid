"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between whitespace-nowrap border-b border-primary-green/20 bg-background-light/80 px-10 py-4 backdrop-blur-sm dark:bg-background-dark/80">
      <div className="flex items-center gap-3">
        <Link href="/" className="flex items-center">
          <div className="relative w-48 h-16">
            <Image
              src="/new_logo_text.png"
              alt="Waste Grid"
              width={192}
              height={64}
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>
      </div>
      <nav className="hidden items-center gap-8 md:flex">
        <Link
          className={`text-sm font-medium ${
            isActive("/") ? "text-primary-green" : "hover:text-primary-green"
          }`}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`text-sm font-medium ${
            isActive("/about")
              ? "text-primary-green"
              : "hover:text-primary-green"
          }`}
          href="/about"
        >
          About
        </Link>
        <Link
          className={`text-sm font-medium ${
            isActive("/solutions")
              ? "text-primary-green"
              : "hover:text-primary-green"
          }`}
          href="/solutions"
        >
          Solutions
        </Link>
        <Link
          className={`text-sm font-medium ${
            isActive("/network")
              ? "text-primary-green"
              : "hover:text-primary-green"
          }`}
          href="/network"
        >
          Network
        </Link>
        <Link
          className={`text-sm font-medium ${
            isActive("/impact")
              ? "text-primary-green"
              : "hover:text-primary-green"
          }`}
          href="/impact"
        >
          Impact
        </Link>
        <Link
          className={`text-sm font-medium ${
            isActive("/contact")
              ? "text-primary-green"
              : "hover:text-primary-green"
          }`}
          href="/contact"
        >
          Contact
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <button className="hidden rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white transition-transform hover:scale-105 md:block">
          Get Started
        </button>
        <button className="md:hidden" onClick={toggleMenu}>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 z-50 bg-background-light/95 backdrop-blur-sm dark:bg-background-dark/95 md:hidden">
          <nav className="flex flex-col items-center gap-4 p-6">
            <Link
              className={`text-base font-medium ${
                isActive("/")
                  ? "text-primary-green"
                  : "hover:text-primary-green"
              }`}
              href="/"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              className={`text-base font-medium ${
                isActive("/about")
                  ? "text-primary-green"
                  : "hover:text-primary-green"
              }`}
              href="/about"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              className={`text-base font-medium ${
                isActive("/solutions")
                  ? "text-primary-green"
                  : "hover:text-primary-green"
              }`}
              href="/solutions"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link
              className={`text-base font-medium ${
                isActive("/network")
                  ? "text-primary-green"
                  : "hover:text-primary-green"
              }`}
              href="/network"
              onClick={() => setIsMenuOpen(false)}
            >
              Network
            </Link>
            <Link
              className={`text-base font-medium ${
                isActive("/impact")
                  ? "text-primary-green"
                  : "hover:text-primary-green"
              }`}
              href="/impact"
              onClick={() => setIsMenuOpen(false)}
            >
              Impact
            </Link>
            <Link
              className={`text-base font-medium ${
                isActive("/contact")
                  ? "text-primary-green"
                  : "hover:text-primary-green"
              }`}
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <button className="mt-4 rounded-lg bg-primary px-6 py-3 text-base font-bold text-white transition-transform hover:scale-105">
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
