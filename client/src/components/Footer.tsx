/*
 * DESIGN: Precision Science — clean footer with cobalt accent
 */
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-[oklch(0.97_0.003_255)]">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-3">
              <span
                className="text-lg font-bold"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-cobalt)",
                }}
              >
                LEE Method
              </span>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--color-slate-cool)", fontFamily: "var(--font-body)" }}
            >
              Preserving and sharing the scientific legacy of T. Joseph Lin, Ph.D. — pioneer of Low Energy Emulsification.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-xs tracking-[0.15em] uppercase mb-4 font-medium"
              style={{ fontFamily: "var(--font-mono)", color: "var(--color-cobalt)" }}
            >
              Navigate
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Dr. Lin" },
                { href: "/science", label: "The Science" },
                { href: "/publication", label: "Publication" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span
                      className="text-sm hover:text-[oklch(0.38_0.13_255)] transition-colors cursor-pointer"
                      style={{ color: "var(--color-slate-cool)", fontFamily: "var(--font-body)" }}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Publication CTA */}
          <div>
            <h4
              className="text-xs tracking-[0.15em] uppercase mb-4 font-medium"
              style={{ fontFamily: "var(--font-mono)", color: "var(--color-cobalt)" }}
            >
              Final Publication
            </h4>
            <p
              className="text-sm mb-4 leading-relaxed"
              style={{ color: "var(--color-slate-cool)", fontFamily: "var(--font-body)" }}
            >
              A limited number of copies of Dr. Lin's final publication remain available. Order yours today.
            </p>
            <Link href="/publication">
              <button
                className="px-4 py-2 text-sm font-medium rounded text-white transition-all hover:opacity-90"
                style={{ background: "var(--color-cobalt)", fontFamily: "var(--font-body)" }}
              >
                Order a Copy
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3"
        >
          <p
            className="text-xs"
            style={{ color: "var(--color-slate-cool)", fontFamily: "var(--font-mono)" }}
          >
            © {new Date().getFullYear()} The Lin Family. All rights reserved.
          </p>
          <p
            className="text-xs"
            style={{ color: "var(--color-slate-cool)", fontFamily: "var(--font-mono)" }}
          >
            leemethod.com — Low Energy Emulsification
          </p>
        </div>
      </div>
    </footer>
  );
}
