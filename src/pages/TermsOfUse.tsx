import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TermsOfUse = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">P</span>
            </div>
            <span className="font-satoshi font-bold text-xl text-foreground">Preceptor.iA</span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            <ArrowLeft size={20} />
            {t.terms.backToHome}
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-satoshi text-4xl md:text-5xl font-bold text-foreground mb-8">
            {t.terms.title}
          </h1>
          
          <p className="text-muted-foreground mb-12">
            {t.terms.lastUpdated}
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            {/* Section 1 */}
            <section>
              <h2 className="font-satoshi text-2xl font-bold text-foreground mb-4">
                {t.terms.sections.acceptance.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.terms.sections.acceptance.content}
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-satoshi text-2xl font-bold text-foreground mb-4">
                {t.terms.sections.services.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.terms.sections.services.content}
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-satoshi text-2xl font-bold text-foreground mb-4">
                {t.terms.sections.responsibilities.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.terms.sections.responsibilities.content}
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="font-satoshi text-2xl font-bold text-foreground mb-4">
                {t.terms.sections.privacy.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.terms.sections.privacy.content}
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="font-satoshi text-2xl font-bold text-foreground mb-4">
                {t.terms.sections.intellectual.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.terms.sections.intellectual.content}
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="font-satoshi text-2xl font-bold text-foreground mb-4">
                {t.terms.sections.limitations.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.terms.sections.limitations.content}
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="font-satoshi text-2xl font-bold text-foreground mb-4">
                {t.terms.sections.modifications.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.terms.sections.modifications.content}
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="font-satoshi text-2xl font-bold text-foreground mb-4">
                {t.terms.sections.contact.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.terms.sections.contact.content}
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-background/50">
            © {new Date().getFullYear()} Preceptor.iA. {t.footer.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfUse;
