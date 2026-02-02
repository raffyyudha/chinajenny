
import { DollarSign, UserCheck, XCircle, Layout, ShieldCheck, Zap, AlertTriangle, Ruler, Trash2 } from 'lucide-react';

export const translations = {
    en: {
        hero: {
            headline_1: "STOP",
            headline_2: "GUESSING",
            subheadline: "Building without a 3D plan is financial suicide. We visualize your exact space so you don't waste thousands on wrong materials, tight spaces, and ugly mismatches.",
            cta: "PREVENT MISTAKES NOW"
        },
        marquee: [
            "DON'T WASTE MATERIALS",
            "PRECISE MEASUREMENTS",
            "SEE THE LIGHTING",
            "NO UGLY SURPRISES",
            "SAVE 20% BUDGET",
            "PERFECT FIT GUARANTEED"
        ],
        meet_jenny: {
            label: "The Visionary",
            title_1: "Meet",
            title_2: "Jenny Sin",
            quote: "Design isn't just about placing furniture. It's about translating your chaotic thoughts into a living masterpiece that understands you better than you understand yourself.",
            desc_1: "As the Interior Designer at Blesspace, Jenny Sin has revolutionized the way clients visualize their future. With an obsession for detail and a hatred for guesswork, she ensures every pixel serves a purpose.",
            desc_2: "She doesn't just design rooms; she curates lifestyles.",
            role: "Interior Designer"
        },
        nightmares: {
            header_title: "THE PRICE OF BLINDNESS.",
            header_subtitle: "The Risk",
            text: "You wouldn't buy a car without seeing it. Why build a home based on imagination? A mistake in concrete costs 50x more than a mistake in 3D. We protect your wallet by failing digitally, so you succeed physically.",
            items: [
                {
                    title: "The 'Will It Fit?' Disaster",
                    description: "You fall in love with a sofa and spend $3,000 on it. When it arrives, you realize it blocks your walkway, turn the home into a cramped space instead of a blessing. Our 3D drawings ensures your space feels open, harmonious, and full of blessings — before anything is built.",
                },
                {
                    title: "Make Confident Design Decisions",
                    description: "Regretted the colour chosen after installation? Scared it looks uglier than expected? With 3D renders, clients can preview colours, lighting, and the overall mood before finalizing, helping them make confident decisions without second thoughts.",
                },
                {
                    title: "Align Design With Blessings & Energy",
                    description: "A Blessed family wanted a home that felt calm, open, and positive. Through 3D design, we adjusted the layout, lighting, and flow of the space to create a home that is harmonious, peaceful, uplifting, and truly full of blessings.",
                }
            ]
        },
        comparison: {
            title: "Don't Gamble With Your Home.",
            header_feature: "Feature",
            header_them: "Traditional Way",
            header_us: "BlessSpace 3D",
            features: [
                { feature: "Visual Clarity", us: "100% Photorealistic Video & Image", them: "Imagination & Hand Waving" },
                { feature: "Material Budget", us: "Exact Calculation (Zero Waste)", them: "Estimates (Usually +15% Waste)" },
                { feature: "Space Planning", us: "To-Scale 3D Model Check", them: "Flat 2D Plans (Hard to visualize)" },
                { feature: "Lighting", us: "Day/Night Simulation", them: "Guesswork" }
            ]
        },
        proof: {
            title: "From Vision to Reality.",
            subtitle: "Watch how Jenny transforms a blank canvas into a living masterpiece. No guesswork, just precision.",
            before_label: "THE PROCESS",
            after_label: "THE MASTERPIECE"
        },
        gallery: {
            title: "Portfolio",
            subtitle: "Curated selection of our finest interior visualizations. Explore the details.",
            labels: ["Modern Living", "Cozy Bedroom", "Luxury Kitchen", "Minimalist Bath", "Office Space", "Lounge Area", "Master Suite", "Dining Area"],
            view_project: "View Project",
            click_tour: "Click to Start 3D Tour"
        },
        process: {
            steps: [
                { title: "Send Your Floor Plan", description: "We start with the raw bones. Send us your dimensions. We build the digital skeleton of your space to exact scale." },
                { title: "We Simulate Reality", description: "We apply the physics of light and the texture of materials. We test if the sofa blocks the flow. We test if the paint is too dark." },
                { title: "You Avoid Disaster", description: "You receive the 3D Masterpiece. You spot the mistakes on screen, not in concrete. You save thousands. You proceed with certainty." }
            ]
        },
        case_study: {
            badge: "Crisis Averted",
            title: "SAVED $12,500 &\nGAINED 30% MORE SPACE",
            location: "Projects: Tanglin, 2026",
            desc: "Dream Designed Before Key Collection.",
            points: [
                { label: "Shoe Cabinet That Saved $2,800 in Storage & Reno Costs", text: "Instead of adding extra rooms or bulky cabinets, a custom curved shoe cabinet maximized storage — saving thousands in carpentry costs while fitting 30–50% more shoes and bags. Designed for true shoe-and-bag lovers, this solution keeps the home elegant, space-efficient, and visually light — even in a small condo!" },
                { label: "Kitchen Upgrade That Gained 30% More Usable Workspace", text: "We reconfigured the layout to create a wider, more efficient kitchen, giving the client more prep space for cooking, baking, and daily use — without sacrificing other areas of the home. By optimizing layout through 3D planning, kitchen prep and storage space increased by up to 25%, improving cooking efficiency and reducing the need for future costly renovations." },
                { label: "Island Feature That Added 2–3 Functional Zones in One Space", text: "The large Island tabletop replaces the need for separate prep counters, breakfast tables, and workstations — effectively saving floor area and boosting lifestyle value without increasing renovation budget — turning a compact home into a high-value, multifunctional space." }
            ],
            quote: "\"We saved $15k before breaking ground.\""
        },
        stats: {
            headline: "\"We calculate every inch so you don't have to guess.\"",
            items: [
                { label: "Wasted Space Saved", value: "30%" },
                { label: "Client Confidence", value: "100%" },
                { label: "Design Revisions", value: "1 Time*" },
                { label: "Cost of Regret", value: "$0" },
            ],
            disclaimer: "*Or unlimited time design revisions, if you sign the packages."
        },
        packages: {
            title: "INVEST IN CERTAINTY.",
            subtitle: "Packages",
            items: [
                { name: "Room Rescue", description: "Don't buy furniture yet. Let us model your room to ensure everything fits and looks cohesive.", features: ["1 room 3D Drawings (1 pcs)", "Furniture fit check", "Colour Harmony Test", "1 times revision", "2 times consultation"], price: "$250", button_text: "Secure This Plan" },
                { name: "The Blessing Draft", description: "The safety net for your entire home renovation. Hand this to your contractor and sleep soundly.", features: ["1 set Full home 720 degree hometour", "Immersive experience to step inside new home before renovate.", "Furniture fit check", "Colour Harmony Test", "1 times site consultation", "1 times revision", "2 times consultation"], price: "$500", button_text: "Secure This Plan" },
                { name: "The Blessed Masterpieces", description: "Selling unbuilt property? We create emotional assets that sell the lifestyle before the foundation is poured.", features: ["1 set Full home 720 degree hometour", "Immersive experience to step inside new home before renovate.", "Walking Space Analysis", "Moodboard", "Furniture fit check", "Colour Harmony Test", "10 pcs 3D drawings", "1 times site consultation", "2 times revision", "3 times consultation"], price: "$3000", button_text: "Secure This Plan" }
            ]
        },
        deliverables: {
            title: "THE DELIVERABLES.",
            subtitle: "No Ambiguity",
            items: ["Precise Laser-Like Measurements", "Texture & Material Reality Check", "Clear layout visualization", "Avoid costly mistakes", "Color Psychology Calibration", "Confident decision-making", "Contractor Misunderstanding Prevention", "Total Control Over Your Outcome"]
        },
        faq: {
            title: "Frequently Asked",
            items: [
                { question: "Why can't I just imagine it?", answer: "Because imagination doesn't have a ruler. You can't 'imagine' if a 2.4m sofa leaves enough clearance for a door swing. 3D simulation proves it mathematically." },
                { question: "Is this expensive?", answer: "Compared to hacking down a tiled wall because you hate the color? No. It's a fraction of the cost of a single renovation mistake." },
                { question: "Do you design the whole house?", answer: "Yes. We build a complete 'Digital Twin' of your property. You can virtually walk through every room before you spend a cent on construction." },
                { question: "What if I want to change the style?", answer: "That is the point! Change the wood to stone. Change the blue to white. Do it on our screen, not on your walls. It's instant, with worthy cost." }
            ]
        },
        footer: {
            text: "Transforming uncertain blueprints into breathtaking realities. Stop guessing, start feeling home.",
            cta: "START YOUR VISUALIZATION"
        }
    },
    zh: {
        hero: {
            headline_1: "停止",
            headline_2: "猜测",
            subheadline: "没有3D规划就开始装修无异于财务自杀。我们精准呈现您的空间，让您避免在错误的材料、狭窄的空间和丑陋的搭配上浪费成千上万。",
            cta: "立即预防错误"
        },
        marquee: [
            "杜绝材料浪费",
            "精准测量",
            "预见灯光效果",
            "绝无丑陋惊吓",
            "节省20%预算",
            "保证完美契合"
        ],
        meet_jenny: {
            label: "远见者",
            title_1: "遇见",
            title_2: "Jenny Sin",
            quote: "设计不仅仅是摆放家具。它是将您混乱的想法转化为比您更了解自己的生活杰作。",
            desc_1: "作为Blesspace的室内设计师，Jenny Sin彻底改变了客户预见未来的方式。凭借对细节的执着和对猜测的厌恶，她确保每一个像素都有其用途。",
            desc_2: "她不只是设计房间；她在策划生活方式。",
            role: "室内设计师"
        },
        nightmares: {
            header_title: "盲目的代价。",
            header_subtitle: "风险",
            text: "您不会在没看过车的情况下买车。为什么要在想象的基础上建造一个家？混凝土中的错误比3D中的错误成本高50倍。我们通过数字化试错来保护您的钱包，让您在现实中获得成功。",
            items: [
                {
                    title: "“放得下吗？”的灾难",
                    description: "您爱上了一张沙发并花了3000美元。当它到达时，您发现它挡住了过道，把家变成了狭窄的空间而不是福地。我们的3D图纸确保您的空间在建造之前就感觉开阔、和谐且充满祝福。",
                },
                {
                    title: "做出自信的设计决策",
                    description: "安装后后悔颜色的选择？害怕看起来比预期的丑？通过3D渲染，客户可以在最终确定之前预览颜色、灯光和整体氛围，帮助他们做出自信的决定，无需再三考虑。",
                },
                {
                    title: "设计此致祝福与能量",
                    description: "一个蒙福的家庭想要一个感觉平静、开放和积极的家。通过3D设计，我们调整了空间的布局、灯光和动线，创造出一个和谐、宁静、令人振奋且真正充满祝福的家。",
                }
            ]
        },
        comparison: {
            title: "别拿您的家赌博。",
            header_feature: "功能",
            header_them: "传统方式",
            header_us: "BlessSpace 3D",
            features: [
                { feature: "视觉清晰度", us: "100% 照片级视频与图像", them: "想象与比划" },
                { feature: "材料预算", us: "精准计算 (零浪费)", them: "估算 (通常+15%浪费)" },
                { feature: "空间规划", us: "按比例3D模型检查", them: "平面2D图 (难以想象)" },
                { feature: "灯光", us: "日/夜模拟", them: "猜测" }
            ]
        },
        proof: {
            title: "从愿景到现实。",
            subtitle: "观看Jenny如何将空白画布转变为生活杰作。没有猜测，只有精准。",
            before_label: "过程",
            after_label: "杰作"
        },
        gallery: {
            title: "作品集",
            subtitle: "精选我们最好的室内视觉效果。探索细节。",
            labels: ["现代生活", "舒适卧室", "豪华厨房", "极简浴室", "办公空间", "休息区", "主卧套房", "用餐区"],
            view_project: "查看项目",
            click_tour: "点击开始3D游览"
        },
        process: {
            steps: [
                { title: "发送您的平面图", description: "我们从原始骨架开始。发送您的尺寸。我们按精确比例构建您空间的数字骨架。" },
                { title: "我们模拟现实", description: "我们应用光物理学和材料纹理。我们测试沙发是否阻挡动线。我们测试油漆是否太暗。" },
                { title: "您避免灾难", description: "您收到3D杰作。您在屏幕上发现错误，而不是在混凝土中。您节省了成千上万。您带着确定性继续。" }
            ]
        },
        case_study: {
            badge: "避免危机",
            title: "节省 $12,500 &\n获得 30% 更多空间",
            location: "项目: Tanglin, 2026",
            desc: "在拿钥匙前设计梦想。",
            points: [
                { label: "鞋柜节省了$2,800的存储和装修成本", text: "定制的弧形鞋柜取代了额外的房间或笨重的柜子，最大化了存储空间——在节省数千装修费用的同时，多装了30-50%的鞋包。为真正的鞋包爱好者设计，这个方案让家保持优雅、节省空间且视觉轻盈——即使在小公寓里！" },
                { label: "厨房升级获得30%更多可用工作空间", text: "我们重新配置了布局，创造了一个更宽敞、更高效的厨房，为客户提供了更多的烹饪、烘焙和日常使用准备空间——而不牺牲家里的其他区域。通过3D规划优化布局，厨房准备和存储空间增加了高达25%，提高了烹饪效率并减少了未来昂贵的翻新需求。" },
                { label: "岛台功能在一个空间内增加了2-3个功能区", text: "大型岛台台面取代了单独的准备台、早餐桌和工作站——有效地节省了地面面积并提升了生活价值，而无需增加装修预算——将紧凑的家变成了高价值的多功能空间。" }
            ],
            quote: "\"我们在动工前节省了$15k。\""
        },
        stats: {
            headline: "\"我们计算每一英寸，所以您不必猜测。\"",
            items: [
                { label: "节省的浪费空间", value: "30%" },
                { label: "客户信心", value: "100%" },
                { label: "设计修改", value: "1次*" },
                { label: "后悔成本", value: "$0" },
            ],
            disclaimer: "*如果签署配套，则无限制设计修改。"
        },
        packages: {
            title: "投资确定性。",
            subtitle: "配套",
            items: [
                { name: "房间救援", description: "先别买家具。让我们为您的房间建模，确保一切合身且看起来协调。", features: ["1个房间3D图 (1张)", "家具适配检查", "色彩和谐测试", "1次修改", "2次咨询"], price: "$250", button_text: "锁定此计划" },
                { name: "祝福草案", description: "您整个家庭装修的安全网。把这个交给您的承包商，安枕无忧。", features: ["1套全屋720度家庭漫游", "装修前身临其境体验新家", "家具适配检查", "色彩和谐测试", "1次现场咨询", "1次修改", "2次咨询"], price: "$500", button_text: "锁定此计划" },
                { name: "蒙福杰作", description: "出售未建成的房产？我们在地基浇筑之前创造销售生活方式的情感资产。", features: ["1套全屋720度家庭漫游", "装修前身临其境体验新家", "行走空间分析", "情绪板", "家具适配检查", "色彩和谐测试", "10张3D图", "1次现场咨询", "2次修改", "3次咨询"], price: "$3000", button_text: "锁定此计划" }
            ]
        },
        deliverables: {
            title: "交付成果。",
            subtitle: "没有歧义",
            items: ["精准如激光的测量", "纹理与材料现实检查", "清晰的布局视觉化", "避免昂贵错误", "色彩心理学校准", "自信的决策", "防止承包商误解", "完全掌控您的结果"]
        },
        faq: {
            title: "常见问题",
            items: [
                { question: "为什么我不能想象？", answer: "因为想象没有尺子。您无法‘想象’一个2.4米的沙发是否留有足够的门回旋空间。3D模拟用数学证明了这一点。" },
                { question: "这很贵吗？", answer: "与因为讨厌颜色而敲掉瓷砖墙相比？不。这只是单一装修错误成本的一小部分。" },
                { question: "你们设计整个房子吗？", answer: "是的。我们建立您房产的完整‘数字孪生’。在您花一分钱施工之前，您可以虚拟地走过每个房间。" },
                { question: "如果我想改变风格怎么办？", answer: "这正是重点！把木头换成石头。把蓝色换成白色。在我们的屏幕上做，而不是在您的墙上。这是即时的，且物有所值。" }
            ]
        },
        footer: {
            text: "将不确定的蓝图转化为惊叹的现实。停止猜测，开始感受家。",
            cta: "开始您的视觉化"
        }
    },
    ms: {
        hero: {
            headline_1: "BERHENTI",
            headline_2: "MENEKA",
            subheadline: "Membina tanpa pelan 3D adalah pembaziran. Kami visualkan ruang anda dengan tepat supaya anda tidak rugi ribuan ringgit pada bahan yang salah, ruang sempit, dan kesilapan yang hodoh.",
            cta: "ELAK KESILAPAN SEKARANG"
        },
        marquee: [
            "JANGAN BAZIR BAHAN",
            "UKURAN TEPAT",
            "LIHAT PENCAHAYAAN",
            "TIADA KEJUTAN BURUK",
            "JIMAT 20% BAJET",
            "JAMINAN MUAT SEMPURNA"
        ],
        meet_jenny: {
            label: "Sang Visionari",
            title_1: "Kenali",
            title_2: "Jenny Sin",
            quote: "Reka bentuk bukan sekadar meletak perabot. Ia menterjemah fikiran anda kepada mahakarya hidup yang memahami anda lebih baik daripada anda memahami diri sendiri.",
            desc_1: "Sebagai Pereka Dalaman di Blesspace, Jenny Sin telah merevolusikan cara pelanggan membayangkan masa depan mereka. Dengan obsesi terhadap perincian, beliau memastikan setiap piksel ada tujuannya.",
            desc_2: "Beliau tidak hanya mereka bentuk bilik; beliau mengatur gaya hidup.",
            role: "Pereka Dalaman"
        },
        nightmares: {
            header_title: "HARGA KEBUTAAN.",
            header_subtitle: "Risiko",
            text: "Anda tidak akan membeli kereta tanpa melihatnya. Mengapa bina rumah berdasarkan imaginasi? Kesilapan dalam konkrit kosnya 50x lebih tinggi daripada kesilapan dalam 3D. Kami melindungi dompet anda dengan gagal secara digital, supaya anda berjaya secara fizikal.",
            items: [
                {
                    title: "Bencana 'Muat Ke Tak?'",
                    description: "Anda jatuh cinta dengan sofa $3,000. Bila sampai, ia menghalang laluan, menjadikan rumah sempit dan bukan satu rahmat. Lukisan 3D kami memastikan ruang anda terasa luas dan harmoni sebelum apa-apa dibina.",
                },
                {
                    title: "Buat Keputusan Reka Bentuk Yakin",
                    description: "Menyesal pilih warna selepas pasang? Takut nampak hodoh? Dengan render 3D, pelanggan boleh lihat warna dan pencahayaan sebelum muktamad, membantu mereka buat keputusan yakin tanpa ragu-ragu.",
                },
                {
                    title: "Selaraskan Reka Bentuk Dengan Tenaga",
                    description: "Keluarga Blessed mahukan rumah yang tenang dan positif. Melalui reka bentuk 3D, kami sesuaikan susun atur dan pencahayaan untuk cipta rumah yang harmoni, damai, dan penuh berkat.",
                }
            ]
        },
        comparison: {
            title: "Jangan Judi Dengan Rumah Anda.",
            header_feature: "Ciri",
            header_them: "Cara Tradisional",
            header_us: "BlessSpace 3D",
            features: [
                { feature: "Kejelasan Visual", us: "100% Video & Imej Fotorealistik", them: "Imaginasi & Agak-agak" },
                { feature: "Bajet Bahan", us: "Kiraan Tepat (Sifar Pembaziran)", them: "Anggaran (Biasanya +15% Membazir)" },
                { feature: "Perancangan Ruang", us: "Semakan Model 3D Berskala", them: "Pelan 2D Rata (Susah Bayang)" },
                { feature: "Pencahayaan", us: "Simulasi Siang/Malam", them: "Teka-teki" }
            ]
        },
        proof: {
            title: "Dari Visi ke Realiti.",
            subtitle: "Lihat bagaimana Jenny menukar kanvas kosong menjadi mahakarya hidup. Tiada tekaan, hanya ketepatan.",
            before_label: "PROSES",
            after_label: "MAHAKARYA"
        },
        gallery: {
            title: "Portfolio",
            subtitle: "Pilihan visualisasi dalaman terbaik kami. Terokai perinciannya.",
            labels: ["Gaya Hidup Moden", "Bilik Tidur Selesa", "Dapur Mewah", "Bilik Air Minimalis", "Ruang Pejabat", "Ruang Santai", "Suite Utama", "Ruang Makan"],
            view_project: "Lihat Projek",
            click_tour: "Klik untuk Mula Jelajah 3D"
        },
        process: {
            steps: [
                { title: "Hantar Pelan Lantai Anda", description: "Kami mula dengan asas. Hantar dimensi anda. Kami bina rangka digital ruang anda mengikut skala tepat." },
                { title: "Kami Simulasi Realiti", description: "Kami aplikasikan fizik cahaya dan tekstur bahan. Kami uji jika sofa menghalang laluan. Kami uji jika cat terlalu gelap." },
                { title: "Anda Elak Bencana", description: "Anda terima Mahakarya 3D. Anda kesan kesilapan di skrin, bukan pada konkrit. Anda jimat ribuan ringgit. Anda teruskan dengan kepastian." }
            ]
        },
        case_study: {
            badge: "Krisis Dielakkan",
            title: "JIMAT $12,500 &\nDAPAT 30% LEBIH RUANG",
            location: "Projek: Tanglin, 2026",
            desc: "Mimpi Direka Sebelum Ambil Kunci.",
            points: [
                { label: "Kabinet Kasut Jimat $2,800 Kos", text: "Daripada tambah bilik atau kabinet besar, kabinet kasut melengkung memaksimumkan storan — jimat ribuan kos tukang sambil muat 30–50% lebih kasut. Direka untuk pencinta kasut, solusi ini pastikan rumah elegan dan luas — walaupun di kondo kecil!" },
                { label: "Dapur Lebih Luas 30%", text: "Kami ubah susun atur untuk dapur lebih luas dan efisien, beri klien lebih ruang sedia untuk memasak — tanpa korbankan ruang lain. Dengan optimumkan susun atur melalui 3D, ruang dapur bertambah 25%, meningkatkan efisiensi memasak." },
                { label: "Pulau (Island) Tambah 2–3 Zon Fungsi", text: "Meja Island besar ganti kaunter sedia, meja sarapan, dan ruang kerja — jimat ruang lantai dan tingkatan nilai gaya hidup tanpa tambah bajet ubah suai." }
            ],
            quote: "\"Kami jimat $15k sebelum mula kerja.\""
        },
        stats: {
            headline: "\"Kami kira setiap inci supaya anda tak perlu meneka.\"",
            items: [
                { label: "Ruang Membazir Diselamatkan", value: "30%" },
                { label: "Keyakinan Klien", value: "100%" },
                { label: "Semakan Reka Bentuk", value: "1 Kali*" },
                { label: "Kos Penyesalan", value: "$0" },
            ],
            disclaimer: "*Atau semakan reka bentuk tanpa had, jika anda tandatangan pakej."
        },
        packages: {
            title: "LABUR DALAM KEPASTIAN.",
            subtitle: "Pakej",
            items: [
                { name: "Penyelamat Bilik", description: "Jangan beli perabot lagi. Biar kami modelkan bilik anda untuk pastikan semua muat dan nampak serasi.", features: ["Lukisan 3D 1 bilik (1 keping)", "Semakan muat perabot", "Ujian Harmoni Warna", "1 kali semakan", "2 kali konsultasi"], price: "$250", button_text: "Dapatkan Pelan Ini" },
                { name: "Draf Berkat", description: "Jaring keselamatan untuk ubah suai rumah anda. Serahkan ini kepada kontraktor anda dan tidur nyenyak.", features: ["1 set Jelajah rumah 720 darjah", "Pengalaman imersif masuk rumah baru", "Semakan muat perabot", "Ujian Harmoni Warna", "1 kali konsultasi tapak", "1 kali semakan", "2 kali konsultasi"], price: "$500", button_text: "Dapatkan Pelan Ini" },
                { name: "Mahakarya Terberkati", description: "Jual hartanah belum bina? Kami cipta aset emosi yang menjual gaya hidup sebelum asas dituang.", features: ["1 set Jelajah rumah 720 darjah", "Pengalaman imersif masuk rumah baru", "Analisis Ruang Berjalan", "Moodboard", "Semakan muat perabot", "Ujian Harmoni Warna", "10 keping lukisan 3D", "1 kali konsultasi tapak", "2 kali semakan", "3 kali konsultasi"], price: "$3000", button_text: "Dapatkan Pelan Ini" }
            ]
        },
        deliverables: {
            title: "HASIL KERJA KAMI.",
            subtitle: "Tiada Kekeliruan",
            items: ["Ukuran Tepat Seperti Laser", "Semakan Realiti Tekstur & Bahan", "Visualisasi susun atur jelas", "Elak kesilapan mahal", "Kalibrasi Psikologi Warna", "Keputusan yakin", "Cegah Salah Faham Kontraktor", "Kawalan Penuh Hasil Anda"]
        },
        faq: {
            title: "Soalan Lazim",
            items: [
                { question: "Kenapa saya tak boleh bayangkan je?", answer: "Sebab imaginasi tiada pembaris. Anda tak boleh 'bayangkan' jika sofa 2.4m muat dengan bukaan pintu. Simulasi 3D buktikannya secara matematik." },
                { question: "Adakah ini mahal?", answer: "Berbanding pecahkan dinding jubin sebab anda benci warnanya? Tidak. Ia hanya sebahagian kecil daripada kos satu kesilapan ubah suai." },
                { question: "Anda reka seluruh rumah?", answer: "Ya. Kami bina 'Kembar Digital' lengkap hartanah anda. Anda boleh berjalan secara maya di setiap bilik sebelum belanja satu sen untuk pembinaan." },
                { question: "Macam mana kalau saya nak tukar gaya?", answer: "Itulah poinnya! Tukar kayu kepada batu. Tukar biru kepada putih. Buat di skrin kami, bukan di dinding anda. Ia pantas dan berbaloi." }
            ]
        },
        footer: {
            text: "Menukar pelan tidak pasti kepada realiti menakjubkan. Berhenti meneka, mula rasa seperti di rumah.",
            cta: "MULAKAN VISUALISASI ANDA"
        }
    },
    ta: {
        hero: {
            headline_1: "நிறுத்துங்கள்",
            headline_2: "ஊகிக்க",
            subheadline: "3D திட்டம் இல்லாமல் கட்டுவது நிதி தற்கொலை. தவறான பொருட்கள், இறுக்கமான இடங்கள் மற்றும் அசிங்கமான பொருத்தமற்றவற்றில் ஆயிரக்கணக்கில் வீணாக்காமல் இருக்க உங்கள் இடத்தை நாங்கள் துல்லியமாகக் காட்சிப்படுத்துகிறோம்.",
            cta: "தவறுகளைத் தவிர்"
        },
        marquee: [
            "பொருட்களை வீணாக்காதீர்",
            "துல்லியமான அளவீடுகள்",
            "ஒளியமைப்பைப் பாருங்கள்",
            "அசிங்கமான ஆச்சரியங்கள் இல்லை",
            "20% பட்ஜெட்டைச் சேமிக்கவும்",
            "சரியான பொருத்தம் உத்தரவாதம்"
        ],
        meet_jenny: {
            label: "தொலைநோக்காளர்",
            title_1: "சந்திக்க",
            title_2: "ஜென்னி சின்",
            quote: "வடிவமைப்பு என்பது தளபாடங்களை வைப்பது மட்டுமல்ல. இது உங்கள் குழப்பமான எண்ணங்களை உங்களை விட உங்களை நன்கு புரிந்துகொள்ளும் ஒரு வாழும் தலைசிறந்த படைப்பாக மாற்றுவதாகும்.",
            desc_1: "பிளெஸ்பேஸில் உள்துறை வடிவமைப்பாளராக, ஜென்னி சின் வாடிக்கையாளர்கள் தங்கள் எதிர்காலத்தைக் காட்சிப்படுத்தும் விதத்தில் புரட்சியை ஏற்படுத்தியுள்ளார். விவரங்களில் வெறி மற்றும் அனுமானத்தின் மீதான வெறுப்புடன், ஒவ்வொரு பிக்சலும் ஒரு நோக்கத்திற்காக உதவுகிறது என்பதை அவர் உறுதி செய்கிறார்.",
            desc_2: "அவர் அறைகளை மட்டும் வடிவமைப்பதில்லை; அவர் வாழ்க்கை முறைகளை நிர்வகிக்கிறார்.",
            role: "உள்துறை வடிவமைப்பாளர்"
        },
        nightmares: {
            header_title: "குருட்டுத்தன்மையின் விலை.",
            header_subtitle: "ஆபத்து",
            text: "காரைப் பார்க்காமல் வாங்க மாட்டீர்கள். கற்பனையின் அடிப்படையில் ஏன் வீடு கட்ட வேண்டும்? கான்கிரீட்டில் ஏற்படும் ஒரு தவறு 3D யில் ஏற்படும் தவறை விட 50 மடங்கு அதிகம் செலவாகும். நாங்கள் டிஜிட்டல் முறையில் தோல்வியடைவதன் மூலம் உங்கள் பணப்பையைப் பாதுகாக்கிறோம், எனவே நீங்கள் உடல்ரீதியாக வெற்றி பெறுவீர்கள்.",
            items: [
                {
                    title: "'பொருந்துமா?' என்ற பேரழிவு",
                    description: "நீங்கள் ஒரு சோபாவை விரும்பி $3,000 செலவிடுகிறீர்கள். அது வரும்போது, அது உங்கள் நடைபாதையைத் தடுப்பதை உணர்கிறீர்கள், வீட்டை ஆசீர்வாதத்திற்குப் பதிலாக இடுக்கமான இடமாக மாற்றுகிறது. எதையும் கட்டுவதற்கு முன் எங்கள் 3D வரைபடங்கள் உங்கள் இடம் திறந்ததாகவும், இணக்கமாகவும், ஆசீர்வாதங்கள் நிறைந்ததாகவும் இருப்பதை உறுதி செய்கிறது.",
                },
                {
                    title: "நம்பிக்கையான வடிவமைப்பு முடிவுகளை எடுங்கள்",
                    description: "நிறுவிய பின் வண்ணத் தேர்வால் வருந்துகிறீர்களா? எதிர்பார்த்ததை விட அசிங்கமாக இருக்குமோ என்று பயப்படுகிறீர்களா? 3D ரெண்டர்கள் மூலம், வாடிக்கையாளர்கள் இறுதி செய்வதற்கு முன் வண்ணங்கள், ஒளி மற்றும் ஒட்டுமொத்த மனநிலையை முன்னோட்டமிடலாம், இது மறுசிந்தனை இல்லாமல் நம்பிக்கையான முடிவுகளை எடுக்க உதவுகிறது.",
                },
                {
                    title: "ஆசீர்வாதங்கள் மற்றும் ஆற்றலுடன் வடிவமைப்பை இணைக்கவும்",
                    description: "ஒரு ஆசீர்வதிக்கப்பட்ட குடும்பம் அமைதியான, திறந்த மற்றும் நேர்மறையான வீட்டை விரும்பியது. 3D வடிவமைப்பு மூலம், நாங்கள் இடத்தின் அமைப்பு, ஒளி மற்றும் ஓட்டத்தை சரிசெய்து, இணக்கமான, அமைதியான, உற்சாகமூட்டும் மற்றும் உண்மையிலேயே ஆசீர்வாதங்கள் நிறைந்த வீட்டை உருவாக்கினோம்.",
                }
            ]
        },
        comparison: {
            title: "உங்கள் வீட்டை வைத்து சூதாடாதீர்கள்.",
            header_feature: "அம்சம்",
            header_them: "பாரம்பரிய முறை",
            header_us: "பிளெஸ்பேஸ் 3D",
            features: [
                { feature: "காட்சித் தெளிவு", us: "100% போட்டோரியலிஸ்டிக் வீடியோ & படம்", them: "கற்பனை & கை அசைவு" },
                { feature: "பொருள் பட்ஜெட்", us: "துல்லியமான கணக்கீடு (பூஜ்ஜிய கழிவு)", them: "மதிப்பீடுகள் (வழக்கமாக +15% கழிவு)" },
                { feature: "இடத் திட்டமிடல்", us: "அளவிடப்பட்ட 3D மாதிரி சரிபார்ப்பு", them: "தட்டையான 2D திட்டங்கள் (கற்பனை செய்வது கடினம்)" },
                { feature: "ஒளியமைப்பு", us: "பகல்/இரவு உருவகப்படுத்துதல்", them: "ஊகம்" }
            ]
        },
        proof: {
            title: "பார்வையில் இருந்து நிஜத்திற்கு.",
            subtitle: "வெற்று கேன்வாஸை ஜென்னி எவ்வாறு வாழும் தலைசிறந்த படைப்பாக மாற்றுகிறார் என்பதைப் பாருங்கள். ஊகம் இல்லை, துல்லியம் மட்டுமே.",
            before_label: "செயல்முறை",
            after_label: "தலைசிறந்த படைப்பு"
        },
        gallery: {
            title: "போர்ட்ஃபோலியோ",
            subtitle: "எங்களின் சிறந்த உள்துறை காட்சிப்படுத்தல்களின் தொகுப்பு. விவரங்களை ஆராயுங்கள்.",
            labels: ["நவீன வாழ்க்கை", "வசதியான படுக்கையறை", "ஆடம்பர சமையலறை", "குறைந்தபட்ச குளியலறை", "அலுவலக இடம்", "ஓய்வு அறை", "முதன்மை அறை", "சாப்பாட்டுப் பகுதி"],
            view_project: "த் திட்டத்தைப் பார்",
            click_tour: "3D சுற்றுப்பயணத்தைத் தொடங்க கிளிக் செய்யவும்"
        },
        process: {
            steps: [
                { title: "உங்கள் தரைத் திட்டத்தை அனுப்பவும்", description: "நாங்கள் மூல எலும்புகளுடன் தொடங்குகிறோம். உங்கள் அளவுகளை எங்களுக்கு அனுப்பவும். உங்கள் இடத்தின் டிஜிட்டல் எலும்புக்கூட்டை துல்லியமான அளவிற்கு நாங்கள் உருவாக்குகிறோம்." },
                { title: "நாங்கள் யதார்த்தத்தை உருவகப்படுத்துகிறோம்", description: "ஒளியின் இயற்பியல் மற்றும் பொருட்களின் அமைப்பை நாங்கள் பயன்படுத்துகிறோம். சோபா ஓட்டத்தைத் தடுக்குமா என்று சோதிக்கிறோம். பெயிண்ட் மிகவும் இருட்டாக உள்ளதா என்று சோதிக்கிறோம்." },
                { title: "நீங்கள் பேரழிவைத் தவிர்க்கிறீர்கள்", description: "நீங்கள் 3D தலைசிறந்த படைப்பைக் பெறுகிறீர்கள். கான்கிரீட்டில் அல்ல, திரையில் தவறுகளைக் கண்டறிகிறீர்கள். நீங்கள் ஆயிரக்கணக்கில் சேமிக்கிறீர்கள். உறுதியுடன் தொடர்கிறீர்கள்." }
            ]
        },
        case_study: {
            badge: "நெருக்கடி தவிர்க்கப்பட்டது",
            title: "$12,500 சேமிக்கப்பட்டது & 30% அதிக இடத்தைப் பெற்றது",
            location: "திட்டங்கள்: டங்லின், 2026",
            desc: "சாவி வாங்கும் முன் கனவு வடிவமைக்கப்பட்டது.",
            points: [
                { label: "சேமிப்பு மற்றும் புதுப்பித்தல் செலவுகளில் $2,800 சேமித்த ஷூ அமைச்சரவை", text: "கூடுதல் அறைகள் அல்லது பருமனான அலமாரிகளைச் சேர்ப்பதற்குப் பதிலாக, தனிப்பயன் வளைந்த ஷூ அமைச்சரவை சேமிப்பிடத்தை அதிகப்படுத்தியது — ஆயிரக்கணக்கான தச்சுச் செலவுகளைச் சேமிக்கும் அதே வேளையில் 30-50% அதிக காலணிகள் மற்றும் பைகளைப் பொருத்தியது. காலணி மற்றும் பை பிரியர்களுக்கு வடிவமைக்கப்பட்ட இந்த தீர்வு, சிறிய கொண்டோவில் கூட வீட்டை நேர்த்தியாகவும், இடவசதியுடனும், பார்வைக்கு லேசாகவும் வைத்திருக்கிறது!" },
                { label: "30% அதிக பயன்பாட்டு பணியிடத்தைப் பெற்ற சமையலறை மேம்படுத்தல்", text: "நாங்கள் அமைப்பை மாற்றியமைத்து பரந்த, திறமையான சமையலறையை உருவாக்கினோம், இது சமையல், பேக்கிங் மற்றும் தினசரி பயன்பாட்டிற்கு அதிக தயார் இடத்தை வாடிக்கையாளருக்கு வழங்கியது — வீட்டின் பிற பகுதிகளைத் தியாகம் செய்யாமல். 3D திட்டமிடல் மூலம் அமைப்பை மேம்படுத்துவதன் மூலம், சமையலறை தயார் மற்றும் சேமிப்பு இடம் 25% வரை அதிகரித்தது." },
                { label: "ஒரே இடத்தில் 2–3 செயல்பாட்டு மண்டலங்களைச் சேர்த்த தீவு அம்சம்", text: "பெரிய தீவு டேப்லெட் தனித்தனி தயார் கவுண்டர்கள், காலை உணவு மேசைகள் மற்றும் பணிநிலையங்களின் தேவையை மாற்றுகிறது — தரைப் பகுதியை திறம்பட சேமிக்கிறது மற்றும் புதுப்பித்தல் பட்ஜெட்டை அதிகரிக்காமல் வாழ்க்கை முறை மதிப்பை அதிகரிக்கிறது." }
            ],
            quote: "\"வேலை தொடங்குவதற்கு முன் $15k சேமித்தோம்.\""
        },
        stats: {
            headline: "\"நாங்கள் ஒவ்வொரு அங்குலத்தையும் கணக்கிடுகிறோம், எனவே நீங்கள் ஊகிக்க வேண்டியதில்லை.\"",
            items: [
                { label: "வீணான இடம் சேமிக்கப்பட்டது", value: "30%" },
                { label: "வாடிக்கையாளர் நம்பிக்கை", value: "100%" },
                { label: "வடிவமைப்பு திருத்தங்கள்", value: "1 முறை*" },
                { label: "வருத்தத்தின் விலை", value: "$0" },
            ],
            disclaimer: "*அல்லது நீங்கள் பேக்கேஜ்களில் கையெழுத்திட்டால், வரம்பற்ற நேர வடிவமைப்பு திருத்தங்கள்."
        },
        packages: {
            title: "உறுதித்தன்மையில் முதலீடு செய்யுங்கள்.",
            subtitle: "தொகுப்புகள்",
            items: [
                { name: "அறை மீட்பு", description: "இன்னும் தளபாடங்கள் வாங்க வேண்டாம். எல்லாமே பொருந்துகிறதா மற்றும் ஒத்திசைவாக இருக்கிறதா என்பதை உறுதிப்படுத்த உங்கள் அறையை வடிவமைக்கிறோம்.", features: ["1 அறை 3D வரைபடங்கள் (1 எண்ணம்)", "தளபாடங்கள் பொருத்தம் சரிபார்ப்பு", "வண்ண இணக்க சோதனை", "1 முறை திருத்தம்", "2 முறை ஆலோசனை"], price: "$250", button_text: "இந்தத் திட்டத்தைப் பாதுகாக்கவும்" },
                { name: "ஆசீர்வாத வரைவு", description: "உங்கள் முழு வீட்டைப் புதுப்பிப்பதற்கான பாதுகாப்பு வலை. இதை உங்கள் ஒப்பந்தக்காரரிடம் கொடுத்துவிட்டு நிம்மதியாகத் தூங்குங்கள்.", features: ["1 தொகுப்பு முழு வீடு 720 டிகிரி ஹோம் டூர்", "புதுப்பிப்பதற்கு முன் புதிய வீட்டிற்குள் நுழையும் அனுபவம்", "தளபாடங்கள் பொருத்தம் சரிபார்ப்பு", "வண்ண இணக்க சோதனை", "1 முறை தள ஆலோசனை", "1 முறை திருத்தம்", "2 முறை ஆலோசனை"], price: "$500", button_text: "இந்தத் திட்டத்தைப் பாதுகாக்கவும்" },
                { name: "ஆசீர்வதிக்கப்பட்ட தலைசிறந்த படைப்புகள்", description: "கட்டப்படாத சொத்தை விற்கிறீர்களா? அடித்தளம் அமைப்பதற்கு முன்பே வாழ்க்கை முறையை விற்கும் உணர்ச்சிபூர்வமான சொத்துக்களை நாங்கள் உருவாக்குகிறோம்.", features: ["1 தொகுப்பு முழு வீடு 720 டிகிரி ஹோம் டூர்", "புதுப்பிப்பதற்கு முன் புதிய வீட்டிற்குள் நுழையும் அனுபவம்", "நடைபாதை பகுப்பாய்வு", "மூட்போர்டு", "தளபாடங்கள் பொருத்தம் சரிபார்ப்பு", "வண்ண இணக்க சோதனை", "10 பிசிக்கள் 3D வரைபடங்கள்", "1 முறை தள ஆலோசனை", "2 முறை திருத்தம்", "3 முறை ஆலோசனை"], price: "$3000", button_text: "இந்தத் திட்டத்தைப் பாதுகாக்கவும்" }
            ]
        },
        deliverables: {
            title: "வழங்கக்கூடியவை.",
            subtitle: "எந்த தெளிவின்மையும் இல்லை",
            items: ["துல்லியமான லேசர் போன்ற அளவீடுகள்", "அமைப்பு & பொருள் ரியாலிட்டி செக்", "தெளிவான தளவமைப்பு காட்சிப்படுத்தல்", "விலையுயர்ந்த தவறுகளைத் தவிர்க்கவும்", "வண்ண உளவியல் அளவுத்திருத்தம்", "நம்பிக்கையான முடிவெடுக்கும்", "ஒப்பந்தக்காரர் தவறான புரிதல் தடுப்பு", "உங்கள் விளைவு மீதான முழுக் கட்டுப்பாடு"]
        },
        faq: {
            title: "அடிக்கடி கேட்கப்படுபவை",
            items: [
                { question: "நான் ஏன் அதை கற்பனை செய்து பார்க்க முடியாது?", answer: "ஏனென்றால் கற்பனைக்கு ஆட்சியாளர் இல்லை. 2.4 மீ சோபா ஒரு கதவு ஊஞ்சலுக்கு போதுமான அனுமதியை அளிக்கிறதா என்பதை நீங்கள் 'கற்பனை' செய்ய முடியாது. 3D உருவகப்படுத்துதல் அதை கணித ரீதியாக நிரூபிக்கிறது." },
                { question: "இது விலை உயர்ந்ததா?", answer: "வண்ணத்தை வெறுப்பதால் ஓடு சுவரை உடைப்பதை ஒப்பிடும்போது? இல்லை. இது ஒரு புதுப்பித்தல் தவறுக்கான செலவில் ஒரு பகுதி மட்டுமே." },
                { question: "நீங்கள் முழு வீட்டையும் வடிவமைக்கிறீர்களா?", answer: "ஆம். உங்கள் சொத்தின் முழுமையான 'டிஜிட்டல் ட்வின்' ஒன்றை நாங்கள் உருவாக்குகிறோம். கட்டுமானத்திற்காக ஒரு சதம் செலவழிக்கும் முன் நீங்கள் ஒவ்வொரு அறையிலும் விர்ச்சுவலாக நடக்கலாம்." },
                { question: "நான் பாணியை மாற்ற விரும்பினால் என்ன செய்வது?", answer: "அதுதான் விஷயம்! மரத்தை கல்லாக மாற்றவும். நீலத்தை வெள்ளையாக மாற்றவும். உங்கள் சுவர்களில் அல்ல, எங்கள் திரையில் செய்யுங்கள். இது உடனடி மற்றும் தகுதியான செலவு." }
            ]
        },
        footer: {
            text: "நிச்சயமற்ற வரைபடங்களை மூச்சடைக்கக்கூடிய உண்மைகளாக மாற்றுதல். ஊகிப்பதை நிறுத்துங்கள், வீட்டை உணரத் தொடங்குங்கள்.",
            cta: "உங்கள் காட்சிப்படுத்தலைத் தொடங்குங்கள்"
        }
    }
};
