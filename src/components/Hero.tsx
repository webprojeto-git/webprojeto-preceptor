import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroDoctor from "@/assets/hero-doctor.jpg";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-6">
              <span className="text-primary font-semibold">5.0</span>
              <span className="text-muted-foreground">| {t.hero.badge}</span>
            </div>
            
            <h1 className="font-satoshi text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-6">
              {t.hero.title}{" "}
              <span className="text-primary">{t.hero.titleHighlight1}</span> {t.hero.titleMiddle}{" "}
              <span className="text-primary">{t.hero.titleHighlight2}</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              {t.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href="https://api.whatsapp.com/send?phone=553197664004&text=site10"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 gradient-primary text-primary-foreground rounded-full font-semibold text-lg hover:opacity-90 transition-opacity shadow-card"
              >
                <MessageCircle size={24} />
                {t.hero.cta}
              </a>
              <span className="text-sm text-muted-foreground">
                {t.hero.ctaSubtext}
              </span>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 gradient-primary rounded-[2rem] transform rotate-3 opacity-20"></div>
              <div className="relative bg-primary/10 rounded-[2rem] p-8 overflow-hidden">
                <img
                  src={heroDoctor}
                  alt={t.hero.imageAlt}
                  className="w-full h-auto rounded-2xl shadow-soft"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
