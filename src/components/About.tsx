import { Heart, Sparkles, Star } from "lucide-react";

const About = () => {
  return (
    <section id="sobre-mi" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-primary font-medium mb-4 tracking-wider uppercase text-sm">
            Sobre Mí
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Amor en Cada <span className="font-script text-primary">Detalle</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Soy una apasionada de la repostería creativa. Me dedico a crear galletas decoradas únicas, 
            pasteles personalizados y a compartir mi amor por este arte a través de talleres especiales. 
            Cada pieza que sale de mi cocina está hecha con el corazón, porque creo que los momentos 
            más dulces de la vida merecen ser celebrados con algo especial.
          </p>
          
          <div className="grid grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 rounded-2xl bg-background card-hover">
              <div className="w-14 h-14 bg-peach-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <p className="font-display text-lg text-foreground">Hecho con Amor</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-background card-hover">
              <div className="w-14 h-14 bg-rose-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-7 h-7 text-rose" />
              </div>
              <p className="font-display text-lg text-foreground">Diseños Únicos</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-background card-hover">
              <div className="w-14 h-14 bg-mint-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-7 h-7 text-mint" />
              </div>
              <p className="font-display text-lg text-foreground">Calidad Premium</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
