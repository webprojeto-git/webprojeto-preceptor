import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Funcionalidades", href: "#funcionalidades" },
    { label: "Sobre", href: "#sobre" },
    { label: "Para quem é", href: "#para-quem" },
    { label: "Depoimentos", href: "#depoimentos" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">P</span>
          </div>
          <span className="font-bold text-xl text-foreground">Preceptor.iA</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://api.whatsapp.com/send?phone=553197664004&text=site10"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex px-6 py-2.5 gradient-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity"
        >
          Assine já!
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-background border-b border-border py-4">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://api.whatsapp.com/send?phone=553197664004&text=site10"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center px-6 py-2.5 gradient-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Assine já!
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
