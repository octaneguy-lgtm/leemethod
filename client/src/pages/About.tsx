/*
 * DESIGN: Precision Science — About Dr. Lin page
 * Left-anchored layout, cobalt rule, generous whitespace, archival photo placeholders
 */
import { useEffect, useRef } from "react";
import { Link } from "wouter";

const PORTRAIT_IMG = "/manus-storage/dr_lin_portrait_ab57ba64.jpeg";
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

const timeline = [
  {
    year: "1960s",
    title: "First Published Paper — de Navarre",
    body: "Contributed the chapter 'Emulsions' to Maison G. de Navarre's landmark reference series, The Chemistry and Manufacture of Cosmetics. De Navarre was the founder of the Society of Cosmetic Chemists, and being invited to write for his definitive text was a mark of exceptional scientific standing. This was Dr. Lin's first published technical paper.",
  },
  {
    year: "1960s–70s",
    title: "Head of R&D, Max Factor",
    body: "Appointed Head of Research & Development at Max Factor, one of the world's most celebrated cosmetic companies. He led the formulation of iconic skin-care and cosmetic products used by millions worldwide.",
  },
  {
    year: "1976",
    title: "Introduction of LEE",
    body: "Presented the concept of Low Energy Emulsification (LEE) at the Society of Cosmetic Chemists (SCC) annual meeting in New York — a landmark moment in cosmetic manufacturing science.",
  },
  {
    year: "1978",
    title: "Landmark Publication",
    body: "Published the foundational paper 'Low-Energy Emulsification — I: Principles and Applications' in the Journal of the Society of Cosmetic Chemists, establishing LEE as a recognized scientific method.",
  },
  {
    year: "1980s–2000s",
    title: "Global Consulting & Lecturing",
    body: "As a consulting chemical engineer based in Pacific Palisades, CA, Dr. Lin advised cosmetic manufacturers across the US, Asia, and Europe, and lectured extensively at SCC and IFSCC conferences.",
  },
  {
    year: "2001",
    title: "'Beyond Energy Conservation'",
    body: "Published 'Low-Energy Emulsification: Beyond Energy Conservation' in Cosmetics & Toiletries magazine, demonstrating that LEE also dramatically improves manufacturing productivity and product quality.",
  },
];

