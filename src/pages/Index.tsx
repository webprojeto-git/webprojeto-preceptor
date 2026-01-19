import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import About from "@/components/About";
import Audience from "@/components/Audience";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Stats />
          <Features />
          <About />
          <Audience />
          <Testimonials />
          <CTA />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
