import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SINGAPORE_LOCATIONS, SERVICES, VIRAL_VIDEOS, DESIGN_STYLES } from '../data/singapore_pseo';
import { GALLERY_IMAGES } from '../constants';
import { Button } from '../components/ui/Button';
import { Reveal } from '../components/Reveal';
import { CheckCircle2, DraftingCompass, MapPin, Play, Volume2, VolumeX, ShieldCheck, Box } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const DynamicLanding: React.FC = () => {
    const { service: serviceSlug, location: locationSlug } = useParams<{ service: string; location: string }>();

    // --- LOGIC: DATA HANDLING ---
    const formatSlug = (slug: string) => slug?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    // Fuzzy match logic would go here, simple find for now
    const locationName = SINGAPORE_LOCATIONS.find(l => l.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') === locationSlug?.toLowerCase()) || formatSlug(locationSlug || 'Singapore');
    const serviceObj = SERVICES.find(s => s.slug === serviceSlug) || { name: 'Interior Design', slug: 'interior-design' };
    const serviceName = serviceObj.name;

    const [isVideoPlaying, setIsVideoPlaying] = useState<number | null>(null); // Index of playing video
    const [isMuted, setIsMuted] = useState(true);
    const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    const togglePlay = (index: number) => {
        const video = videoRefs.current[index];
        if (video) {
            if (video.paused) {
                video.play();
                setIsVideoPlaying(index);
            } else {
                video.pause();
                setIsVideoPlaying(null);
            }
        }
    };

    const toggleMute = () => {
        setIsMuted(!isMuted);
        videoRefs.current.forEach(v => {
            if (v) v.muted = !isMuted;
        });
    };

    // --- SEO METADATA ---
    const pageTitle = `${serviceName} in ${locationName} | Jenny Sin Internal Design`;
    const metaDesc = `Exclusive ${serviceName} packages for ${locationName} residents. See our 2025 Japandi & Wabi-Sabi portfolios. 100% MCST/HDB Compliant Renovation.`;

    // --- DYNAMIC CONTENT SEEDS ---
    // Generate deterministic random based on combined slugs to ensure unique per URL
    const combinedString = `${serviceSlug}-${locationSlug}`;
    const seed = combinedString.split('').reduce((acc, char, i) => acc + char.charCodeAt(0) * (i + 1), 0);

    const isCondo = locationName.includes("Residences") || locationName.includes("Park") || locationName.includes("Suites") || locationName.includes("Condo") || !locationName.includes("Punggol") && !locationName.includes("HDB");

    // Deterministic Shuffle Function (Fisher-Yates)
    const shuffleWithSeed = <T,>(array: T[], seed: number): T[] => {
        const shuffled = [...array];
        let currentSeed = seed;
        for (let m = shuffled.length - 1; m > 0; m--) {
            currentSeed = (currentSeed * 9301 + 49297) % 233280;
            const i = Math.floor((currentSeed / 233280) * (m + 1));
            [shuffled[m], shuffled[i]] = [shuffled[i], shuffled[m]];
        }
        return shuffled;
    };

    // Randomize Content based on Seed so every single URL is different
    const uniqueGallery = shuffleWithSeed(GALLERY_IMAGES, seed).slice(0, 8);
    const primaryVideo = VIRAL_VIDEOS[seed % VIRAL_VIDEOS.length];
    const secondaryVideo = VIRAL_VIDEOS[(seed + 1) % VIRAL_VIDEOS.length];

    // Dynamic Text Variations
    const selectedStyles = shuffleWithSeed(DESIGN_STYLES, seed).slice(0, 3);
    const layoutVariation = seed % 2 === 0; // Toggle layout sides

    const introTemplates = [
        `Welcome to the future of ${serviceName} at ${locationName}. We specialize in creating high-end, bespoke environments.`,
        `Thinking of a transformation for your property at ${locationName}? Our ${serviceName} experts bring years of experience.`,
        `At ${locationName}, luxury meets functionality. Our ${serviceName} team is dedicated to perfecting every square inch.`,
        `Elevate your living standard in ${locationName}. Discover how our ${serviceName} solutions outperform traditional contractors.`
    ];
    const introText = introTemplates[seed % introTemplates.length];

    return (
        <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-brand selection:text-white">
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={metaDesc} />
                <link rel="canonical" href={`https://booking.blesspace.org/sg/${serviceSlug}/${locationSlug}`} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={`Don't renovate your unit at ${locationName} blindly. Visualize it first.`} />
            </Helmet>

            {/* STICKY HEADER */}
            <header className="fixed top-0 w-full z-50 bg-stone-900/95 backdrop-blur text-white py-4 shadow-xl">
                <div className="max-w-[1600px] mx-auto px-6 flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2 group">
                        <img src="/logo.webp" alt="BlessSpace" className="h-8 brightness-0 invert group-hover:scale-110 transition-transform" />
                        <span className="font-serif text-xl tracking-widest hidden md:block">BLESSSPACE</span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <span className="hidden md:block text-xs text-stone-400 uppercase tracking-widest">Specialist for {locationName}</span>
                        <Button variant="primary" className="text-xs md:text-sm !py-2">
                            Get Quote
                        </Button>
                    </div>
                </div>
            </header>

            {/* HERO SECTION - TIKTOK STYLE VIDEO BACKGROUND OPTION OR IMAGE */}
            <section className="relative min-h-screen flex items-center justify-center bg-stone-900 text-white overflow-hidden pt-20">
                <div className="absolute inset-0 z-0">
                    {/* Fallback Image */}
                    <img src="/luxury-result.webp" className="w-full h-full object-cover opacity-30 scale-105" alt="Luxury Interior" />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-stone-900/50" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <Reveal>
                            <div className="inline-flex items-center gap-2 border border-brand/50 bg-brand/10 backdrop-blur px-4 py-1.5 rounded-full mb-8">
                                <MapPin size={14} className="text-brand" />
                                <span className="text-brand uppercase tracking-widest text-xs font-bold">{locationName} Edition</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl xl:text-8xl font-serif mb-6 leading-[0.9] tracking-tight">
                                {serviceName} <br />
                                <span className="text-brand italic text-4xl md:text-6xl font-light block mt-2">Specifically for {locationName}</span>
                            </h1>
                            <p className="text-lg md:text-xl text-stone-300 max-w-xl mb-10 font-light leading-relaxed">
                                {introText} We utilize <strong>Digital Twin Technology</strong> to visualize your exact unit layout at {locationName} before you pay a deposit.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Button className="bg-brand text-stone-900 hover:bg-white w-full sm:w-auto">
                                    View 3D Concepts for {locationName}
                                </Button>
                                <Button variant="outline" className="w-full sm:w-auto">
                                    Check Availability
                                </Button>
                            </div>

                            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-stone-500 text-sm font-medium">
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="text-brand" size={18} />
                                    <span>{isCondo ? 'MCST Compliant' : 'HDB Licensed'}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="text-brand" size={18} />
                                    <span>No Hidden Costs</span>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    {/* VIRAL VIDEO CARD - TIKTOK EMBED STYLE */}
                    <div className="relative mx-auto lg:mr-0 w-[280px] md:w-[320px] aspect-[9/16] bg-stone-800 rounded-2xl overflow-hidden shadow-2xl border border-stone-700 rotate-3 hover:rotate-0 transition-transform duration-500 group">
                        <video
                            ref={el => { videoRefs.current[0] = el; }}
                            src={primaryVideo}
                            className="w-full h-full object-cover"
                            loop
                            playsInline
                            muted={isMuted}
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />

                        {/* Play Overlay */}
                        <div
                            className="absolute inset-0 flex items-center justify-center cursor-pointer"
                            onClick={() => togglePlay(0)}
                        >
                            {!isVideoPlaying && (
                                <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center border border-white/50 animate-pulse">
                                    <Play fill="white" className="text-white ml-1" />
                                </div>
                            )}
                        </div>

                        {/* TikTok UI Elements Clone */}
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-8 h-8 rounded-full bg-brand overflow-hidden border border-white">
                                    <img src="/jenny-designing.webp" className="w-full h-full object-cover" />
                                </div>
                                <span className="font-bold text-sm shadow-black drop-shadow-md">@JennySin_Design</span>
                            </div>
                            <p className="text-xs line-clamp-2 text-shadow-sm mb-4">
                                Watch how we transformed this unit! #InteriorDesign #{locationName.replace(/\s/g, '')} #Singapore
                            </p>
                        </div>

                        <button
                            onClick={(e) => { e.stopPropagation(); toggleMute(); }}
                            className="absolute top-4 right-4 bg-black/50 p-2 rounded-full text-white hover:bg-black/70"
                        >
                            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                        </button>
                    </div>
                </div>
            </section>

            {/* TRUST SECTION - HUSBAND & WIFE DYNAMIC */}
            <section className="py-24 bg-white">
                <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

                    {/* HUSBAND - The Executor */}
                    <Reveal>
                        <div className="bg-stone-50 p-10 rounded-xl relative overflow-hidden group hover:shadow-xl transition-shadow border border-stone-100">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <DraftingCompass size={120} />
                            </div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-stone-200 rounded-full flex items-center justify-center text-2xl font-serif font-bold text-stone-400">
                                        R
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-serif font-bold text-stone-900">Expert Execution</h3>
                                        <p className="text-stone-500 text-sm uppercase tracking-widest">Head of Projects</p>
                                    </div>
                                </div>
                                <h4 className="text-xl font-medium mb-4">"I know {locationName} inside out."</h4>
                                <p className="text-stone-600 leading-relaxed mb-6">
                                    Every estate has its quirks. For <strong>{locationName}</strong>, my team is already familiar with the specific {isCondo ? 'Working Hours & Lift Protection requirements' : 'HDB hacking permits and loading constraints'}.
                                    I personally supervise the wet works to ensure 100% adherence to our 3D renders.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-sm font-medium text-stone-700">
                                        <CheckCircle2 size={16} className="text-brand" />
                                        <span>Zero "Renovation Regret" Guarantee</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm font-medium text-stone-700">
                                        <CheckCircle2 size={16} className="text-brand" />
                                        <span>Direct WhatsApp updates from Site</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Reveal>

                    {/* JENNY - The Visionary (Video 2) */}
                    <Reveal delay={0.2}>
                        <div className="bg-[#1a1a1a] text-white p-10 rounded-xl relative overflow-hidden group hover:shadow-2xl transition-all border border-stone-800">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <div className="flex items-center gap-2 mb-6 text-brand">
                                        <span className="w-8 h-px bg-brand"></span>
                                        <span className="uppercase tracking-widest text-xs font-bold">Jenny's Corner (Mandarin)</span>
                                    </div>
                                    <h3 className="text-3xl font-serif mb-4">Modern Feng Shui & Aesthetics</h3>
                                    <p className="text-stone-400 text-sm mb-6 leading-relaxed">
                                        "For {locationName}, I recommend a fusion of {selectedStyles.join(' and ')}. Watch my explanation on how to maximize Qi flow in this specific layout type."
                                    </p>
                                    <Button className="bg-white text-stone-900 hover:bg-stone-200 w-full text-xs">
                                        Connect on WeChat / WhatsApp
                                    </Button>
                                </div>

                                {/* SECOND VIDEO EMBED */}
                                <div className={`relative w-full aspect-[9/16] bg-black rounded-lg overflow-hidden border border-stone-800 cursor-pointer ${layoutVariation ? 'md:order-last' : ''}`} onClick={() => togglePlay(1)}>
                                    <video
                                        ref={el => { videoRefs.current[1] = el; }}
                                        src={secondaryVideo}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                        loop
                                        playsInline
                                        muted={isMuted}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        {!isVideoPlaying && (
                                            <Play size={40} className="text-white drop-shadow-lg" />
                                        )}
                                    </div>
                                    <div className="absolute bottom-2 right-2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                                        HOT
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* VIRTUAL SHOWROOM & 3D TOUR - NEW ADDITION */}
            <section className="py-24 bg-stone-900 text-white overflow-hidden">
                <div className="max-w-[1600px] mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                        <Reveal>
                            <span className="text-brand font-bold tracking-widest uppercase text-xs mb-2 block">Visual Experience</span>
                            <h2 className="text-4xl md:text-6xl font-serif">
                                See {locationName} in <span className="text-brand italic">Virtual Reality</span>
                            </h2>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <p className="text-stone-400 max-w-md text-right hidden md:block">
                                Don't rely on 2D floor plans. Experience the flow, lighting, and materials of our premium layouts.
                            </p>
                        </Reveal>
                    </div>

                    {/* FEATURED 3D TOUR EMBED - CLICK TO POPUP */}
                    <Reveal>
                        <div
                            onClick={() => setLightboxSrc(GALLERY_IMAGES[seed % GALLERY_IMAGES.length]?.embedUrl || "https://www.kujiale.com/design/3FO3ILOKW277/show?friendid=3FO4JDNVIK6M")}
                            className="relative w-full aspect-[16/9] bg-stone-800 rounded-2xl overflow-hidden shadow-2xl border border-stone-800 mb-20 cursor-pointer group"
                        >
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10 flex flex-col items-center justify-center text-center p-6">
                                <Box size={64} className="text-brand mb-4 animate-bounce" />
                                <h3 className="text-3xl md:text-5xl font-serif text-white mb-2 shadow-black drop-shadow-lg">Interactive 3D Walkthrough</h3>
                                <p className="text-stone-300 max-w-sm">Explore the {locationName} premium layout in immersive 3D space. Click to launch the experience.</p>
                                <div className="mt-8 px-8 py-3 bg-brand text-stone-900 font-bold rounded-full transform group-hover:scale-110 transition-transform shadow-xl">
                                    Enter 3D Space
                                </div>
                            </div>
                            <img
                                src={GALLERY_IMAGES[seed % GALLERY_IMAGES.length]?.src || "/luxury-result.webp"}
                                className="w-full h-full object-cover blur-[2px] opacity-60"
                                alt="3D Preview"
                            />
                        </div>
                    </Reveal>

                    {/* PORTFOLIO GRID */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {uniqueGallery.map((img, i) => (
                            <Reveal key={i} delay={i * 0.1}>
                                <div className="aspect-square relative overflow-hidden rounded-lg group cursor-pointer border border-stone-800">
                                    <img
                                        src={img.src}
                                        alt={`${img.label} Design`}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <span className="text-white font-serif text-lg">{img.label}</span>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* HYPER-LOCAL SEO CONTENT BLOCKS */}
            <section className="py-24 bg-stone-50">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-serif text-center mb-12">
                        Why We Are The Best Choice for <span className="italic text-stone-400">{locationName}</span>
                    </h2>

                    <div className="space-y-8">
                        {[
                            { title: `Familiar with ${locationName} Layouts`, desc: `We have an extensive library of floor plans for ${locationName}. This allows us to start your 3D modeling immediately without waiting for site measurements.` },
                            { title: "High-End Finishing Standards", desc: `Our carpentry and renovation partners are keyed into the high expectations of ${locationName} residents. Seamless joinery, premium laminates, and perfect tiling.` },
                            { title: "Mistake-Free Guarantee", desc: `With our "See Before You Build" philosophy, you approve every detail in 3D before a single brick is laid. This creates a stress-free renovation experience.` }
                        ].map((item, i) => (
                            <Reveal key={i} delay={i * 0.1}>
                                <div className="flex gap-6 p-6 bg-white border border-stone-100 shadow-sm hover:shadow-md transition-shadow rounded-lg">
                                    <div className="flex-shrink-0 mt-1">
                                        <CheckCircle2 className="text-brand" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                        <p className="text-stone-600">{item.desc}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* MASSIVE INTERNAL LINKING WEB - "THE SPIDERWEB" */}
            <section className="py-20 bg-stone-900 text-stone-400 border-t border-stone-800">
                <div className="max-w-[1600px] mx-auto px-6">
                    <div className="mb-12">
                        <h4 className="font-bold text-white tracking-widest uppercase mb-4">Explore Other Exclusive Locations</h4>
                        <div className="h-px w-full bg-stone-800" />
                    </div>

                    <div className="columns-2 md:columns-4 lg:columns-5 gap-8 text-xs leading-loose">
                        {/* DYNAMIC NEARBY AREAS (Simulated via Seed) - Max 15 links to avoid spam */}
                        {SINGAPORE_LOCATIONS
                            .filter((_, idx) => {
                                // Pseudo-random selection based on location seed to keep links stable per page but different across pages
                                const pseudoRandom = (seed + idx) % SINGAPORE_LOCATIONS.length;
                                return pseudoRandom % 10 === 0; // Take roughly 10% or limit logic below
                            })
                            .slice(0, 15) // HARD LIMIT 15 LINKS for safety
                            .map((loc, i) => (
                                <Link
                                    key={i}
                                    to={`/sg/${serviceSlug}/${loc.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`}
                                    className="block hover:text-brand transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                                >
                                    {loc} {serviceName}
                                </Link>
                            ))}
                    </div>

                    <div className="mt-12 pt-12 border-t border-stone-800 text-center">
                        <p className="text-xs text-stone-600">
                            &copy; 2025 BlessSpace Interior Design Singapore. specializing in {locationName} renovations.
                            All 3D renderings are artist impressions.
                        </p>
                    </div>
                </div>
            </section>

            {/* FLOATING WHATSAPP BUTTON */}
            <a
                href="https://wa.me/6580970884?text=Hi%20BlessSpace,%20I%20am%20interested%20in%20renovating%20my%20unit%20at%20${locationName}"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
                aria-label="Contact on WhatsApp"
            >
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-8 h-8 filter brightness-0 invert" />
                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap ml-0 group-hover:ml-3 font-bold">
                    Chat with Jenny
                </span>
            </a>
            {/* LIGHTBOX FOR 3D TOUR */}
            <AnimatePresence>
                {lightboxSrc && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
                    >
                        <button
                            onClick={() => setLightboxSrc(null)}
                            className="absolute top-6 right-6 text-white hover:text-brand z-[110] transition-colors p-2 bg-black/50 rounded-full"
                        >
                            <X size={32} />
                        </button>
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="w-full h-full max-w-[1600px] overflow-hidden rounded-xl shadow-2xl relative"
                        >
                            <iframe
                                src={lightboxSrc}
                                className="w-full h-full border-0"
                                allowFullScreen
                                title="3D VR Tour"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// --- HELPER COMPONENT: CLOSE ICON ---
const X = ({ size = 24 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

export default DynamicLanding;
