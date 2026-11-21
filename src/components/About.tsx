import { Heart, Sparkles, Star, MessageCircleHeart, Palette, PartyPopper } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import bakerDaisyCupcakes from "@/assets/baker-daisy-cupcakes.jpeg";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslations } from "@/i18n/translations";

const pillarMeta = [
  { icon: Heart, bgClass: "bg-dusty-rose-light", iconClass: "text-primary" },
  { icon: Sparkles, bgClass: "bg-blush-light", iconClass: "text-taupe" },
  { icon: Star, bgClass: "bg-sage-light", iconClass: "text-sage" },
];

const stepIcons = [MessageCircleHeart, Palette, PartyPopper];

const About = () => {
  const { lang } = useLanguage();
  const t = getTranslations(lang).about;

  return (
    <section id="about" className="section-padding bg-card/50 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        {/* Meet the Baker 2-column editorial story */}
        <Reveal>
          <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-8 md:gap-12 items-center mb-12 sm:mb-16">
            <div className="md:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-primary/20 bg-background">
                <img
                  src={bakerDaisyCupcakes}
                  alt="Dulce Mío baker smiling with handcrafted daisy cupcakes"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[320px] sm:h-[380px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3.5 py-1.5 rounded-full bg-background/90 backdrop-blur-md text-xs font-medium text-foreground shadow-sm">
                    {t.studioBadge}
                  </span>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 text-center md:text-start">
              <span className="inline-block text-primary font-medium mb-3 tracking-[0.2em] uppercase text-xs">
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

              <div className="flex items-center justify-center md:justify-start gap-3 mb-6 text-primary/40">
                <span className="h-px w-12 bg-primary/30" />
                <Heart className="w-3.5 h-3.5 fill-primary/30 text-primary/60" />
                <span className="h-px w-12 bg-primary/30" />
              </div>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-light mb-4">
                {t.p1}
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-light">
                {t.p2}
              </p>
            </div>
          </div>
        </Reveal>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
          {t.pillars.map((pillar, idx) => {
            const meta = pillarMeta[idx];
            const Icon = meta.icon;
            return (
              <Reveal key={pillar.title} delay={idx * 100}>
                <div className="h-full text-center p-7 sm:p-8 rounded-2xl bg-background card-hover border border-border/40">
                  <div
                    className={`w-14 sm:w-16 h-14 sm:h-16 ${meta.bgClass} rounded-full flex items-center justify-center mx-auto mb-5`}
                  >
                    <Icon className={`w-6 sm:w-7 h-6 sm:h-7 ${meta.iconClass}`} />
                  </div>
                  <h3 className="font-display text-xl text-foreground font-medium mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* From Sketch to Sweet journey */}
        <Reveal delay={150}>
          <div className="max-w-4xl mx-auto mt-14 sm:mt-20 pt-12 border-t border-border/50">
            <div className="text-center mb-10">
              <p className="font-display italic text-2xl sm:text-3xl text-foreground">
                {t.journeyPrefix}
                <span
                  className={
                    lang === "en"
                      ? "text-primary font-script text-3xl sm:text-4xl not-italic"
                      : "text-primary font-he-script text-2xl sm:text-3xl not-italic"
                  }
                >
                  {t.journeyHighlight}
                </span>
              </p>
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="hidden md:block absolute top-8 left-[18%] right-[18%] h-px border-t border-dashed border-primary/35 pointer-events-none" />

              {t.steps.map((item, idx) => {
                const Icon = stepIcons[idx];
                return (
                  <div key={item.step} className="relative flex flex-col items-center text-center px-2">
                    <div className="relative z-10 w-16 h-16 rounded-2xl bg-background border border-primary/25 shadow-sm flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-[11px] font-semibold flex items-center justify-center shadow">
                        {item.step}
                      </span>
                    </div>
                    <h4 className="font-display text-lg font-medium text-foreground mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-xs">
                      {item.description}
                    </p>
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

export default About;
