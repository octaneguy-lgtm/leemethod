/*
 * DESIGN: Precision Science — Papers & Publications page
 * Full-screen archival paper viewer with page navigation, zoom, and metadata
 */
import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, X, BookOpen } from "lucide-react";

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

// All 40 uploaded pages in order
const PAGES = [
  "/manus-storage/IMG_1165_388eaeeb.jpeg",
  "/manus-storage/IMG_3828_db3e8d69.jpeg",
  "/manus-storage/IMG_3830_4f5483be.jpeg",
  "/manus-storage/IMG_3831_3fdc67fb.jpeg",
  "/manus-storage/IMG_3832_55f05d44.jpeg",
  "/manus-storage/IMG_3833_07af7768.jpeg",
  "/manus-storage/IMG_3834_7909a8ba.jpeg",
  "/manus-storage/IMG_3835_77250025.jpeg",
  "/manus-storage/IMG_3836_b8190c7d.jpeg",
  "/manus-storage/IMG_3837_1456e0b2.jpeg",
  "/manus-storage/IMG_3838_430780be.jpeg",
  "/manus-storage/IMG_3839_62c5834c.jpeg",
  "/manus-storage/IMG_3840_bae32be8.jpeg",
  "/manus-storage/IMG_3841_108bcfae.jpeg",
  "/manus-storage/IMG_3842_41e91d70.jpeg",
  "/manus-storage/IMG_3843_7fd65b84.jpeg",
  "/manus-storage/IMG_3844_571fcad4.jpeg",
  "/manus-storage/IMG_3845_98948ce1.jpeg",
  "/manus-storage/IMG_3846_4aaa0bcf.jpeg",
  "/manus-storage/IMG_3847_041892de.jpeg",
  "/manus-storage/IMG_3848_86439a1c.jpeg",
  "/manus-storage/IMG_3849_8fec315e.jpeg",
  "/manus-storage/IMG_3850_4c3e4864.jpeg",
  "/manus-storage/IMG_3850_01_862c3f01.jpeg",
  "/manus-storage/IMG_3851_3b2db7f9.jpeg",
  "/manus-storage/IMG_3852_1be3d7e0.jpeg",
  "/manus-storage/IMG_3853_264919fe.jpeg",
  "/manus-storage/IMG_3854_4bbdde23.jpeg",
  "/manus-storage/IMG_3854_01_c8974033.jpeg",
  "/manus-storage/IMG_3855_a6ecda87.jpeg",
  "/manus-storage/IMG_3856_6e727fce.jpeg",
  "/manus-storage/IMG_3857_778787f1.jpeg",
  "/manus-storage/IMG_3858_6b3ff96f.jpeg",
  "/manus-storage/IMG_3858_01_f2e56df0.jpeg",
  "/manus-storage/IMG_3860_60abf2d1.jpeg",
  "/manus-storage/IMG_3861_554f2488.jpeg",
  "/manus-storage/IMG_3862_af94bbf6.jpeg",
  "/manus-storage/IMG_3862_01_0c0633f4.jpeg",
  "/manus-storage/IMG_3863_fa70af44.jpeg",
  "/manus-storage/IMG_3863_01_491b33ad.jpeg",
];

