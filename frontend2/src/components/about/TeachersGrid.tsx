import Image from "next/image";
import type { Teacher } from "@/lib/cms/types";

export function TeachersGrid({ teachers }: { teachers: Teacher[] }) {
  if (teachers.length === 0) return null;

  return (
    <div className="mt-16 sm:mt-20">
      <div className="text-center mb-10">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#6b0c26] bg-[#ffffff] px-3 py-1 border border-[#121212] shadow-[2px_2px_0px_#121212] inline-block mb-3">
          // ACADEMIC FACULTY
        </span>
        <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#121212] uppercase">
          Faculty &amp; Instructional Staff
        </h2>
        <p className="mx-auto mt-2.5 max-w-2xl text-center font-sans text-sm text-[#524d46]">
          Meet the experienced educators and mentors who guide pupils at every developmental milestone.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {teachers.map((teacher, idx) => (
          <article
            key={teacher.id}
            className="border-2 border-[#121212] bg-[#ffffff] shadow-[4px_4px_0px_#121212] hover:shadow-[6px_6px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all overflow-hidden flex flex-col justify-between"
          >
            <div>
              {teacher.image ? (
                <div className="relative aspect-[4/3] bg-[#121212] border-b-2 border-[#121212]">
                  <Image
                    src={teacher.image}
                    alt={teacher.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 bg-[#121212] text-white px-2 py-0.5 font-mono text-[10px] font-bold uppercase">
                    STAFF // 0{idx + 1}
                  </div>
                </div>
              ) : (
                <div className="flex aspect-[4/3] items-center justify-center bg-[#f4efe6] border-b-2 border-[#121212]">
                  <span className="font-serif text-5xl font-black text-[#6b0c26]/40">
                    {teacher.name.charAt(0)}
                  </span>
                </div>
              )}
              <div className="p-6">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#6b0c26] block">
                  {teacher.role}
                </span>
                <h3 className="mt-1 font-serif font-bold text-xl text-[#121212] uppercase leading-tight">
                  {teacher.name}
                </h3>
                <p className="mt-1 font-mono text-xs text-[#524d46] font-semibold uppercase">{teacher.department}</p>
                {teacher.bio && (
                  <p className="mt-3 font-sans text-xs sm:text-sm leading-relaxed text-[#403d39]">{teacher.bio}</p>
                )}
                {(teacher.email || teacher.phone) && (
                  <div className="mt-4 border-t border-[#121212]/15 pt-3 space-y-1 font-mono text-xs">
                    {teacher.email && (
                      <p>
                        <a href={`mailto:${teacher.email}`} className="text-[#6b0c26] hover:underline lowercase">
                          {teacher.email}
                        </a>
                      </p>
                    )}
                    {teacher.phone && (
                      <p>
                        <a href={`tel:${teacher.phone}`} className="text-[#121212] hover:underline">
                          {teacher.phone}
                        </a>
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
