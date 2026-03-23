import Link from "next/link";
import MaterialIcon from "./MaterialIcon";

export default function JoinUsCTA() {
  return (
    <section className="py-24 sm:py-32 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-6">
        <div
          className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden px-8 py-16 sm:px-16 sm:py-20 text-center"
          style={{
            background:
              "linear-gradient(135deg, #112117 0%, #0d1a13 100%)",
            border: "1px solid rgba(29, 201, 98, 0.15)",
          }}
        >
          {/* Background glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(29, 201, 98, 0.08) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10">
            {/* Label */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-10" style={{ backgroundColor: "#1dc962" }} />
              <span
                className="text-xs font-semibold tracking-[0.2em] uppercase"
                style={{ color: "#1dc962" }}
              >
                Join Us
              </span>
              <div className="h-px w-10" style={{ backgroundColor: "#1dc962" }} />
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6 leading-[1.1]">
              Build what enables everything else.
            </h2>

            <p
              className="text-base leading-relaxed max-w-2xl mx-auto mb-10"
              style={{ color: "#94a3b8" }}
            >
              We are creating the systems that power industries, support
              economies, and define long-term growth. If you share that vision —
              as a partner, investor, or collaborator — we want to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-bold text-white transition-all hover:scale-105"
                style={{ backgroundColor: "#1dc962" }}
              >
                Get in Touch
                <MaterialIcon icon="arrow_forward" className="text-[20px]" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-lg border px-8 py-4 text-base font-medium text-white transition-all hover:border-primary"
                style={{ borderColor: "rgba(29, 201, 98, 0.25)" }}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
