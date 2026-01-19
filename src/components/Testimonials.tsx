import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "O Preceptor.iA transformou minha prática clínica. Com respostas rápidas sobre diagnósticos e tratamentos, consigo otimizar meu tempo com os pacientes, oferecendo um atendimento mais ágil e eficiente. Além disso, a facilidade de gerar relatórios em segundos me ajuda a manter minha rotina mais organizada.",
    name: "Dr. Roberto Paiva",
    role: "Médico Psiquiatra",
  },
  {
    quote: "A Preceptor.iA me ajudou a economizar tempo em cada consulta, permitindo que eu me concentrasse mais no atendimento ao paciente e menos na papelada.",
    name: "Dra. Cristine",
    role: "Médica",
  },
  {
    quote: "Utilizo o Preceptor.iA para acessar informações rápidas sobre doenças e tratamentos, o que tem sido uma verdadeira mão na roda no meu consultório veterinário. A agilidade com que consigo responder às dúvidas dos tutores me ajuda bastante!!!",
    name: "Carlos Oliveira",
    role: "Estudante de Medicina",
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Depoimentos
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-primary mb-2">
            Quem usa não larga!
          </h3>
          <p className="text-muted-foreground">
            Depoimentos de quem já mudou de rotina com a Preceptor.iA
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl border border-border shadow-soft relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              <p className="text-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
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
