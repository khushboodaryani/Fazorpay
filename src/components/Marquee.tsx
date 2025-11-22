import React from 'react';

const logos = [
  "Spotify", "Netflix", "Amazon", "Google", "Microsoft", "Zoom", "Slack", "Atlassian", "Stripe", "Shopify"
];

export const Marquee: React.FC = () => {
  return (
    <section className="py-10 border-y border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0a0a0a] overflow-hidden">
      <div className="mb-6 text-center">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Trusted by 50,000+ innovative companies</p>
      </div>
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div key={`${logo}-${index}`} className="text-2xl font-display font-bold text-slate-300 dark:text-slate-700 select-none hover:text-brand-500 dark:hover:text-brand-400 transition-colors cursor-default">
              {logo}
            </div>
          ))}
        </div>
        
        {/* Gradient Fade Overlay */}
        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white dark:from-[#0a0a0a] to-transparent z-10" />
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white dark:from-[#0a0a0a] to-transparent z-10" />
      </div>
    </section>
  );
};