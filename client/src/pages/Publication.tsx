/*
 * DESIGN: Precision Science — Publication page
 * Book showcase with limited edition framing, order CTA
 */
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { toast } from "sonner";

const BOOK_COVER = "/manus-storage/book_cover_9ebe638c.png";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    el.querySelectorAll(".reveal, .reveal-stagger").forEach((c) => observer.observe(c));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Publication() {
  const s1 = useReveal();
  const s2 = useReveal();

  return (
    <div className="min-h-screen pt-20">
      {/* ─── PAGE HEADER ─── */}
      <section
        className="py-20 md:py-28"
        style={{ background: "oklch(0.13 0.05 255)" }}
      >
        <div className="container">
          <p
            className="text-xs tracking-[0.18em] uppercase mb-4"
            style={{ fontFamily: "var(--font-mono)", color: "oklch(0.72 0.12 75)" }}
          >
            Publication
          </p>
          <h1
            className="text-5xl md:text-6xl text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Dr. Lin's Final <em>Work</em>
          </h1>
          <div className="w-12 h-0.5 mt-6" style={{ background: "oklch(0.72 0.12 75)" }} />
        </div>
      </section>

      {/* ─── BOOK SHOWCASE ─── */}
      <section className="py-24 md:py-32 bg-white" ref={s1}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Book cover */}
            <div className="lg:col-span-5 reveal">
              <div
                className="relative rounded-sm overflow-hidden shadow-2xl"
                style={{ border: "1px solid var(--border)" }}
              >
                <img
                  src={BOOK_COVER}
                  alt="Manufacturing Cosmetic Emulsions: Pragmatic Troubleshooting and Energy Conservation — T. Joseph Lin, PhD"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Book metadata */}
              <div
                className="mt-4 p-5 rounded-sm"
                style={{ background: "oklch(0.97 0.003 255)", border: "1px solid var(--border)" }}
              >
                <dl className="grid grid-cols-2 gap-x-4 gap-y-3">
                  {[
                    ["Publisher", "Allured Books"],
                    ["Published", "July 1, 2009"],
                    ["Edition", "First Edition"],
                    ["Pages", "187"],
                    ["ISBN-13", "978-1932633610"],
                    ["Language", "English"],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <dt className="text-xs uppercase tracking-widest mb-0.5" style={{ fontFamily: "var(--font-mono)", color: "var(--color-cobalt)" }}>{label}</dt>
                      <dd className="text-sm font-medium" style={{ fontFamily: "var(--font-body)", color: "oklch(0.2 0.02 255)" }}>{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Limited edition badge */}
              <div
                className="mt-3 p-4 rounded-sm flex items-center gap-3"
                style={{ background: "oklch(0.97 0.003 255)", border: "1px solid oklch(0.72 0.12 75 / 0.4)" }}
              >
                <div
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: "oklch(0.72 0.12 75)" }}
                />
                <p
                  className="text-xs"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--color-slate-cool)" }}
                >
                  Limited copies remaining — many were lost in a recent fire
                </p>
              </div>
            </div>

            {/* Book details */}
            <div className="lg:col-span-7 reveal" style={{ transitionDelay: "0.15s" }}>
              <p className="section-label mb-4">About This Publication</p>
              <h2
                className="text-4xl md:text-5xl mb-2"
                style={{ fontFamily: "var(--font-display)", color: "oklch(0.13 0.01 255)" }}
              >
                Manufacturing Cosmetic Emulsions
              </h2>
              <p className="text-lg mb-6" style={{ fontFamily: "var(--font-body)", color: "oklch(0.45 0.02 255)" }}>
                Pragmatic Troubleshooting and Energy Conservation
              </p>

              <div className="cobalt-rule mb-8">
                <p
                  className="text-base md:text-lg leading-relaxed italic"
                  style={{ fontFamily: "var(--font-display)", color: "oklch(0.35 0.02 255)" }}
                >
                  Dr. Lin's final publication represents the most comprehensive treatment of Low Energy Emulsification ever written — a synthesis of nearly five decades of research, industrial consulting, and scientific refinement.
                </p>
              </div>

              <div className="space-y-5 mb-10">
                <p
                  className="text-base leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "oklch(0.35 0.02 255)" }}
                >
                  This publication covers the full breadth of LEE science: the fundamental thermodynamic principles, the primary emulsification methods (spontaneous emulsification, PIT, PIC, and gel emulsification), the factors affecting emulsion quality, and the practical application of LEE in commercial manufacturing environments.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "oklch(0.35 0.02 255)" }}
                >
                  It is an essential reference for cosmetic chemists, formulation scientists, chemical engineers, and anyone with a serious interest in emulsion technology. It is also a deeply personal document — the final scientific statement of a man who dedicated his career to making manufacturing more intelligent, more efficient, and more beautiful.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "oklch(0.35 0.02 255)" }}
                >
                  Unfortunately, a significant number of copies were destroyed in a recent fire. The surviving copies are now among the last available anywhere in the world. We are making them available to those who wish to own a piece of emulsion science history.
                </p>
              </div>

              {/* What's inside */}
              <div
                className="p-6 rounded-sm mb-8"
                style={{ background: "oklch(0.97 0.003 255)", border: "1px solid var(--border)" }}
              >
                <p
                  className="text-xs tracking-[0.15em] uppercase mb-4"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--color-cobalt)" }}
                >
                  What's Inside
                </p>
                <ul className="space-y-2">
                  {[
                    "Fundamental principles of Low Energy Emulsification",
                    "Detailed treatment of all primary LEE methods",
                    "Factors affecting emulsion quality and stability",
                    "Commercial manufacturing applications and case studies",
                    "High-internal-phase emulsions and gel emulsification",
                    "Productivity improvements and energy savings data",
                    "Applications in cosmetics, pharmaceuticals, and food science",
                  ].map((item) => (
                    <li
                      key={item}
                      className="text-sm flex items-start gap-2"
                      style={{ fontFamily: "var(--font-body)", color: "oklch(0.35 0.02 255)" }}
                    >
                      <span style={{ color: "var(--color-cobalt)", marginTop: "2px" }}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Order CTA */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://a.co/d/0cmpWq1t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 text-sm font-medium rounded text-white transition-all hover:opacity-90 active:scale-95 inline-flex items-center gap-2"
                  style={{ background: "#FF9900", fontFamily: "var(--font-body)", color: "#111" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.891-1.301 1.438-2.186 1.438-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.699-3.182v.685zm3.186 7.705c-.209.189-.512.201-.745.074-1.052-.872-1.238-1.276-1.814-2.106-1.734 1.767-2.962 2.297-5.209 2.297-2.66 0-4.731-1.641-4.731-4.925 0-2.565 1.391-4.309 3.37-5.164 1.715-.754 4.11-.891 5.942-1.095v-.41c0-.753.06-1.642-.384-2.294-.385-.579-1.124-.82-1.775-.82-1.205 0-2.277.618-2.54 1.897-.054.285-.261.567-.549.582l-3.061-.333c-.259-.056-.548-.266-.472-.66C5.57 2.357 8.533 1.5 11.19 1.5c1.363 0 3.143.363 4.218 1.395 1.363 1.271 1.232 2.965 1.232 4.811v4.355c0 1.31.543 1.885 1.054 2.592.181.253.221.557-.009.745l-2.541 2.397z"/></svg>
                  Buy on Amazon
                </a>
                <Link href="/contact">
                  <button
                    className="px-8 py-4 text-sm font-medium rounded border transition-all hover:bg-[oklch(0.97_0.003_255)] active:scale-95"
                    style={{
                      border: "1px solid var(--border)",
                      fontFamily: "var(--font-body)",
                      color: "oklch(0.35 0.02 255)",
                    }}
                  >
                    Contact Us Directly
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── AUDIENCE ─── */}
      <section
        className="py-24"
        style={{ background: "oklch(0.97 0.003 255)" }}
        ref={s2}
      >
        <div className="container">
          <div className="reveal mb-12">
            <p className="section-label mb-4">Who Should Own This Book</p>
            <h2
              className="text-4xl"
              style={{ fontFamily: "var(--font-display)", color: "oklch(0.13 0.01 255)" }}
            >
              For Every <em>Emulsion Scientist</em>
            </h2>
          </div>

          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Cosmetic Chemists & Formulators",
                body: "A practical reference for anyone formulating creams, lotions, and emulsified personal care products. The LEE principles directly translate to improved batch efficiency and product quality.",
              },
              {
                title: "Students & Researchers",
                body: "An authoritative primary source on low-energy emulsification methods, suitable for academic study and as a foundation for further research in emulsion science.",
              },
              {
                title: "Collectors & Historians",
                body: "A rare surviving copy of the final work by one of the most influential figures in 20th-century cosmetic chemistry. A document of genuine historical significance.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="p-8 bg-white rounded-sm shadow-sm"
                style={{ border: "1px solid var(--border)" }}
              >
                <h3
                  className="text-xl mb-4"
                  style={{ fontFamily: "var(--font-display)", color: "oklch(0.13 0.01 255)" }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "oklch(0.45 0.02 255)" }}
                >
                  {card.body}
                </p>
              </div>
            ))}
          </div>

          <div className="reveal mt-12 text-center">
            <Link href="/contact">
              <button
                className="px-8 py-4 text-sm font-medium rounded text-white transition-all hover:opacity-90"
                style={{ background: "var(--color-cobalt)", fontFamily: "var(--font-body)" }}
              >
                Contact Us to Order
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
