import { Heart, ArrowUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslations } from "@/i18n/translations";

const Footer = () => {
  const { lang } = useLanguage();
  const t = getTranslations(lang);

  return (
    <footer className="pt-12 pb-20 sm:pb-12 bg-card/60 border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-5 text-center">
          <a
            href="#"
            className="font-script text-4xl sm:text-5xl text-primary hover:opacity-85 transition-opacity"
          >
            Dulce Mío
          </a>

          <div className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-[0.16em] text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">
              {t.nav.about}
            </a>
            <a href="#services" className="hover:text-primary transition-colors">
              {t.nav.services}
            </a>
            <a href="#gallery" className="hover:text-primary transition-colors">
              {t.nav.gallery}
            </a>
            <a href="#order" className="hover:text-primary transition-colors">
              {t.nav.orderNow}
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              {t.nav.contact}
            </a>
          </div>

          <p className="flex items-center gap-2 text-muted-foreground text-sm font-light">
            {t.footer.madeWith} <Heart className="w-4 h-4 text-primary fill-primary" />{" "}
            {t.footer.inIsrael}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 text-muted-foreground/80 text-xs font-light pt-2">
            <span>
              © {new Date().getFullYear()} {t.footer.rights}
            </span>
            <span className="hidden sm:inline">•</span>
            <a
              href="#"
              className="inline-flex items-center gap-1 hover:text-primary transition-colors"
            >
              {t.footer.backToTop} <ArrowUp className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
