import { motion } from 'framer-motion';
import { ArrowRight, Quote } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "RazorX revolutionized how we handle global payments. The integration was seamless and support is phenomenal.",
    author: "Sarah Jenkins",
    role: "CTO, TechFlow",
    image: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    id: 2,
    quote: "The 3D verification process is a game changer. Fraud rates dropped by 90% since we switched.",
    author: "Michael Chen",
    role: "Founder, StartScale",
    image: "https://picsum.photos/seed/mike/100/100"
  },
  {
    id: 3,
    quote: "Best developer experience in the market. The APIs are clean, well-documented, and extremely reliable.",
    author: "Alex Richardson",
    role: "Lead Eng, DevCorp",
    image: "https://picsum.photos/seed/alex/100/100"
  },
  {
    id: 4,
    quote: "Subscription management made easy. We scaled from 100 to 10k users without changing a line of billing code.",
    author: "Emily Watson",
    role: "Product Mgr, SaaSy",
    image: "https://picsum.photos/seed/emily/100/100"
  },
  {
    id: 5,
    quote: "Financial reporting that actually makes sense. My accounting team loves the dashboard features.",
    author: "David Miller",
    role: "CFO, GrowthInc",
    image: "https://picsum.photos/seed/david/100/100"
  }
];

export const DraggableCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
    }
  }, []);

  return (
    <section className="py-24 bg-white dark:bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Loved by <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-brand-500">Innovators</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl">
            Don't just take our word for it. See what industry leaders are saying about the RazorX experience.
            <span className="block text-sm mt-2 text-brand-600 italic flex items-center gap-1">
               <ArrowRight size={14}/> Drag the cards to explore
            </span>
            </p>
        </div>
      </div>

      <div className="pl-4 sm:pl-6 lg:pl-8">
        <motion.div 
            ref={containerRef} 
            className="cursor-grab active:cursor-grabbing overflow-hidden"
        >
            <motion.div 
                drag="x" 
                dragConstraints={{ right: 0, left: -width }} 
                className="flex gap-6"
            >
                {testimonials.map((item) => (
                    <motion.div
                        key={item.id}
                        className="min-w-[300px] md:min-w-[400px] p-8 rounded-2xl bg-slate-50 dark:bg-[#151515] border border-slate-100 dark:border-slate-800 relative group transition-colors hover:bg-brand-50 dark:hover:bg-brand-900/10 hover:border-brand-200 dark:hover:border-brand-800/30"
                    >
                        <Quote className="absolute top-6 right-6 text-brand-200 dark:text-brand-900 group-hover:text-brand-300 dark:group-hover:text-brand-800 transition-colors" size={48} />
                        
                        <p className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-8 relative z-10 leading-relaxed">
                            "{item.quote}"
                        </p>

                        <div className="flex items-center gap-4">
                            <img src={item.image} alt={item.author} className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-slate-700" />
                            <div>
                                <h4 className="font-bold text-slate-900 dark:text-white">{item.author}</h4>
                                <p className="text-sm text-brand-600 dark:text-brand-400">{item.role}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
};