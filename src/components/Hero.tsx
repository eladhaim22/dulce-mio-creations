import { Heart } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden py-8 lg:py-0">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-blush-light via-background to-dusty-rose-light/40 opacity-70" />
      <div className="absolute top-20 left-4 lg:left-10 w-24 lg:w-40 h-24 lg:h-40 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-4 lg:right-10 w-32 lg:w-48 h-32 lg:h-48 bg-blush/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left animate-fade-up order-2 lg:order-1">
            <p className="text-primary font-medium mb-2 lg:mb-3 tracking-[0.2em] uppercase text-xs">Made with Love</p>
            <h1 className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground mb-4 lg:mb-6 leading-tight">
              Dulce Mío
            </h1>
            <p className="font-display text-xl sm:text-2xl md:text-3xl text-taupe mb-6 lg:mb-8 italic font-light tracking-wide">
              Cookies & Cakes
            </p>
            <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto lg:mx-0 mb-8 lg:mb-10 leading-relaxed font-light px-4 lg:px-0">
              Decorated cookies, custom cakes, and special workshops for your sweetest moments. 
              Every creation is made with love and dedication.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 lg:px-0">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium tracking-wide hover:bg-primary/90 transition-all duration-500 hover:shadow-xl hover:-translate-y-0.5 text-sm sm:text-base"
              >
                <Heart className="w-4 h-4" />
                Contact Me
              </a>
              <a 
                href="#services" 
                className="inline-flex items-center justify-center gap-2 border border-primary/40 text-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium tracking-wide hover:bg-primary/5 transition-all duration-500 text-sm sm:text-base"
              >
                View Services
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-up order-1 lg:order-2" style={{ animationDelay: "0.3s" }}>
            <div className="relative rounded-2xl lg:rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src={gallery1} 
                alt="Handcrafted Gremlin cake by Dulce Mío"
                className="w-full h-[300px] sm:h-[400px] lg:h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/20 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 left-4 lg:-bottom-6 lg:-left-6 bg-card/95 backdrop-blur-sm p-3 lg:p-5 rounded-xl lg:rounded-2xl shadow-xl animate-float border border-border/50">
              <p className="font-script text-lg lg:text-2xl text-primary">100% Handmade</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
