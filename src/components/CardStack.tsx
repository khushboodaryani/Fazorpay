import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Building2, Landmark, Wallet, ShieldCheck, CreditCard, PieChart, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/Button';

const cards = [
  {
    id: 1,
    title: "RazorX Current Account",
    description: "The banking experience you've always wanted. Open a fully digital current account in minutes with zero paperwork and instant activation.",
    icon: Building2,
    color: "bg-blue-500",
    gradient: "from-blue-500 to-cyan-400",
    features: ["Zero Balance Account", "Instant Activation", "Free Debit Card"]
  },
  {
    id: 2,
    title: "Automated Payroll",
    description: "Say goodbye to spreadsheets. Automate salary payments, compliance (PF, PT, TDS), and tax filings in just 3 clicks.",
    icon: Wallet,
    color: "bg-emerald-500",
    gradient: "from-emerald-500 to-teal-400",
    features: ["One-click Disbursement", "Auto-Compliance", "Smart Insights"]
  },
  {
    id: 3,
    title: "Corporate Spend Cards",
    description: "Empower your team with smart corporate cards. Set spending limits, track expenses in real-time, and earn 2% unlimited cashback.",
    icon: CreditCard,
    color: "bg-violet-500",
    gradient: "from-violet-500 to-purple-400",
    features: ["Unlimited Virtual Cards", "Real-time Tracking", "Forex Support"]
  },
  {
    id: 4,
    title: "Capital & Loans",
    description: "Get instant access to collateral-free working capital loans based on your transaction history. Fuel your growth without the wait.",
    icon: Landmark,
    color: "bg-rose-500",
    gradient: "from-rose-500 to-pink-400",
    features: ["Instant Approval", "Flexible Repayment", "Low Interest Rates"]
  }
];

const Card = ({ 
  card, 
  index, 
  range, 
  targetScale 
}: { 
  card: any, 
  index: number, 
  range: number[], 
  targetScale: number 
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(scrollYProgress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, top: `calc(-5% + ${index * 25}px)` }} 
        className="relative flex flex-col md:flex-row w-full max-w-5xl h-[500px] md:h-[600px] bg-white dark:bg-[#121212] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden origin-top"
      >
         {/* Left/Top Content Side */}
         <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center z-10 relative">
            <div className={`absolute top-0 left-0 w-full h-2 md:w-2 md:h-full ${card.color}`}></div>
            
            <div className="flex items-center gap-4 mb-6">
                 <div className={`w-12 h-12 rounded-xl ${card.color} bg-opacity-10 flex items-center justify-center text-${card.color.split('-')[1]}-600 dark:text-${card.color.split('-')[1]}-400`}>
                    <card.icon size={24} />
                 </div>
                 <span className="text-sm font-bold tracking-wider uppercase text-slate-400">0{index + 1}</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 text-slate-900 dark:text-white">
                {card.title}
            </h3>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                {card.description}
            </p>

            <ul className="space-y-4 mb-8">
                {card.features.map((f: string, i: number) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                        <ShieldCheck className="w-5 h-5 text-brand-500" />
                        {f}
                    </li>
                ))}
            </ul>

            <div>
                <Button variant="primary" className={`${card.color} border-none`}>
                    Explore Product
                </Button>
            </div>
         </div>

         {/* Right/Bottom Visual Side */}
         <div className={`flex-1 relative overflow-hidden bg-slate-100 dark:bg-[#1a1a1a] p-8 md:p-12 flex items-center justify-center`}>
            <motion.div 
                className={`relative w-full aspect-square bg-gradient-to-br ${card.gradient} rounded-3xl shadow-2xl p-6 flex flex-col gap-4 border border-white/20`}
                style={{ scale: imageScale }}
            >
                {/* Decorative UI Elements simulating the product */}
                <div className="w-full h-8 bg-white/20 rounded-lg backdrop-blur-sm" />
                <div className="flex gap-4">
                    <div className="w-1/3 h-24 bg-white/20 rounded-xl backdrop-blur-sm" />
                    <div className="w-2/3 h-24 bg-white/10 rounded-xl backdrop-blur-sm" />
                </div>
                <div className="flex-1 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10 p-4">
                    <div className="w-1/2 h-4 bg-white/30 rounded mb-4" />
                    <div className="space-y-2">
                        <div className="w-full h-2 bg-white/10 rounded" />
                        <div className="w-full h-2 bg-white/10 rounded" />
                        <div className="w-3/4 h-2 bg-white/10 rounded" />
                    </div>
                </div>
                
                {/* Floating Element */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            </motion.div>
         </div>
      </motion.div>
    </div>
  )
}

export const CardStack: React.FC = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section ref={container} className="relative mt-20 mb-40 bg-slate-50 dark:bg-[#050505]">
        <div className="sticky top-0 h-[20vh] md:h-[30vh] flex flex-col items-center justify-center text-center px-4 z-0 mb-10">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
                The <span className="text-brand-600">Financial OS</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl">
                Scroll down to explore the complete suite of financial tools built for the modern enterprise.
            </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-[20vh]">
            {cards.map((card, i) => {
                const targetScale = 1 - ( (cards.length - i) * 0.05);
                return <Card key={i} index={i} card={card} range={[i * 0.25, 1]} targetScale={targetScale} />;
            })}
        </div>
    </section>
  );
};