import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X, Heart, ZoomIn } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery3 from "@/assets/gallery-3.jpeg";
import gallery4 from "@/assets/gallery-4.jpeg";
import gallery5 from "@/assets/gallery-5.jpeg";
import heroCookies from "@/assets/hero-cookies.jpg";
import { Reveal } from "@/components/Reveal";

type Category = "All" | "Custom Cakes" | "Decorated Cookies";

interface Creation {
  src: string;
  alt: string;
  title: string;
  category: Exclude<Category, "All">;
  subtitle: string;
}

const creations: Creation[] = [
  {
    src: gallery1,
    alt: "Gremlin popcorn cake",
    title: "Custom Sculpted Cake",
    category: "Custom Cakes",
    subtitle: "3D sculpted cinema-themed centerpiece",
  },
  {
    src: gallery2,
    alt: "Christmas elf cake",
    title: "Holiday Theme Cake",
    category: "Custom Cakes",
    subtitle: "Festive handcrafted seasonal design",
  },
  {
    src: gallery3,
    alt: "Magician birthday cake",
    title: "Birthday Art Cake",
    category: "Custom Cakes",
    subtitle: "Whimsical magic-inspired celebration cake",
  },
  {
    src: gallery4,
    alt: "Brawl Stars character cake",
    title: "Character Cake",
    category: "Custom Cakes",
    subtitle: "Detailed character fondant & buttercream",
  },
  {
    src: gallery5,
    alt: "Unicorn decorated cookies",
    title: "Hand-Piped Unicorn Cookies",
    category: "Decorated Cookies",
    subtitle: "Delicate royal icing pastel details",
  },
  {
    src: heroCookies,
    alt: "Signature royal icing cookies assortment",
    title: "Signature Cookie Collection",
    category: "Decorated Cookies",
    subtitle: "Custom shapes & colors baked to order",
  },
];

const categories: Category[] = ["All", "Custom Cakes", "Decorated Cookies"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? creations
      : creations.filter((item) => item.category === activeCategory);

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + filtered.length) % filtered.length);
  };

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % filtered.length);
  };

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) =>
          prev === null ? null : (prev - 1 + filtered.length) % filtered.length
        );
      }
      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % filtered.length));
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedIndex, filtered.length]);

  const currentItem = selectedIndex !== null ? filtered[selectedIndex] : null;

  return (
    <section id="gallery" className="section-padding bg-card/50">
      <div className="container mx-auto">
        <Reveal>
          <div className="text-center mb-10 sm:mb-12">
            <span className="inline-block text-primary font-medium mb-4 tracking-[0.2em] uppercase text-xs">
              Gallery
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground font-medium">
              My <span className="font-script text-5xl md:text-6xl text-primary">Creations</span>
            </h2>
            <p className="text-sm text-muted-foreground mt-3 font-light">
              Tap any creation to view it up close
            </p>

            {/* Category filter pills */}
            <div className="flex flex-wrap justify-center gap-2 mt-7">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setActiveCategory(cat);
                    setSelectedIndex(null);
                  }}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                      : "bg-background text-muted-foreground hover:text-foreground border border-border/60 hover:border-primary/40"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filtered.map((image, index) => (
            <Reveal key={image.title} delay={index * 70}>
              <button
                type="button"
                onClick={() => setSelectedIndex(index)}
                className={`group relative w-full overflow-hidden rounded-2xl card-hover text-left focus:outline-none focus:ring-2 focus:ring-primary/50 border border-border/30 bg-background ${
                  activeCategory === "All" && index === 0
                    ? "sm:col-span-2 lg:col-span-1 h-[300px] sm:h-[340px]"
                    : "h-[280px] sm:h-[340px]"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Top category pill */}
                <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-background/85 backdrop-blur-md text-[11px] font-medium text-foreground/90 border border-border/40 shadow-sm">
                  {image.category}
                </span>

                {/* Zoom icon */}
                <span className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-background/85 backdrop-blur-md flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 shadow-sm">
                  <ZoomIn className="w-4 h-4 text-primary" />
                </span>

                {/* Hover gradient & caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/75 via-warm-brown/15 to-transparent opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
                  <span className="font-display text-xl text-white tracking-wide leading-tight">
                    {image.title}
                  </span>
                  <span className="text-xs text-white/80 font-light mt-1">
                    {image.subtitle}
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      {currentItem && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative max-w-3xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between text-white/80 mb-3 px-1">
              <span className="text-xs tracking-widest uppercase">
                {selectedIndex + 1} / {filtered.length} • {currentItem.category}
              </span>
              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                className="text-white/80 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="relative w-full flex items-center justify-center">
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-2 sm:-left-14 text-white/85 hover:text-white bg-black/45 hover:bg-black/70 rounded-full p-2.5 transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <img
                src={currentItem.src}
                alt={currentItem.alt}
                className="max-h-[70vh] w-auto rounded-2xl shadow-2xl object-contain"
              />

              <button
                type="button"
                onClick={handleNext}
                className="absolute right-2 sm:-right-14 text-white/85 hover:text-white bg-black/45 hover:bg-black/70 rounded-full p-2.5 transition-all"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="mt-5 text-center">
              <p className="font-display text-2xl text-white tracking-wide">
                {currentItem.title}
              </p>
              <p className="text-sm text-white/75 font-light mt-1 mb-4">
                {currentItem.subtitle}
              </p>
              <a
                href={`https://wa.me/972509052322?text=${encodeURIComponent(
                  `Hi Dulce Mío! I saw "${currentItem.title}" in your gallery and would love to order something similar.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-all shadow-lg"
              >
                <Heart className="w-4 h-4 fill-current" />
                Order Something Similar
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
