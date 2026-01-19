import { MessageCircle, Mail, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">P</span>
              </div>
              <span className="font-bold text-xl">Preceptor.iA</span>
            </div>
            <p className="text-background/70 max-w-md mb-6">
              O futuro da medicina no seu WhatsApp. Automatize prontuários, prescrições 
              e diagnósticos com segurança e precisão.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://api.whatsapp.com/send?phone=553197664004&text=site10"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="mailto:contato@preceptor-ia.com"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <a href="#funcionalidades" className="text-background/70 hover:text-background transition-colors">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-background/70 hover:text-background transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#para-quem" className="text-background/70 hover:text-background transition-colors">
                  Para quem é
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-background/70 hover:text-background transition-colors">
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  LGPD
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-background/10 text-center text-background/50">
          <p>© {new Date().getFullYear()} Preceptor.iA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