function PaperViewer({ onClose }: { onClose: () => void }) {
  const [page, setPage] = useState(0);
  const [zoom, setZoom] = useState(1);
  const total = PAGES.length;

  const prev = useCallback(() => setPage((p) => Math.max(0, p - 1)), []);
  const next = useCallback(() => setPage((p) => Math.min(total - 1, p + 1)), [total]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next, onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col"
      style={{ background: "oklch(0.08 0.03 255)" }}
    >
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-4 py-3 shrink-0"
        style={{ borderBottom: "1px solid oklch(1 0 0 / 0.1)" }}
      >
        <div>
          <p
            className="text-white text-sm font-medium"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Emulsions — Chapter for Maison G. de Navarre
          </p>
          <p
            className="text-white/50 text-xs"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            T. Joseph Lin, Ph.D. &nbsp;·&nbsp; Page {page + 1} of {total}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="p-2 rounded text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            onClick={() => setZoom((z) => Math.max(0.5, z - 0.25))}
            title="Zoom out"
          >
            <ZoomOut size={16} />
          </button>
          <span
            className="text-white/50 text-xs w-10 text-center"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {Math.round(zoom * 100)}%
          </span>
          <button
            className="p-2 rounded text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            onClick={() => setZoom((z) => Math.min(3, z + 0.25))}
            title="Zoom in"
          >
            <ZoomIn size={16} />
          </button>
          <div className="w-px h-5 mx-1" style={{ background: "oklch(1 0 0 / 0.15)" }} />
          <button
            className="p-2 rounded text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            onClick={onClose}
            title="Close viewer"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Page image */}
      <div className="flex-1 overflow-auto flex items-start justify-center p-4 md:p-8">
        <img
          key={page}
          src={PAGES[page]}
          alt={`Page ${page + 1}`}
          style={{
            maxWidth: `${zoom * 100}%`,
            width: zoom <= 1 ? "auto" : undefined,
            maxHeight: zoom <= 1 ? "calc(100vh - 140px)" : undefined,
            boxShadow: "0 8px 40px oklch(0 0 0 / 0.6)",
            borderRadius: "2px",
            transition: "max-width 0.2s",
          }}
        />
      </div>

      {/* Bottom nav */}
      <div
        className="flex items-center justify-between px-4 py-3 shrink-0"
        style={{ borderTop: "1px solid oklch(1 0 0 / 0.1)" }}
      >
        {/* Thumbnail strip */}
        <div className="flex gap-1 overflow-x-auto max-w-[60vw] pb-1">
          {PAGES.map((src, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className="shrink-0 rounded overflow-hidden transition-all"
              style={{
                width: 32,
                height: 42,
                outline: i === page ? "2px solid var(--color-cobalt)" : "2px solid transparent",
                opacity: i === page ? 1 : 0.45,
              }}
            >
              <img src={src} alt={`Page ${i + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        {/* Prev / Next */}
        <div className="flex items-center gap-3 shrink-0 ml-4">
          <button
            className="flex items-center gap-1 px-4 py-2 rounded text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors disabled:opacity-30"
            onClick={prev}
            disabled={page === 0}
            style={{ fontFamily: "var(--font-body)" }}
          >
            <ChevronLeft size={16} /> Prev
          </button>
          <span
            className="text-white/30 text-xs"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {page + 1} / {total}
          </span>
          <button
            className="flex items-center gap-1 px-4 py-2 rounded text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors disabled:opacity-30"
            onClick={next}
            disabled={page === total - 1}
            style={{ fontFamily: "var(--font-body)" }}
          >
            Next <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Papers() {
  const [viewerOpen, setViewerOpen] = useState(false);
  const [startPage, setStartPage] = useState(0);
  const s1 = useReveal();
  const s2 = useReveal();

  const openViewer = (page = 0) => {
    setStartPage(page);
    setViewerOpen(true);
  };

  return (
    <div className="min-h-screen pt-20">
      {viewerOpen && <PaperViewer onClose={() => setViewerOpen(false)} />}

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
            Papers & Publications
          </p>
          <h1
            className="text-5xl md:text-6xl text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Archival <em>Works</em>
          </h1>
          <div className="w-12 h-0.5 mt-6" style={{ background: "oklch(0.72 0.12 75)" }} />
        </div>
      </section>

      {/* ─── FIRST PAPER ─── */}
      <section className="py-24 md:py-32 bg-white" ref={s1}>
        <div className="container">
          <div className="reveal mb-4">
            <p className="section-label mb-4">01 — First Published Work</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: metadata */}
            <div className="lg:col-span-5 reveal">
              {/* Cover preview — first page */}
              <div
                className="relative rounded-sm overflow-hidden shadow-xl mb-6 cursor-pointer group"
                style={{ border: "1px solid var(--border)" }}
                onClick={() => openViewer(0)}
              >
                <img
                  src={PAGES[0]}
                  alt="First page of Dr. Lin's paper for Maison de Navarre"
                  className="w-full object-cover"
                  style={{ maxHeight: 420, objectPosition: "top" }}
                />
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: "oklch(0.13 0.05 255 / 0.7)" }}
                >
                  <div className="flex flex-col items-center gap-2 text-white">
                    <BookOpen size={32} />
                    <span className="text-sm" style={{ fontFamily: "var(--font-body)" }}>
                      Open Reader
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="p-5 rounded-sm"
                style={{ background: "oklch(0.97 0.003 255)", border: "1px solid var(--border)" }}
              >
                <dl className="space-y-3">
                  {[
                    { label: "Title", value: "Emulsions" },
                    { label: "Published In", value: "Chemistry and Manufacture of Cosmetics (de Navarre, ed.)" },
                    { label: "Author", value: "T. Joseph Lin, Ph.D." },
                    { label: "Affiliation", value: "Max Factor & Co., Hollywood, CA" },
                    { label: "Pages", value: `${PAGES.length} scanned pages` },
                    { label: "Significance", value: "Dr. Lin's first published technical paper" },
                  ].map((item) => (
                    <div key={item.label} className="grid grid-cols-[7rem_1fr] gap-2">
                      <dt
                        className="text-xs"
                        style={{ fontFamily: "var(--font-mono)", color: "var(--color-cobalt)" }}
                      >
                        {item.label}
                      </dt>
                      <dd
                        className="text-xs leading-relaxed"
                        style={{ fontFamily: "var(--font-body)", color: "oklch(0.35 0.02 255)" }}
                      >
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            {/* Right: description + page grid */}
            <div className="lg:col-span-7 reveal" style={{ transitionDelay: "0.12s" }}>
              <h2
                className="text-4xl md:text-5xl mb-6"
                style={{ fontFamily: "var(--font-display)", color: "oklch(0.13 0.01 255)" }}
              >
                Written for
                <br />
                <em>Maison G. de Navarre</em>
              </h2>

              <div className="cobalt-rule mb-6">
                <p
                  className="text-base md:text-lg leading-relaxed italic"
                  style={{ fontFamily: "var(--font-display)", color: "oklch(0.35 0.02 255)" }}
                >
                  Maison G. de Navarre was the founder of the Society of Cosmetic Chemists (SCC) in 1945 and the author of the definitive reference work in the field — <em>The Chemistry and Manufacture of Cosmetics</em>. Being invited to contribute a chapter to this landmark text was among the highest honors a cosmetic chemist could receive.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <p
                  className="text-base leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "oklch(0.35 0.02 255)" }}
                >
                  This paper represents Dr. Lin's first published technical work — a comprehensive chapter on emulsions contributed to de Navarre's authoritative multi-volume reference series. Writing for de Navarre at this stage of his career was a mark of exceptional scientific standing and a formative moment that would shape the trajectory of his research for decades to come.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "oklch(0.35 0.02 255)" }}
                >
                  The paper covers the fundamental science of emulsions — their composition, stability, and the role of surfactants — establishing the theoretical foundation upon which Dr. Lin would later build his landmark work on Low Energy Emulsification.
                </p>
              </div>

              {/* The story of the fire and the France copy */}
              <div
                className="mb-8 p-6 rounded-sm"
                style={{ background: "oklch(0.97 0.003 255)", border: "1px solid var(--border)", borderLeft: "3px solid var(--color-cobalt)" }}
              >
                <p
                  className="text-xs tracking-[0.12em] uppercase mb-3"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--color-cobalt)" }}
                >
                  A Note on This Copy
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "oklch(0.35 0.02 255)" }}
                >
                  Dr. Lin's personal copy of this book — one of his most prized possessions — was among the irreplaceable items lost when his home burned. His son photographed every page of this copy approximately six months before the fire, not knowing how precious those photographs would become. He later tracked down a surviving copy of the book in France and had it reproduced as a gift to his father. The scanned pages you see here are from those photographs — the only surviving record of that lost copy, and a testament to the lengths a family will go to preserve a legacy.
                </p>
              </div>

              <button
                className="flex items-center gap-2 px-6 py-3 text-sm font-medium rounded text-white transition-all hover:opacity-90 active:scale-95"
                style={{ background: "var(--color-cobalt)", fontFamily: "var(--font-body)" }}
                onClick={() => openViewer(0)}
              >
                <BookOpen size={16} />
                Read the Full Paper
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PAGE THUMBNAIL GRID ─── */}
      <section
        className="py-24"
        style={{ background: "oklch(0.97 0.003 255)" }}
        ref={s2}
      >
        <div className="container">
          <div className="reveal mb-10">
            <p className="section-label mb-3">All Pages</p>
            <h2
              className="text-3xl"
              style={{ fontFamily: "var(--font-display)", color: "oklch(0.13 0.01 255)" }}
            >
              Browse the <em>Manuscript</em>
            </h2>
            <p
              className="text-sm mt-2"
              style={{ fontFamily: "var(--font-body)", color: "var(--color-slate-cool)" }}
            >
              Click any page to open the full-screen reader.
            </p>
          </div>

          <div className="reveal-stagger grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2">
            {PAGES.map((src, i) => (
              <button
                key={i}
                className="group relative rounded-sm overflow-hidden shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
                style={{ border: "1px solid var(--border)", aspectRatio: "3/4" }}
                onClick={() => openViewer(i)}
                title={`Open page ${i + 1}`}
              >
                <img
                  src={src}
                  alt={`Page ${i + 1}`}
                  className="w-full h-full object-cover object-top"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                  style={{ background: "var(--color-cobalt)", opacity: 0 }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 py-0.5 text-center opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: "var(--color-cobalt)" }}
                >
                  <span
                    className="text-white text-[10px]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {i + 1}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
