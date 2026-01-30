import React, { useState, useEffect, useRef } from 'react';
import { Chatbot } from './components/Chatbot';
import { CheckoutModal } from './components/CheckoutModal';
import { ReceiptModal } from './components/ReceiptModal';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Plus, X, ArrowDown, CheckCircle2, Box, Star, AlertTriangle, Check, X as XIcon } from 'lucide-react';
import { Button } from './components/ui/Button';
import { Reveal } from './components/Reveal';
import { BeforeAfter } from './components/BeforeAfter';
import { TextReveal } from './components/TextReveal';
import { HERO_CONTENT, MARQUEE_TEXT, NIGHTMARES, COMPARISON, STATS, GALLERY_IMAGES, WHATS_INCLUDED, PROCESS_STEPS, TESTIMONIALS, TESTIMONIAL_IMAGES, FAQS, IMAGES, PACKAGES, CASE_STUDY } from './constants';

// --- SPOTLIGHT EFFECT ---
const Spotlight = ({ className = "" }: { className?: string }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`absolute inset-0 overflow-hidden pointer-events-none z-10 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(184, 168, 152, 0.15), transparent 40%)`,
        }}
      />
    </div>
  );
};

// --- CUSTOM CURSOR ---
const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      setIsHovering(
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') !== null ||
        target.closest('.interactive') !== null
      );
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 bg-stone-900 rounded-full pointer-events-none z-[9999] mix-blend-difference"
      animate={{
        x: mousePosition.x - (isHovering ? 32 : 16),
        y: mousePosition.y - (isHovering ? 32 : 16),
        scale: isHovering ? 2.5 : 1,
      }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    />
  );
};

// --- COMPONENTS ---

const Marquee = ({ reverse = false }: { reverse?: boolean }) => (
  <div className="relative flex overflow-hidden bg-stone-900 text-stone-50 py-6 border-y border-stone-800">
    <div className={`animate-marquee${reverse ? '-reverse' : ''} whitespace-nowrap flex gap-12 items-center`}>
      {[...MARQUEE_TEXT, ...MARQUEE_TEXT, ...MARQUEE_TEXT].map((text, i) => (
        <div key={i} className="flex items-center gap-12">
          <span className="text-xl font-serif italic text-brand opacity-50">{i % 2 === 0 ? 'BlessSpace' : 'Mistake-Free'}</span>
          <span className="text-sm font-bold tracking-[0.3em] uppercase">{text}</span>
        </div>
      ))}
    </div>
  </div>
);

const SectionHeader = ({ title, subtitle, light = false }: { title: string, subtitle: string, light?: boolean }) => (
  <div className="mb-24 md:mb-32">
    <Reveal>
      <div className="flex items-center gap-4 mb-6">
        <div className={`h-px w-20 ${light ? 'bg-stone-500' : 'bg-stone-900'}`} />
        <span className={`text-xs font-bold tracking-[0.2em] uppercase ${light ? 'text-stone-400' : 'text-stone-900'}`}>{subtitle}</span>
      </div>
      <h2 className={`text-5xl md:text-8xl font-serif leading-[0.9] ${light ? 'text-white' : 'text-stone-900'}`}>
        {title.split('\n').map((line, i) => (
          <span key={i} className="block">{line}</span>
        ))}
      </h2>
    </Reveal>
  </div>
);

// --- MAIN APP ---

