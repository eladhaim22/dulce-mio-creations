import { Phone, Mail, Instagram, Facebook, MessageCircle, Copy } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslations } from "@/i18n/translations";

const Contact = () => {
  const { lang } = useLanguage();
  const t = getTranslations(lang).contact;

  const copyToClipboard = (e: React.MouseEvent, text: string, successMessage: string) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    toast.success(successMessage);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block text-primary font-medium mb-4 tracking-[0.2em] uppercase text-xs">
              {t.eyebrow}
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-5 font-medium">
              {t.headingPrefix}
              <span
                className={
                  lang === "en"
                    ? "font-script text-5xl md:text-6xl text-primary"
                    : "font-he-script text-4xl md:text-5xl text-primary"
                }
              >
                {t.headingHighlight}
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-12 font-light">
              {t.subtitle}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-12">
              <a
                href="tel:0509052322"
                className="relative flex items-center justify-between gap-3 p-5 sm:p-6 rounded-2xl bg-card border border-border/40 card-hover group"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-12 sm:w-14 h-12 sm:h-14 bg-dusty-rose-light rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shrink-0">
                    <Phone className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                  </div>
                  <div className="text-start">
                    <p className="text-xs text-muted-foreground tracking-wide uppercase">
                      {t.phoneLabel}
                    </p>
                    <p
                      dir="ltr"
                      className="font-display text-base sm:text-lg text-foreground font-medium"
                    >
                      050-905-2322
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={(e) => copyToClipboard(e, "050-905-2322", t.copiedPhone)}
                  className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors shrink-0"
                  aria-label="Copy phone number"
                  title="Copy phone number"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </a>

              <a
                href="mailto:dulcemiocookies@gmail.com"
                className="relative flex items-center justify-between gap-3 p-5 sm:p-6 rounded-2xl bg-card border border-border/40 card-hover group"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-12 sm:w-14 h-12 sm:h-14 bg-blush-light rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shrink-0">
                    <Mail className="w-5 sm:w-6 h-5 sm:h-6 text-taupe" />
                  </div>
                  <div className="text-start min-w-0">
                    <p className="text-xs text-muted-foreground tracking-wide uppercase">
                      {t.emailLabel}
                    </p>
                    <p
                      dir="ltr"
                      className="font-display text-sm sm:text-base text-foreground font-medium truncate"
                    >
                      dulcemiocookies@gmail.com
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={(e) =>
                    copyToClipboard(e, "dulcemiocookies@gmail.com", t.copiedEmail)
                  }
                  className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors shrink-0"
                  aria-label="Copy email address"
                  title="Copy email address"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </a>
            </div>

            <div className="flex justify-center gap-4 sm:gap-5">
              <a
                href="https://wa.me/972509052322"
                target="_blank"
                rel="noopener noreferrer"
                className="w-13 h-13 sm:w-14 sm:h-14 p-3.5 bg-[#25D366] rounded-full flex items-center justify-center text-white hover:bg-[#22c55e] hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
                aria-label="Contact us on WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/dulcemiocookies"
                target="_blank"
                rel="noopener noreferrer"
                className="w-13 h-13 sm:w-14 sm:h-14 p-3.5 bg-primary/90 rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61576aborele828"
                target="_blank"
                rel="noopener noreferrer"
                className="w-13 h-13 sm:w-14 sm:h-14 p-3.5 bg-taupe/80 rounded-full flex items-center justify-center text-primary-foreground hover:bg-taupe hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
