import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Lock, ArrowRight, Loader2 } from 'lucide-react';

interface CheckoutModalProps {
    isOpen: boolean;
    onClose: () => void;
    selectedPackage: any; // Using any for simplicity with the constants structure
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, selectedPackage }) => {
    const [step, setStep] = useState<'details' | 'processing'>('details');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCheckout = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.whatsapp) {
            setError('Please fill in all fields.');
            return;
        }

        setIsLoading(true);
        setError('');

        try {
            // Redirect to Stripe Payment Link
            // 200 SGD Flat Rate - Generated Payment Link
            const PAYMENT_LINK = "https://buy.stripe.com/5kQ6oA1f3gKk7gVa3k2oE02";

            // Append prefilled email for better UX
            const redirectUrl = `${PAYMENT_LINK}?prefilled_email=${encodeURIComponent(formData.email)}`;

            // Save state for verification upon return
            localStorage.setItem('pending_payment_email', formData.email);
            localStorage.setItem('pending_payment_time', Date.now().toString());

            window.location.href = redirectUrl;

        } catch (err: any) {
            console.error(err);
            setError('Something went wrong. Please try again.');
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {/* Overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-stone-900/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
                onClick={onClose}
            >
                {/* Modal */}
                <motion.div
                    initial={{ scale: 0.95, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0, y: 20 }}
                    className="bg-white w-full max-w-md rounded-2xl overflow-hidden shadow-2xl relative"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="bg-stone-900 p-6 text-white flex justify-between items-start">
                        <div>
                            <p className="text-brand text-xs font-bold uppercase tracking-widest mb-2">Secure Checkout</p>
                            <h3 className="text-2xl font-serif">Get Started</h3>
                        </div>
                        <button onClick={onClose} className="text-stone-400 hover:text-white transition-colors">
                            <X size={24} />
                        </button>
                    </div>

                    {/* Body */}
                    <div className="p-8">
                        <div className="flex justify-between items-center mb-8 pb-8 border-b border-stone-100">
                            <div>
                                <p className="text-stone-500 text-sm">Selected Package</p>
                                <p className="font-serif text-xl font-bold text-stone-900">{selectedPackage?.name || "Premium Package"}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-stone-500 text-sm">Total</p>
                                <p className="font-serif text-2xl font-bold text-stone-900">SGD 200.00</p>
                            </div>
                        </div>

                        <form onSubmit={handleCheckout} className="space-y-6">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-stone-900 focus:outline-none focus:border-brand transition-colors"
                                    placeholder="e.g. John Doe"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-stone-900 focus:outline-none focus:border-brand transition-colors"
                                    placeholder="e.g. john@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">WhatsApp Number</label>
                                <input
                                    type="tel"
                                    name="whatsapp"
                                    value={formData.whatsapp}
                                    onChange={handleInputChange}
                                    className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-stone-900 focus:outline-none focus:border-brand transition-colors"
                                    placeholder="e.g. +65 9123 4567"
                                />
                            </div>

                            {error && (
                                <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg flex items-center gap-2">
                                    <span className="w-1 h-4 bg-red-600 rounded-full"></span>
                                    {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-stone-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-stone-800 transition-all disabled:opacity-70 disabled:cursor-not-allowed group shadow-lg"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 size={18} className="animate-spin" />
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        Proceed to Payment <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>

                            <div className="flex items-center justify-center gap-2 text-stone-400 text-xs mt-4">
                                <Lock size={12} />
                                <span>Payments processed securely by Stripe</span>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};
