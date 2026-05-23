import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Admission from "./pages/Admission";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import Faculty from "./pages/Faculty";
import Campus from "./pages/Campus";
import Administration from "./pages/Administration";
import Career from "./pages/Career";
import Schools from "./pages/Schools";
import Achievements from "./pages/Achievements";
import StudentLife from "./pages/StudentLife";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/campus" element={<Campus />} />
            <Route path="/administration" element={<Administration />} />
            <Route path="/career" element={<Career />} />
            <Route path="/schools" element={<Schools />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/student-life" element={<StudentLife />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/*" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
