"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const NAVBAR_OFFSET = 64;

const schools = [
  {
    name: "Elementary School",
    grades: "Playgroup – KG II",
    description:
      "A warm, playful start to education where young learners discover joy in learning within a safe and nurturing environment.",
    image:
      "https://images.unsplash.com/photo-1503454537845-455cf239af63?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "Junior School",
    grades: "Class I – III",
    description:
      "Strong foundations in literacy, numeracy, and creativity through engaging, child-centred Cambridge learning experiences.",
    image:
      "https://images.unsplash.com/photo-1509062520606-59516df27ff2?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "Middle School",
    grades: "Class IV – VII",
    description:
      "A transformative stage where pupils build academic depth, independence, and the confidence to explore their passions.",
    image:
      "https://images.unsplash.com/photo-1427504490125-794c4f59b836?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "Senior School",
    grades: "Class VIII – XII · O & A Level",
    description:
      "Rigorous Cambridge O and A Level programmes that sharpen critical thinking and prepare students for leading universities across the globe.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80",
  },
];

export function SchoolLevelsSection() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    schools.forEach((school) => {
      const img = new Image();
      img.src = school.image;
    });
  }, []);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const pinShell = root.querySelector<HTMLElement>(".schools-pin-shell");
      if (!pinShell) return;

      const slides = Array.from(root.querySelectorAll<HTMLElement>(".school-slide"));
      if (!slides.length) return;

      slides.forEach((slide, i) => {
        gsap.set(slide, {
          autoAlpha: i === 0 ? 1 : 0,
          yPercent: i === 0 ? 0 : 100,
          zIndex: i + 1,
          force3D: true,
          willChange: "transform, opacity",
        });
      });

      const tl = gsap.timeline({
        defaults: { ease: "power2.inOut", force3D: true, overwrite: "auto" },
        scrollTrigger: {
          trigger: pinShell,
          start: `top ${NAVBAR_OFFSET}px`,
          end: `+=${Math.max(1, slides.length - 1) * 115}%`,
          scrub: 1.85,
          pin: pinShell,
          anticipatePin: 1,
          fastScrollEnd: true,
          invalidateOnRefresh: true,
        },
      });

      slides.forEach((slide, i) => {
        if (i === 0) return;

        const label = `step-${i}`;
        const prev = slides[i - 1];

        tl.set(slide, { autoAlpha: 1 }, label)
          .to(
            prev,
            {
              yPercent: -4,
              scale: 0.97,
              duration: 1.35,
              ease: "power2.inOut",
            },
            label
          )
          .to(
            slide,
            {
              yPercent: 0,
              duration: 1.35,
              ease: "power2.inOut",
            },
            label
          )
          .set(prev, { autoAlpha: 0 }, `${label}+=0.98`);
      });
    }, root);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative bg-background">
      <div ref={rootRef}>
        <div
          className="schools-pin-shell overflow-hidden"
          style={{ height: `calc(100dvh - ${NAVBAR_OFFSET}px)` }}
        >
          <div className="relative h-full w-full">
            {schools.map((school, index) => (
              <div
                key={school.name}
                className="school-slide pointer-events-none absolute inset-0 flex items-center justify-center px-4 py-4 sm:px-6 sm:py-6 lg:px-8"
              >
                <div className="[perspective:1200px] flex h-full w-full max-w-7xl items-center justify-center">
                  <article className="school-card playpen-bg pointer-events-auto relative h-[min(86vh,860px)] w-full overflow-hidden rounded-2xl bg-primary shadow-[0_32px_64px_-20px_rgba(128,0,0,0.45)] ring-2 ring-primary/20 [transform-style:preserve-3d] sm:rounded-3xl">
                    <div
                      className="absolute inset-0 scale-105 bg-cover bg-center opacity-55"
                      style={{ backgroundImage: `url(${school.image})` }}
                      role="img"
                      aria-label={school.name}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#5a0000] via-[#800000]/85 to-[#800000]/55" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent_50%)]" />

                    <div className="relative flex h-full flex-col justify-between p-6 sm:p-9 md:p-11">
                      <div className="flex items-start justify-between gap-4">
                        <span className="inline-flex rounded-lg border border-white/25 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-md sm:px-4 sm:text-xs">
                          Academic Pathways
                        </span>
                        <span className="font-serif text-5xl font-bold leading-none text-white/20 sm:text-6xl md:text-7xl">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <div>
                        <span className="inline-block rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white/90 backdrop-blur-sm sm:text-xs">
                          {school.grades}
                        </span>
                        <h3 className="mt-3 font-serif text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
                          {school.name}
                        </h3>
                        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base md:text-lg">
                          {school.description}
                        </p>
                        <Link
                          href="/academics"
                          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-primary transition hover:bg-white/90"
                        >
                          Learn More
                          <span className="playpen-bg inline-flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-white">
                            <ArrowRight className="h-4 w-4" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
