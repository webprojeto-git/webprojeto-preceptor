import { Clock, Stethoscope, Pill, FileText, Shield, TrendingDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const featureIcons = [Clock, Stethoscope, Pill, FileText, Shield, TrendingDown];

const Features = () => {
  const { t } = useLanguage();

  return (
    <section id="funcionalidades" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.features.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.features.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.features.items.map((feature, index) => {
            const Icon = featureIcons[index];
            return (
              <div
                key={index}
                className="p-6 bg-card rounded-2xl border border-border hover:shadow-card transition-shadow duration-300"
              >
                <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
