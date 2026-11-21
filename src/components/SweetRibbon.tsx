const items = [
  "Decorated Royal Icing Cookies",
  "Custom Sculpted Cakes",
  "Seasonal Baking Workshops",
  "Hand-Piped with Love",
  "Made Fresh to Order",
  "Edible Art for Every Celebration",
];

const SweetRibbon = () => {
  return (
    <div className="relative overflow-hidden bg-dusty-rose-light/60 border-y border-primary/15 py-3.5 select-none">
      <div className="flex w-max animate-marquee">
        {[...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center">
            <span className="font-display italic text-base sm:text-lg text-warm-brown/85 tracking-wide px-6 whitespace-nowrap">
              {text}
            </span>
            <span className="text-primary text-xs">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SweetRibbon;