const App: React.FC = () => {
  const [lightboxItem, setLightboxItem] = useState<{ type: 'image' | 'video' | 'iframe'; src: string } | null>(null);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(0);
  const [activeNightmare, setActiveNightmare] = useState<number>(0);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isReceiptOpen, setIsReceiptOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<any>(null);

  // Hero Parallax
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, 400]);
  const heroTextY = useTransform(scrollY, [0, 1000], [0, 150]);
  const heroScale = useTransform(scrollY, [0, 1000], [1.1, 1]);

  // Gallery Horizontal Scroll Logic
  const galleryRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: galleryProgress } = useScroll({ target: galleryRef });
  const galleryX = useTransform(galleryProgress, [0, 1], ["0%", "-60%"]);

  useEffect(() => {
    // Check for success payment params
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      setIsReceiptOpen(true);
      // Clean URL without refresh
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);

  const scrollToReservation = () => {
    document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenCheckout = (pkg: any) => {
    setSelectedPackage(pkg);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="bg-stone-50 text-stone-900 selection:bg-brand selection:text-white cursor-none relative">
      <div className="noise-overlay" />
      <Cursor />
      <Chatbot />
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        selectedPackage={selectedPackage}
      />
      <ReceiptModal
        isOpen={isReceiptOpen}
        onClose={() => setIsReceiptOpen(false)}
      />

      {/* 1. HERO - Parallax & Depth */}
      <header ref={heroRef} className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center bg-stone-900">
        <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <motion.div
            key="hero-image-final"
            initial={{ scale: 1.2, y: 0 }}
            animate={{ scale: 1, y: -20 }}
            transition={{ duration: 20, ease: "easeOut" }}
            className="w-full h-full"
          >
            <img
              src={IMAGES.hero}
              className="w-full h-full object-cover opacity-90"
              alt="Luxury Interior"
            />
          </motion.div>
        </motion.div>

        <div className="relative z-20 max-w-[1600px] mx-auto px-6 w-full text-center">
          <motion.div style={{ y: heroTextY }}>
            <Reveal width="100%">
              <h1 className="text-[18vw] md:text-[12vw] leading-[0.8] font-serif font-medium tracking-tighter text-white mix-blend-overlay">
                STOP <br />
                <span className="italic font-light">GUESSING</span>
              </h1>
            </Reveal>
            <div className="mt-12 flex justify-center">
              <Button onClick={scrollToReservation} className="bg-white text-stone-900 interactive">
                {HERO_CONTENT.cta}
              </Button>
            </div>
            <p className="mt-8 text-white/90 max-w-lg mx-auto font-light text-lg tracking-wide drop-shadow-md">{HERO_CONTENT.subheadline}</p>
          </motion.div>
        </div>

        <div className="absolute bottom-12 left-0 right-0 flex justify-center animate-bounce z-20 text-white">
          <ArrowDown size={32} />
        </div>
      </header>

      <Marquee />

      {/* --- MEET JENNY SECTION --- */}
      <section className="py-32 bg-[#F9F8F6] text-stone-900 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-sm relative group">
                <div className="absolute inset-0 bg-brand/10 mix-blend-multiply z-10 transition-opacity duration-700 group-hover:opacity-0" />
                <img
                  src="/IMG20240827154319.webp"
                  alt="Jenny Sin - Interior Designer"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-8 -right-8 w-64 h-64 border border-brand/20 -z-10" />
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-stone-200/50 -z-10" />
            </motion.div>

            {/* Text Side */}
            <div className="space-y-8">
              <Reveal>
                <div className="flex items-center gap-4 text-brand font-bold tracking-[0.2em] uppercase text-sm">
                  <span className="w-12 h-px bg-brand"></span>
                  The Visionary
                </div>
              </Reveal>

              <Reveal>
                <h2 className="text-6xl md:text-7xl font-serif text-stone-900 leading-none">
                  Meet <br />
                  <span className="italic text-brand text-8xl">Jenny Sin</span>
                </h2>
              </Reveal>

              <Reveal>
                <p className="text-xl text-stone-600 font-light leading-relaxed max-w-lg">
                  "Design isn't just about placing furniture. It's about translating your chaotic thoughts into a <span className="text-stone-900 font-medium italic">living masterpiece</span> that understands you better than you understand yourself."
                </p>
              </Reveal>

              <Reveal>
                <div className="space-y-6 text-stone-500 text-lg">
                  <p>
                    As the Interior Designer at Blesspace, Jenny Sin has revolutionized the way clients visualize their future. With an obsession for detail and a hatred for guesswork, she ensures every pixel serves a purpose.
                  </p>
                  <p>
                    She doesn't just design rooms; she curates lifestyles.
                  </p>
                </div>
              </Reveal>

              <Reveal>
                <div className="pt-8">
                  <img src="/logo.webp" className="h-12 opacity-80 brightness-0" alt="Blesspace Logo" loading="lazy" />
                  {/* Logo placeholder - user will replace this */}
                  <p className="text-xs tracking-widest text-stone-400 mt-2 uppercase">Interior Designer</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE NIGHTMARE - Fear of Missing Out / Fear of Error */}
      <section className="relative py-40 bg-stone-900 text-stone-50 overflow-hidden min-h-screen flex items-center group/spotlight">
        <Spotlight />
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNightmare}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0"
          >
            <img src={NIGHTMARES[activeNightmare].image} className="w-full h-full object-cover grayscale" alt="Background" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 w-full">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionHeader title="THE PRICE OF BLINDNESS." subtitle="The Risk" light />
              <div className="prose prose-invert prose-xl font-light text-stone-300">
                <TextReveal>
                  You wouldn't buy a car without seeing it. Why build a home based on imagination? A mistake in concrete costs 50x more than a mistake in 3D. We protect your wallet by failing digitally, so you succeed physically.
                </TextReveal>
              </div>
            </div>

            <div className="space-y-4">
              {NIGHTMARES.map((nightmare, i) => (
                <div
                  key={i}
                  className="interactive group relative p-8 border-l-2 border-stone-800 hover:border-brand transition-all duration-500 cursor-none bg-stone-900/50 backdrop-blur-sm"
                  onMouseEnter={() => setActiveNightmare(i)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <nightmare.icon size={24} className={activeNightmare === i ? 'text-brand' : 'text-stone-600'} />
                      <h3 className={`text-2xl font-serif transition-colors duration-300 ${activeNightmare === i ? 'text-white' : 'text-stone-600'}`}>
                        {nightmare.title}
                      </h3>
                    </div>
                    <motion.div animate={{ rotate: activeNightmare === i ? 90 : 0 }}>
                      <ArrowRight className={activeNightmare === i ? 'text-white' : 'text-stone-800'} />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={false}
                    animate={{ height: activeNightmare === i ? 'auto' : 0, opacity: activeNightmare === i ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-stone-400 font-light text-lg pl-10">{nightmare.description}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMPARISON - Us vs Them */}
      <section className="py-20 bg-stone-50 border-b border-stone-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-12 text-center">Don't Gamble With Your Home.</h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-0 border border-stone-200 shadow-xl">
            {/* Header */}
            <div className="hidden md:block bg-stone-100 p-8 border-r border-stone-200">
              <h4 className="font-bold tracking-widest uppercase mb-8">Feature</h4>
              {COMPARISON.map((c, i) => (
                <div key={i} className="h-20 flex items-center border-b border-stone-200 last:border-0">
                  <span className="font-serif text-xl text-stone-500">{c.feature}</span>
                </div>
              ))}
            </div>

            {/* Them */}
            <div className="bg-stone-50 p-8 border-r border-stone-200 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-brand" />
              <h4 className="font-bold tracking-widest uppercase mb-8 text-stone-500">Traditional Way</h4>
              {COMPARISON.map((c, i) => (
                <div key={i} className="h-20 flex items-center border-b border-stone-200 last:border-0">
                  <div className="flex items-center gap-3">
                    <XIcon size={16} className="text-brand flex-shrink-0" />
                    <span className="text-stone-600">{c.them}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Us */}
            <div className="bg-white p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-stone-900" />
              <h4 className="font-bold tracking-widest uppercase mb-8 text-stone-900">BlessSpace 3D</h4>
              {COMPARISON.map((c, i) => (
                <div key={i} className="h-20 flex items-center border-b border-stone-100 last:border-0">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-stone-900 flex-shrink-0" />
                    <span className="font-bold text-stone-900">{c.us}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROOF - Before & After Slider */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-[1600px] mx-auto px-6 mb-12 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-serif text-stone-900 mb-6">From Vision to Reality.</h2>
            <p className="text-stone-500 max-w-2xl mx-auto">Watch how Jenny transforms a blank canvas into a living masterpiece. No guesswork, just precision.</p>
          </Reveal>
        </div>
        <div className="h-[70vh] w-full max-w-[1600px] mx-auto rounded-xl overflow-hidden shadow-2xl relative">
          <BeforeAfter
            beforeImage="/jenny-designing.webp"
            afterImage="/luxury-result.webp"
            beforeLabel="THE PROCESS"
            afterLabel="THE MASTERPIECE"
          />
        </div>
      </section>

      {/* 5. GALLERY - Sticky Horizontal Scroll */}
      {/* 5. GALLERY - Grid Layout */}
      <section ref={galleryRef} className="py-32 bg-stone-50">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6 text-center md:text-left">
            <Reveal>
              <h2 className="text-4xl md:text-6xl font-serif text-stone-900">Portfolio</h2>
              <p className="text-stone-500 mt-4 max-w-xl text-lg">Curated selection of our finest interior visualizations. Explore the details.</p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="hidden md:block w-32 h-px bg-stone-300 mb-8" />
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {GALLERY_IMAGES.map((img, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div
                  className="group cursor-pointer interactive"
                  onClick={() => setLightboxItem(img.embedUrl ? { type: 'iframe', src: img.embedUrl } : { type: 'image', src: img.src })}
                >
                  <div className="aspect-[4/5] overflow-hidden rounded-sm relative mb-6 shadow-md transition-all duration-500 group-hover:shadow-2xl">
                    <img
                      src={img.src}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      alt={img.label}
                    />
                    <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-500" />
                    {img.embedUrl && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-brand/90 text-white rounded-full p-4 pointer-events-none">
                          <span className="font-bold tracking-widest text-xs uppercase">3D Tour</span>
                        </div>
                      </div>
                    )}
                    <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      {img.embedUrl ? 'Start Tour' : 'View Project'}
                    </div>
                  </div>

                  <div className="flex justify-between items-baseline border-b border-stone-200 pb-4 group-hover:border-stone-900 transition-colors duration-500">
                    <h3 className="text-2xl font-serif text-stone-900 group-hover:text-brand transition-colors">{img.label}</h3>
                    <span className="text-xs font-bold tracking-widest uppercase text-stone-400 group-hover:text-stone-900 transition-colors">0{i + 1}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PROCESS - Editorial */}
      <section className="bg-white text-stone-900">
        {PROCESS_STEPS.map((step, i) => (
          <div key={i} className="min-h-screen flex items-center relative border-b border-stone-100 last:border-0 sticky top-0 bg-white">
            <div className="max-w-[1600px] mx-auto w-full px-6 md:px-12 grid lg:grid-cols-2 gap-24 items-center">
              <div className="order-2 lg:order-1">
                <Reveal>
                  <span className="text-[10rem] font-serif leading-none text-stone-100 absolute -top-20 -left-10 select-none z-0">
                    0{i + 1}
                  </span>
                  <div className="relative z-10">
                    <h3 className="text-5xl md:text-7xl font-serif mb-8">{step.title}</h3>
                    <p className="text-xl text-stone-500 font-light leading-relaxed max-w-lg">
                      {step.description}
                    </p>
                    <div className="mt-12 h-px w-full bg-stone-200" />
                  </div>
                </Reveal>
              </div>
              <div className="order-1 lg:order-2 h-[50vh] lg:h-[80vh] overflow-hidden relative interactive group rounded-lg shadow-2xl">
                <motion.img
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  src={step.image}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt={step.title}
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* NEW: CASE STUDY SECTION (TRUST BUILDER) */}
      <section className="py-32 bg-stone-100 border-y border-stone-200">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <Reveal>
                <div className="mb-8">
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand bg-brand/20 px-4 py-2 rounded-full">Crisis Averted</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-serif text-stone-900 mb-6 leading-none">
                  {CASE_STUDY.title.split('\n').map((line, i) => (
                    <span key={i} className="block">{line}</span>
                  ))}
                </h2>
                <p className="text-xl font-medium text-stone-900 mb-4">{CASE_STUDY.location}</p>
                <p className="text-stone-600 mb-12 text-lg leading-relaxed">{CASE_STUDY.challenge} {CASE_STUDY.solution}</p>

                <div className="space-y-8">
                  {CASE_STUDY.points.map((point, i) => (
                    <div key={i} className="flex gap-6 border-l-2 border-stone-300 pl-6 hover:border-stone-900 transition-colors duration-300 group/point">
                      <div className="space-y-2">
                        <h4 className="text-xl font-serif font-bold text-stone-900 group-hover:text-stone-600 transition-colors">{point.label}</h4>
                        <p className="text-stone-500">{point.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="order-1 lg:order-2 h-[60vh] relative interactive group overflow-hidden">
              <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-all duration-500 z-10" />
              <img src={CASE_STUDY.image} alt="Case Study Render" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur p-6 max-w-xs z-20 hidden md:block">
                <p className="font-serif text-2xl text-stone-900 italic">"We saved $15k before breaking ground."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. STATS & AUTHORITY */}
      <section className="py-40 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-serif text-center mb-24 max-w-4xl mx-auto">
              "We calculate every inch so you don't have to guess."
            </h2>
          </Reveal>
          <div className="border border-stone-200 bg-stone-200 gap-px grid grid-cols-2 md:grid-cols-4 shadow-sm">
            {STATS.map((stat, i) => (
              <div key={i} className="bg-white p-6 md:p-12 text-center flex flex-col items-center justify-center h-full">
                <Reveal delay={i * 0.1}>
                  <p className="text-2xl md:text-6xl lg:text-7xl font-serif text-stone-900 mb-2 tracking-tight">{stat.value}</p>
                  <p className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-stone-400">{stat.label}</p>
                </Reveal>
              </div>
            ))}
          </div>
          <Reveal delay={0.4}>
            <p className="text-center text-stone-400 text-sm mt-8 italic">
              *Or unlimited time design revisions, if you sign the packages.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 8. PACKAGES */}
      <section className="py-40 bg-stone-50">
        <div className="max-w-[1600px] mx-auto px-6">
          <SectionHeader title="INVEST IN CERTAINTY." subtitle="Packages" />
          <div className="grid md:grid-cols-3 gap-8">
            {PACKAGES.map((pkg, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className={`p-10 border transition-all duration-300 relative group h-full flex flex-col justify-between interactive ${pkg.highlight ? 'bg-stone-900 text-white border-brand shadow-2xl scale-105 z-10' : 'bg-white text-stone-900 border-stone-200 hover:border-brand'}`}>
                  <div>
                    {pkg.highlight && <span className="absolute top-0 right-0 bg-brand text-stone-900 text-[10px] font-bold px-4 py-1 uppercase tracking-widest">Most Popular</span>}
                    <h3 className="text-3xl font-serif mb-4">{pkg.name}</h3>
                    <p className={`text-sm mb-8 leading-relaxed ${pkg.highlight ? 'text-stone-400' : 'text-stone-500'}`}>{pkg.description}</p>
                    <ul className="space-y-4 mb-12">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm">
                          <CheckCircle2 size={16} className={pkg.highlight ? 'text-brand' : 'text-stone-900'} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-8 border-t border-stone-200">
                      <p className={`text-4xl font-serif font-bold mb-6 ${pkg.highlight ? 'text-white' : 'text-stone-900'}`}>{pkg.price}</p>
                      <Button variant={pkg.highlight ? 'primary' : 'secondary'} fullWidth onClick={() => handleOpenCheckout(pkg)}>
                        Secure This Plan
                      </Button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. WHAT YOU GET & SOCIAL PROOF */}
      <section className="py-40 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid md:grid-cols-2 gap-24">
          <div>
            <SectionHeader title="THE DELIVERABLES." subtitle="No Ambiguity" />
            <div className="bg-stone-100 p-8 md:p-12 rounded-xl shadow-lg">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <h4 className="text-3xl font-serif font-bold text-stone-900">Real Client Stories</h4>
                <a
                  href="https://www.google.com/maps/place/Blesspace+Pte.Ltd./@1.3187036,103.8905124,17z/data=!3m1!4b1!4m6!3m5!1s0x31da17cadb652321:0x54200f41fb4a5480!8m2!3d1.3187036!4d103.8930873!16s%2Fg%2F11rd27vky3?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-stone-900 border-b border-stone-900 pb-1 hover:text-brand hover:border-brand transition-colors"
                >
                  See More on Google Maps <ArrowRight size={14} />
                </a>
              </div>

              <div className="grid grid-cols-1 gap-8 max-h-[800px] overflow-y-auto pr-4 custom-scrollbar">
                {TESTIMONIAL_IMAGES.map((img, i) => (
                  <div key={i} className="relative group interactive cursor-zoom-in" onClick={() => setLightboxItem({ type: 'image', src: img })}>
                    <img
                      src={img}
                      alt={`Testimonial ${i + 1}`}
                      className="w-full h-auto rounded-lg shadow-md transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors rounded-lg" />
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      CLICK TO ZOOM
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <ul className="space-y-8">
              {WHATS_INCLUDED.map((item, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <li className="flex items-start gap-6 group interactive">
                    <div className="mt-1 w-6 h-6 border border-stone-900 rounded-full flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-colors">
                      <Box size={12} />
                    </div>
                    <span className="text-2xl md:text-3xl font-serif text-stone-500 group-hover:text-stone-900 transition-colors cursor-none">{item}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 10. FAQ & FINAL CTA */}
      <section className="bg-stone-900 text-stone-50 py-40 relative group/spotlight">
        <Spotlight />
        <div className="max-w-4xl mx-auto px-6 relative z-20">
          <h2 className="text-4xl font-serif text-center mb-16">Frequently Asked</h2>
          <div className="space-y-px bg-stone-800 border-y border-stone-800">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-stone-900 p-8 cursor-none interactive group" onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}>
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-serif text-stone-300 group-hover:text-white transition-colors">{faq.question}</h3>
                  <Plus className={`transition-transform duration-300 ${activeFAQ === i ? 'rotate-45' : ''}`} />
                </div>
                <AnimatePresence>
                  {activeFAQ === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                      <p className="pt-6 text-stone-500 font-light leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <div id="reservation" className="mt-40 text-center px-6">
          <div className="flex flex-col items-center">
            <img src="/logo.webp" alt="BlessSpace" className="w-[40vw] max-w-[600px] h-auto brightness-0 invert" loading="lazy" />
            <p className="mt-8 text-stone-500 max-w-md mx-auto">
              Transforming uncertain blueprints into breathtaking realities. Stop guessing, start feeling home.
            </p>
          </div>
          <div className="mt-12 flex flex-col items-center">
            <Button onClick={() => console.log("Book")} className="bg-white text-stone-900 !px-20 !py-10 text-xl interactive shadow-[0_0_50px_rgba(255,255,255,0.2)]">
              START YOUR VISUALIZATION
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setLightboxItem(null)}
            className="fixed inset-0 z-[1000] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out interactive"
          >
            <button className="absolute top-8 right-8 text-white hover:text-brand transition-colors"><X size={32} /></button>

            {lightboxItem.type === 'iframe' ? (
              <iframe
                src={lightboxItem.src}
                className="w-full h-full max-w-[90vw] max-h-[90vh] border-0 rounded-lg shadow-2xl"
                allowFullScreen
                title="3D View"
              />
            ) : (
              <motion.img
                initial={{ scale: 0.9 }} animate={{ scale: 1 }}
                src={lightboxItem.src}
                className="max-w-full max-h-[90vh] object-contain shadow-2xl"
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default App;