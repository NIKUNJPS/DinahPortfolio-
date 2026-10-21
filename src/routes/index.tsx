import { createFileRoute } from "@tanstack/react-router";
import InteractiveHero from "@/components/portfolio/InteractiveHero";

import { useEffect, useRef, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Database,
  Server,
  Layout,
  Wrench,
  Cpu,
  Briefcase,
  Award,
  ExternalLink,
  Send,
  MapPin,
} from "lucide-react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Reveal } from "@/components/portfolio/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dinah Khan — Java Full-Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Dinah Khan, a Java Full-Stack Developer building scalable backend systems and enterprise applications with Spring Boot, React.js, and PostgreSQL.",
      },
      { property: "og:title", content: "Dinah Khan — Java Full-Stack Developer" },
      {
        property: "og:description",
        content:
          "Scalable backend systems and enterprise full-stack applications. Java, Spring Boot, React.js, PostgreSQL.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const skillGroups = [
  { icon: Code2, title: "Languages", items: ["Java", "C++", "Python", "SQL"], accent: "#20bd83" },
  {
    icon: Cpu,
    title: "Core CS",
    items: ["DSA", "OOP", "Operating Systems", "DBMS"],
    accent: "#ed43c8",
  },
  { icon: Layout, title: "Frontend", items: ["React.js", "JavaScript", "TypeScript"], accent: "#08b7c9" },
  { icon: Server, title: "Backend", items: ["FastAPI", "Spring Boot" , "Node.js", "REST APIs"], accent: "#168cff" },
  { icon: Database, title: "Databases", items: ["PostgreSQL", "MongoDB"], accent: "#7770f8" },
  {
    icon: Cpu,
    title: "AI & ML",
    items: ["Machine Learning", "NLP", "Deep Learning", "Scikit-Learn", "TensorFlow"],
    accent: "#f4b400",
  },
  {
    icon: Database,
    title: "Data & Visualization",
    items: ["Power BI", "Pandas", "NumPy", "Matplotlib"],
    accent: "#ff6547",
  },
  { icon: Wrench, title: "Developer Tools", items: ["Git", "Docker", "Kubernetes"], accent: "#20bd83" },
];

const projects = [
  {
    title: "Cloud-Native Multi-Tenant SaaS Application",
    stack: ["Java", "Spring Boot", "React.js", "PostgreSQL"],
    description:
      "Scalable multi-tenant SaaS with secure tenant isolation and RBAC. Designed REST APIs and backend workflows for subscription-based user management.",
  },
  {
    title: "E-Commerce Web Application",
    stack: ["Java", "Spring Boot", "React.js", "PostgreSQL"],
    description:
      "Full-stack e-commerce platform with authentication, cart, and order management. Integrated REST APIs, business logic, and database operations using Spring Boot.",
  },
  {
    title: "BrailleLite — Accessibility Platform",
    stack: ["Spring Boot", "React.js", "PostgreSQL", "JWT", "Tesseract OCR"],
    description:
      "Full-stack accessibility platform converting images and PDFs into Braille via OCR. JWT-based authentication with secure user and content management APIs.",
  },
  {
    title: "RescueLink Pro — Emergency Assistance Android App",
    stack: ["Android", "Java", "GPS Location", "SMS"],
    description:
      "Android emergency response app with real-time location tracking, SOS alerts, periodic location updates, and emergency contact workflows for user safety.",
  },
];

const experience = [
  {
    role: "Software Development Intern",
    company: "Winjit Technologies, Nashik",
    period: "May 2023 – July 2023",
    desc: "Worked on enterprise software development workflows, contributed to database operations and debugging in a collaborative development environment.",
  },
  {
    role: "Frontend Development Intern",
    company: "Sumago Infotech Pvt. Ltd.",
    period: "June 2024 – August 2024",
    desc: "Developed responsive user interfaces using React.js, HTML, CSS, and JavaScript. Integrated frontend components with backend APIs to improve application functionality.",
  },
  {
    role: "Technical Intern",
    company: "Mahindra ITR Classroom",
    period: "September 2023",
    desc: "Participated in practical software development and problem-solving sessions.",
  },
];

