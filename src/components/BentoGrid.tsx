import { CheckCircle2, Server, Shield, XCircle, Zap } from 'lucide-react';
import React from 'react';

export const BentoGrid: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-center">
                Why choose <span className="text-brand-600">RazorX?</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Large Card Left */}
            <div className="md:col-span-2 bg-white dark:bg-[#151515] rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden relative group">
                <div className="relative z-10">
                    <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900/30 rounded-xl flex items-center justify-center text-brand-600 dark:text-brand-400 mb-6">
                        <Zap size={28} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Unmatched Performance</h3>
                    <p className="text-slate-600 dark:text-slate-400 max-w-md mb-8">
                        Experience success rates that are 12% higher than the industry average. 
                        Our intelligent routing algorithms ensure transactions never fail.
                    </p>
                </div>
                
                {/* Abstract Graph Background */}
                <div className="absolute right-0 bottom-0 w-2/3 h-2/3 opacity-10 group-hover:opacity-20 transition-opacity">
                    <svg viewBox="0 0 100 100" className="w-full h-full fill-brand-500">
                        <path d="M0 100 L20 80 L40 90 L60 40 L80 50 L100 10 V100 H0 Z" />
                    </svg>
                </div>
            </div>

            {/* Tall Card Right */}
            <div className="md:row-span-2 bg-gradient-to-b from-brand-600 to-brand-800 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                 <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-6">Security First</h3>
                    <ul className="space-y-6">
                        <li className="flex items-start gap-3">
                            <Shield className="shrink-0 mt-1" />
                            <div>
                                <p className="font-bold">PCI DSS Level 1</p>
                                <p className="text-brand-200 text-sm">Highest level of certification.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <Server className="shrink-0 mt-1" />
                            <div>
                                <p className="font-bold">Data Localization</p>
                                <p className="text-brand-200 text-sm">100% compliant with local laws.</p>
                            </div>
                        </li>
                    </ul>
                 </div>
                 <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
            </div>

            {/* Comparison Card */}
            <div className="md:col-span-2 bg-white dark:bg-[#151515] rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl">
                <h3 className="text-xl font-bold mb-6">The RazorX Advantage</h3>
                <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-4 opacity-50 grayscale">
                        <p className="font-bold text-sm uppercase tracking-wider text-slate-500">Traditional Banks</p>
                        <div className="flex items-center gap-2 text-red-500">
                            <XCircle size={18} /> <span className="text-slate-700 dark:text-slate-300">T+2 Settlements</span>
                        </div>
                        <div className="flex items-center gap-2 text-red-500">
                            <XCircle size={18} /> <span className="text-slate-700 dark:text-slate-300">Manual Onboarding</span>
                        </div>
                        <div className="flex items-center gap-2 text-red-500">
                            <XCircle size={18} /> <span className="text-slate-700 dark:text-slate-300">Legacy APIs</span>
                        </div>
                    </div>
                    <div className="space-y-4">
                         <p className="font-bold text-sm uppercase tracking-wider text-brand-600">RazorX</p>
                         <div className="flex items-center gap-2 text-emerald-500">
                            <CheckCircle2 size={18} /> <span className="font-medium text-slate-900 dark:text-white">Instant Settlements</span>
                        </div>
                        <div className="flex items-center gap-2 text-emerald-500">
                            <CheckCircle2 size={18} /> <span className="font-medium text-slate-900 dark:text-white">100% Digital</span>
                        </div>
                        <div className="flex items-center gap-2 text-emerald-500">
                            <CheckCircle2 size={18} /> <span className="font-medium text-slate-900 dark:text-white">Restful JSON APIs</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};