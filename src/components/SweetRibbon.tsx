import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslations } from "@/i18n/translations";

const SweetRibbon = () => {
  const { lang } = useLanguage();
  const items = getTranslations(lang).ribbon;

  return (
    <div
      dir="ltr"
      className="relative overflow-hidden bg-dusty-rose-light/60 border-y border-primary/15 py-3.5 select-none"
    >
      <div className="flex w-max animate-marquee">
        {[...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center">
            <span className="font-display italic text-base sm:text-lg text-warm-brown/85 tracking-wide px-6 whitespace-nowrap">
              {text}
            </span>
            <span className="text-primary text-xs">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SweetRibbon;
