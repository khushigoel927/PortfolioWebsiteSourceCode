import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteLayout } from "../components/layout/SiteLayout";

import photo1 from "../assets/khushi-1.jpg";
import photo3 from "../assets/khushi-3.jpg";
import photo4 from "../assets/khushi-4.jpg";
import photo5 from "../assets/khushi-5.jpg";
import photo6 from "../assets/khushi-6.jpg";
import photo7 from "../assets/khushi-7.jpg";
import photo8 from "../assets/khushi-8.jpg";
import photo9 from "../assets/khushi-9.jpg";
import photo10 from "../assets/khushi-10.jpg";
import photo11 from "../assets/khushi-11.jpg";
import photo12 from "../assets/khushi-12.jpg";

export const Route = createFileRoute("/photography")({
  head: () => ({
    meta: [
      { title: "Photography — Khushi Goel" },
      {
        name: "description",
        content:
          "A small, growing photo journal by Khushi Goel — a beginner's practice in slowing down and paying attention.",
      },
    ],
  }),
  component: PhotographyPage,
});

type Photo = { src: string; alt: string; blurb: string };

const photos: Photo[] = [
  { src: photo1, alt: "Pigeon perched on a wooden railing at the pier", blurb: "A lone pigeon pauses on weathered wood, watching the water." },
  { src: photo3, alt: "Silhouette of a graduate against a misty golden sunrise", blurb: "A graduate stands against the golden haze of a new beginning." },
  { src: photo4, alt: "Small white dog resting on a black leather couch", blurb: "A small dog finds perfect comfort on a soft leather couch." },
  { src: photo5, alt: "Portrait bathed in deep red light", blurb: "Warm red light wraps around a quiet, intimate moment." },
  { src: photo11, alt: "Wire-frame sculpture overgrown with succulents against a dusk sky", blurb: "Nature reclaims wire art as succulents spill over at sunset." },
  { src: photo6, alt: "Pelicans flying over the Bay Bridge", blurb: "Pelicans glide above the Bay Bridge in the late afternoon light." },
  { src: photo12, alt: "Husky with one blue and one brown eye on a sunlit beach", blurb: "A husky's mismatched eyes catch the sun on a windswept shore." },
  { src: photo7, alt: "Motorbike parked on a city sidewalk at dusk", blurb: "A parked motorbike waits under the glow of a fading evening sky." },
  { src: photo8, alt: "San Francisco skyline from the Embarcadero steps", blurb: "The city rises in layers through the soft afternoon haze." },
  { src: photo9, alt: "Crowded street scene at the Embarcadero intersection", blurb: "Life rushes through the intersection as the city breathes." },
  { src: photo10, alt: "Hazy coastal view framed by eucalyptus trees", blurb: "Eucalyptus branches frame a quiet, misty stretch of coast." },
];

function PhotographyPage() {
  const [active, setActive] = useState<Photo | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <SiteLayout>
      <section className="mx-auto max-w-5xl px-6 pt-24 pb-12 sm:pt-32">
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground">
          A photo journal
        </p>
        <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl">
          Photography.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          I'm a beginner. These are the frames I've kept while I learn to
          slow down and look more carefully at ordinary things.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {photos.map((p, i) => (
            <button
              key={p.src}
              onClick={() => setActive(p)}
              className="group relative mb-4 block w-full overflow-hidden rounded-md bg-card text-left transition-transform duration-500 hover:scale-[1.01] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label={`Open photo: ${p.alt}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading={i < 3 ? "eager" : "lazy"}
                className="h-auto w-full object-cover transition-opacity duration-700 group-hover:opacity-60"
              />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black/80 to-transparent p-4 pt-12 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm font-medium text-white/90 leading-snug">
                  {p.blurb}
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-6 backdrop-blur-sm"
        >
          <button
            onClick={() => setActive(null)}
            className="absolute right-6 top-6 text-sm uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
            aria-label="Close"
          >
            Close
          </button>
          <img
            src={active.src}
            alt={active.alt}
            className="max-h-[85vh] max-w-full rounded-md object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </SiteLayout>
  );
}
