import type { Lang } from "@/contexts/LanguageContext";

export const translations = {
  en: {
    nav: {
      about: "About",
      services: "Services",
      gallery: "Gallery",
      faq: "FAQ",
      contact: "Contact",
      orderNow: "Order Now",
      toggleLabel: "עב",
      toggleAria: "Switch to Hebrew",
    },
    hero: {
      badge: "Artisanal Patisserie • Israel",
      subtitle: "Decorated Cookies & Custom Cakes",
      description:
        "Edible works of art, hand-piped royal icing cookies, and intimate baking workshops crafted for your sweetest celebrations. Every creation is baked from scratch with love and dedication.",
      ctaOrder: "Order on WhatsApp",
      ctaGallery: "View Creations",
      whatsappPrefill: "Hi Dulce Mío! I'd love to inquire about a custom order.",
      sealText: "100% HANDMADE • MADE WITH LOVE •",
      handmadeTitle: "100% Handmade",
      handmadeSub: "Freshly Baked to Order",
      scrollCue: "Scroll to explore",
      slides: [
        "Vintage Ribbon Cakes",
        "Pastel Cone Cupcakes",
        "Royal Icing Cookies",
        "Artisanal Gift Boxes",
        "Custom Birthday Cakes",
      ],
    },
    ribbon: [
      "Decorated Royal Icing Cookies",
      "Custom Sculpted Cakes",
      "Seasonal Baking Workshops",
      "Hand-Piped with Love",
      "Made Fresh to Order",
      "Edible Art for Every Celebration",
    ],
    about: {
      studioBadge: "Fresh from my studio",
      eyebrow: "About Me",
      headingPrefix: "Love in Every ",
      headingHighlight: "Detail",
      p1: "I'm passionate about creative baking. I dedicate myself to crafting unique decorated cookies, custom cakes, and sharing my love for this art through hands-on workshops.",
      p2: "Every piece that comes out of my kitchen is made with heart, because I believe that life's sweetest moments deserve to be celebrated with something truly special.",
      pillars: [
        {
          title: "Made with Love",
          description:
            "Every batch is baked from scratch in small quantities with genuine care and attention.",
        },
        {
          title: "Unique Designs",
          description:
            "Custom color palettes, hand-piped details, and themes tailored to your celebration.",
        },
        {
          title: "Premium Quality",
          description:
            "Fine ingredients so every creation tastes just as unforgettable as it looks.",
        },
      ],
      journeyPrefix: "From Sketch to ",
      journeyHighlight: "Sweet",
      steps: [
        {
          step: "01",
          title: "Share Your Vision",
          description:
            "Tell me your theme, colors, event date, and how many guests you're celebrating with.",
        },
        {
          step: "02",
          title: "Handcrafted & Piped",
          description:
            "I design, bake, and hand-decorate every cookie or cake fresh for your special day.",
        },
        {
          step: "03",
          title: "Sweet Celebration",
          description:
            "Pick up your edible centerpiece and delight your guests with unforgettable sweetness.",
        },
      ],
    },
    services: {
      eyebrow: "Services",
      headingPrefix: "What I ",
      headingHighlight: "Offer",
      subtitle: "Tailored sweet creations and hands-on experiences crafted around your moments",
      inquire: "Inquire on WhatsApp",
      items: [
        {
          title: "Decorated Cookies & Cupcakes",
          description:
            "Handcrafted butter cookies decorated with royal icing and custom cupcakes for birthdays, weddings, baby showers, and thoughtful gifts.",
          tags: ["Birthdays", "Weddings", "DIY Kits"],
          whatsappText: "Hi! I'd love to inquire about custom Decorated Cookies or Cupcakes.",
        },
        {
          title: "Custom Cakes",
          description:
            "Personalized cakes that are not only delicious but also sculpted, edible works of art designed around your celebration.",
          tags: ["1st Birthdays", "Character Art", "Celebrations"],
          whatsappText: "Hi! I'd love to inquire about a Custom Cake.",
        },
        {
          title: "Workshops & DIY Kits",
          description:
            "Learn the art of royal icing cookie decorating in my hands-on workshops, or order ready-to-decorate DIY cookie boxes for home parties.",
          tags: ["Live Sessions", "Private Groups", "Party Kits"],
          whatsappText: "Hi! I'd love to know about upcoming Baking Workshops or DIY Kits.",
        },
      ],
    },
    gallery: {
      eyebrow: "Gallery",
      headingPrefix: "My ",
      headingHighlight: "Creations",
      subtitle: "Tap any creation to view it up close",
      categories: {
        All: "All",
        "Custom Cakes": "Custom Cakes",
        "Cookies & Cupcakes": "Cookies & Cupcakes",
        "Workshops & Kits": "Workshops & Kits",
      },
      orderSimilar: "Order Something Similar",
      orderSimilarMessage: (title: string) =>
        `Hi Dulce Mío! I saw "${title}" in your gallery and would love to order something similar.`,
    },
    order: {
      eyebrow: "Sweet Studio",
      headingPrefix: "Design Your ",
      headingHighlight: "Sweet Order",
      subtitle:
        "Pick a few details below and send your personalized request straight to WhatsApp",
      step1: "1. What are we celebrating?",
      step2: "2. What would you like?",
      step3: "3. Theme, date, or guest count",
      optional: "(optional)",
      placeholder: "e.g., Pastel unicorn theme for 25 guests on May 14...",
      previewLabel: "Your WhatsApp Message Preview",
      cta: "Send Sweet Request on WhatsApp",
      occasions: [
        "Birthday",
        "Wedding / Engagement",
        "Baby Shower",
        "Holiday",
        "Workshop",
        "Just Because",
      ],
      creations: [
        "Decorated Cookies",
        "Custom Cake",
        "Cookies & Cake Set",
        "Decorating Workshop",
      ],
      buildMessage: (occasion: string, creation: string, details: string) =>
        `Hi Dulce Mío! I'd love to plan a sweet order:\n• Occasion: ${occasion}\n• Looking for: ${creation}${
          details.trim() ? `\n• Theme / Date / Details: ${details.trim()}` : ""
        }`,
    },
    faq: {
      eyebrow: "Good to Know",
      headingPrefix: "Sweet ",
      headingHighlight: "Questions",
      items: [
        {
          q: "When should I place a custom order?",
          a: "Since every cookie and cake is baked and decorated by hand, it's best to reach out as early as possible to save your date. Feel free to message me on WhatsApp anytime to check availability!",
        },
        {
          q: "Can you match my party theme, colors, or invitations?",
          a: "Yes! Custom themes are my favorite part. You can share your invitation, color palette, or inspiration photos on WhatsApp, and I'll design a cohesive set of cookies or a centerpiece cake tailored to your celebration.",
        },
        {
          q: "How do the cookie decorating workshops work?",
          a: "Workshops are hands-on, beginner-friendly sessions where everything is provided: cookies ready to decorate, royal icing colors, and decorating tools. They are available both for seasonal holidays and for private groups, birthdays, or team events.",
        },
        {
          q: "How do I book or ask about pricing?",
          a: "Every creation is priced according to design complexity, size, and quantity. Simply message me on WhatsApp or use the Sweet Order Designer above with your event date and idea, and I'll get back to you quickly with a tailored quote.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      headingPrefix: "Let's Talk About Your ",
      headingHighlight: "Order",
      subtitle:
        "Ready to sweeten your next event? Contact me and let's create something special together.",
      phoneLabel: "Phone",
      emailLabel: "Email",
      copiedPhone: "Phone number copied to clipboard!",
      copiedEmail: "Email copied to clipboard!",
    },
    footer: {
      madeWith: "Made with",
      inIsrael: "in Israel",
      rights: "Dulce Mío Cookies. All rights reserved.",
      backToTop: "Back to top",
    },
    floating: {
      chat: "Chat with me",
      whatsappText: "Hi Dulce Mío! I'd love to ask about a custom order.",
    },
  },
  he: {
    nav: {
      about: "נעים להכיר",
      services: "המתוקים שלי",
      gallery: "גלריה",
      faq: "שאלות נפוצות",
      contact: "צור קשר",
      orderNow: "להזמנה",
      toggleLabel: "EN",
      toggleAria: "Switch to English",
    },
    hero: {
      badge: "אפייה בוטיק בעבודת יד • ישראל",
      subtitle: "עוגיות רויאל אייסינג ועוגות מעוצבות",
      description:
        "רגעים מתוקים שהופכים ליצירת אמנות. עוגיות מזולפות בעבודת יד, עוגות חגיגיות בהתאמה אישית וסדנאות קישוט חווייתיות, הכל נעשה מהלב במיוחד בשבילכם.",
      ctaOrder: "להזמנה בוואטסאפ",
      ctaGallery: "לגלריית היצירות",
      whatsappPrefill: "היי Dulce Mío! אשמח להתייעץ לגבי הזמנה מתוקה בהתאמה אישית.",
      sealText: "100% עבודת יד • באהבה רבה •",
      handmadeTitle: "100% עבודת יד",
      handmadeSub: "בהזמנה אישית בלבד",
      scrollCue: "גללו לגלות עוד",
      slides: [
        "עוגת סרטים וינטג׳",
        "קאפקייקס גביעי גלידה",
        "עוגיות רויאל אייסינג",
        "מארזי מתנה בעבודת יד",
        "עוגות יום הולדת מעוצבות",
      ],
    },
    ribbon: [
      "עוגיות רויאל אייסינג בעבודת יד",
      "עוגות מעוצבות לכל חגיגה",
      "סדנאות קישוט עוגיות",
      "מארזי DIY לימי הולדת",
      "בהזמנה אישית בלבד",
      "אהבה בכל פרט קטן",
    ],
    about: {
      studioBadge: "ישר מהמטבח שלי",
      eyebrow: "נעים להכיר",
      headingPrefix: "אהבה בכל ",
      headingHighlight: "פרט קטן",
      p1: "האהבה הגדולה שלי היא אפייה יצירתית. במטבח שלי אני יוצרת עוגיות מעוצבות בעבודת יד, עוגות מיוחדות בהתאמה אישית ומארחת סדנאות קישוט מלאות צבע ושמחה.",
      p2: "כל מאפה שיוצא מהידיים שלי מקבל את מלוא הלב ותשומת הלב, כי אני מאמינה שאת הרגעים היפים בחיים חוגגים עם משהו מתוק ובלתי נשכח.",
      pillars: [
        {
          title: "מכל הלב",
          description: "כל עוגה ועוגייה נעשות בעבודת יד, בהזמנה אישית ועם המון תשומת לב.",
        },
        {
          title: "עיצוב אישי ומדויק",
          description: "צבעים, דמויות וקונספט שמותאמים בדיוק לחלום ולחגיגה שלכם.",
        },
        {
          title: "חומרי גלם משובחים",
          description: "טעם עשיר ואיכותי שגורם לכולם להתלהב כבר מהביס הראשון.",
        },
      ],
      journeyPrefix: "מהרעיון ",
      journeyHighlight: "ועד לחגיגה",
      steps: [
        {
          step: "01",
          title: "מספרים לי מה חוגגים",
          description: "משתפים בקונספט, בצבעים, בתאריך האירוע ובכמות האורחים.",
        },
        {
          step: "02",
          title: "אופים ומזלפים באהבה",
          description: "אני מתכננת, אופה ומקשטת בעבודת יד כל עוגייה ועוגה במיוחד ליום שלכם.",
        },
        {
          step: "03",
          title: "חוגגים במתיקות",
          description: "אוספים את היצירה המרכזית ונהנים ממחמאות ורגעים מתוקים עם כולם.",
        },
      ],
    },
    services: {
      eyebrow: "מה מחכה לכם",
      headingPrefix: "המתוקים ",
      headingHighlight: "שלי",
      subtitle: "מאפים מעוצבים בעבודת יד וחוויות יצירה מתוקות לכל שמחה",
      inquire: "לפרטים והזמנה בוואטסאפ",
      items: [
        {
          title: "עוגיות מעוצבות וקאפקייקס",
          description:
            "עוגיות חמאה נימוחות מקושטות ברויאל אייסינג וקאפקייקס חגיגיים לימי הולדת, אירועים, לידות ומתנות מרגשות.",
          tags: ["ימי הולדת", "אירועים", "מתנות"],
          whatsappText: "היי! אשמח לשמוע פרטים על עוגיות מעוצבות או קאפקייקס.",
        },
        {
          title: "עוגות מעוצבות בהתאמה אישית",
          description:
            "עוגות טעימות ומעוצבות בהתאמה אישית, בדיוק לפי הסגנון והחלום של החגיגה שלכם.",
          tags: ["גיל שנה", "פיסול ודמויות", "חגיגות"],
          whatsappText: "היי! אשמח לברר לגבי עוגה מעוצבת בהתאמה אישית.",
        },
        {
          title: "סדנאות ומארזי DIY",
          description:
            "סדנאות קישוט עוגיות מהנות לילדים ולמבוגרים, וגם ערכות יצירה ביתיות מוכנות למסיבה עם עוגיות, שקיות אייסינג וסוכריות.",
          tags: ["סדנאות חווייתיות", "ימי הולדת", "ערכות DIY"],
          whatsappText: "היי! אשמח לשמוע על סדנאות קישוט עוגיות או ערכות DIY.",
        },
      ],
    },
    gallery: {
      eyebrow: "הגלריה",
      headingPrefix: "טעימה ",
      headingHighlight: "מהיצירות",
      subtitle: "לחצו על כל תמונה כדי לראות את הפרטים מקרוב",
      categories: {
        All: "הכל",
        "Custom Cakes": "עוגות מעוצבות",
        "Cookies & Cupcakes": "עוגיות וקאפקייקס",
        "Workshops & Kits": "סדנאות וערכות",
      },
      orderSimilar: "אהבתי! רוצה עיצוב דומה",
      orderSimilarMessage: (title: string) =>
        `היי Dulce Mío! ראיתי את "${title}" בגלריה ואשמח להזמין משהו דומה.`,
    },
    order: {
      eyebrow: "בואו נתכנן",
      headingPrefix: "עצבו את ",
      headingHighlight: "ההזמנה שלכם",
      subtitle: "בחרו כמה פרטים קטנים ושלחו לי הודעה מוכנה ישירות לוואטסאפ",
      step1: "1. איזו שמחה חוגגים?",
      step2: "2. מה מתחשק לכם להזמין?",
      step3: "3. קונספט, תאריך או כמות אורחים",
      optional: "(לא חובה)",
      placeholder: "למשל: עוגת חד-קרן פסטלית ל-25 אורחים ב-14 במאי...",
      previewLabel: "כך תיראה הודעת הוואטסאפ שלכם",
      cta: "שליחת הבקשה בוואטסאפ",
      occasions: [
        "יום הולדת",
        "חתונה / אירוסין",
        "לידה / בייבי שאוור",
        "חגים",
        "סדנה",
        "סתם כי בא לי לפנק",
      ],
      creations: [
        "עוגיות מעוצבות",
        "עוגה מעוצבת",
        "סט עוגה + עוגיות",
        "סדנת קישוט עוגיות",
      ],
      buildMessage: (occasion: string, creation: string, details: string) =>
        `היי Dulce Mío! אשמח לתכנן הזמנה מתוקה:\n• מה חוגגים: ${occasion}\n• מה מחפשים: ${creation}${
          details.trim() ? `\n• קונספט / תאריך / פרטים: ${details.trim()}` : ""
        }`,
    },
    faq: {
      eyebrow: "שאלות נפוצות",
      headingPrefix: "כל מה שכדאי ",
      headingHighlight: "לדעת",
      items: [
        {
          q: "מתי כדאי לשריין הזמנה?",
          a: "מכיוון שכל עוגייה ועוגה נעשות בעבודת יד, כדאי ליצור קשר מראש כדי לשריין את התאריך שלכם. תמיד אפשר לשלוח לי הודעה בוואטסאפ ולבדוק זמינות!",
        },
        {
          q: "אפשר להתאים את העיצוב לקונספט או לצבעי המסיבה?",
          a: "בהחלט! זה החלק שאני הכי אוהבת. אפשר לשלוח לי את ההזמנה, פלטת צבעים או תמונות השראה בוואטסאפ, ואעצב עבורכם סט עוגיות או עוגה שיתחברו בול לאווירת האירוע.",
        },
        {
          q: "איך עובדות סדנאות קישוט העוגיות?",
          a: "הסדנאות הן חוויה כיפית ומעשית שמתאימה גם למי שמעולם לא החזיק שקית זילוף! אני דואגת להכל: עוגיות מוכנות לקישוט, שקיות רויאל אייסינג צבעוניות וסוכריות. מתאים לחגים, ימי הולדת, מסיבות רווקות וערבי גיבוש.",
        },
        {
          q: "איך מזמינים ומקבלים הצעת מחיר?",
          a: "המחיר נקבע לפי סוג היצירה, רמת הפירוט והכמות. פשוט שלחו לי הודעה בוואטסאפ או מלאו את הטופס המהיר למעלה עם התאריך והרעיון שלכם, ואחזור אליכם בשמחה עם הצעה מותאמת.",
        },
      ],
    },
    contact: {
      eyebrow: "יצירת קשר",
      headingPrefix: "בואו נמתיק לכם את ",
      headingHighlight: "האירוע",
      subtitle: "יש לכם רעיון או אירוע קרוב? שלחו לי הודעה ונתכנן יחד משהו מתוק ומיוחד.",
      phoneLabel: "טלפון",
      emailLabel: "אימייל",
      copiedPhone: "מספר הטלפון הועתק!",
      copiedEmail: "כתובת האימייל הועתקה!",
    },
    footer: {
      madeWith: "נאפה עם",
      inIsrael: "בישראל",
      rights: "Dulce Mío Cookies. כל הזכויות שמורות.",
      backToTop: "חזרה למעלה",
    },
    floating: {
      chat: "דברו איתי",
      whatsappText: "היי Dulce Mío! אשמח להתייעץ לגבי הזמנה מתוקה.",
    },
  },
} as const;

export const galleryTranslationsHe: Record<
  string,
  { title: string; subtitle: string }
> = {
  "Vintage Pink Ribbon Cake": {
    title: "עוגת סרטים וינטג׳ ורודה",
    subtitle: "עוגת שתי קומות בזילוף חמאה עם סרטי סאטן ופנינים",
  },
  "Artisanal Alfajores Box": {
    title: "מארז אלפחורס בעבודת יד",
    subtitle: "אלפחורס נימוחים עם ריבת חלב וקוקוס במארז מתנה",
  },
  "Ice-Cream Cone Cookies": {
    title: "עוגיות גביע גלידה",
    subtitle: "רויאל אייסינג חלק עם טקסטורת וופל מדויקת",
  },
  "Rainbow & Clouds Cake": {
    title: "עוגת קשת ועננים",
    subtitle: "עוגת יום הולדת שמחה עם קשת בענן ועננים מחייכים",
  },
  "Floral 1st Birthday Cake": {
    title: "עוגת פרחים לגיל שנה",
    subtitle: "פרחי בצק סוכר בעבודת יד וכיתוב שם מותאם אישית",
  },
  "Pastel Cone Cupcakes": {
    title: "קאפקייקס גביע גלידה פסטליים",
    subtitle: "זילוף שמנת בגביעי וופל עם מרשמלו במארז ורוד",
  },
  "40th Birthday Portrait Cookies": {
    title: "עוגיות פורטרט לגיל 40",
    subtitle: "איור פורטרט מותאם אישית עם מסגרת זהב חגיגית",
  },
  "Superhero Cookie Set": {
    title: "סט עוגיות גיבורי על",
    subtitle: "עוגיות ספיידרמן, איירון מן והענק הירוק בזילוף ידני",
  },
  "Avengers Superhero Cake": {
    title: "עוגת הנוקמים (Avengers)",
    subtitle: "פיסול תלת-ממד של אגרוף הענק, איירון מן וקפטן אמריקה",
  },
  "Winter Penguin Cookies": {
    title: "עוגיות פינגווינים חורפיים",
    subtitle: "פינגווינים בכובעי צמר סרוגים ועוגיות כפפת שלג",
  },
  "Festive Purim Mask Cookies": {
    title: "עוגיות מסכות לפורים",
    subtitle: "עוגיות מסכה צבעוניות ושמחות בזילוף ידני",
  },
  "Masquerade Mask Cookies": {
    title: "עוגיות מסכות שחור וזהב",
    subtitle: "רויאל אייסינג שחור דרמטי עם עיטורי קרנבל צבעוניים",
  },
  "Birthday DIY Cookie Kit": {
    title: "ערכת DIY עוגיות ליום הולדת",
    subtitle: "קופסת מתנה ורודה עם עוגיות, שקיות זילוף וסוכריות",
  },
  "Ice Cream 1st Birthday Cake": {
    title: "עוגת גלידה לגיל שנה",
    subtitle: "גביעי גלידה מבצק סוכר וסוכריות צבעוניות",
  },
  "Daisy Chocolate Cupcakes": {
    title: "קאפקייקס שוקולד וחינניות",
    subtitle: "קרם שוקולד עשיר עם פרחי בצק סוכר צבעוניים",
  },
  "Halloween Cookie Collection": {
    title: "קולקציית עוגיות האלווין",
    subtitle: "רוחות רפאים, עטלפים, דלעות וגולגולות סוכר",
  },
  "Melted Snowman Cookies": {
    title: "עוגיות איש שלג נמס",
    subtitle: "אנשי שלג מתוקים ממרשמלו על רויאל אייסינג",
  },
  "Slumber Party Rainbow Cake": {
    title: "עוגת מסיבת פיג׳מות",
    subtitle: "מרשמלו פסטל עם כיסוי עיניים וחלוק מצוירים ביד",
  },
  "Gremlin Popcorn Cake": {
    title: "עוגת גרמלין ופופקורן",
    subtitle: "עוגה פיסולית בתלת-ממד בהשראת קולנוע",
  },
  "DIY Dino Cookie Boxes": {
    title: "ערכות DIY עוגיות דינוזאורים",
    subtitle: "מארזים אישיים למסיבה עם שקיות אייסינג והוראות",
  },
  "Holiday Theme Cake": {
    title: "עוגת חג מעוצבת",
    subtitle: "עיצוב חגיגי בעבודת יד לאווירת חג מושלמת",
  },
  "Magician Birthday Cake": {
    title: "עוגת יום הולדת קוסם",
    subtitle: "עוגת קסמים צבעונית לחגיגת יום הולדת",
  },
};

export const getTranslations = (lang: Lang) => translations[lang];