const achievements = [
  {
    number: "01",
    title: "Research Paper Published",
    description:
      'Published the research paper “RescueLink Pro: Pioneering Android App for Intuitive Emergency Helpline Services and System” in IJNRD.',
    category: "Research & Publication",
  },
  {
    number: "02",
    title: "Winner — Sanjivani Hackathon 2024",
    description:
      "Recognized as a winner at Sanjivani Hackathon 2024 for hackathon project work.",
    category: "Hackathon & Innovation",
  },
  {
    number: "03",
    title: "Top 10 Finalist — NASA Space Apps Challenge",
    description:
      "Reached the Top 10 finalist position in the NASA Space Apps Challenge.",
    category: "Competition & Problem Solving",
  },
  {
    number: "04",
    title: "200+ Coding Problems Solved",
    description:
      "Solved over 200 problems on LeetCode, demonstrating consistent practice in data structures, algorithms, and problem-solving.",
    category: "Coding & DSA",
  },
  {
    number: "05",
    title: "Hands-on Software Development Experience",
    description:
      "Gained practical development experience through internships at Winjit Technologies and Sumago Infotech, working with software workflows, debugging, frontend development, and API integration.",
    category: "Professional Experience",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <ScrollRevealHeadline />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Resume />
        <Contact/>
      </main>
      <Footer />
    </div>
  );
}

function SectionHeader({ kicker, title }: { kicker: string; title: string }) {
  return (
    <Reveal>
      <div className="mb-12">
        <div className="text-xs uppercase tracking-[0.2em] text-primary mb-3">{kicker}</div>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
        <div className="mt-4 h-px w-16 bg-gradient-to-r from-primary to-transparent" />
      </div>
    </Reveal>
  );
}


function Hero() {
  return <InteractiveHero />;
}


function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid place-items-center w-10 h-10 rounded-md border border-border bg-card/40 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
    >
      {children}
    </a>
  );
}

const headlineWords = ["I", "build", "systems", "that", "work", "beyond", "the", "surface."];

function ScrollRevealHeadline() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;
    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        // The words stay gray until the About section reaches the top of the viewport.
        const distanceScrolledInsideSection = Math.max(0, -rect.top);
        const availableScroll = Math.max(1, section.offsetHeight - window.innerHeight);
        setProgress(Math.max(0, Math.min(1, distanceScrolledInsideSection / availableScroll)));
      });
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    updateProgress();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="about-section scroll-headline-section">
      <div
        className="scroll-headline-stage"
        onPointerMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          e.currentTarget.style.setProperty("--dot-x", `${e.clientX - rect.left}px`);
          e.currentTarget.style.setProperty("--dot-y", `${e.clientY - rect.top}px`);
        }}
      >
      <div className="scroll-headline-content">
        <p className="scroll-headline-label"></p>
        <h2 className="scroll-headline" aria-label="I build systems that work beyond the surface.">
          {headlineWords.map((word, index) => {
            // Reveal in scroll-controlled groups: first 2 words, next 3, then the final 3.
            const revealGroups = [0, 0, 1, 1, 1, 2, 2, 2];
            const groupProgress = progress * 3;
            const darkness = Math.max(0, Math.min(1, groupProgress - revealGroups[index]));
            return (
              <span
                key={`${word}-${index}`}
                className="scroll-headline-word"
                style={{ color: `color-mix(in srgb, #1c1c1c ${darkness * 100}%, #eeeeef)` }}
              >
                {word}{index < headlineWords.length - 1 ? " " : ""}
              </span>
            );
          })}
        </h2>
        <p className="scroll-headline-description">
          I design and build full-stack applications with a focus on backend systems, clean architecture, and practical engineering.
        </p>
      </div>
      </div>
    </section>
  );
}


