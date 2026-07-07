import { Navbar } from "./Navbar";
import { NewsTicker } from "./NewsTicker";
import { Footer } from "./Footer";
import { getCMSData, getPublishedCMS } from "@/lib/cms/store";

export async function SiteLayout({ children }: { children: React.ReactNode }) {
  const cms = getPublishedCMS(await getCMSData());

  return (
    <>
      <header className="sticky top-0 z-50 w-full shadow-md">
        <Navbar />
        {cms.newsTicker.enabled && <NewsTicker ticker={cms.newsTicker} />}
      </header>
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
