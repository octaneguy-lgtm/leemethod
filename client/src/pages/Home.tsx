/*
 * DESIGN: Precision Science — Home page
 * Hero: full-bleed emulsion image with dark overlay, large DM Serif Display headline
 * Sections: asymmetric grid, cobalt rule accents, generous whitespace
 */
import { useEffect, useRef } from "react";
import { Link } from "wouter";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663502700298/bg5X4pi7SvB6SpNSveBFo8/hero_emulsion_lab-KeqhoytoZPE3TN4JK63F3q.webp";
const LAB_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663502700298/bg5X4pi7SvB6SpNSveBFo8/lab_equipment_vintage-VentmgFEmGtbqLsU43U8en.webp";
const PORTRAIT_IMG = "/manus-storage/dr_lin_portrait_ab57ba64.jpeg";
const MOLECULE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663502700298/bg5X4pi7SvB6SpNSveBFo8/molecular_diagram_abstract-Hux9yNrRWdDv2qHL3frMeW.png";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    el.querySelectorAll(".reveal, .reveal-stagger").forEach((child) => observer.observe(child));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Home() {
  const section1 = useReveal();
  const section2 = useReveal();
  const section3 = useReveal();
  const section4 = useReveal();

  return (
    <div className="min-h-screen">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        {/* Gradient overlay — dark on left for text, lighter on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.08_0.05_255/0.92)] via-[oklch(0.08_0.05_255/0.75)] to-[oklch(0.08_0.05_255/0.35)]" />

        <div className="relative container pt-24 pb-20">
          <div className="max-w-2xl">
            <p
              className="section-label text-[oklch(0.72_0.12_75)] mb-6"
            >
              01 — Scientific Legacy
            </p>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.1]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Low Energy
              <br />
              <em>Emulsification</em>
            </h1>
            <div
              className="w-16 h-0.5 mb-6"
              style={{ background: "var(--color-gold)" }}
            />
            <p
              className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-xl"
              style={{ fontFamily: "var(--font-body)" }}
            >
              The pioneering work of T. Joseph Lin, Ph.D. — Head of R&D at Max Factor — that transformed how the world makes emulsions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/science">
                <button
                  className="px-6 py-3 text-sm font-medium rounded text-white transition-all hover:opacity-90 active:scale-95"
                  style={{ background: "var(--color-cobalt)", fontFamily: "var(--font-body)" }}
                >
                  Explore the Science
                </button>
              </Link>
              <Link href="/about">
                <button
                  className="px-6 py-3 text-sm font-medium rounded border border-white/40 text-white transition-all hover:bg-white/10 active:scale-95"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  About Dr. Lin
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="text-white text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-mono)" }}>Scroll</span>
          <div className="w-px h-10 bg-white/50 animate-pulse" />
        </div>
      </section>

      {/* ─── INTRO: WHO WAS DR. LIN ─── */}
      <section className="py-24 md:py-32 bg-white" ref={section1}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: text */}
            <div className="lg:col-span-6 reveal">
              <p className="section-label mb-4">02 — The Scientist</p>
              <h2
                className="text-4xl md:text-5xl mb-6"
                style={{ fontFamily: "var(--font-display)", color: "oklch(0.13 0.01 255)" }}
              >
                T. Joseph Lin,{" "}
                <em>Ph.D.</em>
              </h2>
              <div className="cobalt-rule mb-6">
                <p
                  className="text-base md:text-lg leading-relaxed"
                  style={{ color: "oklch(0.35 0.02 255)", fontFamily: "var(--font-body)" }}
                >
                  A consulting chemical engineer and pioneering emulsion scientist, Dr. Lin served as Head of Research & Development at Max Factor, one of the world's most iconic cosmetic companies.
                </p>
              </div>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "oklch(0.45 0.02 255)", fontFamily: "var(--font-body)" }}
              >
                In 1976, he introduced the concept of Low Energy Emulsification (LEE) to the cosmetic industry — a breakthrough that reduced manufacturing energy consumption by 30–80% while simultaneously improving product quality. His work has been cited by researchers and manufacturers worldwide for nearly five decades.
              </p>
              <Link href="/about">
                <span
                  className="text-sm font-medium inline-flex items-center gap-2 cursor-pointer hover:gap-3 transition-all"
                  style={{ color: "var(--color-cobalt)", fontFamily: "var(--font-body)" }}
                >
                  Read his full biography
                  <span>→</span>
                </span>
              </Link>
            </div>

            {/* Right: image placeholder for photo */}
            <div className="lg:col-span-6 reveal" style={{ transitionDelay: "0.15s" }}>
              <div
                className="relative rounded-sm overflow-hidden aspect-[4/3] shadow-xl"
                style={{ border: "1px solid var(--border)" }}
              >
                <img
                  src={PORTRAIT_IMG}
                  alt="Dr. T. Joseph Lin, Ph.D."
                  className="w-full h-full object-cover object-top"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 p-4"
                  style={{ background: "linear-gradient(to top, oklch(0.08 0.05 255 / 0.85), transparent)" }}
                >
                  <p
                    className="text-white/80 text-xs"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    T. Joseph Lin, Ph.D. — Head of R&D, Max Factor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT IS LEE ─── */}
      <section
        className="py-24 md:py-32"
        style={{ background: "oklch(0.97 0.003 255)" }}
        ref={section2}
      >
        <div className="container">
          <div className="reveal mb-16">
            <p className="section-label mb-4">03 — The Method</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <h2
                className="text-4xl md:text-5xl"
                style={{ fontFamily: "var(--font-display)", color: "oklch(0.13 0.01 255)" }}
              >
                What is Low Energy
                <br />
                <em>Emulsification?</em>
              </h2>
              <p
                className="text-base md:text-lg leading-relaxed self-end"
                style={{ color: "oklch(0.45 0.02 255)", fontFamily: "var(--font-body)" }}
              >
                LEE is a manufacturing philosophy that uses the internal thermodynamic properties of an emulsion system — rather than brute mechanical force — to create stable, fine-droplet emulsions.
              </p>
            </div>
          </div>

          {/* Three principles */}
          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                num: "I",
                title: "Use energy only where needed",
                body: "Instead of heating the entire batch, LEE targets thermal energy only to the pre-selected phase that requires it — the β phase — leaving the bulk of the external phase at room temperature.",
              },
              {
                num: "II",
                title: "Use energy only when needed",
                body: "Energy is applied at the precise moment in the manufacturing sequence where it produces the most effect, rather than maintaining high temperatures throughout the entire process.",
              },
              {
                num: "III",
                title: "Use only the amount needed",
                body: "By optimizing the ratio of heated to unheated phases, manufacturers can minimize the total thermal load while maintaining or exceeding conventional emulsion quality.",
              },
            ].map((principle) => (
              <div
                key={principle.num}
                className="p-8 rounded-sm bg-white shadow-sm"
                style={{ border: "1px solid var(--border)" }}
              >
                <div
                  className="text-3xl mb-4"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--color-cobalt)",
                    fontStyle: "italic",
                  }}
                >
                  {principle.num}
                </div>
                <h3
                  className="text-lg mb-3 font-medium"
                  style={{ fontFamily: "var(--font-display)", color: "oklch(0.13 0.01 255)" }}
                >
                  {principle.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "oklch(0.45 0.02 255)", fontFamily: "var(--font-body)" }}
                >
                  {principle.body}
                </p>
              </div>
            ))}
          </div>

          <div className="reveal text-center">
            <Link href="/science">
              <button
                className="px-6 py-3 text-sm font-medium rounded text-white transition-all hover:opacity-90"
                style={{ background: "var(--color-cobalt)", fontFamily: "var(--font-body)" }}
              >
                Deep Dive into the Science
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── MOLECULE VISUAL SECTION ─── */}
      <section className="relative py-24 overflow-hidden" ref={section3}>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${MOLECULE_IMG})` }}
        />
        <div className="relative container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <img
                src={MOLECULE_IMG}
                alt="Surfactant molecules self-assembling at an oil-water interface"
                className="w-full rounded-sm shadow-lg"
                style={{ border: "1px solid var(--border)" }}
              />
              <p
                className="text-xs mt-3"
                style={{ color: "var(--color-slate-cool)", fontFamily: "var(--font-mono)" }}
              >
                Fig. — Surfactant molecules self-assembling at the oil-water interface, the thermodynamic basis of LEE.
              </p>
            </div>
            <div className="reveal" style={{ transitionDelay: "0.15s" }}>
              <p className="section-label mb-4">04 — Impact</p>
              <h2
                className="text-4xl md:text-5xl mb-6"
                style={{ fontFamily: "var(--font-display)", color: "oklch(0.13 0.01 255)" }}
              >
                A Legacy Measured
                <br />
                in <em>Decades</em>
              </h2>
              <div className="space-y-6">
                {[
                  { stat: "30–80%", label: "Reduction in manufacturing energy consumption" },
                  { stat: "2×", label: "Increase in production capacity without new equipment" },
                  { stat: "~50 yrs", label: "Of citations in academic and industry literature" },
                  { stat: "Global", label: "Adoption across cosmetics, pharma, and food industries" },
                ].map((item) => (
                  <div key={item.stat} className="flex items-start gap-5">
                    <div
                      className="text-3xl font-bold shrink-0 w-24 text-right"
                      style={{ fontFamily: "var(--font-display)", color: "var(--color-cobalt)" }}
                    >
                      {item.stat}
                    </div>
                    <div
                      className="text-sm leading-snug pt-2"
                      style={{ color: "oklch(0.45 0.02 255)", fontFamily: "var(--font-body)" }}
                    >
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PUBLICATION CTA ─── */}
      <section
        className="py-24 md:py-32"
        style={{ background: "var(--color-cobalt)" }}
        ref={section4}
      >
        <div className="container">
          <div className="reveal max-w-3xl mx-auto text-center">
            <p
              className="text-xs tracking-[0.18em] uppercase mb-6"
              style={{ fontFamily: "var(--font-mono)", color: "oklch(0.72 0.12 75)" }}
            >
              05 — Final Publication
            </p>
            <h2
              className="text-4xl md:text-5xl text-white mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Dr. Lin's Last Work
            </h2>
            <div
              className="w-12 h-0.5 mx-auto mb-6"
              style={{ background: "oklch(0.72 0.12 75)" }}
            />
            <p
              className="text-lg text-white/80 mb-10 leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              A limited number of copies of Dr. Lin's final publication remain available. Many were lost in a recent fire, making these surviving copies especially precious. Order yours to own a piece of emulsion science history.
            </p>
            <Link href="/publication">
              <button
                className="px-8 py-4 text-sm font-medium rounded border-2 border-white text-white transition-all hover:bg-white hover:text-[oklch(0.38_0.13_255)] active:scale-95"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Order a Copy
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
