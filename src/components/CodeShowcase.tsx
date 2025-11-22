import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Copy, Terminal } from 'lucide-react';
import { Button } from './ui/Button';

const codes = {
    node: `const RazorX = require('razorx');

const instance = new RazorX({
  key_id: 'YOUR_KEY_ID',
  key_secret: 'YOUR_KEY_SECRET',
});

const options = {
  amount: 50000,  // amount in the smallest currency unit
  currency: "USD",
  receipt: "order_rcptid_11"
};

instance.orders.create(options, function(err, order) {
  console.log(order);
});`,
    python: `import razorx
client = razorx.Client(auth=("YOUR_KEY_ID", "YOUR_KEY_SECRET"))

data = { "amount": 50000, "currency": "USD", "receipt": "order_rcptid_11" }
payment = client.order.create(data=data)`,
    curl: `curl -u [YOUR_KEY_ID]:[YOUR_KEY_SECRET] \\
-X POST https://api.razorx.com/v1/orders \\
-H "content-type: application/json" \\
-d '{
  "amount": 50000,
  "currency": "USD",
  "receipt": "order_rcptid_11"
}'`
};

export const CodeShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'node' | 'python' | 'curl'>('node');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codes[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-[#02040a] text-white overflow-hidden relative">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-900/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                
                {/* Left Content */}
                <div>
                    <div className="flex items-center gap-2 text-brand-400 font-mono mb-6">
                        <Terminal size={20} />
                        <span className="text-sm font-bold tracking-wider uppercase">Developer First</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                        Supercharge your <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-400">
                            Integration
                        </span>
                    </h2>
                    <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                        With our robust APIs and SDKs, you can go live in less than 30 minutes. 
                        Comprehensive documentation, test modes, and webhooks make development a breeze.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-10">
                        <Button variant="primary" className="border-none">Read Documentation</Button>
                        <Button variant="outline" className="border-slate-700 text-slate-300 hover:border-brand-400 hover:text-brand-400">View GitHub</Button>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <h4 className="text-3xl font-bold text-white mb-1">100+</h4>
                            <p className="text-slate-500 text-sm">Integrations</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-bold text-white mb-1">99.9%</h4>
                            <p className="text-slate-500 text-sm">Uptime</p>
                        </div>
                    </div>
                </div>

                {/* Right Code Block */}
                <div className="relative rounded-xl bg-[#0d1117] border border-slate-800 shadow-2xl overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-slate-800">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                        </div>
                        <div className="flex bg-black/20 rounded-lg p-1">
                            {(['node', 'python', 'curl'] as const).map((lang) => (
                                <button
                                    key={lang}
                                    onClick={() => setActiveTab(lang)}
                                    className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                                        activeTab === lang 
                                        ? 'bg-brand-600 text-white shadow-lg' 
                                        : 'text-slate-400 hover:text-slate-200'
                                    }`}
                                >
                                    {lang.toUpperCase()}
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    <div className="p-6 overflow-x-auto relative group">
                        <button 
                            onClick={handleCopy}
                            className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all opacity-0 group-hover:opacity-100"
                        >
                            {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                        </button>
                        <pre className="font-mono text-sm leading-relaxed text-slate-300">
                            <code>
                                {codes[activeTab]}
                            </code>
                        </pre>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
};