import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="pt-12 pb-20 sm:pb-12 bg-card/60 border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-5 text-center">
          <a href="#" className="font-script text-4xl sm:text-5xl text-primary hover:opacity-85 transition-opacity">
            Dulce Mío
          </a>

          <div className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-[0.16em] text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="#services" className="hover:text-primary transition-colors">
              Services
            </a>
            <a href="#gallery" className="hover:text-primary transition-colors">
              Gallery
            </a>
            <a href="#order" className="hover:text-primary transition-colors">
              Custom Order
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          <p className="flex items-center gap-2 text-muted-foreground text-sm font-light">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> in Israel
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 text-muted-foreground/80 text-xs font-light pt-2">
            <span>© {new Date().getFullYear()} Dulce Mío Cookies. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <a
              href="#"
              className="inline-flex items-center gap-1 hover:text-primary transition-colors"
            >
              Back to top <ArrowUp className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