function Skills() {
  return (
    <section id="skills" className="relative bg-white py-20 text-white md:py-28">
      <div className="mx-auto max-w-[1380px] px-6 md:px-10">
        <div className="mb-12 max-w-[1050px] text-[#1c1c1c] md:mb-14">
          <h2 className="m-0 text-[2.6rem] font-extrabold leading-[1.03] tracking-[-0.06em] sm:text-5xl md:text-6xl lg:text-7xl">
            A pragmatic, full-stack toolkit.
          </h2>
          <div className="mt-6 h-[2px] w-20 bg-[#1c1c1c]" />
        </div>

        <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-4 md:gap-5">
          {skillGroups.map((g, i) => {
            const Icon = g.icon;
            return (
              <Reveal key={g.title} delay={i * 35}>
                <article
                  className="group relative flex h-full min-h-[205px] flex-col overflow-hidden rounded-xl border bg-white p-5 text-[#1c1c1c] shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 sm:min-h-[220px] md:p-6"
                  style={{
                    borderColor: `${g.accent}66`,
                    ["--skill-accent" as string]: g.accent,
                    boxShadow: "0 1px 2px rgba(0,0,0,0.025)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = g.accent;
                    e.currentTarget.style.boxShadow = `0 0 0 1px ${g.accent}22, 0 8px 24px ${g.accent}12`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${g.accent}66`;
                    e.currentTarget.style.boxShadow = "0 1px 2px rgba(0,0,0,0.025)";
                  }}
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-md border bg-white transition-colors duration-300"
                      style={{ borderColor: `${g.accent}66`, color: g.accent }}
                    >
                      <Icon size={16} />
                    </span>
                    <h3 className="text-lg font-semibold leading-tight tracking-[-0.025em] sm:text-xl">
                      {g.title}
                    </h3>
                  </div>

                  <div
                    className="mb-4 h-px w-full transition-colors duration-300"
                    style={{ backgroundColor: `${g.accent}35` }}
                  />

                  <div className="flex flex-wrap gap-2">
                    {g.items.map((it) => (
                      <span
                        key={it}
                        className="rounded border bg-white px-3 py-1.5 text-sm font-medium leading-tight text-black"
                        style={{ borderColor: `${g.accent}55` }}
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}


function Projects() {
  return (
    <section id="projects" className="projects-transition-out relative bg-white py-20 text-white md:py-28">
      <div className="mx-auto max-w-[1380px] px-6 md:px-10">
        <div className="mb-14 max-w-[1050px] text-[#1c1c1c] md:mb-16">
          <h2 className="m-0 text-[2.6rem] font-extrabold leading-[1.03] tracking-[-0.06em] sm:text-5xl md:text-6xl lg:text-7xl">
            Selected software engineering projects.
          </h2>
          <div className="mt-6 h-[2px] w-20 bg-[#1c1c1c]" />
        </div>
        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 35}>
              <article
                className="group relative flex h-full min-h-[470px] flex-col overflow-hidden rounded-xl p-6 sm:min-h-[490px] md:min-h-[510px] md:p-7 text-white shadow-sm transition-all duration-150 ease-out hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(145deg, #0648df 0%, #0739c4 100%)",
                  backgroundImage: "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(145deg, #0648df 0%, #0739c4 100%)",
                  backgroundSize: "5px 5px, 5px 5px, auto",
                }}
              >
                <div className="mb-7 flex items-center justify-between gap-4">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/75">
                    {String(i + 1).padStart(2, "0")} / PROJECT
                  </span>
                  <a
                    href="https://github.com/Dinah-02"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title} on GitHub`}
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/35 text-white transition-colors duration-150 hover:bg-white hover:text-blue-700"
                  >
                    <ArrowUpRight size={19} />
                  </a>
                </div>
                <h3 className="mb-5 max-w-[540px] text-[1.65rem] font-medium leading-[1.08] tracking-[-0.045em] md:text-[1.8rem]">
                  {p.title}
                </h3>
                <div className="mb-5 h-px w-full bg-white/25" />
                <p className="mb-7 text-[15px] leading-[1.55] text-white/85 md:text-base">
                  {p.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-2 pb-6">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded border border-white/30 px-2.5 py-1 text-[11px] leading-tight text-white/90"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <a
                  href="https://github.com/Dinah-02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 self-start text-xs font-semibold text-white transition-opacity duration-150 hover:opacity-75"
                >
                  <Github size={14} /> View on GitHub <ArrowUpRight size={13} />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="relative bg-white py-16 text-[#1c1c1c] md:py-20">
      <div className="mx-auto max-w-[1380px] px-6 md:px-10">
        <Reveal>
          <div className="mb-10 max-w-[1050px] md:mb-12">
            <h2 className="m-0 text-[2.6rem] font-extrabold leading-[1.03] tracking-[-0.06em] text-[#1c1c1c] sm:text-5xl md:text-6xl lg:text-7xl">
              Where I've worked.
            </h2>
            <div className="mt-6 h-[2px] w-20 bg-[#1c1c1c]" />
          </div>
        </Reveal>

        <div className="relative space-y-4 border-l border-[#dededb] pl-5 sm:pl-6 md:space-y-5 md:pl-8">
          {experience.map((e, i) => (
            <Reveal key={e.role} delay={i * 140}>
              <article className="group relative rounded-xl border border-[#e5e5e2] bg-[#f4f4f2] p-5 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[#0648df] hover:shadow-[0_0_0_1px_#0648df] md:p-6">
                <span className="absolute -left-[27px] top-7 h-3 w-3 rounded-full border-2 border-white bg-[#0648df] ring-1 ring-[#0648df] md:-left-[40px]" />
                <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-[#777777]">
                  <Briefcase size={13} className="text-[#555555]" />
                  <span>{e.period}</span>
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-[#1c1c1c] md:text-xl">
                  {e.role}
                </h3>
                <div className="mb-2 mt-1 text-sm text-[#454545]">{e.company}</div>
                <p className="max-w-4xl text-sm leading-relaxed text-[#666666] md:text-base">
                  {e.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section id="achievements" className="achievements-dots relative py-16 md:py-20">
      <div className="relative z-10 mx-auto max-w-[1380px] px-6 md:px-10">
        <Reveal>
          <div className="mb-10 max-w-[1050px] md:mb-12">
            <h2 className="m-0 text-[2.6rem] font-extrabold leading-[1.03] tracking-[-0.06em] text-[#1c1c1c] sm:text-5xl md:text-6xl lg:text-7xl">
              Recognition &amp; milestones.
            </h2>
            <div className="mt-6 h-[2px] w-20 bg-[#1c1c1c]" />
          </div>
        </Reveal>
        <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-4 md:grid-cols-2">
          {achievements.map((a, i) => (
            <Reveal key={a.number} delay={i * 70}>
              <article className="achievement-card group h-full rounded-md border border-[#0648df]/45 bg-white/95 p-5 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[#0648df] hover:shadow-[0_0_0_1px_rgba(6,72,223,0.16)] md:p-5">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold tracking-[0.12em] text-[#0648df]">
                    {a.number}
                  </span>
                  <span className="h-px flex-1 bg-[#0648df]/20 transition-colors duration-200 group-hover:bg-[#0648df]/50" />
                </div>
                <h3 className="mb-2 text-lg font-bold leading-tight tracking-[-0.035em] text-[#1c1c1c] md:text-xl">
                  {a.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-[#555555]">
                  {a.description}
                </p>
                <div className="border-t border-[#0648df]/15 pt-3">
                  <span className="text-xs font-medium uppercase tracking-[0.12em] text-[#666666]">
                    {a.category}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Resume() {
  return (
    <section id="resume" className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-[#0648df] bg-card/50 p-10 text-center md:p-14">
            <div className="pointer-events-none absolute inset-0 bg-hero-glow opacity-50" />
            <div className="relative">
              <div className="mb-3 text-xs uppercase tracking-[0.2em] text-[#0648df]">

              </div>
              <h2 className="text-3xl font-bold tracking-tight text-[#1c1c1c] md:text-4xl">
                Want the full picture?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#555555] md:text-lg">
                Grab my resume for a complete overview of experience, projects, and engineering
                skills.
              </p>
              <a
                href="/Dinaah_Resume.pdf"
                download
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#0648df] px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-[#0038bd]"
              >
                <Download size={16} /> Download Resume
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}



function Contact() {
  return (
    <section id="contact" className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1380px]">
        <div className="max-w-[850px]">
          <h2 className="m-0 text-[2.6rem] font-extrabold leading-[1.03] tracking-[-0.06em] text-[#1c1c1c] sm:text-5xl md:text-6xl">
            Let's build something meaningful.
          </h2>

          <div className="mt-6 h-[2px] w-20 bg-[#1c1c1c]" />

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#626262]">
            Have a project, an opportunity, or an idea worth discussing?
            I'd love to hear from you.
          </p>

          <div className="mt-10 flex flex-col gap-5 text-base sm:flex-row sm:flex-wrap sm:gap-8">
            <a
              href="mailto:dinahkhan02@gmail.com"
              className="text-[#1c1c1c] underline decoration-[#0645e5]/50 underline-offset-4 transition-colors hover:text-[#0645e5]"
            >
              dinahkhan02@gmail.com
            </a>

            <a
              href="https://github.com/Dinah-02"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1c1c1c] underline decoration-[#0645e5]/50 underline-offset-4 transition-colors hover:text-[#0645e5]"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1c1c1c] underline decoration-[#0645e5]/50 underline-offset-4 transition-colors hover:text-[#0645e5]"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}



function Footer() {
  return (
    <footer className="mt-10 border-t border-[#0648df]/20 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-6 py-8 text-sm text-[#555555] md:flex-row">
        <div>
          © {new Date().getFullYear()} Dinah Khan.
          <span className="ml-1 text-[#1c1c1c]">
            Software Engineer Portfolio
          </span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/Dinah-02"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors duration-200 hover:text-[#0648df]"
          >
            <Github size={18} />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors duration-200 hover:text-[#0648df]"
          >
            <Linkedin size={18} />
          </a>

          <a
            href="mailto:dinahkhan02@gmail.com"
            aria-label="Email"
            className="transition-colors duration-200 hover:text-[#0648df]"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
