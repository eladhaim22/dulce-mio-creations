import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 bg-card/50 border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-5">
          <p className="font-script text-4xl text-primary">Dulce Mío</p>
          <p className="flex items-center gap-2 text-muted-foreground text-sm font-light">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> in Israel
          </p>
          <p className="text-muted-foreground text-sm font-light">
            © {new Date().getFullYear()} Dulce Mío Cookies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
