import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Store, Globe, Link as LinkIcon, FileText, UserCheck, Layers } from 'lucide-react';

const PaymentProducts = [
  { title: "Payment Gateway", desc: "Accept cards, UPI & 100+ methods", icon: CreditCard, badge: null },
  { title: "Payment Links", desc: "Share links via SMS, Email & WhatsApp", icon: LinkIcon, badge: "No Code" },
  { title: "Payment Pages", desc: "Take your store online instantly", icon: Store, badge: "No Code" },
  { title: "Invoices", desc: "Create and send GST compliant invoices", icon: FileText, badge: null },
];

const PayoutProducts = [
  { title: "RazorX X", desc: "Current account for business automation", icon: Layers, badge: "New" },
  { title: "Payroll", desc: "Pay salaries and manage compliances", icon: UserCheck, badge: null },
  { title: "Instant Settlements", desc: "Settle your funds instantly 24x7", icon: Globe, badge: null },
];

const ProductCard = ({ product }: { product: any }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="group relative p-6 bg-white dark:bg-[#121212] rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-brand-500 dark:hover:border-brand-500 transition-all shadow-sm hover:shadow-xl hover:shadow-brand-500/10 cursor-pointer overflow-hidden"
  >
    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform translate-x-2 -translate-y-2">
      <product.icon size={64} className="text-brand-600 dark:text-brand-400" />
    </div>
    
    <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
            <div className="p-3 rounded-lg bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                <product.icon size={24} />
            </div>
            {product.badge && (
                <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider ${
                    product.badge === 'New' 
                    ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' 
                    : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                }`}>
                    {product.badge}
                </span>
            )}
        </div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">{product.title}</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{product.desc}</p>
    </div>
  </motion.div>
);

export const ProductSuite: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                The All-in-One <span className="text-brand-600">Financial Stack</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
                From accepting payments to managing your business finances, we have got you covered.
            </p>
        </div>

        {/* Accept Payments */}
        <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="w-1 h-8 bg-brand-500 rounded-full"></span>
                Accept Payments
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {PaymentProducts.map((p, i) => <ProductCard key={i} product={p} />)}
            </div>
        </div>

        {/* Make Payouts */}
        <div className="relative p-8 md:p-12 rounded-3xl bg-slate-50 dark:bg-[#0f0f0f] border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-500/5 rounded-full blur-[80px]"></div>
            
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 relative z-10">
                <span className="w-1 h-8 bg-emerald-500 rounded-full"></span>
                Business Banking & Payouts
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 relative z-10">
                {PayoutProducts.map((p, i) => <ProductCard key={i} product={p} />)}
            </div>
        </div>

      </div>
    </section>
  );
};