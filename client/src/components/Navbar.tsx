/*
 * DESIGN: Precision Science — slim persistent top bar
 * Cobalt blue accent, DM Serif Display logo, DM Sans nav links
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Dr. Lin" },
  { href: "/science", label: "The Science" },
  { href: "/papers", label: "Papers" },
  { href: "/publication", label: "Publication" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex flex-col leading-none cursor-pointer group">
              <span
                className="text-xl font-bold tracking-tight"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-cobalt)",
                }}
              >
                LEE Method
              </span>
              <span
                className="text-[10px] tracking-[0.18em] uppercase"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--color-slate-cool)",
                }}
              >
                Low Energy Emulsification
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link key={link.href} href={link.href}>
                  <span
                    className={`relative text-sm font-medium transition-colors duration-200 pb-0.5 cursor-pointer ${
                      isActive
                        ? "text-[oklch(0.38_0.13_255)]"
                        : "text-[oklch(0.35_0.02_255)] hover:text-[oklch(0.38_0.13_255)]"
                    }`}
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full"
                        style={{ background: "var(--color-cobalt)" }}
                      />
                    )}
                  </span>
                </Link>
              );
            })}
            <Link href="/publication">
              <button
                className="ml-2 px-4 py-2 text-sm font-medium rounded text-white transition-all duration-200 hover:opacity-90 active:scale-95"
                style={{
                  background: "var(--color-cobalt)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Order Book
              </button>
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              style={{ background: "var(--color-cobalt)" }}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
              style={{ background: "var(--color-cobalt)" }}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              style={{ background: "var(--color-cobalt)" }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border shadow-lg">
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`block py-3 px-2 text-sm font-medium border-b border-border/50 cursor-pointer ${
                    location === link.href
                      ? "text-[oklch(0.38_0.13_255)]"
                      : "text-foreground"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
