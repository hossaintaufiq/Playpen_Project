"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionDivider } from "@/components/ui/SectionDivider";

gsap.registerPlugin(ScrollTrigger);

const HEADER_OFFSET = 100;

const schools = [
  {
    name: "Elementary School",
    grades: "Playgroup – KG II",
    description:
      "From Elementary through Senior levels, Playpen follows the Cambridge Curriculum—building moral, mental, and physical growth from the earliest years. Functional English, fine motor skills, and social development are nurtured as teachers guide young learners with care and patience.",
    image: "/images/schools/elementary.jpg",
  },
  {
    name: "Junior School",
    grades: "Class I – III",
    description:
      "The Junior Curriculum lets students learn at their own pace—building good behaviour, communication skills, and social etiquette without pressure. A strong English foundation supports Mathematics, Science, Bangla, and more, equipping pupils for the stages ahead.",
    image: "/images/schools/junior.jpg",
  },
  {
    name: "Middle School",
    grades: "Class IV – VII",
    description:
      "In Classes IV–VII, pupils explore core subjects through dynamic lessons, technology, and hands-on learning. Qualified teachers tailor curriculum to each student—encouraging individual learning styles, creative thinking, and a zest for academics.",
    image: "/images/schools/middle.jpg",
  },
  {
    name: "Senior School",
    grades: "Class VIII – XII · O & A Level",
    description:
      "Senior School prepares students for Cambridge O, AS, and A Level examinations—internationally recognised qualifications that open doors to leading universities worldwide. Playpen balances knowledge, understanding, and skills to build curiosity, passion for learning, and a strong foundation for higher education.",
    image: "/images/schools/senior.jpg",
  },
] as const;

export function SchoolLevelsSection() {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const pinShell = root.querySelector<HTMLElement>(".schools-pin-shell");
      if (!pinShell) return;

      const cards = Array.from(root.querySelectorAll<HTMLElement>(".school-card"));
      if (!cards.length) return;

      cards.forEach((card, i) => {
        gsap.set(card, {
          autoAlpha: i === 0 ? 1 : 0,
          yPercent: i === 0 ? 0 : 100,
          scale: 1,
          zIndex: i + 1,
          force3D: true,
        });
      });

      const tl = gsap.timeline({
        defaults: { ease: "power2.inOut", force3D: true, overwrite: "auto" },
        scrollTrigger: {
          trigger: pinShell,
          start: `top ${HEADER_OFFSET}px`,
          end: `+=${Math.max(1, cards.length - 1) * 115}%`,
          scrub: 1.85,
          pin: pinShell,
          anticipatePin: 1,
          fastScrollEnd: true,
          invalidateOnRefresh: true,
        },
      });

      cards.forEach((card, i) => {
        if (i === 0) return;

        const label = `step-${i}`;
        const prev = cards[i - 1];

        tl.set(card, { autoAlpha: 1 }, label)
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
            card,
            {
              yPercent: 0,
              scale: 1,
              duration: 1.35,
              ease: "power2.inOut",
            },
            label
          )
          .set(prev, { autoAlpha: 0, scale: 1 }, `${label}+=0.98`);
      });
    }, root);

    const refresh = () => ScrollTrigger.refresh();
    refresh();
    window.addEventListener("load", refresh);
    const t = window.setTimeout(refresh, 100);

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, []);

  return (
    <section className="relative bg-background">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-4 sm:px-6 sm:pb-12 md:pb-14">
        <SectionHeader
          eyebrow="Academic Pathways"
          title="A journey through every stage of learning"
          description="From first steps in playgroup to Cambridge O and A Levels — each division is designed to meet children where they are, and gently guide them forward."
        />
      </div>

      <div ref={rootRef}>
        <div
          className="schools-pin-shell overflow-hidden"
          style={{ height: `calc(100dvh - ${HEADER_OFFSET}px)` }}
        >
          <div className="relative h-full w-full">
            {schools.map((school, index) => (
              <div
                key={school.name}
                className="school-slide pointer-events-none absolute inset-0 flex items-center justify-center px-4 py-4 sm:px-6 sm:py-6 lg:px-8"
              >
                <div className="flex h-full w-full max-w-7xl items-center justify-center [perspective:1200px]">
                  <article
                    className={`school-card pointer-events-auto relative h-[min(78vh,740px)] w-full overflow-hidden rounded-2xl bg-primary shadow-[0_28px_56px_-22px_rgba(128,0,0,0.35)] ring-1 ring-primary/15 will-change-transform sm:rounded-3xl ${
                      index > 0 ? "invisible opacity-0" : ""
                    }`}
                  >
                    <Image
                      src={school.image}
                      alt={school.name}
                      fill
                      priority
                      sizes="(max-width: 1280px) 100vw, 1280px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#5a0000]/88 via-[#800000]/45 to-[#800000]/20" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.08),transparent_55%)]" />

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

      <SectionDivider variant="fade" />
    </section>
  );
}
