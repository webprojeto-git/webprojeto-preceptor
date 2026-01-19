import { MessageCircle, Mail, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">P</span>
              </div>
              <span className="font-bold text-xl">Preceptor.iA</span>
            </div>
            <p className="text-background/70 max-w-md mb-6">
              {t.footer.description}
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://api.whatsapp.com/send?phone=553197664004&text=site10"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label={t.aria.whatsapp}
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="mailto:contato@preceptor-ia.com"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label={t.aria.email}
              >
                <Mail size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label={t.aria.instagram}
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">{t.footer.navigation}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#funcionalidades" className="text-background/70 hover:text-background transition-colors">
                  {t.nav.features}
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-background/70 hover:text-background transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#para-quem" className="text-background/70 hover:text-background transition-colors">
                  {t.nav.audience}
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-background/70 hover:text-background transition-colors">
                  {t.nav.testimonials}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">{t.footer.legal}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  {t.footer.termsOfUse}
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  {t.footer.privacyPolicy}
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  {t.footer.lgpd}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-background/10 text-center text-background/50">
          <p>© {new Date().getFullYear()} Preceptor.iA. {t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
