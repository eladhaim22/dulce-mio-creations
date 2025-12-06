import { Heart, Sparkles, Star } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-card/50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-primary font-medium mb-4 tracking-[0.2em] uppercase text-xs">
            About Me
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8 font-medium">
            Love in Every <span className="font-script text-5xl md:text-6xl text-primary">Detail</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 font-light">
            I'm passionate about creative baking. I dedicate myself to creating unique decorated cookies, 
            custom cakes, and sharing my love for this art through special workshops. 
            Every piece that comes out of my kitchen is made with heart, because I believe that life's 
            sweetest moments deserve to be celebrated with something special.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-14">
            <div className="text-center p-6 sm:p-8 rounded-2xl bg-background card-hover border border-border/30">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-dusty-rose-light rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5">
                <Heart className="w-5 sm:w-7 h-5 sm:h-7 text-primary" />
              </div>
              <p className="font-display text-base sm:text-lg text-foreground font-medium">Made with Love</p>
            </div>
            <div className="text-center p-6 sm:p-8 rounded-2xl bg-background card-hover border border-border/30">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-blush-light rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5">
                <Sparkles className="w-5 sm:w-7 h-5 sm:h-7 text-taupe" />
              </div>
              <p className="font-display text-base sm:text-lg text-foreground font-medium">Unique Designs</p>
            </div>
            <div className="text-center p-6 sm:p-8 rounded-2xl bg-background card-hover border border-border/30">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-sage-light rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5">
                <Star className="w-5 sm:w-7 h-5 sm:h-7 text-sage" />
              </div>
              <p className="font-display text-base sm:text-lg text-foreground font-medium">Premium Quality</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
