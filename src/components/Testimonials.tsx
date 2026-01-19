import { Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Testimonials = () => {
  const { t } = useLanguage();

  return (
    <section id="depoimentos" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-satoshi text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.testimonials.title}
          </h2>
          <h3 className="font-satoshi text-xl md:text-2xl font-semibold text-primary mb-2">
            {t.testimonials.subtitle}
          </h3>
          <p className="font-sans text-muted-foreground">
            {t.testimonials.description}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.testimonials.items.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl border border-border shadow-soft relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              <p className="font-sans text-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-satoshi font-bold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="font-sans text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
