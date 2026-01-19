import { BookOpen, Clock, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const aboutIcons = [BookOpen, Clock, ShieldCheck];

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="sobre" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.about.title}
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-primary mb-4">
            {t.about.subtitle}
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.about.description}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {t.about.items.map((item, index) => {
            const Icon = aboutIcons[index];
            return (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
