import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/972509052322?text=Hi%20Dulce%20M%C3%ADo!%20I%27d%20love%20to%20ask%20about%20a%20custom%20order."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 group flex items-center gap-2.5 bg-[#25D366] text-white px-4 py-3.5 rounded-full shadow-xl shadow-black/15 hover:bg-[#22c55e] hover:scale-105 transition-all duration-300"
    >
      <MessageCircle className="w-5 h-5 fill-current" />
      <span className="hidden sm:inline text-sm font-medium pr-0.5">
        Chat with me
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
