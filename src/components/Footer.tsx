import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 dark:bg-[#050505] pt-20 pb-10 border-t border-slate-200 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
               <div className="w-8 h-8 bg-brand-600 rounded-br-xl rounded-tl-xl flex items-center justify-center">
                 <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight">RazorX</span>
            </div>
            <p className="text-slate-500 mb-6 max-w-sm">
              The most advanced payment platform for forward-thinking businesses. Secure, scalable, and simple.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-brand-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-brand-500 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-brand-500 transition-colors"><Github size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-brand-500 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Product</h4>
            <ul className="space-y-3 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-brand-500 transition-colors">Payments</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Subscriptions</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Connect</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Route</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Resources</h4>
            <ul className="space-y-3 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-brand-500 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Community</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-brand-500 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Legal</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© 2024 RazorX Inc. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-brand-500">Privacy Policy</a>
            <a href="#" className="hover:text-brand-500">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};