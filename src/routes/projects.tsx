import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "../components/layout/SiteLayout";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Khushi Goel" },
      {
        name: "description",
        content:
          "Engineering and software projects by Khushi Goel: a Kalshi trading bot, a Java SQL engine, a RISC-V CPU emulator, NGordNet, and a tile-based game engine.",
      },
    ],
  }),
  component: ProjectsPage,
});

type Project = {
  title: string;
  blurb: string;
  detail: string;
  stack: string[];
};

const projects: Project[] = [
  {
    title: "Kalshi Trading Bot",
    blurb: "Automated trading on live event markets.",
    detail:
      "An automated trading system built on top of Kalshi's API that subscribes to live market updates and executes trades in response to changing prices and signals.",
    stack: ["Python", "Kalshi API", "WebSockets"],
  },
  {
    title: "SQL Engine in Java",
    blurb: "A small relational database, written from scratch.",
    detail:
      "A Java-based SQL engine that parses and executes core queries — CREATE, INSERT, SELECT, DELETE, and JOIN — backed by a hand-written storage and query layer.",
    stack: ["Java", "Parsing", "Storage"],
  },
  {
    title: "32-Register RISC-V CPU Emulator",
    blurb: "Pipelined datapath built from the ISA up.",
    detail:
      "A pipelined 32-register RISC-V CPU implemented by translating the ISA specification into modular datapath and control logic components.",
    stack: ["RISC-V", "Computer Architecture", "Systems"],
  },
  {
    title: "NGordNet",
    blurb: "Word usage and meaning across history.",
    detail:
      "A word analysis tool built on WordNet and Google NGram data, used to visualize how words and their hyponyms appear and evolve across decades of writing.",
    stack: ["Java", "Data Structures", "Visualization"],
  },
  {
    title: "Build Your Own World",
    blurb: "A tile-based world with persistence.",
    detail:
      "A tile-based game engine featuring procedurally generated worlds, interactive features, user input handling, and save/load functionality.",
    stack: ["Java", "Game Engine", "Procedural Generation"],
  },
];

function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <article className="group grid grid-cols-[auto_1fr] gap-6 border-t border-white/10 py-10 first:border-t-0 sm:grid-cols-[4rem_1fr_auto] sm:gap-10 sm:py-12">
      <p className="font-serif text-2xl text-muted-foreground sm:text-3xl">
        {String(index + 1).padStart(2, "0")}
      </p>
      <div>
        <h2 className="font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
          {project.title}
        </h2>
        <p className="mt-2 text-base text-muted-foreground">{project.blurb}</p>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/85">
          {project.detail}
        </p>
      </div>
      <ul className="flex flex-wrap gap-2 sm:flex-col sm:items-end sm:gap-2">
        {project.stack.map((s) => (
          <li
            key={s}
            className="rounded-full border border-white/15 px-3 py-1 text-xs tracking-wide text-muted-foreground"
          >
            {s}
          </li>
        ))}
      </ul>
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
          A handful of things I've built — across markets, databases,
          architecture, language, and game engines.
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
