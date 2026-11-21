import { useEffect, useState } from "react";
import { Menu, X, Heart } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-background/95 backdrop-blur-md border-b border-border/60 shadow-sm"
          : "bg-background/90 backdrop-blur-md border-b border-border/20"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-18 py-3">
          <a
            href="#"
            className="font-script text-3xl md:text-4xl text-primary hover:opacity-85 transition-opacity"
          >
            Dulce Mío
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-foreground/85 hover:text-primary transition-colors duration-300 font-medium text-sm tracking-wide py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1.5px] after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#order"
              className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground px-5 py-2 rounded-full text-xs font-medium tracking-wider uppercase hover:bg-primary/90 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              <Heart className="w-3.5 h-3.5 fill-current" />
              Order Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground rounded-full hover:bg-primary/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            isOpen ? "max-h-96 opacity-100 pb-6 border-t border-border/30" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2.5 px-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/5 transition-colors duration-200 font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#order"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground py-2.5 rounded-full text-sm font-medium tracking-wide"
            >
              <Heart className="w-4 h-4 fill-current" />
              Order Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
