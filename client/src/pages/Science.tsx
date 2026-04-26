/*
 * DESIGN: Precision Science — The Science page
 * Academic-style layout with diagrams, cobalt rules, numbered sections
 */
import { useEffect, useRef } from "react";

const MOLECULE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663502700298/bg5X4pi7SvB6SpNSveBFo8/molecular_diagram_abstract-Hux9yNrRWdDv2qHL3frMeW.png";
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663502700298/bg5X4pi7SvB6SpNSveBFo8/hero_emulsion_lab-KeqhoytoZPE3TN4JK63F3q.webp";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    el.querySelectorAll(".reveal, .reveal-stagger").forEach((c) => observer.observe(c));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

const methods = [
  {
    id: "A",
    title: "Spontaneous Emulsification",
    subtitle: "Self-Emulsification",
    body: "When two immiscible liquids are brought into contact under non-equilibrium conditions, a chemical potential gradient drives the spontaneous formation of an emulsion. Rapid diffusion of surfactants or solvents across the interface causes local interfacial turbulence and the budding of fine droplets — with no mechanical agitation required.",
    applications: ["Self-nano-emulsifying drug delivery (SNEDDS)", "Essential oil dispersions", "Flavor encapsulation"],
    color: "oklch(0.38 0.13 255)",
  },
  {
    id: "B",
    title: "Phase Inversion Temperature",
    subtitle: "PIT Method",
    body: "Nonionic surfactants (such as ethoxylated compounds) change their preferred curvature with temperature. At low temperatures they favor oil-in-water (O/W) emulsions; at high temperatures, water-in-oil (W/O). By heating the system to the Phase Inversion Temperature (PIT) and then rapidly cooling it, ultra-fine droplets are trapped in a kinetically stable state.",
    applications: ["Cosmetic creams and lotions", "Pharmaceutical topical formulations", "Food emulsions"],
    color: "oklch(0.38 0.13 255)",
  },
  {
    id: "C",
    title: "Phase Inversion Composition",
    subtitle: "PIC Method",
    body: "At constant temperature, water is slowly titrated into an oil-surfactant mixture (or vice versa). As the phase ratio shifts, the preferred curvature of the surfactant film changes, inducing a phase inversion. At the inversion point, interfacial tension drops to near zero, allowing extremely fine droplets to form under gentle stirring alone.",
    applications: ["Room-temperature formulation of heat-sensitive actives", "Vitamin and antioxidant encapsulation", "Fragrance emulsions"],
    color: "oklch(0.38 0.13 255)",
  },
  {
    id: "D",
    title: "Gel Emulsification",
    subtitle: "High Internal Phase Emulsions",
    body: "In gel-emulsions, the dispersed phase volume fraction can exceed 0.74, creating a system with gel-like rheology. The immense internal friction during simple mixing effectively breaks down droplets without external high-shear devices. These systems are particularly advantageous for emulsifying highly viscous oils.",
    applications: ["Viscous oil emulsification", "Concentrated cosmetic formulas", "Industrial lubricant emulsions"],
    color: "oklch(0.38 0.13 255)",
  },
];

const advantages = [
  {
    title: "Energy Savings",
    value: "30–80%",
    body: "Reduction in total manufacturing energy consumption compared to conventional hot-process methods.",
  },
  {
    title: "Productivity Gain",
    value: "Up to 2×",
    body: "Increase in batch throughput without capital investment in new equipment, by dramatically shortening heating and cooling cycles.",
  },
  {
    title: "Droplet Quality",
    value: "Finer",
    body: "Phase inversion methods produce nanoemulsions with droplet sizes and size distributions that match or exceed high-energy methods.",
  },
  {
    title: "Ingredient Protection",
    value: "Preserved",
    body: "Room-temperature methods protect heat-sensitive vitamins, essential oils, and pharmaceutical actives from thermal degradation.",
  },
];

