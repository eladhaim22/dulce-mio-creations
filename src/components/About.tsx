import { Heart, Sparkles, Star, MessageCircleHeart, Palette, PartyPopper } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const pillars = [
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every batch is baked from scratch in small quantities with genuine care and attention.",
    bgClass: "bg-dusty-rose-light",
    iconClass: "text-primary",
  },
  {
    icon: Sparkles,
    title: "Unique Designs",
    description: "Custom color palettes, hand-piped details, and themes tailored to your celebration.",
    bgClass: "bg-blush-light",
    iconClass: "text-taupe",
  },
  {
    icon: Star,
    title: "Premium Quality",
    description: "Fine ingredients so every creation tastes just as unforgettable as it looks.",
    bgClass: "bg-sage-light",
    iconClass: "text-sage",
  },
];

const steps = [
  {
    icon: MessageCircleHeart,
    step: "01",
    title: "Share Your Vision",
    description: "Tell me your theme, colors, event date, and how many guests you're celebrating with.",
  },
  {
    icon: Palette,
    step: "02",
    title: "Handcrafted & Piped",
    description: "I design, bake, and hand-decorate every cookie or cake fresh for your special day.",
  },
  {
    icon: PartyPopper,
    step: "03",
    title: "Sweet Celebration",
    description: "Pick up your edible centerpiece and delight your guests with unforgettable sweetness.",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-card/50 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-primary font-medium mb-4 tracking-[0.2em] uppercase text-xs">
              About Me
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 font-medium">
              Love in Every <span className="font-script text-5xl md:text-6xl text-primary">Detail</span>
            </h2>

            {/* Delicate flourish divider */}
            <div className="flex items-center justify-center gap-3 mb-8 text-primary/40">
              <span className="h-px w-12 bg-primary/30" />
              <Heart className="w-3.5 h-3.5 fill-primary/30 text-primary/60" />
              <span className="h-px w-12 bg-primary/30" />
            </div>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-10 font-light">
              I'm passionate about creative baking. I dedicate myself to creating unique decorated cookies,
              custom cakes, and sharing my love for this art through special workshops.
              Every piece that comes out of my kitchen is made with heart, because I believe that life's
              sweetest moments deserve to be celebrated with something truly special.
            </p>
          </div>
        </Reveal>

        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 mt-8 sm:mt-12">
          {pillars.map((pillar, idx) => (
            <Reveal key={pillar.title} delay={idx * 100}>
              <div className="h-full text-center p-7 sm:p-8 rounded-2xl bg-background card-hover border border-border/40">
                <div
                  className={`w-14 sm:w-16 h-14 sm:h-16 ${pillar.bgClass} rounded-full flex items-center justify-center mx-auto mb-5`}
                >
                  <pillar.icon className={`w-6 sm:w-7 h-6 sm:h-7 ${pillar.iconClass}`} />
                </div>
                <h3 className="font-display text-xl text-foreground font-medium mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* From Sketch to Sweet journey */}
        <Reveal delay={150}>
          <div className="max-w-4xl mx-auto mt-14 sm:mt-20 pt-12 border-t border-border/50">
            <div className="text-center mb-10">
              <p className="font-display italic text-2xl sm:text-3xl text-foreground">
                From Sketch to <span className="text-primary font-script text-3xl sm:text-4xl not-italic">Sweet</span>
              </p>
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Connecting dashed line on desktop */}
              <div className="hidden md:block absolute top-8 left-[18%] right-[18%] h-px border-t border-dashed border-primary/35 pointer-events-none" />

              {steps.map((item) => (
                <div key={item.step} className="relative flex flex-col items-center text-center px-2">
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-background border border-primary/25 shadow-sm flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
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
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
