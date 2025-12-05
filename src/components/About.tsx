import { Heart, Sparkles, Star } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-primary font-medium mb-4 tracking-wider uppercase text-sm">
            About Me
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Love in Every <span className="font-script text-primary">Detail</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            I'm passionate about creative baking. I dedicate myself to creating unique decorated cookies, 
            custom cakes, and sharing my love for this art through special workshops. 
            Every piece that comes out of my kitchen is made with heart, because I believe that life's 
            sweetest moments deserve to be celebrated with something special.
          </p>
          
          <div className="grid grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 rounded-2xl bg-background card-hover">
              <div className="w-14 h-14 bg-peach-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <p className="font-display text-lg text-foreground">Made with Love</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-background card-hover">
              <div className="w-14 h-14 bg-rose-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-7 h-7 text-rose" />
              </div>
              <p className="font-display text-lg text-foreground">Unique Designs</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-background card-hover">
              <div className="w-14 h-14 bg-mint-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-7 h-7 text-mint" />
              </div>
              <p className="font-display text-lg text-foreground">Premium Quality</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
