import { Cookie, Cake, GraduationCap, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import coneCupcakesBox from "@/assets/cone-cupcakes-box.jpeg";
import cakeRaeFloral from "@/assets/cake-rae-floral.jpeg";
import kitBirthdayPink from "@/assets/kit-birthday-pink.jpeg";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslations } from "@/i18n/translations";

const serviceVisuals = [
  {
    icon: Cookie,
    image: coneCupcakesBox,
    imageAlt: "Pastel swirl ice-cream cone cupcakes in pink gift box",
    color: "dusty-rose",
  },
  {
    icon: Cake,
    image: cakeRaeFloral,
    imageAlt: "Custom floral 1st birthday cake",
    color: "blush",
  },
  {
    icon: GraduationCap,
    image: kitBirthdayPink,
    imageAlt: "Pink scalloped birthday cookie decorating kit",
    color: "sage",
  },
];

const Services = () => {
  const { lang, isRtl } = useLanguage();
  const t = getTranslations(lang).services;

  return (
    <section id="services" className="section-padding relative">
      <div className="container mx-auto">
        <Reveal>
          <div className="text-center mb-14 sm:mb-16">
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
            <p className="text-sm sm:text-base text-muted-foreground mt-3 font-light max-w-md mx-auto">
              {t.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {t.items.map((service, index) => {
            const visual = serviceVisuals[index];
            const Icon = visual.icon;
            return (
              <Reveal key={service.title} delay={index * 120}>
                <div className="group h-full flex flex-col justify-between rounded-3xl bg-card border border-border/40 card-hover text-center overflow-hidden">
                  <div>
                    {/* Service photo header */}
                    <div className="relative h-48 sm:h-52 overflow-hidden">
                      <img
                        src={visual.image}
                        alt={visual.imageAlt}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    </div>

                    {/* Overlapping icon */}
                    <div
                      className={`relative z-10 -mt-8 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-md border border-background transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 ${
                        visual.color === "dusty-rose"
                          ? "bg-dusty-rose-light"
                          : visual.color === "blush"
                          ? "bg-blush-light"
                          : "bg-sage-light"
                      }`}
                    >
                      <Icon
                        className={`w-7 h-7 ${
                          visual.color === "dusty-rose"
                            ? "text-primary"
                            : visual.color === "blush"
                            ? "text-taupe"
                            : "text-sage"
                        }`}
                      />
                    </div>

                    <div className="px-6 sm:px-8">
                      <h3 className="font-display text-2xl text-foreground mb-3 font-medium">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-light mb-6">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap justify-center gap-1.5 mb-7">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full text-[11px] font-medium tracking-wide bg-background text-taupe border border-border/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/972509052322?text=${encodeURIComponent(service.whatsappText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-6 sm:mx-8 mb-7 inline-flex items-center justify-center gap-1.5 text-sm font-medium text-primary hover:text-warm-brown transition-colors pt-4 border-t border-border/40"
                  >
                    <span>{t.inquire}</span>
                    <ArrowRight
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isRtl
                          ? "rotate-180 group-hover:-translate-x-1"
                          : "group-hover:translate-x-1"
                      }`}
                    />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
