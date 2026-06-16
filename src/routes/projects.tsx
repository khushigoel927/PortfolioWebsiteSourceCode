import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "../components/layout/SiteLayout";
import byow1 from "../assets/projects/byow-1.png.asset.json";
import byow2 from "../assets/projects/byow-2.png.asset.json";
import byow3 from "../assets/projects/byow-3.png.asset.json";
import byow4 from "../assets/projects/byow-4.png.asset.json";
import kalshi1 from "../assets/projects/kalshi-1.png.asset.json";
import kalshi2 from "../assets/projects/kalshi-2.png.asset.json";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Khushi Goel" },
      {
        name: "description",
        content:
          "A collection of software and engineering projects by Khushi Goel — from trading bots and query engines to CPUs, games, and language tools.",
      },
    ],
  }),
  component: ProjectsPage,
});

type Project = {
  title: string;
  year: string;
  blurb: string;
  detail: string;
  stack: string[];
  images?: { src: string; caption: string }[];
};

const projects: Project[] = [
  {
    title: "Kalshi Trading Bot",
    year: "2026",
    blurb: "A bot that trades on live event markets, on its own.",
    detail:
      "An automated trading system that plugs into Kalshi's live market feed, watches multiple events at once, and places trades based on clear rules I set. The focus was reliability and keeping risk in check — so it reacts quickly to price changes without ever putting too much on a single market.",
    stack: ["Java", "REST API", "Real-time data"],
    images: [
      { src: kalshi1.url, caption: "Demo mode — live bid/ask stream across baseball markets." },
      { src: kalshi2.url, caption: "Production mode running against the live Kalshi feed." },
    ],
  },
  {
    title: "SQL Engine in Java",
    year: "2026",
    blurb: "A tiny SQL engine I built from scratch.",
    detail:
      "A Java program that understands SQL — the language used to talk to databases. It can create tables, add data, search through them, delete rows, and combine information from multiple tables. I wrote the parser that reads the queries and the engine that runs them, all from the ground up.",
    stack: ["Java", "SQL", "Parsers"],
  },
  {
    title: "32-Register RISC-V CPU Emulator",
    year: "2025",
    blurb: "A working computer processor, built piece by piece.",
    detail:
      "A simulated CPU based on the RISC-V instruction set, built in Logisim by wiring together the same kinds of components a real chip uses. It runs actual assembly programs, and I debugged it by tracing signals through the circuit just like an engineer would on real hardware.",
    stack: ["Logisim", "Computer Architecture", "RISC-V Assembly"],
  },
  {
    title: "Build Your Own World",
    year: "2025",
    blurb: "A tile-based exploration game with its own engine.",
    detail:
      "A 2D game where every world is generated randomly — rooms, hallways, and features connect differently each time you play. You can save your progress and pick up later. I also added a line-of-sight feature so you only see what your character can actually see, which makes exploring feel a lot more immersive.",
    stack: ["Java", "StdDraw", "Procedural Generation"],
  },
  {
    title: "NGordNet",
    year: "2025",
    blurb: "Exploring how words have been used over time.",
    detail:
      "A tool that combines WordNet (a giant map of how English words relate to each other) with Google's NGram data (which tracks how often words appear in books over the years). You can pick a word and see how its usage — and the usage of related words — has changed across decades.",
    stack: ["Java", "Graphs", "Data Visualization"],
  },
  {
    title: "Python Interpreter for Scheme",
    year: "2024",
    blurb: "A Python program that can read and run a different language.",
    detail:
      "An interpreter that takes code written in Scheme — an older programming language often used to teach computer science — and runs it inside Python. It handles math, lists, recursion, conditionals, and lambda functions, basically translating one language into another on the fly.",
    stack: ["Python", "Scheme", "Interpreters"],
  },
];

function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <article
      tabIndex={0}
      className="group grid cursor-default grid-cols-[auto_1fr] gap-6 border-t border-white/10 py-8 outline-none first:border-t-0 focus-visible:ring-2 focus-visible:ring-primary sm:grid-cols-[4rem_1fr] sm:gap-10"
    >
      <p className="font-serif text-2xl text-muted-foreground transition-colors group-hover:text-primary group-focus-within:text-primary sm:text-3xl">
        {String(index + 1).padStart(2, "0")}
      </p>
      <div>
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <h2 className="font-serif text-3xl leading-tight tracking-tight transition-colors group-hover:text-primary group-focus-within:text-primary sm:text-4xl">
            {project.title}
          </h2>
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {project.year}
          </span>
        </div>
        <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-out group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-within:grid-rows-[1fr] group-focus-within:opacity-100">
          <div className="overflow-hidden">
            <p className="mt-3 text-base text-muted-foreground">
              {project.blurb}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/85">
              {project.detail}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-white/15 px-3 py-1 text-xs tracking-wide text-muted-foreground"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}


function ProjectsPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-5xl px-6 pt-24 pb-12 sm:pt-32">
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Selected work
        </p>
        <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl">
          Projects.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          A handful of things I've built — across markets, query engines,
          architecture, language, and game engines. Hover any title to read more.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div>
          {projects.map((p, i) => (
            <ProjectRow key={p.title} project={p} index={i} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
