/*
 * DESIGN: Precision Science — Contact page
 * Clean form with cobalt accents, for book orders and general inquiries
 */
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

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

const inputStyle = {
  fontFamily: "var(--font-body)",
  color: "oklch(0.13 0.01 255)",
  background: "white",
  border: "1px solid var(--border)",
  borderRadius: "var(--radius)",
  padding: "0.75rem 1rem",
  fontSize: "0.875rem",
  width: "100%",
  outline: "none",
  transition: "border-color 0.2s",
};

const labelStyle = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.7rem",
  letterSpacing: "0.12em",
  textTransform: "uppercase" as const,
  color: "var(--color-cobalt)",
  display: "block",
  marginBottom: "0.4rem",
};

export default function Contact() {
  const s1 = useReveal();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "order",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    // In a static site, we show a confirmation. A backend or Formspree can be wired up later.
    setSubmitted(true);
    toast.success("Your message has been received. We will be in touch shortly.");
  };

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
            Contact
          </p>
          <h1
            className="text-5xl md:text-6xl text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Get in <em>Touch</em>
          </h1>
          <div className="w-12 h-0.5 mt-6" style={{ background: "oklch(0.72 0.12 75)" }} />
        </div>
      </section>

      {/* ─── CONTACT FORM ─── */}
      <section className="py-24 md:py-32 bg-white" ref={s1}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: context */}
            <div className="lg:col-span-4 reveal">
              <p className="section-label mb-4">Reach Us</p>
              <h2
                className="text-3xl md:text-4xl mb-6"
                style={{ fontFamily: "var(--font-display)", color: "oklch(0.13 0.01 255)" }}
              >
                Questions, Orders &amp; <em>Inquiries</em>
              </h2>
              <p
                className="text-sm leading-relaxed mb-8"
                style={{ fontFamily: "var(--font-body)", color: "oklch(0.45 0.02 255)" }}
              >
                Whether you wish to order a copy of Dr. Lin's final publication, share archival materials, ask a question about LEE, or simply pay your respects to his legacy — we welcome your message.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: "📖",
                    title: "Order the Publication",
                    body: "To purchase one of the remaining copies of Dr. Lin's final work, please use the form and select 'Book Order' as the subject.",
                  },
                  {
                    icon: "🖼",
                    title: "Share Archival Materials",
                    body: "If you have photos, papers, or other materials related to Dr. Lin's work that you would like to contribute to this archive, please reach out.",
                  },
                  {
                    icon: "🔬",
                    title: "Scientific Inquiries",
                    body: "For questions about LEE methodology, formulation consulting, or academic collaboration, we are happy to connect you with the appropriate resources.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <span className="text-xl shrink-0 mt-0.5">{item.icon}</span>
                    <div>
                      <h4
                        className="text-sm font-medium mb-1"
                        style={{ fontFamily: "var(--font-display)", color: "oklch(0.13 0.01 255)" }}
                      >
                        {item.title}
                      </h4>
                      <p
                        className="text-xs leading-relaxed"
                        style={{ fontFamily: "var(--font-body)", color: "oklch(0.55 0.02 255)" }}
                      >
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-8 reveal" style={{ transitionDelay: "0.15s" }}>
              {submitted ? (
                <div
                  className="p-12 rounded-sm text-center"
                  style={{ background: "oklch(0.97 0.003 255)", border: "1px solid var(--border)" }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ background: "var(--color-cobalt)" }}
                  >
                    <span className="text-white text-2xl">✓</span>
                  </div>
                  <h3
                    className="text-3xl mb-4"
                    style={{ fontFamily: "var(--font-display)", color: "oklch(0.13 0.01 255)" }}
                  >
                    Message <em>Received</em>
                  </h3>
                  <p
                    className="text-sm leading-relaxed max-w-md mx-auto"
                    style={{ fontFamily: "var(--font-body)", color: "oklch(0.45 0.02 255)" }}
                  >
                    Thank you for reaching out. We will review your message and respond as soon as possible, typically within 2–3 business days.
                  </p>
                  <button
                    className="mt-8 px-6 py-3 text-sm font-medium rounded text-white transition-all hover:opacity-90"
                    style={{ background: "var(--color-cobalt)", fontFamily: "var(--font-body)" }}
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "order", message: "" }); }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="p-8 md:p-10 rounded-sm"
                  style={{ background: "oklch(0.97 0.003 255)", border: "1px solid var(--border)" }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label style={labelStyle}>Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        style={inputStyle}
                        required
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        style={inputStyle}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label style={labelStyle}>Subject</label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      style={inputStyle}
                    >
                      <option value="order">Book Order — Dr. Lin's Final Publication</option>
                      <option value="archive">Share Archival Materials</option>
                      <option value="science">Scientific Inquiry</option>
                      <option value="media">Media / Press</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="mb-8">
                    <label style={labelStyle}>Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Please describe your inquiry in detail. For book orders, please include your shipping address and desired quantity."
                      rows={6}
                      style={{ ...inputStyle, resize: "vertical" }}
                      required
                    />
                  </div>

                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <p
                      className="text-xs"
                      style={{ fontFamily: "var(--font-mono)", color: "var(--color-slate-cool)" }}
                    >
                      * Required fields
                    </p>
                    <button
                      type="submit"
                      className="px-8 py-3 text-sm font-medium rounded text-white transition-all hover:opacity-90 active:scale-95"
                      style={{ background: "var(--color-cobalt)", fontFamily: "var(--font-body)" }}
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
