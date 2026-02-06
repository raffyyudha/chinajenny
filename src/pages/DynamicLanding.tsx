import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SINGAPORE_LOCATIONS, SERVICES, VIRAL_VIDEOS, DESIGN_STYLES } from '../data/singapore_pseo';
import { GALLERY_IMAGES } from '../constants';
import { Button } from '../components/ui/Button';
import { Reveal } from '../components/Reveal';
import { CheckCircle2, DraftingCompass, MapPin, Play, Volume2, VolumeX, ShieldCheck, Box } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const DynamicLanding: React.FC = () => {
    const { service: serviceSlug, location: locationSlug } = useParams<{ service: string; location: string }>();
    const location = useLocation();
    const isChinese = location.pathname.startsWith('/zh-sg');

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

    // --- DYNAMIC CONTENT SEEDS ---
    // Generate deterministic random based on combined slugs to ensure unique per URL
    const combinedString = `${serviceSlug}-${locationSlug}`;
    const seed = combinedString.split('').reduce((acc, char, i) => acc + char.charCodeAt(0) * (i + 1), 0);

    // --- SEO METADATA ---
    const pageTitle = `${serviceName} in ${locationName} | Blesspace`;
    // --- MASSIVE PSEO VARIATIONS (100+ COMBINED TEMPLATES) ---

    const metaDescTemplatesEn = [
        `Exclusive ${serviceName} packages for ${locationName} residents. See our 2025 Japandi & Wabi-Sabi portfolios.`,
        `Looking for ${serviceName} in ${locationName}? Blesspace offers premium 3D visualization. Prevent renovation mistakes.`,
        `Visualize your dream home at ${locationName}. Our ${serviceName} uses Digital Twin technology for exact precision.`,
        `Best ${serviceName} in ${locationName}. We help you see the final result before you pay a deposit.`,
        `Transform your ${locationName} unit. Blesspace ${serviceName} ensures your design is 100% MCST/HDB compliant.`,
        `Don't guess with your renovation at ${locationName}. Use our ${serviceName} to get a hyper-realistic preview first.`,
        `Specialized ${serviceName} for ${locationName}. Jenny Sin recommends our Fusion Japandi style for this layout.`,
        `The most trusted ${serviceName} in ${locationName}. See why neighbors are choosing Blesspace for their 3D concept.`,
        `Get a full VR tour of your future ${locationName} home. Our ${serviceName} is the new standard in Singapore renovation.`,
        `Stop looking at 2D floor plans. See your ${locationName} unit in cinematic 3D with our ${serviceName} package.`,
        `Renovating at ${locationName}? Don't sign anything until you see our ${serviceName} proposal. Risk-free visualization.`,
        `Secure your ${serviceName} slot for ${locationName}. Limited availability for our premium Digital Twin service.`,
        `From empty shell to dream home. Watch how we transform ${locationName} units using advanced ${serviceName}.`,
        `Blesspace brings high-tech ${serviceName} to ${locationName}. Experience your design before construction begins.`,
        `Expert ${serviceName} for ${locationName} homeowners. We know the exact dimensions and lighting of your unit.`,
        `Planning a renovation at ${locationName}? Our ${serviceName} saves you money by preventing costly design errors.`,
        `The ultimate ${serviceName} experience for ${locationName}. immersive, detailed, and incredibly realistic.`,
        `Join the waitlist for ${serviceName} at ${locationName}. Our designers are specialists in this specific development.`,
        `Why settle for sketches? Get a 4K video walkthrough of your ${locationName} home with our ${serviceName}.`,
        `Tailored ${serviceName} for the sophisticated residents of ${locationName}. Modern luxury starts here.`,
        `Your key to a perfect renovation at ${locationName} starts with our professional ${serviceName}.`,
        `We map every inch of your ${locationName} unit. Our ${serviceName} reveals the true potential of your space.`,
        `Singapore's #1 ${serviceName} service, now available for ${locationName} residents.`,
        `Before you hack a single wall at ${locationName}, see the outcome with our ${serviceName}.`,
        `Discover the hidden potential of your ${locationName} layout with Blesspace ${serviceName}.`,
        `Designed for ${locationName}. visualized by Blesspace. The perfect start to your renovation journey.`,
        `Bringing global design trends to ${locationName}. Experience our ${serviceName} today.`,
        `Maximize space and value at ${locationName} with our strategic ${serviceName} solutions.`,
        `A smarter way to renovate at ${locationName}. Start with our data-driven ${serviceName}.`,
        `See it. Believe it. Build it. ${serviceName} for ${locationName} by Blesspace.`
    ];

    const metaDescTemplatesZh = [
        `专为 ${locationName} 居民提供的独家 ${serviceName} 设计配套。查看我们的 2025 Japandi & Wabi-Sabi 产品组合。`,
        `正在寻找 ${locationName} 的 ${serviceName}？Blesspace 提供高级 3D 可视化服务。立即避免装修失误。`,
        `在 ${locationName} 预见您的梦想家园。我们的 ${serviceName} 使用数字孪生技术实现精确布局。`,
        `位于 ${locationName} 的最佳 ${serviceName}。在支付定金前先看到最终效果。预约咨询。`,
        `改造您的 ${locationName} 单位。Blesspace ${serviceName} 确保您的设计既美观又合规。`,
        `别在 ${locationName} 的装修上盲目猜测。使用我们的 ${serviceName} 获得超逼真的预览。`,
        `专为 ${locationName} 定制的 ${serviceName}。Jenny Sin 推荐此户型采用 Fusion Japandi 风格。`,
        `获得您未来 ${locationName} 家的完整 VR 之旅。我们的 ${serviceName} 是新加坡装修的新标准。`,
        `别再看 2D 平面图了。用我们的 ${serviceName} 配套以电影级 3D 视角查看您的 ${locationName} 单位。`,
        `在 ${locationName} 装修？在看到我们的 ${serviceName} 提案之前，请勿签署任何合同。`,
        `为 ${locationName} 锁定您的 ${serviceName} 名额。我们的高级数字孪生服务名额有限。`,
        `从毛坯房到梦想家园。观看我们如何使用先进的 ${serviceName} 改造 ${locationName} 单位。`,
        `Blesspace 将高科技 ${serviceName} 带到 ${locationName}。在施工开始前体验您的设计。`,
        `为 ${locationName} 业主提供的专家级 ${serviceName}。我们了解您单位的确切尺寸和光线。`,
        `计划在 ${locationName} 装修？我们的 ${serviceName} 通过防止昂贵的设计错误为您省钱。`,
        `为 ${locationName} 提供的终极 ${serviceName} 体验。沉浸式、细节丰富且极其逼真。`,
        `加入 ${locationName} 的 ${serviceName} 等待名单。我们的设计师是该特定开发的专家。`,
        `为什么要满足于草图？用我们的 ${serviceName} 获取您 ${locationName} 家的 4K 视频漫游。`,
        `为 ${locationName} 的精致居民量身定制的 ${serviceName}。现代奢华从这里开始。`,
        `在 ${locationName} 完美装修的关键始于我们专业的 ${serviceName}。`,
        `我们绘制您 ${locationName} 单位的每一寸。我们的 ${serviceName} 揭示您空间的真正潜力。`,
        `新加坡排名第一的 ${serviceName} 服务，现已面向 ${locationName} 居民开放。`,
        `在 ${locationName} 敲掉哪怕一面墙之前，先用我们的 ${serviceName} 看看结果。`,
        `用 Blesspace ${serviceName} 发现您 ${locationName} 户型的隐藏潜力。`,
        `专为 ${locationName} 设计。由 Blesspace 可视化。您装修之旅的完美起点。`,
        `将全球设计趋势带到 ${locationName}。立即体验我们的 ${serviceName}。`,
        `用我们的战略性 ${serviceName} 解决方案在 ${locationName} 最大化空间和价值。`,
        `在 ${locationName} 更明智的装修方式。从我们数据驱动的 ${serviceName} 开始。`,
        `眼见为实。${locationName} 的 ${serviceName}，由 Blesspace 提供。`
    ];

    const metaDesc = isChinese
        ? metaDescTemplatesZh[seed % metaDescTemplatesZh.length]
        : metaDescTemplatesEn[seed % metaDescTemplatesEn.length];

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

    // --- INTRO TEXT VARIATIONS ---

    const introTemplatesEn = [
        `Welcome to the future of ${serviceName} at ${locationName}. We specialize in creating high-end, bespoke environments tailored to your lifestyle.`,
        `Thinking of a transformation for your property at ${locationName}? Our ${serviceName} experts bring years of award-winning experience to your doorstep.`,
        `At ${locationName}, luxury meets functionality. Our ${serviceName} team is dedicated to perfecting every square inch of your specific layout.`,
        `Elevate your living standard in ${locationName}. Discover how our ${serviceName} solutions outperform traditional contractors in precision and style.`,
        `Your unit at ${locationName} deserves more than a standard renovation. It deserves a masterpiece created through our advanced ${serviceName}.`,
        `We understand the unique layout constraints of ${locationName}. Our ${serviceName} is tailored to maximize space, flow, and natural light here.`,
        `Step into your future home at ${locationName} before a single brick is laid. Our 3D ${serviceName} makes the impossible possible.`,
        `Precision, elegance, and foresight. That's what we bring to every ${serviceName} project we undertake in ${locationName}.`,
        `Stop imagining and start seeing. We bring the best ${serviceName} technology right to your doorstep in ${locationName}.`,
        `The residents of ${locationName} have distinctive tastes. Our ${serviceName} is crafted to match that sophisticated, modern lifestyle.`,
        `Don't settle for 2D drawings or rough sketches. For your home in ${locationName}, experience the cinematic depth of our 3D ${serviceName}.`,
        `From modern Japandi to classic luxury, we visualize every style for ${locationName} units using our premier ${serviceName} workflow.`,
        `Avoid expensive renovation regrets and variation orders. Our ${serviceName} allows ${locationName} homeowners to test ideas virtually first.`,
        `We are the ${serviceName} specialists for ${locationName}. We know the floor plans, the lighting, and the hidden potential of your specific unit.`,
        `Join the smart homeowners of ${locationName} who choose Blesspace for their ${serviceName} needs. See the difference clarity makes.`,
        `Experience the Blesspace difference at ${locationName}. Our ${serviceName} process is transparent, visual, and absolutely mistake-free.`,
        `Creating a sanctuary at ${locationName} requires vision. Our ${serviceName} provides the lens to see that vision come to life instantly.`,
        `Every corner of your ${locationName} home matters. Our ${serviceName} ensures no space is wasted and every detail counts.`,
        `Unlock the true value of your property at ${locationName}. A professional ${serviceName} can increase perceived value and comfort significantly.`,
        `Renovation without visualization is gambling. At ${locationName}, we ensure you win every time with our premium ${serviceName}.`,
        `Tailored specifically for the ${locationName} community. Our ${serviceName} packages are designed to meet the high standards of this estate.`,
        `Imagine walking through your finished home at ${locationName} today. Our Real-Time ${serviceName} renders make that dream a reality.`,
        `The layout of ${locationName} units offers unique opportunities. Our ${serviceName} helps you exploit every architectural advantage.`,
        `Sustainability meets style at ${locationName}. Our ${serviceName} helps you plan eco-friendly and aesthetic interiors seamlessly.`,
        `For the discerning owner at ${locationName}: A ${serviceName} service that respects your time, your budget, and your vision.`,
        `Don't just renovate; evolve. Our ${serviceName} at ${locationName} pushes the boundaries of what interior design can achieve.`,
        `We bring a gallery-quality aesthetic to ${locationName}. Let our ${serviceName} show you how your home can look like a masterpiece.`,
        `Functional luxury is our promise for ${locationName}. Our ${serviceName} balances beauty with everyday practicality perfectly.`,
        `Ready to impress? Our ${serviceName} for ${locationName} creates interiors that will leave your guests speechless.`,
        `Your journey to a dream home at ${locationName} begins with a single click. Explore our ${serviceName} options now.`
    ];

    const introTemplatesZh = [
        `欢迎来到 ${locationName} 的 ${serviceName} 未来体验。我们专注于打造高端定制的居住环境，完美契合您的生活方式。`,
        `正在考虑改造您在 ${locationName} 的房产吗？我们的 ${serviceName} 专家拥有多年的丰富经验，为您带来屡获殊荣的设计。`,
        `在 ${locationName}，奢华与功能完美融合。我们的 ${serviceName} 团队致力于打磨您特定户型的每一寸空间。`,
        `提升您在 ${locationName} 的生活品质。了解我们的 ${serviceName} 解决方案如何在精度和风格上超越传统承包商。`,
        `您在 ${locationName} 的单位值得拥有的不仅仅是标准装修。通过我们先进的 ${serviceName}，它将成为真正的杰作。`,
        `我们了解 ${locationName} 独特的户型限制。我们的 ${serviceName} 旨在最大化这里的空间、动线和自然光线。`,
        `在一砖一瓦与铺设之前，先走进您在 ${locationName} 的未来家园。我们的 3D ${serviceName} 让想象成为现实。`,
        `精准、优雅和远见。这就是我们带给 ${locationName} 每一个 ${serviceName} 项目的承诺。`,
        `停止想象，开始眼见为实。我们将最好的 ${serviceName} 技术带到您在 ${locationName} 的家门口。`,
        `别满足于 2D 图纸或粗糙的草图。对于您在 ${locationName} 的家，体验我们 3D ${serviceName} 的电影级深度。`,
        `从现代 Japandi 到经典奢华，我们使用首屈一指的 ${serviceName} 工作流程为 ${locationName} 单位呈现各种风格。`,
        `避免昂贵的装修遗憾和变更订单。我们的 ${serviceName} 允许 ${locationName} 业主先在虚拟环境中测试想法。`,
        `我们是 ${locationName} 的 ${serviceName} 专家。我们了解平面图、光线以及您特定单位的隐藏潜力。`,
        `加入 ${locationName} 选择 Blesspace 满足其 ${serviceName} 需求的明智业主行列。看看清晰度带来的差异。`,
        `在 ${locationName} 体验 Blesspace 的不同之处。我们的 ${serviceName} 流程透明、直观且绝对无误。`,
        `在 ${locationName} 创造一个避风港需要远见。我们的 ${serviceName} 提供了让这种远见瞬间实现的镜头。`,
        `您 ${locationName} 家的每一个角落都很重要。我们的 ${serviceName} 确保没有空间被浪费，每一个细节都算数。`,
        `释放您在 ${locationName} 房产的真正价值。专业的 ${serviceName} 可以显著提高感知价值和舒适度。`,
        `没有可视化的装修就像是赌博。在 ${locationName}，我们通过高级 ${serviceName} 确保您每次都赢。`,
        `专为 ${locationName} 社区量身定制。我们的 ${serviceName} 配套旨在满足该小区的最高标准。`,
        `想象一下今天就走进您在 ${locationName} 装修好的家。我们的实时 ${serviceName} 渲染让这个梦想成为现实。`,
        `对于 ${locationName} 独具慧眼的业主：一项尊重您的时间、预算和愿景的 ${serviceName} 服务。`,
        `不要只是装修；要进化。我们在 ${locationName} 的 ${serviceName} 突破了室内设计所能达到的界限。`,
        `我们将画廊级的美学带到 ${locationName}。让我们的 ${serviceName} 向您展示您的家如何像一件艺术品。`,
        `功能性奢华是我们对 ${locationName} 的承诺。我们的 ${serviceName} 完美平衡了美感与日常实用性。`,
        `准备好给人留下深刻印象了吗？我们在 ${locationName} 的 ${serviceName} 创造出让客人赞叹不已的内饰。`
    ];

    const introText = isChinese ? introTemplatesZh[seed % introTemplatesZh.length] : introTemplatesEn[seed % introTemplatesEn.length];

    return (
        <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-brand selection:text-white">
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={metaDesc} />
                <link rel="canonical" href={`https://booking.blesspace.org/sg/${serviceSlug}/${locationSlug}`} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={`Don't renovate your unit at ${locationName} blindly. Visualize it first.`} />
                <meta property="og:image" content="https://booking.blesspace.org/logo.webp" />
                <meta property="twitter:image" content="https://booking.blesspace.org/logo.webp" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Blesspace",
                        "url": "https://booking.blesspace.org",
                        "logo": "https://booking.blesspace.org/logo.webp",
                        "description": "Premium Interior 3D Visualization specifically for " + locationName
                    })}
                </script>
            </Helmet>

            {/* STICKY HEADER */}
            <header className="fixed top-0 w-full z-50 bg-stone-900/95 backdrop-blur text-white py-4 shadow-xl">
                <div className="max-w-[1600px] mx-auto px-6 flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2 group">
                        <img src="/logo.webp" alt="Blesspace" className="h-8 brightness-0 invert group-hover:scale-110 transition-transform" />
                        <span className="font-serif text-xl tracking-widest hidden md:block">BLESSPACE</span>
                    </Link>
                    <div className="flex items-center gap-6">
                        <nav className="hidden lg:flex items-center gap-6 text-[10px] font-bold tracking-[0.2em] uppercase text-stone-400">
                            <Link to="/" className="hover:text-white transition-colors">Booking Home</Link>
                            <a href="https://blessspace.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors border-l border-stone-700 pl-6">Company Profile</a>
                        </nav>
                        <div className="flex items-center gap-4 border-l border-stone-700 pl-6">
                            <span className="hidden md:block text-xs text-stone-500 uppercase tracking-widest">{isChinese ? `专为 ${locationName} 服务` : `Area: ${locationName}`}</span>
                            <a href="/#reservation">
                                <Button variant="primary" className="text-xs md:text-sm !py-2">
                                    {isChinese ? "获取报价" : "Get Quote"}
                                </Button>
                            </a>
                        </div>
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
                                {isChinese ? "看到未来。" : "See The Future."} <br />
                                <span className="text-brand italic text-4xl md:text-6xl font-light block mt-2">{isChinese ? `专属于 ${locationName}` : `Specifically for ${locationName}`}</span>
                            </h1>
                            <p className="text-lg md:text-xl text-stone-300 max-w-xl mb-10 font-light leading-relaxed">
                                {introText} {isChinese ? `我们利用数字孪生技术，在您支付定金之前即可看到 ${locationName} 的精确单元布局。` : <>We utilize <strong className="text-white font-medium">Digital Twin Technology</strong> to visualize your exact unit layout at {locationName} before you pay a deposit.</>}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <a href="/#reservation" className="w-full sm:w-auto">
                                    <Button className="bg-brand text-stone-900 hover:bg-white w-full">
                                        {isChinese ? `查看 ${locationName} 的 3D 概念` : `View 3D Concepts for ${locationName}`}
                                    </Button>
                                </a>
                                <a href="/#reservation" className="w-full sm:w-auto">
                                    <Button variant="outline" className="w-full">
                                        {isChinese ? "检查空档期" : "Check Availability"}
                                    </Button>
                                </a>
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

            {/* SOCIAL PROOF: RECENT ACTIVITY - PSYCHOLOGICAL TRIGGER */}
            <section className="bg-stone-50 border-y border-stone-200 py-8 overflow-hidden relative z-20">
                <div className="max-w-[1600px] mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-stone-200 overflow-hidden shadow-sm">
                                        <img src={`https://i.pravatar.cc/100?u=${seed + i}`} alt="user" className="w-full h-full object-cover grayscale" />
                                    </div>
                                ))}
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-sm font-bold text-stone-900">{((seed % 5) + 3)} Owners at {locationName} currently viewing</span>
                                </div>
                                <p className="text-xs text-stone-500 uppercase tracking-widest font-medium">Design slots for 2026 are filling up fast</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-8 overflow-x-auto no-scrollbar py-2 w-full md:w-auto">
                            {[
                                { user: "Tan ***", action: "Requested Floor Plan Analysis", time: "2h ago" },
                                { user: "Lim ***", action: "Booked 3D Virtual Tour", time: "5h ago" },
                                { user: "K. Wong", action: "Requested Quote", time: "1d ago" }
                            ].map((activity, idx) => (
                                <div key={idx} className="flex-shrink-0 bg-white px-4 py-2 rounded-lg border border-stone-100 shadow-sm flex items-center gap-3">
                                    <div className="w-2 h-2 bg-brand rounded-full"></div>
                                    <div className="text-xs">
                                        <span className="font-bold text-stone-900">{activity.user}</span>
                                        <span className="text-stone-500 mx-2">{activity.action}</span>
                                        <span className="text-[10px] text-stone-400 italic">{activity.time}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
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
                                    <a href={`https://wa.me/6580970884?text=Hi%20Jenny,%20regarding%20the%20Promo%20from%20Raffy%20Yudha,%20I%20watched%20your%20video%20about%20${locationName}%20and%20I'd%20love%20to%20consult.`} target="_blank" rel="noopener noreferrer">
                                        <Button className="bg-white text-stone-900 hover:bg-stone-200 w-full text-xs">
                                            Connect on WeChat / WhatsApp
                                        </Button>
                                    </a>
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
                                    className="block hover:text-brand transition-colors text-sm leading-relaxed"
                                >
                                    {loc} {serviceName}
                                </Link>
                            ))}
                    </div>
                </div>
            </section>

            {/* PARTNER TOOLS BANNER - PROMINENT BACKLINKS */}
            <section className="py-16 bg-gradient-to-br from-stone-800 to-stone-900 border-y border-stone-700">
                <div className="max-w-[1200px] mx-auto px-6">
                    <h3 className="text-center text-2xl md:text-3xl font-bold text-white mb-4">
                        Free Business Tools We Recommend
                    </h3>
                    <p className="text-center text-stone-400 mb-10 max-w-2xl mx-auto">
                        Running a business? These free tools will help you manage invoices and receipts professionally.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* DraftKit Card */}
                        <a
                            href="https://draftkit.online"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-stone-900/50 backdrop-blur border border-stone-700 rounded-2xl p-8 hover:border-brand/50 hover:bg-stone-800/50 transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold shrink-0">
                                    📄
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white group-hover:text-brand transition-colors">
                                        DraftKit - Free Invoice Generator
                                    </h4>
                                    <p className="text-stone-400 mt-2">
                                        Create professional invoices in seconds. 100% free, no signup required. Perfect for freelancers and small businesses.
                                    </p>
                                    <span className="inline-block mt-4 text-sm font-bold text-brand uppercase tracking-wider">
                                        Try Now →
                                    </span>
                                </div>
                            </div>
                        </a>

                        {/* FreeReceipt Card */}
                        <a
                            href="https://freereceipt.online"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-stone-900/50 backdrop-blur border border-stone-700 rounded-2xl p-8 hover:border-brand/50 hover:bg-stone-800/50 transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold shrink-0">
                                    🧾
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white group-hover:text-brand transition-colors">
                                        FreeReceipt.online - Receipt Maker
                                    </h4>
                                    <p className="text-stone-400 mt-2">
                                        Generate receipts instantly for your transactions. Download as PDF, share via WhatsApp. Completely free.
                                    </p>
                                    <span className="inline-block mt-4 text-sm font-bold text-brand uppercase tracking-wider">
                                        Create Receipt →
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <section className="py-12 bg-stone-900 text-stone-400 border-t border-stone-800">
                <div className="max-w-[1600px] mx-auto px-6">

                    <div className="mt-8 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-xs text-stone-600 order-2 md:order-1">
                            &copy; 2026 BlessSpace Interior Design Singapore. Specializing in {locationName} renovations.
                            Member of <a href="https://blessspace.org" className="text-stone-500 hover:text-brand underline decoration-stone-700">BlessSpace Group</a>.
                        </p>
                        <div className="flex gap-8 text-[10px] font-bold tracking-[0.2em] uppercase order-1 md:order-2">
                            <Link to="/" className="text-stone-500 hover:text-white transition-colors">Booking Site</Link>
                            <a href="https://blessspace.org" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-white transition-colors">Company Office</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* FLOATING WHATSAPP BUTTON */}
            <a
                href={`https://wa.me/6580970884?text=Hi%20Blesspace,%20I%20want%20to%20claim%20the%20Promo%20from%20Raffy%20Yudha%20for%203D%20visualization%20at%20${locationName}.%20Can%20you%20share%20more%20details?`}
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
