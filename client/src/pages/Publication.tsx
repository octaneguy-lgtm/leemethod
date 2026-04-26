/*
 * DESIGN: Precision Science — Publication page
 * Book showcase with limited edition framing, order CTA
 */
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { toast } from "sonner";

const LAB_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663502700298/bg5X4pi7SvB6SpNSveBFo8/lab_equipment_vintage-VentmgFEmGtbqLsU43U8en.webp";

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
            {/* Book cover placeholder */}
            <div className="lg:col-span-5 reveal">
              <div
                className="relative rounded-sm overflow-hidden shadow-2xl aspect-[3/4]"
                style={{ border: "1px solid var(--border)" }}
              >
                <img
                  src={LAB_IMG}
                  alt="Publication placeholder"
                  className="w-full h-full object-cover opacity-40"
                />
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
                  style={{ background: "oklch(0.13 0.05 255 / 0.75)" }}
                >
                  <div
                    className="w-1 h-16 mb-6"
                    style={{ background: "oklch(0.72 0.12 75)" }}
                  />
                  <p
                    className="text-xs tracking-[0.2em] uppercase mb-4"
                    style={{ fontFamily: "var(--font-mono)", color: "oklch(0.72 0.12 75)" }}
                  >
                    Final Publication
                  </p>
                  <h2
                    className="text-3xl text-white mb-4 leading-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Low Energy
                    <br />
                    <em>Emulsification</em>
                  </h2>
                  <p
                    className="text-sm text-white/70 mb-6"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    T. Joseph Lin, Ph.D.
                  </p>
                  <div
                    className="w-8 h-0.5"
                    style={{ background: "oklch(0.72 0.12 75)" }}
                  />
                  <p
                    className="text-xs mt-4 text-white/50"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    Cover image coming soon
                  </p>
                </div>
              </div>

              {/* Limited edition badge */}
              <div
                className="mt-4 p-4 rounded-sm flex items-center gap-3"
                style={{ background: "oklch(0.97 0.003 255)", border: "1px solid var(--border)" }}
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
                className="text-4xl md:text-5xl mb-6"
                style={{ fontFamily: "var(--font-display)", color: "oklch(0.13 0.01 255)" }}
              >
                A Lifetime of Science,
                <br />
                <em>Preserved in Print</em>
              </h2>

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
                <Link href="/contact">
                  <button
                    className="px-8 py-4 text-sm font-medium rounded text-white transition-all hover:opacity-90 active:scale-95"
                    style={{ background: "var(--color-cobalt)", fontFamily: "var(--font-body)" }}
                  >
                    Order a Copy
                  </button>
                </Link>
                <button
                  className="px-8 py-4 text-sm font-medium rounded border transition-all hover:bg-[oklch(0.97_0.003_255)] active:scale-95"
                  style={{
                    border: "1px solid var(--border)",
                    fontFamily: "var(--font-body)",
                    color: "oklch(0.35 0.02 255)",
                  }}
                  onClick={() => toast.info("Pricing details available upon request via the contact form.")}
                >
                  Inquire About Pricing
                </button>
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
