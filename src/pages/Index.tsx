import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SweetRibbon from "@/components/SweetRibbon";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import OrderBuilder from "@/components/OrderBuilder";
import FaqSection from "@/components/FaqSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <SweetRibbon />
        <About />
        <Services />
        <Gallery />
        <OrderBuilder />
        <FaqSection />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
