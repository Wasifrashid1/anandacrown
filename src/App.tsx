import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LeadCaptureProvider } from "./contexts/LeadCaptureContext";
import Index from "./pages/Index";
import Blog from "./pages/blog";
import BlogPost from "./pages/blogpost";
import FloorPlans from "./pages/FloorPlans";
import Amenities from "./pages/Amenities";
import Location from "./pages/Location";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Overview from "./pages/Overview";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LeadCaptureProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/floor-plans" element={<FloorPlans />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/location" element={<Location />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </LeadCaptureProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
