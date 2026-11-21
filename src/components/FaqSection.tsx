import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslations } from "@/i18n/translations";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { lang } = useLanguage();
  const t = getTranslations(lang).faq;

  return (
    <section id="faq" className="section-padding bg-card/50">
      <div className="container mx-auto">
        <Reveal>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-primary font-medium mb-4 tracking-[0.2em] uppercase text-xs">
                {t.eyebrow}
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground font-medium">
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
            </div>

            <div className="space-y-3">
              {t.items.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={item.q}
                    className="rounded-2xl bg-background border border-border/50 overflow-hidden transition-shadow duration-300 hover:shadow-md"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-start"
                    >
                      <span className="font-display text-lg sm:text-xl text-foreground font-medium">
                        {item.q}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-5 text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default FaqSection;
