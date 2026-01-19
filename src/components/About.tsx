import { BookOpen, Clock, ShieldCheck } from "lucide-react";

const aboutItems = [
  {
    icon: BookOpen,
    title: "Fontes confiáveis",
    description: "Nós utilizamos fontes médicas referenciadas como CID-10, CID-11, DSM-5, plataformas de artigos científicos, diretrizes atualizadas e protocolos do SUS.",
  },
  {
    icon: Clock,
    title: "Otimizar seu tempo",
    description: "Nosso foco está no bem mais valioso, o seu tempo. Por isso automatizamos os processos que não devem ser um obstáculo.",
  },
  {
    icon: ShieldCheck,
    title: "Ambiente seguro",
    description: "Enfatizamos a importância do sigilo médico e proteção dos dados dos seus pacientes. Atendendo a LGPD.",
  },
];

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sobre nós
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-primary mb-4">
            Entenda a visão da Preceptor.iA
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            O Preceptor.iA é uma plataforma de inteligência artificial desenvolvida para 
            otimizar a rotina dos profissionais de saúde e estudantes. Sem complicação, 
            sem plataformas e sem burocracia.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {aboutItems.map((item, index) => (
            <div
              key={index}
              className="text-center p-6"
            >
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">
                {item.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
