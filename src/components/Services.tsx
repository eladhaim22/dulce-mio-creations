import { Cookie, Cake, GraduationCap, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const services = [
  {
    icon: Cookie,
    title: "Decorated Cookies",
    description:
      "Handcrafted butter cookies decorated with royal icing for any occasion: birthdays, weddings, baby showers, and thoughtful gifts.",
    tags: ["Birthdays", "Weddings", "Baby Showers"],
    color: "dusty-rose",
    whatsappText: "Hi! I'd love to inquire about custom Decorated Cookies.",
  },
  {
    icon: Cake,
    title: "Custom Cakes",
    description:
      "Personalized cakes that are not only delicious but also sculpted, edible works of art designed around your celebration.",
    tags: ["3D Sculpted", "Character Art", "Celebrations"],
    color: "blush",
    whatsappText: "Hi! I'd love to inquire about a Custom Cake.",
  },
  {
    icon: GraduationCap,
    title: "Workshops",
    description:
      "Learn the art of royal icing cookie decorating in my special seasonal workshops. Perfect for holidays, friends, and private events.",
    tags: ["Seasonal", "Private Groups", "Beginner Friendly"],
    color: "sage",
    whatsappText: "Hi! I'd love to know about upcoming Baking Workshops.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding relative">
      <div className="container mx-auto">
        <Reveal>
          <div className="text-center mb-14 sm:mb-16">
            <span className="inline-block text-primary font-medium mb-4 tracking-[0.2em] uppercase text-xs">
              Services
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground font-medium">
              What I <span className="font-script text-5xl md:text-6xl text-primary">Offer</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-3 font-light max-w-md mx-auto">
              Tailored sweet creations and hands-on experiences crafted around your moments
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 120}>
              <div className="group h-full flex flex-col justify-between p-7 sm:p-9 rounded-3xl bg-card border border-border/40 card-hover text-center relative overflow-hidden">
                {/* Subtle top accent bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 transition-opacity duration-500 opacity-60 group-hover:opacity-100 ${
                    service.color === "dusty-rose"
                      ? "bg-primary"
                      : service.color === "blush"
                      ? "bg-blush"
                      : "bg-sage"
                  }`}
                />

                <div>
                  <div
                    className={`w-16 sm:w-20 h-16 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 ${
                      service.color === "dusty-rose"
                        ? "bg-dusty-rose-light"
                        : service.color === "blush"
                        ? "bg-blush-light"
                        : "bg-sage-light"
                    }`}
                  >
                    <service.icon
                      className={`w-7 sm:w-9 h-7 sm:h-9 ${
                        service.color === "dusty-rose"
                          ? "text-primary"
                          : service.color === "blush"
                          ? "text-taupe"
                          : "text-sage"
                      }`}
                    />
                  </div>

                  <h3 className="font-display text-2xl text-foreground mb-3 font-medium">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-light mb-6">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap justify-center gap-1.5 mb-7">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-[11px] font-medium tracking-wide bg-background text-taupe border border-border/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={`https://wa.me/972509052322?text=${encodeURIComponent(service.whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 text-sm font-medium text-primary hover:text-warm-brown transition-colors pt-4 border-t border-border/40"
                >
                  <span>Inquire on WhatsApp</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
