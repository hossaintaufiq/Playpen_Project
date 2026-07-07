import Link from "next/link";

const links = [
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Student Life", href: "/student-life" },
  { label: "Gallery", href: "/gallery" },
  { label: "Portal", href: "/portal" },
];

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-serif text-2xl font-bold">Playpen</p>
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              Nurturing young minds with excellence in education since 1977.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white/60">Quick Links</p>
            <ul className="mt-4 space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/80 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white/60">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>info@playpen.edu.bd</li>
              <li>+880 1234-567890</li>
              <li>Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Playpen School. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
