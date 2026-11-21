import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslations } from "@/i18n/translations";

const FloatingWhatsApp = () => {
  const { lang } = useLanguage();
  const t = getTranslations(lang).floating;

  return (
    <a
      href={`https://wa.me/972509052322?text=${encodeURIComponent(t.whatsappText)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.chat}
      className="fixed bottom-5 end-5 z-40 group flex items-center gap-2.5 bg-[#25D366] text-white px-4 py-3.5 rounded-full shadow-xl shadow-black/15 hover:bg-[#22c55e] hover:scale-105 transition-all duration-300"
    >
      <MessageCircle className="w-5 h-5 fill-current" />
      <span className="hidden sm:inline text-sm font-medium pr-0.5">{t.chat}</span>
    </a>
  );
};

export default FloatingWhatsApp;
