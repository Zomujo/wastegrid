"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Platform", href: "/platform" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Solar & Green Transition", href: "/solar" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const pathname = usePathname();
  const isSolar = pathname === "/solar";

  return (
    <footer
      style={{
        backgroundColor: isSolar ? "#0A1628" : "#0d1a13",
        borderTop: isSolar
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid rgba(29,201,98,0.08)",
      }}
    >
      <div className="container mx-auto px-6 py-16 lg:py-20">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <Image
                src="/new_logo_text.png"
                alt="WasteGrid"
                width={160}
                height={52}
                className="object-contain object-left"
              />
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#64748b" }}>
              An industrial platform developing the foundational systems required for Africa&apos;s next phase of growth.
            </p>
            <span
              className="text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ color: "#1dc962" }}
            >
              Enabling Africa&apos;s Industrial Future
            </span>
          </div>

          {/* Navigate column */}
          <div>
            <h4
              className="text-xs font-semibold tracking-[0.15em] uppercase mb-5"
              style={{ color: "#1dc962" }}
            >
              Navigate
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{ color: "#64748b" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4
              className="text-xs font-semibold tracking-[0.15em] uppercase mb-5"
              style={{ color: "#1dc962" }}
            >
              Contact
            </h4>
            <ul className="space-y-3 text-sm" style={{ color: "#64748b" }}>
              <li>
                <a
                  href="mailto:support@wastegrid.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  support@wastegrid.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:partners@wastegrid.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  partners@wastegrid.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+233201462313"
                  className="hover:text-white transition-colors duration-200"
                >
                  +233 20 146 2313
                </a>
              </li>
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h4
              className="text-xs font-semibold tracking-[0.15em] uppercase mb-5"
              style={{ color: "#1dc962" }}
            >
              Company
            </h4>
            <ul className="space-y-3 text-sm" style={{ color: "#64748b" }}>
              <li>WasteGrid Africa Ltd.</li>
              <li>Accra, Ghana</li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors duration-200"
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="text-xs" style={{ color: "#475569" }}>
            &copy; {new Date().getFullYear()} WasteGrid Africa Ltd. All rights reserved.
          </p>
          <p className="text-xs font-mono" style={{ color: "#475569" }}>
            Materials. Energy. Industrial Systems.
          </p>
        </div>

      </div>
    </footer>
  );
}
