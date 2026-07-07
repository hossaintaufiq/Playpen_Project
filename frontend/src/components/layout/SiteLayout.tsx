import { Navbar } from "./Navbar";
import { NewsTicker } from "./NewsTicker";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="sticky top-0 z-50 w-full shadow-md">
        <Navbar />
        <NewsTicker />
      </header>
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
