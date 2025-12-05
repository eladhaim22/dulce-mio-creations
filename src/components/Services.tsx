import { Cookie, Cake, GraduationCap } from "lucide-react";

const services = [
  {
    icon: Cookie,
    title: "Decorated Cookies",
    description: "Handcrafted cookies decorated with royal icing for any occasion: birthdays, weddings, baby showers, and more.",
    color: "peach",
  },
  {
    icon: Cake,
    title: "Custom Cakes",
    description: "Personalized cakes that are not only delicious but also edible works of art for your special celebration.",
    color: "rose",
  },
  {
    icon: GraduationCap,
    title: "Workshops",
    description: "Learn the art of cookie decorating in my special seasonal workshops. Perfect for holidays and events.",
    color: "mint",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-medium mb-4 tracking-wider uppercase text-sm">
            Services
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            What I <span className="font-script text-primary">Offer</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group p-8 rounded-3xl bg-card border border-border card-hover text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110 ${
                  service.color === "peach" ? "bg-peach-light" :
                  service.color === "rose" ? "bg-rose-light" : "bg-mint-light"
                }`}
              >
                <service.icon 
                  className={`w-10 h-10 ${
                    service.color === "peach" ? "text-primary" :
                    service.color === "rose" ? "text-rose" : "text-mint"
                  }`} 
                />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
