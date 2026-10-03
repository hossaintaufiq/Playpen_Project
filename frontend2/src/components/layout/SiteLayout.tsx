import { Navbar } from "./Navbar";
import { TopBar } from "./TopBar";
import { Footer } from "./Footer";
import { Chatbot } from "./Chatbot";

export async function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Upper part of nav (hides on scroll) */}
      <TopBar />

      {/* Main sticky navigation */}
      <header className="sticky top-0 z-50 w-full shadow-md">
        <Navbar />
      </header>

      <main className="min-w-0 flex-1">{children}</main>
      <Footer />
      <Chatbot />
    </>
  );
}

