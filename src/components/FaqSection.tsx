import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const faqs = [
  {
    q: "How far in advance should I place a custom order?",
    a: "Because every cookie and cake is baked and hand-decorated from scratch, I recommend reaching out at least 1–2 weeks in advance for cookies and 2–3 weeks for custom sculpted cakes. Last-minute dates may occasionally be available—feel free to ask on WhatsApp!",
  },
  {
    q: "Can you match my party theme, colors, or invitations?",
    a: "Yes! Custom themes are my favorite part. You can share your invitation, color palette, or inspiration photos on WhatsApp, and I'll design a cohesive set of cookies or a centerpiece cake tailored to your celebration.",
  },
  {
    q: "How do the cookie decorating workshops work?",
    a: "Workshops are hands-on, beginner-friendly sessions where everything is provided—freshly baked cookies, royal icing colors, and decorating tools. They are available both for seasonal holidays and for private groups, birthdays, or team events.",
  },
  {
    q: "How do I book or ask about pricing?",
    a: "Every creation is priced according to design complexity, size, and quantity. Simply message me on WhatsApp or use the Sweet Order Designer above with your event date and idea, and I'll get back to you quickly with a tailored quote.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-card/50">
      <div className="container mx-auto">
        <Reveal>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-primary font-medium mb-4 tracking-[0.2em] uppercase text-xs">
                Good to Know
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground font-medium">
                Sweet <span className="font-script text-5xl md:text-6xl text-primary">Questions</span>
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((item, idx) => {
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
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
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
