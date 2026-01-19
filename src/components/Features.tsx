import { Clock, Stethoscope, Pill, FileText, Shield, TrendingDown } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Disponível 24/7",
    description: "Esqueça a burocracia de logins e senhas. Acesse respostas confiáveis e rápidas a qualquer hora, no seu aplicativo de mensagens preferido.",
  },
  {
    icon: Stethoscope,
    title: "Diagnóstico Ágil e Confiável",
    description: "Receba respostas rápidas para diagnóstico diferencial, considerando sintomas, histórico médico e exames.",
  },
  {
    icon: Pill,
    title: "Interação Medicamentosa",
    description: "Obtenha informações sobre doses, efeitos adversos, interações medicamentosas, nomes comerciais e até preços médios de farmácias.",
  },
  {
    icon: FileText,
    title: "Criação de Relatórios e Anamneses",
    description: "Gere rapidamente relatórios médicos e anamneses com base nos dados do paciente, otimizando seu tempo e melhorando a produtividade.",
  },
  {
    icon: Shield,
    title: "Segurança de Dados",
    description: "Totalmente protegido com criptografia, conforme a LGPD e GDPR. Seus dados estão seguros com a Preceptor.iA.",
  },
  {
    icon: TrendingDown,
    title: "Redução de Custos Operacionais",
    description: "Automatiza tarefas manuais, como preenchimento de prontuários e geração de relatórios, permitindo mais tempo para o cuidado do paciente.",
  },
];

const Features = () => {
  return (
    <section id="funcionalidades" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Funcionalidades
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Chega de correr contra o relógio, use a IA a seu favor!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-2xl border border-border hover:shadow-card transition-shadow duration-300"
            >
              <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-5">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
