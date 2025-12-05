import heroCookies from "@/assets/hero-cookies.jpg";

const Gallery = () => {
  // Using the hero image as placeholder - user will add their photos
  const images = [
    { src: heroCookies, alt: "Galletas decoradas rosa" },
    { src: heroCookies, alt: "Galletas de temporada" },
    { src: heroCookies, alt: "Galletas personalizadas" },
    { src: heroCookies, alt: "Taller de galletas" },
  ];

  return (
    <section id="galeria" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-medium mb-4 tracking-wider uppercase text-sm">
            Galería
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Mis <span className="font-script text-primary">Creaciones</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                className={`w-full object-cover transition-transform duration-500 hover:scale-110 ${
                  index === 0 ? "h-full min-h-[400px]" : "h-48 md:h-56"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
