import React from 'react';
import { motion } from 'framer-motion';

interface LanguageSelectorIntroProps {
    onSelect: (lang: string) => void;
}

const languages = [
    { code: 'en', label: 'English', native: 'English' },
    { code: 'zh', label: 'Chinese', native: '中文' },
    { code: 'ms', label: 'Malay', native: 'Bahasa Melayu' },
    { code: 'ta', label: 'Tamil', native: 'தமிழ்' },
];

export const LanguageSelectorIntro: React.FC<LanguageSelectorIntroProps> = ({ onSelect }) => {
    return (
        <div className="fixed inset-0 z-[99999] bg-stone-950 flex flex-col items-center justify-center text-stone-50 p-6 selection:bg-brand selection:text-white">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-900 via-stone-950 to-stone-950 -z-10"
            />

            <div className="max-w-5xl w-full text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-20"
                >
                    <p className="text-xs font-bold tracking-[0.3em] uppercase text-brand mb-4">Welcome to BlessSpace</p>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight">
                        Choose your preferred language
                    </h1>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {languages.map((lang, i) => (
                        <motion.button
                            key={lang.code}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + i * 0.1, duration: 0.8, type: "spring", stiffness: 50 }}
                            onClick={() => onSelect(lang.code)}
                            className="group relative h-32 md:h-40 border border-stone-800 hover:border-brand bg-stone-900/50 backdrop-blur-sm hover:bg-stone-900 transition-all duration-500 rounded-xl flex flex-col items-center justify-center overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <span className="relative z-10 text-sm font-bold tracking-[0.2em] text-stone-500 mb-2 group-hover:text-brand transition-colors uppercase">
                                {lang.label}
                            </span>
                            <span className="relative z-10 text-3xl md:text-4xl font-serif text-white group-hover:scale-110 transition-transform duration-500">
                                {lang.native}
                            </span>
                        </motion.button>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-16 text-stone-600 text-sm font-light tracking-wide"
                >
                    Singapore's Premium Interior 3D Visualization
                </motion.div>
            </div>
        </div>
    );
};
