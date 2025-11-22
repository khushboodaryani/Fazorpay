import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Features } from './components/Features';
import { ProductSuite } from './components/ProductSuite';
import { CardStack } from './components/CardStack';
import { CodeShowcase } from './components/CodeShowcase';
import { DraggableCards } from './components/DraggableCards';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { ThemeProvider } from './components/ThemeContext';
import { GlobalScale } from './components/GlobalScale'; 
import { Workflow } from './components/Workflow';
import { BentoGrid } from './components/BentoGrid';

const App: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  

  return (
    <ThemeProvider>
      <div className="min-h-screen w-full selection:bg-brand-500 selection:text-white bg-slate-50 dark:bg-[#050505] overflow-x-hidden">
        <Navbar />
        <main className="flex flex-col w-full">
          <Hero />
          <Marquee />
          <ProductSuite />
          <Workflow />
          <BentoGrid />
          <CardStack />
          <GlobalScale />
          <CodeShowcase />
          <Features />
          <DraggableCards />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;