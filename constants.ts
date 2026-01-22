import { FAQItem, Feature, Testimonial } from './types';
import { DollarSign, UserCheck, XCircle, Layout, ShieldCheck, Zap, AlertTriangle, Ruler, Trash2 } from 'lucide-react';

export const HERO_CONTENT = {
  headline: "STOP GUESSING.\nSTART SEEING.",
  subheadline: "Building without a 3D plan is financial suicide. We visualize your exact space so you don't waste thousands on wrong materials, tight spaces, and ugly mismatches.",
  cta: "PREVENT MISTAKES NOW"
};

export const MARQUEE_TEXT = [
  "DON'T WASTE MATERIALS",
  "PRECISE MEASUREMENTS",
  "SEE THE LIGHTING",
  "NO UGLY SURPRISES",
  "SAVE 20% BUDGET",
  "PERFECT FIT GUARANTEED"
];

// High-Resolution 8K-style placeholders - Updated for reliability
export const IMAGES = {
  // A dark, moody, ultra-realistic interior that looks like a high-end 3D render
  hero: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2600&auto=format&fit=crop",
  texture_dark: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2600&auto=format&fit=crop",
  marble: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2600&auto=format&fit=crop",
  minimal: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2600&auto=format&fit=crop",
  light: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop",
  // A raw concrete empty room to signify "Scratch"
  construction: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2600&auto=format&fit=crop"
};

export const CASE_STUDY = {
  title: "CASE STUDY:\nTHE $15,000 MISTAKE.",
  location: "Project: River Valley Penthouse",
  challenge: "The client insisted on a dark aesthetic with a massive marble island. On paper, it looked fine. The contractor was ready to build.",
  solution: "We built the 3D model first. Immediately, we saw the disaster waiting to happen.",
  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2600&auto=format&fit=crop", // Marble kitchen
  points: [
    {
      label: "The Invisible Clash",
      text: "The marble vein direction clashed violently with the wood floor grain. In 2D plans, this was invisible. In 3D, it was dizzying. We rotated the texture instantly, saving $8,000 in stone."
    },
    {
      label: "The 'Dead' Zone",
      text: "The island placement blocked the dishwasher door by 4 inches. Fixing this after installation would mean ripping up the floor and plumbing ($4,000+ cost)."
    },
    {
      label: "The Lighting Failure",
      text: "Dark walls absorbed 80% of the light. We simulated adding a tinted mirror wall, which doubled the lux levels. The client was shocked by the difference."
    }
  ]
};

export const NIGHTMARES = [
  {
    id: 1,
    title: "The 'Will It Fit?' Disaster",
    description: "You fall in love with a sofa and spend $3,000 on it. When it arrives, you realize it blocks your walkway, turn the home into a cramped space instead of a blessing. Our 3D drawings ensures your space feels open, harmonious, and full of blessings — before anything is built.",
    icon: Ruler,
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2600&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Make Confident Design Decisions",
    description: "regretted the colour choosen after installation ? Scared looked ugly than expected? With 3D renders, clients can preview colours, lighting, and the overall mood before finalizing, helping them make confident decisions and don’t need second thoughts.",
    icon: Trash2,
    image: "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=2600&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Align Design With Blessings & Energy",
    description: "A Blessed family wanted a home that felt calm, open, and positive. Through 3D design, we adjusted the layout, lighting, and flow of the space to create a home that is harmonious, peaceful, uplifting, and truly full of blessings.",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=2600&auto=format&fit=crop"
  }
];

export const COMPARISON = [
  {
    feature: "Visual Clarity",
    us: "100% Photorealistic Video & Image",
    them: "Imagination & Hand Waving"
  },
  {
    feature: "Material Budget",
    us: "Exact Calculation (Zero Waste)",
    them: "Estimates (Usually +15% Waste)"
  },
  {
    feature: "Space Planning",
    us: "To-Scale 3D Model Check",
    them: "Flat 2D Plans (Hard to visualize)"
  },
  {
    feature: "Lighting",
    us: "Day/Night Simulation",
    them: "Guesswork"
  }
];

