import { Phone, Mail, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-primary font-medium mb-4 tracking-wider uppercase text-sm">
            Contact
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Let's Talk About Your <span className="font-script text-primary">Order</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Ready to sweeten your next event? Contact me and let's create something special together.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <a 
              href="tel:0509052322"
              className="flex items-center justify-center gap-4 p-6 rounded-2xl bg-card border border-border card-hover group"
            >
              <div className="w-12 h-12 bg-peach-light rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-semibold text-foreground">050-905-2322</p>
              </div>
            </a>

            <a 
              href="mailto:dulcemiocookies@gmail.com"
              className="flex items-center justify-center gap-4 p-6 rounded-2xl bg-card border border-border card-hover group"
            >
              <div className="w-12 h-12 bg-rose-light rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-rose" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-semibold text-foreground">dulcemiocookies@gmail.com</p>
              </div>
            </a>
          </div>

          <div className="flex justify-center gap-4">
            <a 
              href="https://instagram.com/dulcemiocookies" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 bg-gradient-to-br from-primary to-rose rounded-full flex items-center justify-center text-primary-foreground hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="https://facebook.com/dulcemiocookies" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 bg-gradient-to-br from-rose to-primary rounded-full flex items-center justify-center text-primary-foreground hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