export default function Science() {
  const s1 = useReveal();
  const s2 = useReveal();
  const s3 = useReveal();
  const s4 = useReveal();

  return (
    <div className="min-h-screen pt-20">
      {/* ─── PAGE HEADER ─── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0" style={{ background: "oklch(0.13 0.05 255 / 0.88)" }} />
        <div className="relative container">
          <p
            className="text-xs tracking-[0.18em] uppercase mb-4"
            style={{ fontFamily: "var(--font-mono)", color: "oklch(0.72 0.12 75)" }}
          >
            The Science
          </p>
          <h1
            className="text-5xl md:text-6xl text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Low Energy
            <br />
            <em>Emulsification</em>
          </h1>
          <div className="w-12 h-0.5 mt-6" style={{ background: "oklch(0.72 0.12 75)" }} />
        </div>
      </section>

      {/* ─── WHAT IS AN EMULSION ─── */}
      <section className="py-24 bg-white" ref={s1}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 reveal">
              <p className="section-label mb-4">01 — Foundations</p>
              <h2
                className="text-4xl md:text-5xl mb-8"
                style={{ fontFamily: "var(--font-display)", color: "oklch(0.13 0.01 255)" }}
              >
                What is an <em>Emulsion?</em>
              </h2>
              <div className="space-y-5 text-base leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "oklch(0.35 0.02 255)" }}>
                <p>
                  An emulsion is a heterogeneous system consisting of at least two immiscible liquid phases — most commonly oil and water — where one phase (the dispersed phase) is distributed as fine droplets within the other (the continuous phase). Emulsions are stabilized by surface-active agents, or surfactants, which reduce the interfacial tension between the two phases and form a protective film around each droplet.
                </p>
                <p>
                  Emulsions are ubiquitous in daily life: lotions, creams, salad dressings, mayonnaise, milk, and pharmaceutical suspensions are all emulsions. The quality of an emulsion — its stability, texture, appearance, and efficacy — is fundamentally determined by the size and uniformity of its droplets.
                </p>
                <p>
                  Conventionally, emulsions are produced by applying large amounts of mechanical energy through high-shear mixers, high-pressure homogenizers, or ultrasonicators to break large droplets into smaller ones. This is energy-intensive, time-consuming, and can damage heat-sensitive ingredients. Low Energy Emulsification offers a fundamentally different approach.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 reveal" style={{ transitionDelay: "0.15s" }}>
              <div
                className="rounded-sm overflow-hidden shadow-lg"
                style={{ border: "1px solid var(--border)" }}
              >
                <img
                  src={MOLECULE_IMG}
                  alt="Surfactant molecules at oil-water interface"
                  className="w-full"
                />
                <div className="p-4 bg-[oklch(0.97_0.003_255)]">
                  <p
                    className="text-xs"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--color-slate-cool)" }}
                  >
                    Fig. 1 — Surfactant molecules (gold tails = hydrophobic, blue heads = hydrophilic) self-assembling at the oil-water interface. This thermodynamic self-organization is the basis of LEE.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LEE PRINCIPLES ─── */}
      <section
        className="py-24 md:py-32"
        style={{ background: "oklch(0.97 0.003 255)" }}
        ref={s2}
      >
        <div className="container">
          <div className="reveal mb-16">
            <p className="section-label mb-4">02 — Core Principles</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <h2
                className="text-4xl md:text-5xl"
                style={{ fontFamily: "var(--font-display)", color: "oklch(0.13 0.01 255)" }}
              >
                The Three Laws of <em>LEE</em>
              </h2>
              <div className="self-end">
                <p
                  className="text-base leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "oklch(0.45 0.02 255)" }}
                >
                  Dr. Lin distilled the philosophy of Low Energy Emulsification into three governing principles that apply to both thermal and mechanical energy in any manufacturing context.
                </p>
              </div>
            </div>
          </div>

          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                roman: "I",
                title: "Where Needed",
                body: "Apply energy only to the specific portion of the formulation that requires it. In practice, this means heating only the β phase (a small fraction of the total batch) rather than the entire contents of the compounding kettle.",
              },
              {
                roman: "II",
                title: "When Needed",
                body: "Apply energy at the precise moment in the manufacturing sequence where it has the greatest effect. Thermal energy applied at the wrong stage is wasted; applied at the inversion point, it is transformative.",
              },
              {
                roman: "III",
                title: "In the Amount Needed",
                body: "Minimize the total energy input by optimizing the ratio of heated to unheated phases. By maximizing the ratio of the cold α phase to the hot β phase, the total heat removed — and therefore the cooling time — is dramatically reduced.",
              },
            ].map((p) => (
              <div
                key={p.roman}
                className="bg-white rounded-sm p-8 shadow-sm"
                style={{ border: "1px solid var(--border)" }}
              >
                <div
                  className="text-5xl mb-5"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-cobalt)", fontStyle: "italic" }}
                >
                  {p.roman}
                </div>
                <h3
                  className="text-xl mb-3"
                  style={{ fontFamily: "var(--font-display)", color: "oklch(0.13 0.01 255)" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "oklch(0.45 0.02 255)" }}
                >
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── METHODS ─── */}
      <section className="py-24 md:py-32 bg-white" ref={s3}>
        <div className="container">
          <div className="reveal mb-16">
            <p className="section-label mb-4">03 — Methods</p>
            <h2
              className="text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-display)", color: "oklch(0.13 0.01 255)" }}
            >
              Primary LEE <em>Techniques</em>
            </h2>
          </div>

          <div className="space-y-8">
            {methods.map((method, i) => (
              <div
                key={method.id}
                className="reveal grid grid-cols-1 lg:grid-cols-12 gap-6 p-8 rounded-sm bg-white shadow-sm"
                style={{ border: "1px solid var(--border)", transitionDelay: `${i * 0.1}s` }}
              >
                <div className="lg:col-span-1 flex items-start">
                  <span
                    className="text-4xl font-bold"
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-cobalt)", fontStyle: "italic" }}
                  >
                    {method.id}
                  </span>
                </div>
                <div className="lg:col-span-7">
                  <p
                    className="text-xs tracking-[0.12em] uppercase mb-1"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--color-slate-cool)" }}
                  >
                    {method.subtitle}
                  </p>
                  <h3
                    className="text-2xl mb-4"
                    style={{ fontFamily: "var(--font-display)", color: "oklch(0.13 0.01 255)" }}
                  >
                    {method.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-body)", color: "oklch(0.35 0.02 255)" }}
                  >
                    {method.body}
                  </p>
                </div>
                <div className="lg:col-span-4">
                  <p
                    className="text-xs tracking-[0.12em] uppercase mb-3"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--color-cobalt)" }}
                  >
                    Applications
                  </p>
                  <ul className="space-y-1.5">
                    {method.applications.map((app) => (
                      <li
                        key={app}
                        className="text-sm flex items-start gap-2"
                        style={{ fontFamily: "var(--font-body)", color: "oklch(0.45 0.02 255)" }}
                      >
                        <span style={{ color: "var(--color-cobalt)" }}>—</span>
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ADVANTAGES ─── */}
      <section
        className="py-24 md:py-32"
        style={{ background: "oklch(0.97 0.003 255)" }}
        ref={s4}
      >
        <div className="container">
          <div className="reveal mb-16">
            <p className="section-label mb-4">04 — Advantages</p>
            <h2
              className="text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-display)", color: "oklch(0.13 0.01 255)" }}
            >
              Why LEE <em>Matters</em>
            </h2>
          </div>

          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((adv) => (
              <div
                key={adv.title}
                className="p-8 bg-white rounded-sm shadow-sm"
                style={{ border: "1px solid var(--border)" }}
              >
                <div
                  className="text-3xl font-bold mb-2"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-cobalt)" }}
                >
                  {adv.value}
                </div>
                <h3
                  className="text-lg mb-3"
                  style={{ fontFamily: "var(--font-display)", color: "oklch(0.13 0.01 255)" }}
                >
                  {adv.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "oklch(0.45 0.02 255)" }}
                >
                  {adv.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
