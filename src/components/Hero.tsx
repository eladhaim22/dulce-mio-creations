import { Heart } from "lucide-react";
import heroCookies from "@/assets/hero-cookies.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-peach-light via-background to-rose-light opacity-60" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left animate-fade-up">
            <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">Hecho con amor</p>
            <h1 className="font-script text-6xl md:text-7xl lg:text-8xl text-foreground mb-4">
              Dulce Mío
            </h1>
            <p className="font-display text-2xl md:text-3xl text-chocolate mb-6">
              Cookies & Cakes
            </p>
            <p className="text-lg text-muted-foreground max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed">
              Galletas decoradas, pasteles y talleres especiales para tus momentos más dulces. 
              Cada creación está hecha con amor y dedicación.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#contacto" 
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <Heart className="w-5 h-5" />
                Contáctame
              </a>
              <a 
                href="#servicios" 
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/10 transition-all duration-300"
              >
                Ver Servicios
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={heroCookies} 
                alt="Galletas decoradas artesanales de Dulce Mío" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate/20 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-xl animate-float">
              <p className="font-script text-2xl text-primary">100% Artesanal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