export const PACKAGES = [
  {
    name: "Room Rescue",
    description: "Don't buy furniture yet. Let us model your room to ensure everything fits and looks cohesive.",
    features: [
      "1 room 3D Drawings (1 pcs)",
      "Furniture fit check",
      "Colour Harmony Test",
      "1 times revision",
      "2 times consultation"
    ],
    price: "$250",
    highlight: false
  },
  {
    name: "The Blessing Draft",
    description: "The safety net for your entire home renovation. Hand this to your contractor and sleep soundly.",
    features: [
      "1 set Full home 720 degree hometour",
      "Immersive experience to step inside new home before renovate.",
      "Furniture fit check",
      "Colour Harmony Test",
      "1 times site consultation",
      "1 times revision",
      "2 times consultation"
    ],
    price: "$500",
    highlight: true
  },
  {
    name: "The Blessed Masterpieces",
    description: "Selling unbuilt property? We create emotional assets that sell the lifestyle before the foundation is poured.",
    features: [
      "1 set Full home 720 degree hometour",
      "Immersive experience to step inside new home before renovate.",
      "Walking Space Analysis",
      "Moodboard",
      "Furniture fit check",
      "Colour Harmony Test",
      "10 pcs 3D drawings",
      "1 times site consultation",
      "2 times revision",
      "3 times consultation"
    ],
    price: "$3000",
    highlight: false
  }
];

export const TESTIMONIAL_IMAGES = [
  "/testi.webp",
  "/testi2.webp",
  "/testi3.webp",
  "/testi4 (1).webp",
  "/testi4 (2).webp",
  "/testi4 (3).webp"
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "Gila sih ini, detail banget! Bener-bener ngebantu buat bayangin hasil akhirnya. Tukang jadi ga bingung, material juga pas itungannya.",
    author: "Budi Santoso",
    role: "Pemilik Rumah"
  },
  {
    id: 2,
    quote: "Awalnya ragu perlu 3D atau enggak, tapi pas liat hasilnya... WAH! Kalo ga pake 3D pasti udah salah pasang keramik kamar mandi.",
    author: "Siti Rahma",
    role: "Renovasi Apartemen"
  },
  {
    id: 3,
    quote: "BlessSpace ngebantu banget visualisasiin ide gila saya. Hasil render sama aslinya 99% akurat. Mantap!",
    author: "Hendra Gunawan",
    role: "Interior Enthusiast"
  }
];

export const WHATS_INCLUDED = [
  "Clear layout visualization",
  "Avoid costly mistakes",
  "Confident decision-making"
];

export const STATS = [
  { label: "Wasted Space Saved", value: "20%" },
  { label: "Client Confidence", value: "100%" },
  { label: "Design Revisions", value: "1 Time*" },
  { label: "Cost of Regret", value: "$0" },
];

export const GALLERY_IMAGES = [
  { src: "/design 1 .webp", label: "Modern Living" },
  { src: "/design 2 .webp", label: "Cozy Bedroom" },
  { src: "/design 3.webp", label: "Luxury Kitchen" },
  { src: "/design 7.webp", label: "Minimalist Bath" },
  { src: "/desgn 6.webp", label: "Office Space" },
  { src: "/design 5.webp", label: "Lounge Area" }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Send Your Floor Plan",
    description: "We start with the raw bones. Send us your dimensions. We build the digital skeleton of your space to exact scale.",
    image: "/process-1-blueprint.webp"
  },
  {
    step: "02",
    title: "We Simulate Reality",
    description: "We apply the physics of light and the texture of materials. We test if the sofa blocks the flow. We test if the paint is too dark.",
    image: "/process-2-simulation.webp"
  },
  {
    step: "03",
    title: "You Avoid Disaster",
    description: "You receive the 3D Masterpiece. You spot the mistakes on screen, not in concrete. You save thousands. You proceed with certainty.",
    image: "/process-3-success.webp"
  }
];



export const FAQS: FAQItem[] = [
  {
    question: "Why can't I just imagine it?",
    answer: "Because imagination doesn't have a ruler. You can't 'imagine' if a 2.4m sofa leaves enough clearance for a door swing. 3D simulation proves it mathematically."
  },
  {
    question: "Is this expensive?",
    answer: "Compared to hacking down a tiled wall because you hate the color? No. It's a fraction of the cost of a single renovation mistake."
  },
  {
    question: "Do you design the whole house?",
    answer: "Yes. We build a complete 'Digital Twin' of your property. You can virtually walk through every room before you spend a cent on construction."
  },
  {
    question: "What if I want to change the style?",
    answer: "That is the point! Change the wood to stone. Change the blue to white. Do it on our screen, not on your walls. It's instant, with worthy cost."
  }
];