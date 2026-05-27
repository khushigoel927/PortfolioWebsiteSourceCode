import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "../components/layout/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Khushi Goel — EECS @ UC Berkeley" },
      {
        name: "description",
        content:
          "Khushi Goel is a junior at UC Berkeley studying Electrical Engineering and Computer Science. Systems, software, and photography.",
      },
      { property: "og:title", content: "Khushi Goel — EECS @ UC Berkeley" },
      {
        property: "og:description",
        content: "Systems, software, and photography from a Berkeley EECS junior.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-6 pt-24 pb-16 sm:pt-32">
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground">
          About
        </p>
        <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight sm:text-7xl">
          Khushi Goel.
        </h1>
        <p className="mt-6 font-serif text-2xl leading-snug text-muted-foreground sm:text-3xl">
          Electrical Engineering &amp; Computer Science at UC Berkeley —
          building systems, taking photos.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24">
        <div className="space-y-7 text-lg leading-relaxed text-foreground/90">
          <p>
            I'm a junior at the University of California, Berkeley studying
            Electrical Engineering and Computer Science. I spend most of my
            time building software systems, writing a lot of Java and Python,
            and thinking carefully about how things work under the hood.
          </p>
          <p>
            My technical background covers Python, Java, C, SQL, and RISC-V.
            I've built trading systems that react to live market data,
            implemented database functionality from scratch, and worked on
            projects that sit closer to the hardware side of things too. I
            care about making good engineering decisions and building things
            that are actually well thought out.
          </p>
          <p>
            Beyond my own work, I care about making STEM more accessible.
            I've tutored K–7 students in math, science, and computer science,
            and coached an all-girls FIRST Lego League robotics team through
            international-level competition.
          </p>
          <p>
            Outside of engineering, I've been getting into photography. I'm
            still learning, but I really appreciate how it trains you to slow
            down and pay close attention to what's in front of you. It's a
            small habit that has carried over into the way I approach
            technical problems too.
          </p>
        </div>

        <div className="mt-16 grid gap-10 border-t border-white/10 pt-10 sm:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Studying
            </p>
            <p className="mt-3 font-serif text-xl">EECS, UC Berkeley</p>
            <p className="text-sm text-muted-foreground">Junior</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Working in
            </p>
            <p className="mt-3 font-serif text-xl">
              Python · Java · C · SQL · RISC-V
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Also
            </p>
            <p className="mt-3 font-serif text-xl">
              Tutoring · FLL coaching · Photography
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap gap-6 text-sm">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 border-b border-foreground/40 pb-1 transition-colors hover:border-primary hover:text-primary"
          >
            See projects
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            to="/photography"
            className="group inline-flex items-center gap-2 border-b border-foreground/40 pb-1 transition-colors hover:border-primary hover:text-primary"
          >
            See photography
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
