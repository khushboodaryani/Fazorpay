import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import React from 'react';
import { ThreeDollar } from './ThreeDollar';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background Decorators */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
            <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-brand-500/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-[10%] right-[20%] w-[400px] h-[400px] bg-accent-500/20 rounded-full blur-[100px]" />
        </div>

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center lg:text-left"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-300 text-xs font-semibold tracking-wide uppercase mb-6 border border-brand-100 dark:border-brand-700/50">
                        <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                        New Generation Payment Gateway
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-extrabold tracking-tight leading-[1.1] mb-6">
                        Payments for the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-accent-600">
                             Digital Age
                        </span>
                    </h1>

                    <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                        Accept payments from customers. Automate payouts to vendors & employees. 
                        Never run out of working capital.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                        <Button size="lg" className="w-full sm:w-auto group">
                            Get Started Now
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                        </Button>
                        <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                            Contact Sales
                        </Button>
                    </div>

                    <div className="flex items-center justify-center lg:justify-start gap-6 text-sm font-medium text-slate-500 dark:text-slate-500">
                        <div className="flex items-center gap-2">
                            <CheckCircle size={16} className="text-emerald-500" />
                            <span>No Setup Fee</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle size={16} className="text-emerald-500" />
                            <span>Instant Activation</span>
                        </div>
                    </div>
                </motion.div>

                {/* 3D Element */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative h-full min-h-[400px] flex items-center justify-center"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/5 to-transparent rounded-full blur-3xl" />
                    <ThreeDollar />
                </motion.div>
            </div>
        </div>
    </section>
  );
};