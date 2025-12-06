import { Cookie, Cake, GraduationCap } from "lucide-react";

const services = [
  {
    icon: Cookie,
    title: "Decorated Cookies",
    description: "Handcrafted cookies decorated with royal icing for any occasion: birthdays, weddings, baby showers, and more.",
    color: "dusty-rose",
  },
  {
    icon: Cake,
    title: "Custom Cakes",
    description: "Personalized cakes that are not only delicious but also edible works of art for your special celebration.",
    color: "blush",
  },
  {
    icon: GraduationCap,
    title: "Workshops",
    description: "Learn the art of cookie decorating in my special seasonal workshops. Perfect for holidays and events.",
    color: "sage",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-medium mb-4 tracking-[0.2em] uppercase text-xs">
            Services
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground font-medium">
            What I <span className="font-script text-5xl md:text-6xl text-primary">Offer</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl bg-card border border-border/30 card-hover text-center"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div 
                className={`w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-5 sm:mb-6 md:mb-8 transition-transform duration-500 group-hover:scale-110 ${
                  service.color === "dusty-rose" ? "bg-dusty-rose-light" :
                  service.color === "blush" ? "bg-blush-light" : "bg-sage-light"
                }`}
              >
                <service.icon 
                  className={`w-6 sm:w-7 md:w-9 h-6 sm:h-7 md:h-9 ${
                    service.color === "dusty-rose" ? "text-primary" :
                    service.color === "blush" ? "text-taupe" : "text-sage"
                  }`} 
                />
              </div>
              <h3 className="font-display text-xl sm:text-2xl text-foreground mb-3 sm:mb-4 font-medium">{service.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-light">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
