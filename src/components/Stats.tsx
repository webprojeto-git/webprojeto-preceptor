import { useLanguage } from "@/contexts/LanguageContext";

const Stats = () => {
  const { t } = useLanguage();

  const stats = [
    { value: "98%", label: t.stats.satisfaction },
    { value: "+20.000", label: t.stats.surveys },
    { value: "+450", label: t.stats.clients },
  ];

  return (
    <section className="py-12 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-satoshi text-4xl md:text-5xl font-black text-primary mb-2">
                {stat.value}
              </div>
              <div className="font-sans text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
