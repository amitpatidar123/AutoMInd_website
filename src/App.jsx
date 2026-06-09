import React, { useState, useEffect, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { BrainCircuit } from 'lucide-react';

// Lazy load below-the-fold components
const Features = lazy(() => import('./components/Features'));
const Architecture = lazy(() => import('./components/Architecture'));
const Screenshots = lazy(() => import('./components/Screenshots'));
const Comparison = lazy(() => import('./components/Comparison'));
const Installation = lazy(() => import('./components/Installation'));
const FAQ = lazy(() => import('./components/FAQ'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-dark-900 text-white font-sans selection:bg-primary-500/30 selection:text-white">
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dark-900"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="bg-gradient-to-tr from-primary-500 to-accent-500 p-4 rounded-2xl mb-4 shadow-[0_0_30px_rgba(59,130,246,0.3)]"
            >
              <BrainCircuit className="w-12 h-12 text-white" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400"
            >
              INITIALIZING AGENTS...
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <Navbar />
          <main>
            <Hero />
            <Suspense fallback={<div className="h-96 flex items-center justify-center text-gray-500">Loading section...</div>}>
              <Features />
              <Architecture />
              <Screenshots />
              <Comparison />
              <Installation />
              <FAQ />
            </Suspense>
          </main>
          <Suspense fallback={<div className="h-64 bg-dark-900"></div>}>
            <Footer />
          </Suspense>
        </motion.div>
      )}
    </div>
  );
}

export default App;
