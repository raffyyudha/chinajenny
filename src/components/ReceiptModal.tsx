import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, MessageCircle, X, Download, ShieldCheck, Loader2 } from 'lucide-react';
import html2canvas from 'html2canvas';
import { supabase } from '../lib/supabase';

interface ReceiptModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ReceiptModal: React.FC<ReceiptModalProps> = ({ isOpen, onClose }) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [refId, setRefId] = useState('');
    const [loading, setLoading] = useState(true);
    const [verified, setVerified] = useState(false);
    const [statusMsg, setStatusMsg] = useState('Verifying payment details...');
    const receiptRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) {
            verifyPayment();
        }
    }, [isOpen]);

    const verifyPayment = async () => {
        setLoading(true);
        setVerified(false);

        // Retrieve email from session
        const email = localStorage.getItem('pending_payment_email');
        if (!email) {
            setLoading(false);
            setStatusMsg("Session email missing. Cannot verify.");
            return;
        }

        setStatusMsg(`Checking payment for ${email}...`);

        // Poll for payment record (Webhook might delay)
        let attempts = 0;
        const maxAttempts = 10; // 20 seconds total

        const check = async () => {
            const { data, error } = await supabase
                .from('payments')
                .select('*')
                .eq('email', email)
                .order('created_at', { ascending: false })
                .limit(1);

            if (data && data.length > 0) {
                // Payment Found!
                const payment = data[0];
                const now = new Date(payment.created_at);
                setDate(now.toLocaleDateString('en-SG', { year: 'numeric', month: 'long', day: 'numeric' }));
                setTime(now.toLocaleTimeString('en-SG', { hour: '2-digit', minute: '2-digit' }));
                setRefId(`INV-${payment.stripe_payment_id.slice(-8).toUpperCase()}`);
                setVerified(true);
                setLoading(false);
                // Clear storage
                localStorage.removeItem('pending_payment_email');
            } else {
                attempts++;
                if (attempts < maxAttempts) {
                    setTimeout(check, 2000); // Retry every 2s
                } else {
                    setLoading(false);
                    setStatusMsg("Payment record not found yet. Please wait a moment.");
                }
            }
        };

        check();
    };

    const handleDownload = async () => {
        if (!receiptRef.current) return;

        try {
            const canvas = await html2canvas(receiptRef.current, {
                scale: 2, // High resolution
                backgroundColor: '#ffffff',
                logging: false,
            });

            const image = canvas.toDataURL("image/png");
            const link = document.createElement('a');
            link.href = image;
            link.download = `BlessSpace-Receipt-${refId}.png`;
            link.click();
        } catch (err) {
            console.error("Failed to download receipt", err);
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-stone-900/95 backdrop-blur-md z-[200] flex items-center justify-center p-4 overflow-y-auto"
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    className="w-full max-w-md relative"
                >
                    {loading ? (
                        <div className="p-12 flex flex-col items-center justify-center text-center">
                            <Loader2 size={48} className="text-brand animate-spin mb-6" />
                            <h3 className="text-xl font-serif font-bold text-stone-900 mb-2">Verifying Payment</h3>
                            <p className="text-stone-500 text-sm animate-pulse">{statusMsg}</p>
                        </div>
                    ) : !verified ? (
                        <div className="p-12 flex flex-col items-center justify-center text-center">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                <X size={32} className="text-red-500" />
                            </div>
                            <h3 className="text-xl font-serif font-bold text-stone-900 mb-2">Verification Failed</h3>
                            <p className="text-stone-500 text-sm mb-8">{statusMsg}</p>
                            <div className="flex gap-4 w-full">
                                <button onClick={onClose} className="flex-1 py-3 rounded-lg border border-stone-200 text-stone-500 font-bold text-sm hover:bg-stone-50">Close</button>
                                <button onClick={verifyPayment} className="flex-1 py-3 rounded-lg bg-stone-900 text-white font-bold text-sm hover:bg-stone-800">Retry</button>
                            </div>
                        </div>
                    ) : (
                        <>
                            {/* Close Button */}
                            <button onClick={onClose} className="absolute -top-12 right-0 text-white/50 hover:text-white transition-colors">
                                <X size={24} />
                            </button>

                            {/* RECEIPT PAPER */}
                            <div ref={receiptRef} className="bg-white rounded-sm shadow-2xl overflow-hidden print:shadow-none">
                                {/* Header Stripe */}
                                <div className="bg-stone-900 h-2 w-full" />

                                <div className="p-8">
                                    {/* Brand Header */}
                                    <div className="flex justify-between items-start mb-8">
                                        <div>
                                            <h2 className="font-serif text-2xl font-bold text-stone-900">BlessSpace</h2>
                                            <p className="text-[10px] uppercase tracking-widest text-stone-500">Premium Interior Visualization</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs text-stone-400">Reference ID</p>
                                            <p className="font-mono text-sm font-bold text-stone-900">{refId}</p>
                                        </div>
                                    </div>

                                    {/* Success Banner */}
                                    <div className="bg-green-50 border border-green-100 rounded-lg p-4 mb-8 flex items-center gap-3">
                                        <CheckCircle2 className="text-green-600 flex-shrink-0" size={24} />
                                        <div>
                                            <p className="text-green-800 font-bold text-sm">Payment Confirmed</p>
                                            <p className="text-green-600 text-xs">Transaction completed successfully.</p>
                                        </div>
                                    </div>

                                    {/* Transaction Details */}
                                    <div className="border-t border-b border-stone-100 py-6 mb-6 space-y-4">
                                        <div className="flex justify-between items-baseline">
                                            <span className="text-stone-500 text-sm">Description</span>
                                            <span className="text-stone-900 font-medium text-right">Priority 3D Visualization Package</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-stone-500 text-sm">Date</span>
                                            <span className="text-stone-900 font-medium">{date}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-stone-500 text-sm">Time</span>
                                            <span className="text-stone-900 font-medium">{time}</span>
                                        </div>
                                        <div className="flex justify-between items-center pt-4 border-t border-stone-100 mt-4">
                                            <span className="text-stone-900 font-bold text-lg">Total Paid</span>
                                            <span className="text-stone-900 font-serif font-bold text-2xl">SGD 200.00</span>
                                        </div>
                                    </div>

                                    {/* Footer Info */}
                                    <div className="flex items-center gap-2 justify-center text-stone-400 mb-8">
                                        <ShieldCheck size={14} />
                                        <span className="text-[10px] uppercase tracking-widest">Secure Payment via Stripe</span>
                                    </div>
                                </div>

                                {/* Cut Line (Visual) */}
                                <div className="relative h-4 bg-stone-50 border-t border-stone-100 border-dashed">
                                    <div className="absolute -top-2 -left-2 w-4 h-4 bg-stone-900 rounded-full" />
                                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-stone-900 rounded-full" />
                                </div>

                                {/* Action Area (Inside receipt for visual cohesion, but actions are interactive) */}
                                <div className="p-8 bg-stone-50">
                                    <p className="text-center text-stone-500 text-sm mb-6 leading-relaxed">
                                        <b>Next Step:</b> Tap below to connect with your Priority Designer.
                                    </p>
                                    <a
                                        href="https://wa.me/6582252511?text=Hi%20Blesspace%2C%20I%20have%20completed%20my%20payment%20for%20the%20Visualization%20Package.%20Here%20to%20start%20the%20process.%20[Recommended%20by%20Raffy%20Yudha]"
                                        target="_blank"
                                        rel="noreferrer"
                                        data-html2canvas-ignore
                                        className="w-full bg-[#25D366] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-all shadow-lg transform active:scale-95 mb-3"
                                    >
                                        <MessageCircle size={20} />
                                        Connect on WhatsApp
                                    </a>

                                    <button
                                        onClick={handleDownload}
                                        data-html2canvas-ignore
                                        className="w-full bg-stone-200 text-stone-600 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-stone-300 transition-colors"
                                    >
                                        <Download size={16} />
                                        Download Official Receipt
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};
