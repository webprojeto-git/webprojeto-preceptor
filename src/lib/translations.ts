export type Language = 'pt' | 'en';

export const translations = {
  pt: {
    // Header
    nav: {
      features: "Funcionalidades",
      about: "Sobre",
      audience: "Para quem é",
      testimonials: "Depoimentos",
      cta: "Assine já!",
    },
    // Hero
    hero: {
      badge: "+450 clientes satisfeitos",
      title: "O futuro da",
      titleHighlight1: "medicina",
      titleMiddle: "no seu",
      titleHighlight2: "WhatsApp",
      description: "Chega de perder horas com prontuários, prescrições ou diagnósticos confusos. Com o Preceptor.iA, você automatiza tudo isso direto no WhatsApp com segurança, precisão e em segundos.",
      cta: "Teste grátis!",
      ctaSubtext: "Sem burocracia, direto no WhatsApp.",
      imageAlt: "Médico usando smartphone",
    },
    // Stats
    stats: {
      satisfaction: "Taxa de satisfação",
      surveys: "Pesquisas realizadas",
      clients: "Clientes satisfeitos",
    },
    // Features
    features: {
      title: "Funcionalidades",
      subtitle: "Chega de correr contra o relógio, use a IA a seu favor!",
      items: [
        {
          title: "Disponível 24/7",
          description: "Esqueça a burocracia de logins e senhas. Acesse respostas confiáveis e rápidas a qualquer hora, no seu aplicativo de mensagens preferido.",
        },
        {
          title: "Diagnóstico Ágil e Confiável",
          description: "Receba respostas rápidas para diagnóstico diferencial, considerando sintomas, histórico médico e exames.",
        },
        {
          title: "Interação Medicamentosa",
          description: "Obtenha informações sobre doses, efeitos adversos, interações medicamentosas, nomes comerciais e até preços médios de farmácias.",
        },
        {
          title: "Criação de Relatórios e Anamneses",
          description: "Gere rapidamente relatórios médicos e anamneses com base nos dados do paciente, otimizando seu tempo e melhorando a produtividade.",
        },
        {
          title: "Segurança de Dados",
          description: "Totalmente protegido com criptografia, conforme a LGPD e GDPR. Seus dados estão seguros com a Preceptor.iA.",
        },
        {
          title: "Redução de Custos Operacionais",
          description: "Automatiza tarefas manuais, como preenchimento de prontuários e geração de relatórios, permitindo mais tempo para o cuidado do paciente.",
        },
      ],
    },
    // About
    about: {
      title: "Sobre nós",
      subtitle: "Entenda a visão da Preceptor.iA",
      description: "O Preceptor.iA é uma plataforma de inteligência artificial desenvolvida para otimizar a rotina dos profissionais de saúde e estudantes. Sem complicação, sem plataformas e sem burocracia.",
      items: [
        {
          title: "Fontes confiáveis",
          description: "Nós utilizamos fontes médicas referenciadas como CID-10, CID-11, DSM-5, plataformas de artigos científicos, diretrizes atualizadas e protocolos do SUS.",
        },
        {
          title: "Otimizar seu tempo",
          description: "Nosso foco está no bem mais valioso, o seu tempo. Por isso automatizamos os processos que não devem ser um obstáculo.",
        },
        {
          title: "Ambiente seguro",
          description: "Enfatizamos a importância do sigilo médico e proteção dos dados dos seus pacientes. Atendendo a LGPD.",
        },
      ],
    },
    // Audience
    audience: {
      title: "Para quem é?",
      subtitle: "Para quem o Preceptor.iA foi feito?",
      professional: {
        title: "Profissional da Saúde",
        subtitle: "Para quem quer:",
        benefits: [
          "Independência financeira e de horário",
          "Autonomia no trabalho",
          "Tempo para a família e lazer",
          "Aprimoramento profissional",
        ],
        imageAlt: "Profissional da Saúde",
      },
      student: {
        title: "Estudante de Saúde",
        subtitle: "Para quem quer:",
        benefits: [
          "Apoio nos estudos clínicos",
          "Acesso rápido a informações",
          "Preparação para residência",
          "Economia de tempo nas pesquisas",
        ],
        imageAlt: "Estudante de Saúde",
      },
    },
    // Testimonials
    testimonials: {
      title: "Depoimentos",
      subtitle: "Quem usa não larga!",
      description: "Depoimentos de quem já mudou de rotina com a Preceptor.iA",
      items: [
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
      ],
    },
    // CTA
    cta: {
      title: "Comece agora mesmo!",
      description: "Transforme sua rotina médica com inteligência artificial. Teste gratuitamente e veja a diferença.",
      button: "Teste grátis no WhatsApp",
      disclaimer: "Sem cartão de crédito. Sem compromisso.",
    },
    // Footer
    footer: {
      description: "O futuro da medicina no seu WhatsApp. Automatize prontuários, prescrições e diagnósticos com segurança e precisão.",
      navigation: "Navegação",
      legal: "Legal",
      termsOfUse: "Termos de Uso",
      privacyPolicy: "Política de Privacidade",
      copyright: "Todos os direitos reservados.",
    },
  },
  en: {
    // Header
    nav: {
      features: "Features",
      about: "About",
      audience: "Who is it for",
      testimonials: "Testimonials",
      cta: "Subscribe now!",
    },
    // Hero
    hero: {
      badge: "+450 satisfied clients",
      title: "The future of",
      titleHighlight1: "medicine",
      titleMiddle: "on your",
      titleHighlight2: "WhatsApp",
      description: "Stop wasting hours on medical records, prescriptions, or confusing diagnoses. With Preceptor.iA, you automate all of this directly on WhatsApp with security, precision, and in seconds.",
      cta: "Try for free!",
      ctaSubtext: "No bureaucracy, straight to WhatsApp.",
      imageAlt: "Doctor using smartphone",
    },
    // Stats
    stats: {
      satisfaction: "Satisfaction rate",
      surveys: "Surveys conducted",
      clients: "Satisfied clients",
    },
    // Features
    features: {
      title: "Features",
      subtitle: "Stop racing against the clock, use AI in your favor!",
      items: [
        {
          title: "Available 24/7",
          description: "Forget the bureaucracy of logins and passwords. Access reliable and quick answers at any time, on your favorite messaging app.",
        },
        {
          title: "Fast and Reliable Diagnosis",
          description: "Get quick answers for differential diagnosis, considering symptoms, medical history, and exams.",
        },
        {
          title: "Drug Interaction",
          description: "Get information about doses, adverse effects, drug interactions, brand names, and even average pharmacy prices.",
        },
        {
          title: "Reports and Medical History Creation",
          description: "Quickly generate medical reports and medical histories based on patient data, optimizing your time and improving productivity.",
        },
        {
          title: "Data Security",
          description: "Fully protected with encryption, compliant with LGPD and GDPR. Your data is safe with Preceptor.iA.",
        },
        {
          title: "Operational Cost Reduction",
          description: "Automates manual tasks, such as filling out medical records and generating reports, allowing more time for patient care.",
        },
      ],
    },
    // About
    about: {
      title: "About Us",
      subtitle: "Understand the vision of Preceptor.iA",
      description: "Preceptor.iA is an artificial intelligence platform developed to optimize the routine of healthcare professionals and students. No complications, no platforms, and no bureaucracy.",
      items: [
        {
          title: "Reliable Sources",
          description: "We use referenced medical sources such as ICD-10, ICD-11, DSM-5, scientific article platforms, updated guidelines, and SUS protocols.",
        },
        {
          title: "Optimize Your Time",
          description: "Our focus is on your most valuable asset: your time. That's why we automate processes that shouldn't be obstacles.",
        },
        {
          title: "Secure Environment",
          description: "We emphasize the importance of medical confidentiality and protection of your patients' data. Compliant with LGPD.",
        },
      ],
    },
    // Audience
    audience: {
      title: "Who is it for?",
      subtitle: "Who was Preceptor.iA made for?",
      professional: {
        title: "Healthcare Professional",
        subtitle: "For those who want:",
        benefits: [
          "Financial and schedule independence",
          "Work autonomy",
          "Time for family and leisure",
          "Professional improvement",
        ],
        imageAlt: "Healthcare Professional",
      },
      student: {
        title: "Healthcare Student",
        subtitle: "For those who want:",
        benefits: [
          "Clinical study support",
          "Quick access to information",
          "Residency preparation",
          "Time savings in research",
        ],
        imageAlt: "Healthcare Student",
      },
    },
    // Testimonials
    testimonials: {
      title: "Testimonials",
      subtitle: "Once you use it, you won't let go!",
      description: "Testimonials from those who have already changed their routine with Preceptor.iA",
      items: [
        {
          quote: "Preceptor.iA transformed my clinical practice. With quick answers about diagnoses and treatments, I can optimize my time with patients, offering faster and more efficient care. Also, the ease of generating reports in seconds helps me keep my routine more organized.",
          name: "Dr. Roberto Paiva",
          role: "Psychiatrist",
        },
        {
          quote: "Preceptor.iA helped me save time in every consultation, allowing me to focus more on patient care and less on paperwork.",
          name: "Dr. Cristine",
          role: "Physician",
        },
        {
          quote: "I use Preceptor.iA to access quick information about diseases and treatments, which has been a real lifesaver in my veterinary clinic. The agility with which I can answer pet owners' questions helps me a lot!!!",
          name: "Carlos Oliveira",
          role: "Medical Student",
        },
      ],
    },
    // CTA
    cta: {
      title: "Start right now!",
      description: "Transform your medical routine with artificial intelligence. Try it for free and see the difference.",
      button: "Try free on WhatsApp",
      disclaimer: "No credit card. No commitment.",
    },
    // Footer
    footer: {
      description: "The future of medicine on your WhatsApp. Automate medical records, prescriptions, and diagnoses with security and precision.",
      navigation: "Navigation",
      legal: "Legal",
      termsOfUse: "Terms of Use",
      privacyPolicy: "Privacy Policy",
      copyright: "All rights reserved.",
    },
  },
} as const;

export type Translations = typeof translations['pt'];
