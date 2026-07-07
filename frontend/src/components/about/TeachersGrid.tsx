import Image from "next/image";
import type { Teacher } from "@/lib/cms/types";

export function TeachersGrid({ teachers }: { teachers: Teacher[] }) {
  if (teachers.length === 0) return null;

  return (
    <div className="mt-10 sm:mt-12">
      <h2 className="text-center font-serif text-2xl font-semibold text-foreground sm:text-3xl">
        Faculty & Staff
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-muted-foreground">
        Meet the educators and professionals who guide pupils at every stage.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {teachers.map((teacher) => (
          <article
            key={teacher.id}
            className="overflow-hidden rounded-2xl border border-border/50 bg-white shadow-sm sm:rounded-3xl"
          >
            {teacher.image ? (
              <div className="relative aspect-[4/3] bg-muted">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ) : (
              <div className="flex aspect-[4/3] items-center justify-center bg-primary/5">
                <span className="font-serif text-3xl font-semibold text-primary/40">
                  {teacher.name.charAt(0)}
                </span>
              </div>
            )}
            <div className="p-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary/60">
                {teacher.role}
              </p>
              <h3 className="mt-2 font-serif text-xl font-semibold text-foreground">
                {teacher.name}
              </h3>
              <p className="mt-1 text-xs font-medium text-muted-foreground">{teacher.department}</p>
              {teacher.bio && (
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{teacher.bio}</p>
              )}
              {(teacher.email || teacher.phone) && (
                <ul className="mt-4 space-y-1 text-sm">
                  {teacher.email && (
                    <li>
                      <a href={`mailto:${teacher.email}`} className="playpen-text hover:underline">
                        {teacher.email}
                      </a>
                    </li>
                  )}
                  {teacher.phone && (
                    <li>
                      <a href={`tel:${teacher.phone}`} className="playpen-text hover:underline">
                        {teacher.phone}
                      </a>
                    </li>
                  )}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
