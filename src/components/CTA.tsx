import { MessageCircle, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto gradient-primary rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Comece agora mesmo!
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Transforme sua rotina médica com inteligência artificial. 
              Teste gratuitamente e veja a diferença.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://api.whatsapp.com/send?phone=553197664004&text=site10"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-semibold text-lg hover:bg-white/90 transition-colors shadow-lg"
              >
                <MessageCircle size={24} />
                Teste grátis no WhatsApp
                <ArrowRight size={20} />
              </a>
            </div>
            
            <p className="text-primary-foreground/70 text-sm mt-6">
              Sem cartão de crédito. Sem compromisso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
