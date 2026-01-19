import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Audience = () => {
  const { t } = useLanguage();

  return (
    <section id="para-quem" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.audience.title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t.audience.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Professional Card */}
          <div className="bg-card rounded-3xl overflow-hidden border border-border shadow-soft">
            <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop"
                alt={t.audience.professional.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {t.audience.professional.title}
              </h3>
              <p className="text-muted-foreground mb-6">{t.audience.professional.subtitle}</p>
              <ul className="space-y-3">
                {t.audience.professional.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Student Card */}
          <div className="bg-card rounded-3xl overflow-hidden border border-border shadow-soft">
            <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop"
                alt={t.audience.student.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {t.audience.student.title}
              </h3>
              <p className="text-muted-foreground mb-6">{t.audience.student.subtitle}</p>
              <ul className="space-y-3">
                {t.audience.student.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audience;
