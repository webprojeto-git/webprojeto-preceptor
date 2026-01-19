import { MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-6">
              <span className="text-primary font-semibold">5.0</span>
              <span className="text-muted-foreground">| +450 clientes satisfeitos</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
              O futuro da{" "}
              <span className="text-primary">medicina</span> no seu{" "}
              <span className="text-primary">WhatsApp</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Chega de perder horas com prontuários, prescrições ou diagnósticos confusos. 
              Com o Preceptor.iA, você automatiza tudo isso direto no WhatsApp com segurança, 
              precisão e em segundos.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href="https://api.whatsapp.com/send?phone=553197664004&text=site10"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 gradient-primary text-primary-foreground rounded-full font-semibold text-lg hover:opacity-90 transition-opacity shadow-card"
              >
                <MessageCircle size={24} />
                Teste grátis!
              </a>
              <span className="text-sm text-muted-foreground">
                Sem burocracia, direto no WhatsApp.
              </span>
            </div>
          </div>
          
          {/* Image */}
          <div className="flex-1 relative">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 gradient-primary rounded-[2rem] transform rotate-3 opacity-20"></div>
              <div className="relative bg-primary/10 rounded-[2rem] p-8 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=700&fit=crop"
                  alt="Médico usando smartphone"
                  className="w-full h-auto rounded-2xl shadow-soft"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
