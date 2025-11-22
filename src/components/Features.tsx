import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Globe, Smartphone, PieChart, Repeat } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "Instant Settlements",
    description: "Settle your funds in real-time. No more waiting for T+2 days. Cash flow on demand."
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "PCI DSS Level 1 compliant. We treat your data with the highest standard of security."
  },
  {
    icon: Globe,
    title: "International Payments",
    description: "Accept payments from 100+ countries in 30+ currencies effortlessly."
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Seamless checkout experience across all devices. Mobile-first design philosophy."
  },
  {
    icon: PieChart,
    title: "Deep Analytics",
    description: "Real-time insights into your business performance with our advanced dashboard."
  },
  {
    icon: Repeat,
    title: "Subscriptions",
    description: "Automate recurring payments for your SaaS or subscription business model."
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Powering the <span className="text-brand-600">Financial Backbone</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Everything you need to build, run, and scale your business financial operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group p-8 rounded-2xl bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-slate-800 hover:border-brand-500 dark:hover:border-brand-500 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-500/10"
            >
              <div className="w-12 h-12 rounded-lg bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-brand-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};