import { Phone, Mail, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-primary font-medium mb-4 tracking-[0.2em] uppercase text-xs">
            Contact
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 font-medium">
            Let's Talk About Your <span className="font-script text-5xl md:text-6xl text-primary">Order</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-14 font-light">
            Ready to sweeten your next event? Contact me and let's create something special together.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-14">
            <a 
              href="tel:0509052322"
              className="flex items-center justify-center gap-4 p-7 rounded-2xl bg-card border border-border/30 card-hover group"
            >
              <div className="w-14 h-14 bg-dusty-rose-light rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground tracking-wide uppercase">Phone</p>
                <p className="font-display text-lg text-foreground font-medium">050-905-2322</p>
              </div>
            </a>

            <a 
              href="mailto:dulcemiocookies@gmail.com"
              className="flex items-center justify-center gap-4 p-7 rounded-2xl bg-card border border-border/30 card-hover group"
            >
              <div className="w-14 h-14 bg-blush-light rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Mail className="w-6 h-6 text-taupe" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground tracking-wide uppercase">Email</p>
                <p className="font-display text-lg text-foreground font-medium">dulcemiocookies@gmail.com</p>
              </div>
            </a>
          </div>

          <div className="flex justify-center gap-5">
            <a 
              href="https://instagram.com/dulcemiocookies" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 bg-primary/90 rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://facebook.com/dulcemiocookies" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 bg-taupe/80 rounded-full flex items-center justify-center text-primary-foreground hover:bg-taupe hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