export default function About() {
  const s1 = useReveal();
  const s2 = useReveal();
  const s3 = useReveal();

  return (
    <div className="min-h-screen pt-20">
      {/* ─── PAGE HEADER ─── */}
      <section
        className="py-20 md:py-28"
        style={{ background: "var(--color-cobalt)" }}
      >
        <div className="container">
          <p
            className="text-xs tracking-[0.18em] uppercase mb-4"
            style={{ fontFamily: "var(--font-mono)", color: "oklch(0.72 0.12 75)" }}
          >
            About
          </p>
          <h1
            className="text-5xl md:text-6xl text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            T. Joseph Lin,{" "}
            <em>Ph.D.</em>
          </h1>
          <div className="w-12 h-0.5 mt-6" style={{ background: "oklch(0.72 0.12 75)" }} />
        </div>
      </section>

      {/* ─── BIOGRAPHY ─── */}
      <section className="py-24 md:py-32 bg-white" ref={s1}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sticky sidebar */}
            <aside className="lg:col-span-4 reveal">
              <div
                className="sticky top-28 rounded-sm overflow-hidden shadow-lg"
                style={{ border: "1px solid var(--border)" }}
              >
                <div className="relative aspect-[3/4] bg-[oklch(0.93_0.005_255)]">
                  <img
                    src={PORTRAIT_IMG}
                    alt="Dr. T. Joseph Lin, Ph.D."
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-5 bg-white">
                  <h3
                    className="text-lg mb-1"
                    style={{ fontFamily: "var(--font-display)", color: "oklch(0.13 0.01 255)" }}
                  >
                    T. Joseph Lin, Ph.D.
                  </h3>
                  <p
                    className="text-xs mb-3"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--color-cobalt)" }}
                  >
                    Consulting Chemical Engineer
                  </p>
                  <div
                    className="text-xs space-y-1"
                    style={{ fontFamily: "var(--font-body)", color: "var(--color-slate-cool)" }}
                  >
                    <p>Pacific Palisades, CA, USA</p>
                    <p>Head of R&D — Max Factor</p>
                    <p>Pioneer of Low Energy Emulsification</p>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main biography text */}
            <div className="lg:col-span-8 space-y-8 reveal" style={{ transitionDelay: "0.1s" }}>
              <div>
                <p className="section-label mb-4">Biography</p>
                <h2
                  className="text-3xl md:text-4xl mb-6"
                  style={{ fontFamily: "var(--font-display)", color: "oklch(0.13 0.01 255)" }}
                >
                  A Life in Service of Science
                </h2>
              </div>

              <div className="cobalt-rule">
                <p
                  className="text-base md:text-lg leading-relaxed italic"
                  style={{ fontFamily: "var(--font-display)", color: "oklch(0.35 0.02 255)" }}
                >
                  "The quality of emulsions manufactured with low-energy emulsification can be equal or even superior to the same emulsions made by a conventional hot process if conditions are optimized."
                </p>
                <p
                  className="text-xs mt-3"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--color-slate-cool)" }}
                >
                  — T. Joseph Lin, Cosmetics & Toiletries, 2001
                </p>
              </div>

              <p
                className="text-base leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "oklch(0.35 0.02 255)" }}
              >
                T. Joseph Lin, Ph.D. was a consulting chemical engineer whose career bridged the worlds of academic science and industrial manufacturing. Trained as a chemical engineer with deep expertise in colloid and surface chemistry, he brought a rigorous, first-principles approach to the practical challenges of cosmetic formulation.
              </p>

              <p
                className="text-base leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "oklch(0.35 0.02 255)" }}
              >
                As Head of Research & Development at Max Factor — one of the most storied names in the beauty industry — Dr. Lin was responsible for the scientific development of a wide range of emulsified products, from facial creams and moisturizing lotions to hair conditioners and fluid makeups. It was in this industrial context that he began to question the fundamental assumptions of conventional emulsion manufacturing.
              </p>

              <p
                className="text-base leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "oklch(0.35 0.02 255)" }}
              >
                In 1976, against the backdrop of the global energy crisis triggered by the 1974 oil embargo, Dr. Lin presented his concept of Low Energy Emulsification (LEE) to the Society of Cosmetic Chemists in New York. The idea was deceptively simple: use energy only where needed, only when needed, and only in the amount needed. The implications, however, were profound — reducing energy consumption by 30 to 80 percent while simultaneously improving product quality and doubling manufacturing productivity.
              </p>

              <p
                className="text-base leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "oklch(0.35 0.02 255)" }}
              >
                Over the following decades, Dr. Lin refined and expanded the LEE framework, presenting his findings at major international conferences including the International Federation of Societies of Cosmetic Chemists (IFSCC) and publishing in leading industry journals. He worked as a consultant to cosmetic manufacturers across the United States, Asia, and Europe, helping factories large and small implement LEE principles and transform their operations.
              </p>

              <p
                className="text-base leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "oklch(0.35 0.02 255)" }}
              >
                His final publication represents the culmination of a lifetime of scientific inquiry — a comprehensive treatment of LEE principles, applications, and the lessons learned from decades of practical implementation. It is a document that belongs not only to the cosmetic industry, but to the broader history of applied chemical engineering.
              </p>

              <div className="pt-4">
                <Link href="/publication">
                  <span
                    className="text-sm font-medium inline-flex items-center gap-2 cursor-pointer hover:gap-3 transition-all"
                    style={{ color: "var(--color-cobalt)", fontFamily: "var(--font-body)" }}
                  >
                    Order his final publication
                    <span>→</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section
        className="py-24 md:py-32"
        style={{ background: "oklch(0.97 0.003 255)" }}
        ref={s2}
      >
        <div className="container">
          <div className="reveal mb-16">
            <p className="section-label mb-4">Career Timeline</p>
            <h2
              className="text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-display)", color: "oklch(0.13 0.01 255)" }}
            >
              A Career in <em>Milestones</em>
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-[7.5rem] top-0 bottom-0 w-px hidden md:block"
              style={{ background: "var(--border)" }}
            />

            <div className="space-y-10">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className="reveal grid grid-cols-1 md:grid-cols-[8rem_1fr] gap-4 md:gap-8 items-start"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  {/* Year */}
                  <div className="md:text-right">
                    <span
                      className="text-sm font-medium"
                      style={{ fontFamily: "var(--font-mono)", color: "var(--color-cobalt)" }}
                    >
                      {item.year}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative pl-6 md:pl-10">
                    {/* Dot */}
                    <div
                      className="absolute left-[-5px] top-[6px] w-2.5 h-2.5 rounded-full hidden md:block"
                      style={{ background: "var(--color-cobalt)", border: "2px solid white" }}
                    />
                    <h3
                      className="text-lg mb-2"
                      style={{ fontFamily: "var(--font-display)", color: "oklch(0.13 0.01 255)" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-body)", color: "oklch(0.45 0.02 255)" }}
                    >
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── AWARDS PLACEHOLDER ─── */}
      <section className="py-24 bg-white" ref={s3}>
        <div className="container">
          <div className="reveal mb-12">
            <p className="section-label mb-4">Recognition</p>
            <h2
              className="text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-display)", color: "oklch(0.13 0.01 255)" }}
            >
              Awards & <em>Honors</em>
            </h2>
          </div>

          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="p-8 rounded-sm flex flex-col items-center text-center gap-4"
                style={{ border: "1px dashed var(--border)", background: "oklch(0.98 0.002 255)" }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ background: "oklch(0.94 0.01 255)" }}
                >
                  <span style={{ color: "var(--color-cobalt)", fontFamily: "var(--font-display)", fontSize: "1.5rem", fontStyle: "italic" }}>★</span>
                </div>
                <p
                  className="text-sm"
                  style={{ fontFamily: "var(--font-body)", color: "var(--color-slate-cool)" }}
                >
                  Award / honor placeholder — archival details coming soon
                </p>
              </div>
            ))}
          </div>
          <p
            className="text-xs mt-6 text-center"
            style={{ fontFamily: "var(--font-mono)", color: "var(--color-slate-cool)" }}
          >
            Awards and honors will be populated with archival records and photos.
          </p>
        </div>
      </section>
    </div>
  );
}
