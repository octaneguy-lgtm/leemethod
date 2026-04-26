/*
 * DESIGN: Precision Science — About Dr. Lin page
 * Left-anchored layout, cobalt rule, generous whitespace, archival photo placeholders
 */
import { useEffect, useRef } from "react";
import { Link } from "wouter";

const PORTRAIT_IMG = "/manus-storage/dr_lin_portrait_ab57ba64.jpeg";
const AWARDS_PHOTO = "/manus-storage/dr_lin_awards_photo_bab5dcf4.jpeg";

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
    year: "1932",
    title: "Born in Pingtong, Taiwan",
    body: "Tong Joe Lin was born on October 19, 1932 in Pingtong, Taiwan. He attended Taichung Technical High School before emigrating to the United States to pursue higher education in chemical engineering.",
  },
  {
    year: "1957–1963",
    title: "Education: UC Berkeley, U. Washington, Wayne State",
    body: "Earned his B.S. in Chemical Engineering from the University of California, Berkeley (1957), his M.S. from the University of Washington (1959), and his Ph.D. from Wayne State University, Detroit (1963). His doctoral dissertation, 'Gas Bubble Entrainment by Plunging Laminar Liquid Jets,' was advised by Prof. H. G. Donnelly and approved August 23, 1963.",
  },
  {
    year: "1959–1963",
    title: "Early Career: Cosmetic Laboratories & Wayne State",
    body: "Before completing his doctorate, Dr. Lin worked as an Engineer at Cosmetic Laboratories, Inc. in Detroit (1959–1961) — where he first encountered M. G. de Navarre — and then as an Instructor in the Department of Chemical Engineering at Wayne State University (1961–1963).",
  },
  {
    year: "1962–1963",
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
    title: "Maison G. de Navarre Medal Award",
    body: "Received the Society of Cosmetic Chemists' highest honor — the Maison G. de Navarre Medal Award — in recognition of outstanding technical contributions to the cosmetic industry. The award is named after the very man under whom Dr. Lin published his first scientific paper, making the honor a profound full-circle recognition of a lifetime of work.",
  },
  {
    year: "2001",
    title: "'Beyond Energy Conservation'",
    body: "Published 'Low-Energy Emulsification: Beyond Energy Conservation' in Cosmetics & Toiletries magazine, demonstrating that LEE also dramatically improves manufacturing productivity and product quality.",
  },
  {
    year: "2018",
    title: "IPCE 2018 Keynote Presentation",
    body: "Delivered one of his final public lectures at IPCE 2018, presenting 'Low Energy Emulsification — The Z-Point Concept.' The talk synthesized a lifetime of LEE research into a unified philosophy of 'Less Is More,' drawing on Confucian and Taoist philosophy alongside rigorous chemical engineering principles.",
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

      {/* ─── AWARDS ─── */}
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

          {/* Awards photo */}
          <div className="reveal mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7">
                <div
                  className="rounded-sm overflow-hidden shadow-lg"
                  style={{ border: "1px solid var(--border)" }}
                >
                  <img
                    src={AWARDS_PHOTO}
                    alt="Dr. T. Joseph Lin standing in front of his LEE VIII research poster with two framed awards on the wall"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col justify-center gap-5">
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "oklch(0.35 0.02 255)" }}
                >
                  Dr. Lin at home in Pacific Palisades, CA, standing in front of his research poster <em>"Low-Energy Emulsification (LEE) VIII: Reducing Carbon Footprint &amp; Improving Product Quality."</em> Visible on the wall behind him are two of his framed awards — including an <strong>IFSCC Honorary Mention</strong> for his paper on Low-Energy Emulsification.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "oklch(0.45 0.02 255)" }}
                >
                  Sadly, most of his physical awards and plaques were lost in a fire. This photograph is one of the few surviving records of his recognition wall.
                </p>
                <div
                  className="p-4 rounded-sm"
                  style={{ background: "oklch(0.97 0.003 255)", border: "1px solid var(--border)" }}
                >
                  <p
                    className="text-xs"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--color-slate-cool)" }}
                  >
                    Photo taken at his Pacific Palisades home before the 2024 fire.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Award — de Navarre Medal */}
          <div
            className="reveal mb-10 p-8 md:p-12 rounded-sm"
            style={{ background: "oklch(0.13 0.05 255)", border: "1px solid oklch(0.25 0.05 255)" }}
          >
            <div className="flex flex-col md:flex-row md:items-start gap-8">
              <div className="shrink-0 flex flex-col items-center gap-2">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{ background: "oklch(0.72 0.12 75 / 0.15)", border: "2px solid oklch(0.72 0.12 75 / 0.5)" }}
                >
                  <span style={{ color: "oklch(0.72 0.12 75)", fontSize: "2rem" }}>🏅</span>
                </div>
                <span
                  className="text-xs tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-mono)", color: "oklch(0.72 0.12 75)" }}
                >
                  2001
                </span>
              </div>
              <div>
                <p
                  className="text-xs tracking-[0.15em] uppercase mb-2"
                  style={{ fontFamily: "var(--font-mono)", color: "oklch(0.72 0.12 75)" }}
                >
                  Society of Cosmetic Chemists — Highest Honor
                </p>
                <h3
                  className="text-2xl md:text-3xl text-white mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Maison G. de Navarre Medal Award
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ fontFamily: "var(--font-body)", color: "oklch(0.75 0.01 255)" }}
                >
                  The Society of Cosmetic Chemists' most prestigious recognition, awarded for <em style={{ color: "white" }}>"accomplishments in activity supporting the best interests of the cosmetic industry through technical contributions — patents, publications, and technical presentations."</em>
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "oklch(0.75 0.01 255)" }}
                >
                  The award carries special significance for Dr. Lin: it is named after Maison G. de Navarre — the founder of the SCC and the editor under whom Dr. Lin published his very first scientific paper in 1962. Receiving the Society's highest honor in de Navarre's name represents a full-circle recognition of a career that began in de Navarre's own laboratory.
                </p>
                <a
                  href="https://www.scconline.org/About/Awards-and-Scholarships/Maison-G-deNavarre-Medal-Award"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-5 text-xs"
                  style={{ fontFamily: "var(--font-mono)", color: "oklch(0.72 0.12 75)" }}
                >
                  View official SCC award page →
                </a>
              </div>
            </div>
          </div>

          {/* Other honors */}
          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                year: "1976–2018",
                org: "Society of Cosmetic Chemists (SCC)",
                title: "Featured Speaker & Contributor",
                body: "Presented at SCC annual meetings and symposia for over four decades, including the landmark 1976 introduction of LEE and numerous subsequent presentations on emulsion science.",
              },
              {
                year: "1976–2018",
                org: "IFSCC — International Federation of Societies of Cosmetic Chemists",
                title: "International Conference Presenter",
                body: "Presented LEE research at multiple IFSCC World Congresses, bringing Low Energy Emulsification to an international audience of cosmetic scientists and manufacturers.",
              },
              {
                year: "2005–2009",
                org: "Cosmetics & Toiletries China (C&T China)",
                title: "Regular Contributing Columnist",
                body: "Authored a series of columns for C&T China on cosmetic science, value, and innovation — writing in Chinese for the rapidly growing Chinese cosmetics industry.",
              },
              {
                year: "1959–1974",
                org: "American Institute of Chemical Engineers · American Chemical Society · Sigma Xi · Phi Lambda Upsilon",
                title: "Professional Memberships",
                body: "Member of the leading professional and honor societies in chemical engineering and chemistry throughout his academic and early industrial career.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-sm bg-white"
                style={{ border: "1px solid var(--border)" }}
              >
                <p
                  className="text-xs tracking-widest uppercase mb-1"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--color-cobalt)" }}
                >
                  {item.year} · {item.org}
                </p>
                <h4
                  className="text-lg mb-2"
                  style={{ fontFamily: "var(--font-display)", color: "oklch(0.13 0.01 255)" }}
                >
                  {item.title}
                </h4>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "oklch(0.45 0.02 255)" }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
