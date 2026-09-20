import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";

type WorkMode = "personal" | "perficient";

const projects = [
  { title: "Project title", description: "A short description of the problem, solution, and technologies used.", href: "https://github.com/" },
  { title: "Project title", description: "A short description of the problem, solution, and technologies used.", href: "https://github.com/" },
  { title: "Project title", description: "A short description of the problem, solution, and technologies used.", href: "https://github.com/" },
];

const experience = [
  { role: "Role / Company", dates: "Month YYYY — Month YYYY", description: "A short description of responsibilities, technologies, and outcomes." },
  { role: "Role / Company", dates: "Month YYYY — Month YYYY", description: "A short description of responsibilities, technologies, and outcomes." },
];

const certifications = [
  { name: "Certification title", issuer: "Issuing organization", date: "Expected Month YYYY", status: "Ongoing" },
  { name: "Certification title", issuer: "Issuing organization", date: "Month YYYY", status: "Completed" },
  { name: "Certification title", issuer: "Issuing organization", date: "Month YYYY", status: "Completed" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Navjyoth Pradeep — Software Engineering Portfolio" },
      { name: "description", content: "Software engineering projects, experience, and professional certifications by Navjyoth Pradeep." },
      { property: "og:title", content: "Navjyoth Pradeep — Software Engineering Portfolio" },
      { property: "og:description", content: "Software engineering projects, experience, and professional certifications." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  const [mode, setMode] = useState<WorkMode>("personal");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const p = Math.min(1, Math.max(0, window.scrollY / 180));
      setScrollProgress(p);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDocked = scrollProgress > 0.45;

  const selectMode = (nextMode: WorkMode) => {
    setMode(nextMode);
    document.querySelector("#selected-work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-paper font-body text-ink selection:bg-electric selection:text-paper">
      <header
        style={{
          top: `calc(${50 * (1 - scrollProgress)}% + ${24 * scrollProgress}px)`,
          transform: `translate(-50%, ${-50 * (1 - scrollProgress)}%)`,
        }}
        className={`fixed left-1/2 z-50 pointer-events-auto transition-all duration-300 ease-out ${
          isDocked ? "w-auto max-w-fit" : "w-[92vw] max-w-lg sm:max-w-xl"
        }`}
      >
        <nav
          aria-label="Main Navigation"
          className={`pill-nav relative overflow-hidden border border-ink/15 bg-paper/92 backdrop-blur-md transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isDocked
              ? "rounded-full px-3.5 py-2 sm:px-5 sm:py-2.5 shadow-xl flex items-center justify-between gap-3 sm:gap-6"
              : "rounded-[2rem] p-6 sm:p-8 shadow-2xl flex flex-col items-center text-center gap-5"
          }`}
        >
          {isDocked ? (
            <div key="docked" className="island-morph-in flex items-center justify-between gap-3 sm:gap-6 w-full">
              <a
                href="#top"
                className="font-display text-[11px] sm:text-xs md:text-sm uppercase tracking-wider text-ink transition-colors duration-200 hover:text-electric whitespace-nowrap"
              >
                Navjyoth Pradeep
              </a>
              <div className="flex items-center gap-2 sm:gap-3">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cv-pill-btn group inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-paper/80 px-2.5 py-1 sm:px-3 sm:py-1.5 font-mono text-[9px] sm:text-[11px] uppercase tracking-wider text-ink transition-all duration-200 hover:border-ink hover:bg-paper"
                  aria-label="Download CV (PDF)"
                >
                  <span><span className="hidden sm:inline">Download </span>CV</span>
                  <span className="text-[10px] sm:text-xs transition-transform duration-200 group-hover:translate-y-0.5" aria-hidden="true">⤓</span>
                </a>
                <a
                  href="#contact"
                  className="pill-cta group inline-flex items-center gap-1.5 rounded-full bg-ink px-3 py-1 sm:px-3.5 sm:py-1.5 font-mono text-[9px] sm:text-[11px] uppercase tracking-wider text-paper transition-all duration-200 hover:bg-electric hover:shadow-md active:scale-95 whitespace-nowrap"
                >
                  <span>Work with me</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          ) : (
            <div key="expanded" className="island-morph-in flex flex-col items-center text-center gap-4 sm:gap-5 w-full">
              <div className="flex flex-col items-center">
                <a
                  href="#top"
                  className="font-display text-2xl sm:text-3xl md:text-4xl uppercase tracking-wider text-ink transition-colors duration-200 hover:text-electric"
                >
                  Navjyoth Pradeep
                </a>
                <p className="mt-2 flex items-center justify-center gap-2 font-mono text-[10px] sm:text-xs uppercase tracking-wider text-ink/65">
                  <span className="size-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                  <span>Associate Technical Consultant</span>
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full pt-1">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cv-pill-btn group inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 bg-paper px-5 py-2.5 sm:px-6 sm:py-3 font-mono text-xs uppercase tracking-wider text-ink transition-all duration-200 hover:border-ink hover:bg-ink/5"
                  aria-label="Download CV (PDF)"
                >
                  <span className="font-medium">Download CV</span>
                  <span className="text-sm font-display transition-transform duration-200 group-hover:translate-y-0.5" aria-hidden="true">⤓</span>
                </a>
                <a
                  href="#contact"
                  className="pill-cta group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-2.5 sm:px-6 sm:py-3 font-mono text-xs uppercase tracking-wider text-paper transition-all duration-200 hover:bg-electric hover:shadow-lg active:scale-95"
                >
                  <span>Work with me</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      <section id="top" className="hero-stage relative flex min-h-[680px] border-b-4 border-ink md:h-screen md:min-h-[680px]">
        <Button
          type="button"
          variant="ghost"
          aria-pressed={mode === "personal"}
          onClick={() => selectMode("personal")}
          className={`hero-panel hero-panel-personal group h-auto whitespace-normal bg-paper text-ink hover:bg-paper hover:text-ink ${mode === "personal" ? "hero-panel-active" : "hero-panel-idle"}`}
        >
          <span className="hero-index left-5 md:left-8 flex items-center gap-1.5">
            01 / Personal
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true">↗</span>
          </span>
          <span className="relative z-10 text-left max-w-full">
            <span className="hero-kicker">Projects + Experience</span>
            <span className="hero-title">@Personal</span>
          </span>
        </Button>

        <Button
          type="button"
          variant="ghost"
          aria-pressed={mode === "perficient"}
          onClick={() => selectMode("perficient")}
          className={`hero-panel hero-panel-perficient group h-auto whitespace-normal bg-[#075056] text-paper hover:bg-[#075056] hover:text-paper ${mode === "perficient" ? "hero-panel-active" : "hero-panel-idle"}`}
        >
          <span className="hero-index right-5 text-right md:right-8 flex items-center justify-end gap-1.5">
            02 / @Perficient
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true">↗</span>
          </span>
          <span className="relative z-10 text-right max-w-full">
            <span className="hero-kicker">Certifications</span>
            <span className="hero-title">@Perficient</span>
          </span>
        </Button>
      </section>

      <section id="selected-work" className="bg-ink text-paper">
        <div className="border-b border-paper/15 px-5 py-5 md:px-12">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-5">
            <p className="font-mono text-[10px] uppercase text-paper/60">Viewing / {mode}</p>
            <div className="flex border border-paper/25" role="group" aria-label="Choose portfolio area">
              <Button type="button" variant="ghost" onClick={() => setMode("personal")} className={`mode-button h-auto rounded-none hover:bg-paper hover:text-ink ${mode === "personal" ? "mode-button-active-light" : ""}`}>Personal</Button>
              <Button type="button" variant="ghost" onClick={() => setMode("perficient")} className={`mode-button h-auto rounded-none border-l border-paper/25 hover:bg-[#075056] hover:text-paper ${mode === "perficient" ? "mode-button-active-blue" : ""}`}>@Perficient</Button>
            </div>
          </div>
        </div>

        {mode === "personal" ? <PersonalWork /> : <PerficientWork />}
      </section>

      <footer id="contact" className="bg-paper px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-5 font-mono text-[10px] uppercase text-electric">Contact me</p>
            <h2 className="font-display text-5xl uppercase leading-[0.9] sm:text-7xl lg:text-8xl">Let&apos;s<br />connect.</h2>
          </div>
          <div className="grid gap-3 font-mono text-xs uppercase md:text-right">
            <a className="contact-item" href="mailto:your.email@example.com">Email ↗</a>
            <a className="contact-item" href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a className="contact-item" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <p className="mt-5 text-[9px] text-ink/45">© 2026 Navjyoth Pradeep</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function PersonalWork() {
  return (
    <div key="personal" className="work-reveal mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
      <CollapsibleSection number="01" title="Projects">
        <div className="grid gap-px bg-paper/20 md:grid-cols-3">
          {projects.map((project, index) => (
            <a key={index} href={project.href} target="_blank" rel="noreferrer" className="project-card group bg-ink p-6 md:min-h-64">
              <span className="font-mono text-[9px] uppercase text-paper/45">0{index + 1} / GitHub ↗</span>
              <h3 className="mt-12 font-display text-2xl uppercase">{project.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-paper/65">{project.description}</p>
            </a>
          ))}
        </div>
      </CollapsibleSection>

      <div className="mt-14 md:mt-20">
        <CollapsibleSection number="02" title="Experience">
          <div className="border-t border-paper/20">
            {experience.map((item, index) => (
              <article key={index} className="experience-row grid gap-3 border-b border-paper/20 py-8 transition-colors duration-300 hover:bg-paper/5 md:grid-cols-[1fr_0.6fr_1.5fr] md:gap-10">
                <h3 className="font-display text-xl uppercase transition-transform duration-300 md:group-hover:translate-x-1">{item.role}</h3>
                <p className="font-mono text-[10px] uppercase text-paper/55">{item.dates}</p>
                <p className="text-sm leading-relaxed text-paper/70">{item.description}</p>
              </article>
            ))}
          </div>
        </CollapsibleSection>
      </div>
    </div>
  );
}

function PerficientWork() {
  return (
    <div key="perficient" className="work-reveal mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
      <CollapsibleSection number="01" title="Certifications">
        <div className="overflow-x-auto border-t border-paper/20">
          <table className="w-full min-w-[660px] border-collapse text-left">
            <thead className="font-mono text-[9px] uppercase text-paper/45">
              <tr className="border-b border-paper/20"><th className="py-4 pr-6 font-normal">Certification</th><th className="py-4 pr-6 font-normal">Issuer</th><th className="py-4 pr-6 font-normal">Date</th><th className="py-4 font-normal">Status</th></tr>
            </thead>
            <tbody>
              {certifications.map((item, index) => (
                <tr key={index} className="cert-row border-b border-paper/20 transition-colors duration-300 hover:bg-paper/5">
                  <td className="py-6 pr-6 font-display uppercase">{item.name}</td>
                  <td className="py-6 pr-6 text-sm text-paper/70">{item.issuer}</td>
                  <td className="py-6 pr-6 font-mono text-[10px] uppercase text-paper/55">{item.date}</td>
                  <td className="py-6"><span className={`status ${item.status === "Completed" ? "status-complete" : ""}`}>{item.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CollapsibleSection>
      <section className="mt-14 border-t border-paper/20 pt-8 md:mt-20">
        <p className="font-mono text-[10px] uppercase text-paper/45">More Perficient sections / To be added</p>
      </section>
    </div>
  );
}

function CollapsibleSection({ number, title, children, defaultOpen = false }: { number: string; title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const baseId = title.toLowerCase();
  const panelId = `${baseId}-panel`;

  return (
    <section aria-labelledby={`${baseId}-title`}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((prev) => !prev)}
        className="collapsible-header group flex w-full cursor-pointer items-center justify-between gap-6 border-b border-paper/25 pb-6 text-left"
      >
        <span className="flex items-baseline gap-5 md:gap-8">
          <span className="font-mono text-[10px] text-electric transition-all duration-300 group-hover:-translate-y-0.5">{number}</span>
          <h2 id={`${baseId}-title`} className="font-display text-4xl uppercase transition-all duration-300 group-hover:translate-x-2 group-hover:text-electric sm:text-6xl">
            {title}
          </h2>
        </span>
        <span className="flex shrink-0 items-center gap-3">
          <span className="hidden font-mono text-[10px] uppercase tracking-wider text-paper/50 transition-colors duration-300 group-hover:text-paper sm:inline">
            {open ? "Collapse" : "Expand"}
          </span>
          <span className={`collapsible-icon grid size-9 shrink-0 place-items-center border border-paper/30 font-display text-lg transition-all duration-300 group-hover:border-electric group-hover:bg-electric group-hover:text-paper ${open ? "collapsible-icon-open" : ""}`} aria-hidden="true">
            +
          </span>
        </span>
      </button>
      <div id={panelId} role="region" aria-labelledby={`${baseId}-title`} className={`collapsible-panel ${open ? "collapsible-panel-open" : ""}`}>
        <div className="overflow-hidden">
          <div className="pt-10">{children}</div>
        </div>
      </div>
    </section>
  );
}
