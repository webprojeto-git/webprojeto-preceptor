const stats = [
  { value: "98%", label: "Taxa de satisfação" },
  { value: "+20.000", label: "Pesquisas realizadas" },
  { value: "+450", label: "Clientes satisfeitos" },
];

const Stats = () => {
  return (
    <section className="py-12 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">
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
