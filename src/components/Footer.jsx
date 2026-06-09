import React from 'react';
import { BrainCircuit, Code, MessageCircle, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-900 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-tr from-primary-500 to-accent-500 p-2 rounded-lg">
                <BrainCircuit className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">AutoMind</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-6 leading-relaxed">
              Your Personal Autonomous AI Workforce. Privacy-preserving desktop AI agent powered by local LLMs.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/automind/automind" aria-label="GitHub" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors"><Code className="w-5 h-5" /></a>
              <a href="https://twitter.com/automind" aria-label="Twitter" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors"><MessageCircle className="w-5 h-5" /></a>
              <a href="https://discord.gg/automind" aria-label="Discord" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors"><MessageSquare className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm">Features</a></li>
              <li><a href="#architecture" className="text-gray-400 hover:text-white transition-colors text-sm">Architecture</a></li>
              <li><a href="#screenshots" className="text-gray-400 hover:text-white transition-colors text-sm">Screenshots</a></li>
              <li><a href="#installation" className="text-gray-400 hover:text-white transition-colors text-sm">Download</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="https://docs.automind.dev" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">Documentation</a></li>
              <li><a href="https://github.com/automind/automind" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">GitHub Repo</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors text-sm">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} AutoMind. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span>Designed with</span>
            <span className="text-red-500">♥</span>
            <span>for the local AI community.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
