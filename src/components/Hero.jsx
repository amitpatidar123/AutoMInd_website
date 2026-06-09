import React from 'react';
import { motion } from 'framer-motion';
import { Download, Code, Terminal, Cpu, Shield, Bot } from 'lucide-react';

import { useGitHubRelease } from '../hooks/useGitHubRelease';
import { getOS } from '../utils/osDetection';
import { trackDownload } from '../utils/analytics';

const FloatingAgent = ({ icon: Icon, color, delay, top, left, right }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: [0, -15, 0], opacity: 1 }}
    transition={{ 
      y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
      opacity: { duration: 0.8, delay }
    }}
    className={`absolute hidden lg:flex items-center space-x-3 glass-card px-4 py-3 rounded-2xl ${top} ${left} ${right}`}
  >
    <div className={`p-2 rounded-full bg-${color}-500/20 text-${color}-400`}>
      <Icon className="w-5 h-5" />
    </div>
    <div className="flex flex-col">
      <div className="h-2 w-16 bg-white/20 rounded-full mb-1.5" />
      <div className="h-1.5 w-10 bg-white/10 rounded-full" />
    </div>
  </motion.div>
);

const Hero = () => {
  const { release, loading } = useGitHubRelease();
  const os = getOS();
  const version = loading ? '...' : (release?.version || 'v1.0.0');

  const handleDownloadClick = () => {
    trackDownload(os, version);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-accent-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        
        {/* Floating Elements for large screens */}
        <FloatingAgent icon={Bot} color="primary" delay={0} top="top-20" left="left-10" />
        <FloatingAgent icon={Cpu} color="accent" delay={1.5} top="top-1/3" right="right-10" />
        <FloatingAgent icon={Shield} color="green" delay={2.5} top="bottom-1/3" left="left-20" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full mb-8 border-primary-500/30">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            <span className="text-sm font-medium text-primary-400">{version} Now Available for {os !== 'unknown' ? os : 'Desktop'}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Your Personal <br className="hidden md:block"/>
            <span className="text-gradient-primary">Autonomous AI</span> Workforce
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Privacy-preserving desktop AI agent powered by local LLMs. Automate workflows, analyze data, and orchestrate multiple agents directly on your machine.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="#installation" onClick={handleDownloadClick} className="btn-primary flex items-center justify-center space-x-2 w-full sm:w-auto text-lg py-3 px-8">
              <Download className="w-5 h-5" />
              <span>Download for {os !== 'unknown' ? os : 'Windows'}</span>
            </a>
            <a href={release?.url || "https://github.com/automind/automind"} target="_blank" rel="noreferrer" className="btn-outline flex items-center justify-center space-x-2 w-full sm:w-auto text-lg py-3 px-8">
              <Code className="w-5 h-5" />
              <span>View Source</span>
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">Requires {os !== 'unknown' ? os : 'Windows 10/11'} & Ollama installed locally.</p>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-20 relative mx-auto max-w-5xl"
          aria-hidden="true"
        >
          <div className="glass-card rounded-2xl overflow-hidden border-white/10 shadow-2xl relative">
            {/* Window header */}
            <div className="bg-dark-900/80 px-4 py-3 flex items-center border-b border-white/5">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="mx-auto flex items-center space-x-2 text-xs text-gray-500">
                <Terminal className="w-3 h-3" />
                <span>automind-desktop.exe</span>
              </div>
            </div>
            {/* Window Body Placeholder */}
            <div className="aspect-[16/9] bg-dark-900/50 p-6 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
              
              <div className="grid grid-cols-12 gap-4 w-full h-full">
                {/* Sidebar mock */}
                <div className="col-span-3 rounded-xl border border-white/5 bg-white/5 p-4 flex flex-col space-y-4">
                  <div className="h-8 w-full bg-white/10 rounded-md" />
                  <div className="h-4 w-3/4 bg-white/5 rounded-md" />
                  <div className="h-4 w-1/2 bg-white/5 rounded-md" />
                  <div className="h-4 w-5/6 bg-white/5 rounded-md" />
                </div>
                {/* Main content mock */}
                <div className="col-span-9 rounded-xl border border-white/5 bg-white/5 p-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-full bg-primary-500/20" />
                      <div className="h-16 w-3/4 bg-white/10 rounded-xl" />
                    </div>
                    <div className="flex items-start space-x-4 flex-row-reverse">
                      <div className="w-8 h-8 rounded-full bg-accent-500/20 ml-4" />
                      <div className="h-24 w-2/3 bg-white/5 rounded-xl border border-primary-500/20" />
                    </div>
                  </div>
                  <div className="h-12 w-full bg-dark-900/80 rounded-xl border border-white/10 flex items-center px-4">
                    <div className="h-4 w-1/3 bg-white/10 rounded-md" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
