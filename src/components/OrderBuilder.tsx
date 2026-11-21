import { useState } from "react";
import { Sparkles, Send, Heart } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const occasions = [
  "Birthday",
  "Wedding / Engagement",
  "Baby Shower",
  "Holiday",
  "Workshop",
  "Just Because",
];

const creationTypes = [
  "Decorated Cookies",
  "Custom Cake",
  "Cookies & Cake Set",
  "Decorating Workshop",
];

interface Sprinkle {
  id: number;
  tx: string;
  ty: string;
  rot: string;
  color: string;
}

const sprinkleColors = ["#d48c98", "#ecc5b5", "#a3bfa8", "#f3d5c0", "#c97a89"];

const OrderBuilder = () => {
  const [occasion, setOccasion] = useState("Birthday");
  const [creation, setCreation] = useState("Decorated Cookies");
  const [details, setDetails] = useState("");
  const [sprinkles, setSprinkles] = useState<Sprinkle[]>([]);

  const composedMessage = `Hi Dulce Mío! I'd love to plan a sweet order:\n• Occasion: ${occasion}\n• Looking for: ${creation}${
    details.trim() ? `\n• Theme / Date / Details: ${details.trim()}` : ""
  }`;

  const whatsappUrl = `https://wa.me/972509052322?text=${encodeURIComponent(composedMessage)}`;

  const triggerSprinkles = () => {
    const batch: Sprinkle[] = Array.from({ length: 16 }).map((_, i) => {
      const angle = (i / 16) * Math.PI * 2;
      const distance = 45 + Math.random() * 55;
      return {
        id: Date.now() + i,
        tx: `${Math.cos(angle) * distance}px`,
        ty: `${Math.sin(angle) * distance - 20}px`,
        rot: `${Math.round(Math.random() * 360)}deg`,
        color: sprinkleColors[i % sprinkleColors.length],
      };
    });
    setSprinkles(batch);
    setTimeout(() => setSprinkles([]), 950);
  };

  return (
    <section id="order" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blush-light/35 to-background pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <Reveal>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-1.5 text-primary font-medium mb-4 tracking-[0.2em] uppercase text-xs">
                <Sparkles className="w-3.5 h-3.5" />
                Sweet Studio
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground font-medium">
                Design Your{" "}
                <span className="font-script text-5xl md:text-6xl text-primary">Sweet Order</span>
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mt-3 font-light">
                Pick a few details below and send your personalized request straight to WhatsApp
              </p>
            </div>

            <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-6 sm:p-10 border border-primary/20 shadow-xl shadow-primary/5">
              {/* Step 1: Occasion */}
              <div className="mb-7">
                <label className="block text-xs font-medium uppercase tracking-[0.18em] text-taupe mb-3">
                  1. What are we celebrating?
                </label>
                <div className="flex flex-wrap gap-2">
                  {occasions.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setOccasion(item)}
                      className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                        occasion === item
                          ? "bg-primary text-primary-foreground shadow-sm scale-[1.02]"
                          : "bg-background text-foreground/80 border border-border/60 hover:border-primary/40 hover:text-primary"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Creation */}
              <div className="mb-7">
                <label className="block text-xs font-medium uppercase tracking-[0.18em] text-taupe mb-3">
                  2. What would you like?
                </label>
                <div className="flex flex-wrap gap-2">
                  {creationTypes.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setCreation(item)}
                      className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                        creation === item
                          ? "bg-warm-brown text-primary-foreground shadow-sm scale-[1.02]"
                          : "bg-background text-foreground/80 border border-border/60 hover:border-primary/40 hover:text-primary"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Optional Details */}
              <div className="mb-7">
                <label
                  htmlFor="order-details"
                  className="block text-xs font-medium uppercase tracking-[0.18em] text-taupe mb-3"
                >
                  3. Theme, date, or guest count <span className="lowercase font-light">(optional)</span>
                </label>
                <input
                  id="order-details"
                  type="text"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="e.g., Pastel unicorn theme for 25 guests on May 14..."
                  className="w-full rounded-2xl bg-background border border-border/70 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all"
                />
              </div>

              {/* Live preview */}
              <div className="rounded-2xl bg-background/80 border border-border/50 p-4 mb-7">
                <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-1.5 flex items-center gap-1.5">
                  <Heart className="w-3 h-3 text-primary fill-primary/40" />
                  Your WhatsApp Message Preview
                </p>
                <p className="text-xs sm:text-sm text-foreground/85 whitespace-pre-line font-light leading-relaxed">
                  {composedMessage}
                </p>
              </div>

              {/* CTA with sprinkle burst */}
              <div className="relative flex justify-center">
                {sprinkles.map((s) => (
                  <span
                    key={s.id}
                    aria-hidden="true"
                    className="pointer-events-none absolute top-1/2 left-1/2 w-2.5 h-1.5 rounded-full animate-sprinkle z-20"
                    style={
                      {
                        backgroundColor: s.color,
                        "--tx": s.tx,
                        "--ty": s.ty,
                        "--rot": s.rot,
                      } as React.CSSProperties
                    }
                  />
                ))}

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={triggerSprinkles}
                  className="animate-shimmer w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium tracking-wide hover:bg-primary/90 transition-all duration-500 shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 text-sm sm:text-base"
                >
                  <Send className="w-4 h-4" />
                  Send Sweet Request on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default OrderBuilder;
