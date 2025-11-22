import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

export const CallToAction: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-600 dark:bg-brand-900">
         {/* Abstract Pattern */}
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>
         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/20"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 tracking-tight">
          Supercharge your business with RazorX today
        </h2>
        <p className="text-xl text-brand-100 mb-10 max-w-2xl mx-auto">
           Join 5,000,000+ businesses that trust RazorX to process their payments. Sign up now and get started in minutes.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-white text-brand-600 hover:bg-brand-50 shadow-2xl hover:shadow-white/20 border-none w-full sm:w-auto">
                Sign Up Now <ArrowRight className="ml-2" size={20} />
            </Button>
             <Button size="lg" className="bg-brand-700 text-white hover:bg-brand-800 border border-brand-500 w-full sm:w-auto">
                Contact Sales
            </Button>
        </div>

        <div className="mt-12 flex items-center justify-center gap-8 opacity-70">
             {/* Simple trust indicators */}
             <span className="text-white text-sm font-medium">🔒 PCI DSS Level 1</span>
             <span className="text-white h-1 w-1 rounded-full bg-white/50"></span>
             <span className="text-white text-sm font-medium">⚡ 99.9% Uptime</span>
             <span className="text-white h-1 w-1 rounded-full bg-white/50"></span>
             <span className="text-white text-sm font-medium">🌍 24x7 Support</span>
        </div>
      </div>
    </section>
  );
};