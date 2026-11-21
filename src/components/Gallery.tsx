import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery3 from "@/assets/gallery-3.jpeg";
import gallery4 from "@/assets/gallery-4.jpeg";
import gallery5 from "@/assets/gallery-5.jpeg";

const Gallery = () => {
  const images = [
    { src: gallery1, alt: "Gremlin popcorn cake", title: "Custom Sculpted Cake" },
    { src: gallery2, alt: "Christmas elf cake", title: "Holiday Theme Cake" },
    { src: gallery3, alt: "Magician birthday cake", title: "Birthday Art Cake" },
    { src: gallery4, alt: "Brawl Stars character cake", title: "Character Cake" },
    { src: gallery5, alt: "Unicorn decorated cookies", title: "Hand-Piped Royal Icing Cookies" },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % images.length);
  };

  return (
    <section id="gallery" className="section-padding bg-card/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-medium mb-4 tracking-[0.2em] uppercase text-xs">
            Gallery
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground font-medium">
            My <span className="font-script text-5xl md:text-6xl text-primary">Creations</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-3 font-light">
            Tap any creation to view it up close
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {/* Big photo on the left */}
          <button
            type="button"
            onClick={() => setSelectedIndex(0)}
            className="group relative overflow-hidden rounded-xl sm:rounded-2xl card-hover h-[280px] sm:h-[350px] md:h-[500px] text-left focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <img
              src={images[0].src}
              alt={images[0].alt}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
              <span className="font-display text-xl text-white tracking-wide">
                {images[0].title}
              </span>
            </div>
          </button>

          {/* Smaller photos on the right */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {images.slice(1).map((image, index) => (
              <button
                type="button"
                key={index}
                onClick={() => setSelectedIndex(index + 1)}
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl card-hover h-[130px] sm:h-[168px] md:h-[242px] text-left focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-3 sm:p-4">
                  <span className="font-display text-sm sm:text-base text-white tracking-wide">
                    {image.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative max-w-3xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              className="absolute -top-12 right-0 text-white/80 hover:text-white p-2 transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative w-full flex items-center justify-center">
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-2 sm:-left-12 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 rounded-full p-2 transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <img
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                className="max-h-[78vh] w-auto rounded-2xl shadow-2xl object-contain"
              />

              <button
                type="button"
                onClick={handleNext}
                className="absolute right-2 sm:-right-12 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 rounded-full p-2 transition-all"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <p className="mt-4 font-display text-xl text-white tracking-wide">
              {images[selectedIndex].title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
