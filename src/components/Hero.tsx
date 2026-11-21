import { useRef, useState } from "react";
import { Heart, Sparkles, ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";
import cakeVintageRibbon from "@/assets/cake-vintage-ribbon.jpeg";
import coneCupcakesBox from "@/assets/cone-cupcakes-box.jpeg";
import cookiesIcecreamCone from "@/assets/cookies-icecream-cone.jpeg";
import alfajoresGiftBox from "@/assets/alfajores-gift-box.jpeg";
import cakeRainbowClouds from "@/assets/cake-rainbow-clouds.jpeg";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslations } from "@/i18n/translations";

const slideAssets = [
  {
    src: cakeVintageRibbon,
    alt: "Two-tier vintage buttercream birthday cake with pink satin ribbons",
  },
  {
    src: coneCupcakesBox,
    alt: "Pastel swirl ice-cream cone cupcakes in pink gift box",
  },
  {
    src: cookiesIcecreamCone,
    alt: "Hand-piped pastel blue ice-cream cone royal icing cookie",
  },
  {
    src: alfajoresGiftBox,
    alt: "Artisanal coconut alfajores in a Baked with Love gift box",
  },
  {
    src: cakeRainbowClouds,
    alt: "Rainbow and smiling clouds 3rd birthday cake",
  },
];

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const pointerStartX = useRef<number | null>(null);
  const { lang } = useLanguage();
  const t = getTranslations(lang);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + slideAssets.length) % slideAssets.length);
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slideAssets.length);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    pointerStartX.current = e.clientX;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (pointerStartX.current === null) return;
    const diff = e.clientX - pointerStartX.current;
    pointerStartX.current = null;
    if (Math.abs(diff) > 35) {
      if (diff < 0) handleNext();
      else handlePrev();
    }
  };

  return (
    <section className="relative min-h-[88vh] lg:min-h-[92vh] flex items-center overflow-hidden py-10 lg:py-0">
      {/* Layered pastel background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blush-light via-background to-dusty-rose-light/50" />
      <div className="absolute inset-0 bg-linen-grain pointer-events-none" />

      {/* Soft ambient halos */}
      <div className="absolute top-16 left-4 lg:left-12 w-36 lg:w-64 h-36 lg:h-64 bg-primary/12 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-16 right-4 lg:right-12 w-44 lg:w-72 h-44 lg:h-72 bg-blush/40 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-sage-light/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Text content */}
          <div className="lg:col-span-6 text-center lg:text-start animate-fade-up order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dusty-rose-light/80 border border-primary/20 mb-5">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-primary font-medium tracking-[0.16em] uppercase text-[11px]">
                {t.hero.badge}
              </span>
            </div>

            <h1 className="font-script text-6xl sm:text-7xl md:text-8xl text-foreground mb-3 lg:mb-4 leading-[1.05]">
              Dulce Mío
            </h1>

            <p className="font-display text-2xl sm:text-3xl md:text-4xl text-taupe mb-5 lg:mb-7 italic font-light tracking-wide">
              {t.hero.subtitle}
            </p>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 lg:mb-10 leading-relaxed font-light px-2 lg:px-0">
              {t.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 justify-center lg:justify-start px-4 lg:px-0">
              <a
                href={`https://wa.me/972509052322?text=${encodeURIComponent(t.hero.whatsappPrefill)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="animate-shimmer inline-flex items-center justify-center gap-2.5 bg-primary text-primary-foreground px-7 sm:px-9 py-3.5 sm:py-4 rounded-full font-medium tracking-wide hover:bg-primary/90 transition-all duration-500 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 text-sm sm:text-base"
              >
                <Heart className="w-4 h-4 fill-current" />
                {t.hero.ctaOrder}
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center justify-center gap-2 bg-card/70 backdrop-blur-sm border border-primary/30 text-foreground px-7 sm:px-9 py-3.5 sm:py-4 rounded-full font-medium tracking-wide hover:bg-primary/10 hover:border-primary/50 transition-all duration-500 text-sm sm:text-base"
              >
                {t.hero.ctaGallery}
              </a>
            </div>
          </div>

          {/* Arch-framed swipeable carousel */}
          <div
            className="lg:col-span-6 relative animate-fade-up order-1 lg:order-2 flex justify-center"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative w-full max-w-[460px]">
              {/* Rotating circular seal */}
              <div className="hidden sm:flex absolute -top-6 -right-6 z-20 w-24 h-24 items-center justify-center pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
                  <defs>
                    <path
                      id="sealCircle"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <text className="fill-primary/80 text-[9.5px] uppercase tracking-[0.22em] font-medium">
                    <textPath href="#sealCircle">{t.hero.sealText}</textPath>
                  </text>
                </svg>
                <Heart className="absolute w-4 h-4 text-primary fill-primary/80" />
              </div>

              {/* Arch + floating badge wrapper */}
              <div className="relative">
                <div
                  dir="ltr"
                  onPointerDown={onPointerDown}
                  onPointerUp={onPointerUp}
                  className="relative rounded-t-[10rem] rounded-b-[2rem] overflow-hidden shadow-2xl shadow-warm-brown/15 ring-1 ring-primary/25 ring-offset-4 ring-offset-background bg-card touch-pan-y select-none cursor-grab active:cursor-grabbing"
                >
                  <div className="relative h-[340px] sm:h-[440px] lg:h-[520px] w-full overflow-hidden">
                    {/* Horizontal sliding track */}
                    <div
                      className="flex h-full transition-transform duration-500 ease-out"
                      style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                    >
                      {slideAssets.map((item, idx) => (
                        <div key={item.alt} className="w-full h-full shrink-0 relative">
                          <img
                            src={item.src}
                            alt={item.alt}
                            fetchPriority={idx === 0 ? "high" : "auto"}
                            decoding="async"
                            draggable={false}
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/35 via-transparent to-transparent pointer-events-none" />

                    {/* Easy left/right swipe arrows */}
                    <button
                      type="button"
                      onClick={handlePrev}
                      aria-label="Previous creation"
                      className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/85 backdrop-blur-md text-foreground hover:bg-background hover:text-primary shadow-md border border-border/40 flex items-center justify-center transition-all hover:scale-105"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                      type="button"
                      onClick={handleNext}
                      aria-label="Next creation"
                      className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/85 backdrop-blur-md text-foreground hover:bg-background hover:text-primary shadow-md border border-border/40 flex items-center justify-center transition-all hover:scale-105"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 left-2 sm:-left-6 z-20 bg-card/95 backdrop-blur-md px-4 py-2.5 sm:px-5 sm:py-3.5 rounded-2xl shadow-xl animate-float border border-primary/20">
                  <p
                    className={
                      lang === "en"
                        ? "font-script text-xl sm:text-2xl text-primary leading-none"
                        : "font-he-script text-lg sm:text-xl text-primary leading-none"
                    }
                  >
                    {t.hero.handmadeTitle}
                  </p>
                  <p className="text-[11px] text-muted-foreground tracking-wider uppercase mt-0.5">
                    {t.hero.handmadeSub}
                  </p>
                </div>
              </div>

              {/* Caption & dots cleanly below the arch */}
              <div className="mt-7 flex items-center justify-center gap-3 px-2">
                <span className="px-3.5 py-1 rounded-full bg-card/90 text-xs font-medium text-foreground shadow-sm border border-border/50">
                  {t.hero.slides[activeSlide]}
                </span>

                <div className="flex items-center gap-1.5 bg-card/90 px-2.5 py-1.5 rounded-full border border-border/50">
                  {slideAssets.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveSlide(idx)}
                      aria-label={`Show ${t.hero.slides[idx]}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        activeSlide === idx
                          ? "w-6 bg-primary"
                          : "w-2 bg-primary/30 hover:bg-primary/60"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="hidden lg:flex justify-center mt-8">
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-1.5 text-muted-foreground/70 hover:text-primary transition-colors text-xs tracking-widest uppercase"
          >
            <span>{t.hero.scrollCue}</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
