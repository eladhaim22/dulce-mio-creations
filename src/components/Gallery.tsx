import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery3 from "@/assets/gallery-3.jpeg";
import gallery4 from "@/assets/gallery-4.jpeg";
import gallery5 from "@/assets/gallery-5.jpeg";

const Gallery = () => {
  const images = [
    { src: gallery1, alt: "Gremlin popcorn cake" },
    { src: gallery2, alt: "Christmas elf cake" },
    { src: gallery3, alt: "Magician birthday cake" },
    { src: gallery4, alt: "Brawl Stars character cake" },
    { src: gallery5, alt: "Unicorn decorated cookies" },
  ];

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
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div 
              key={index}
              className={`relative overflow-hidden rounded-2xl card-hover ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-700 hover:scale-105 ${
                  index === 0 ? "h-full min-h-[420px]" : "h-48 md:h-64"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
