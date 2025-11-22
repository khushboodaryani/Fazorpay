import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Code, CheckCircle, Rocket } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: "Create Account",
    desc: "Sign up in less than 2 minutes. Complete KYC fully online.",
    color: "bg-blue-500"
  },
  {
    icon: Code,
    title: "Integrate SDK",
    desc: "Drop in our pre-built checkout or use custom APIs.",
    color: "bg-indigo-500"
  },
  {
    icon: CheckCircle,
    title: "Test Transaction",
    desc: "Simulate payments in sandbox mode to ensure perfect flow.",
    color: "bg-purple-500"
  },
  {
    icon: Rocket,
    title: "Go Live",
    desc: "Activate your account and start accepting real money instantly.",
    color: "bg-emerald-500"
  }
];

export const Workflow: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
             <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Go live in <span className="text-brand-600">Minutes</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                We have stripped away the complexity. No heavy lifting, no banking delays.
            </p>
        </div>

        <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-100 dark:bg-slate-800 hidden md:block">
                <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    transition={{ duration: 2, ease: "linear" }}
                    className="w-full bg-gradient-to-b from-brand-500 to-accent-500"
                />
            </div>

            <div className="space-y-12 md:space-y-24">
                {steps.map((step, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                    >
                        {/* Card Side */}
                        <div className="flex-1 w-full md:text-right">
                            <div className={`p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#111] shadow-lg hover:border-brand-500 dark:hover:border-brand-500 transition-colors group ${index % 2 !== 0 ? 'md:text-left' : 'md:text-right'}`}>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-brand-500 transition-colors">{step.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400">{step.desc}</p>
                            </div>
                        </div>

                        {/* Center Icon */}
                        <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-white dark:bg-[#0a0a0a] border-4 border-slate-100 dark:border-slate-800 flex items-center justify-center shadow-xl">
                            <div className={`w-10 h-10 rounded-full ${step.color} flex items-center justify-center text-white`}>
                                <step.icon size={20} />
                            </div>
                        </div>

                        {/* Spacer Side */}
                        <div className="flex-1 hidden md:block"></div>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};