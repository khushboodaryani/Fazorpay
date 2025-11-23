import { motion, useScroll, useTransform } from 'framer-motion';
import { Building2, CreditCard, Landmark, ShieldCheck, Wallet } from 'lucide-react';
import React, { useRef } from 'react';
import { Button } from './ui/Button';

const cards = [
  {
    id: 1,
    title: "RazorX Current Account",
    description: "The banking experience you've always wanted. Open a fully digital current account in minutes.",
    icon: Building2,
    color: "bg-blue-500",
    gradient: "from-blue-500 to-cyan-400",
    features: ["Zero Balance Account", "Instant Activation", "Free Debit Card"]
  },
  {
    id: 2,
    title: "Automated Payroll",
    description: "Say goodbye to spreadsheets. Automate salary payments, compliance, and tax filings in just 3 clicks.",
    icon: Wallet,
    color: "bg-emerald-500",
    gradient: "from-emerald-500 to-teal-400",
    features: ["One-click Disbursement", "Auto-Compliance", "Smart Insights"]
  },
  {
    id: 3,
    title: "Corporate Spend Cards",
    description: "Empower your team with smart corporate cards. Set spending limits and track expenses in real-time.",
    icon: CreditCard,
    color: "bg-violet-500",
    gradient: "from-violet-500 to-purple-400",
    features: ["Unlimited Virtual Cards", "Real-time Tracking", "Forex Support"]
  },
  {
    id: 4,
    title: "Capital & Loans",
    description: "Get instant access to collateral-free working capital loans based on your transaction history.",
    icon: Landmark,
    color: "bg-rose-500",
    gradient: "from-rose-500 to-pink-400",
    features: ["Instant Approval", "Flexible Repayment", "Low Interest Rates"]
  }
];

const Card = ({ 
  card, 
  index, 
  progress, 
  range, 
  targetScale 
}: { 
  card: any, 
  index: number, 
  progress: any,
  range: number[], 
  targetScale: number 
}) => {
  
  const scale = useTransform(progress, range, [1, targetScale]);
  
  // Increased multiplier to 50px to create a wider visible gap between stacked cards
  const topOffset = 100 + (index * 50); 

  return (
    <div className="h-[80vh] flex items-start justify-center sticky" style={{ top: topOffset }}>
      <motion.div 
        style={{ 
            scale,
            top: 0
        }} 
        className="relative flex flex-col md:flex-row w-full max-w-5xl h-[500px] bg-white dark:bg-[#121212] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden origin-top"
      >
         {/* Left/Top Content Side */}
         <div className="flex-1 p-8 md:p-10 flex flex-col justify-center z-10 relative">
            <div className={`absolute top-0 left-0 w-full h-1 md:w-2 md:h-full ${card.color}`}></div>
            
            <div className="flex items-center gap-4 mb-6">
                 <div className={`w-10 h-10 rounded-xl ${card.color} bg-opacity-10 flex items-center justify-center text-${card.color.split('-')[1]}-600 dark:text-${card.color.split('-')[1]}-400`}>
                    <card.icon size={20} />
                 </div>
                 <span className="text-sm font-bold tracking-wider uppercase text-slate-400">0{index + 1}</span>
            </div>

            <h3 className="text-3xl font-display font-bold mb-4 text-slate-900 dark:text-white">
                {card.title}
            </h3>
            
            <p className="text-base text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                {card.description}
            </p>

            <ul className="space-y-3 mb-8">
                {card.features.map((f: string, i: number) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 text-sm font-medium">
                        <ShieldCheck className="w-4 h-4 text-brand-500" />
                        {f}
                    </li>
                ))}
            </ul>

            <div>
                <Button variant="primary" size="sm" className={`${card.color} border-none`}>
                    Explore Product
                </Button>
            </div>
         </div>

         {/* Right/Bottom Visual Side */}
         <div className={`flex-1 relative overflow-hidden bg-slate-50 dark:bg-[#18181b] p-8 flex items-center justify-center`}>
            <div className={`relative w-full aspect-square bg-gradient-to-br ${card.gradient} rounded-2xl shadow-xl p-6 flex flex-col gap-4 border border-white/10`}>
                {/* Decorative UI Elements */}
                <div className="w-full h-6 bg-white/20 rounded-md backdrop-blur-sm" />
                <div className="flex gap-4">
                    <div className="w-1/3 h-20 bg-white/20 rounded-lg backdrop-blur-sm" />
                    <div className="w-2/3 h-20 bg-white/10 rounded-lg backdrop-blur-sm" />
                </div>
                <div className="flex-1 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10 p-4">
                    <div className="w-1/2 h-3 bg-white/30 rounded mb-3" />
                    <div className="space-y-2">
                        <div className="w-full h-1.5 bg-white/10 rounded" />
                        <div className="w-full h-1.5 bg-white/10 rounded" />
                        <div className="w-3/4 h-1.5 bg-white/10 rounded" />
                    </div>
                </div>
            </div>
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
    <section className="bg-slate-50 dark:bg-[#050505] pt-20">
        <div className="text-center px-4 mb-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                The <span className="text-brand-600">Financial OS</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
                A complete suite of financial tools.
            </p>
        </div>

        <div ref={container} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-[40vh]">
            {cards.map((card, i) => {
                const targetScale = 1 - ( (cards.length - 1 - i) * 0.05);
                return (
                    <Card 
                        key={i} 
                        index={i} 
                        card={card} 
                        progress={scrollYProgress}
                        range={[i * 0.25, 1]} 
                        targetScale={targetScale} 
                    />
                );
            })}
        </div>
    </section>
  );
};