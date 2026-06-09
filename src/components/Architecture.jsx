import React from 'react';
import { motion } from 'framer-motion';
import { User, MonitorSmartphone, Bot, Database, ArrowRight } from 'lucide-react';

const Architecture = () => {
  return (
    <section id="architecture" className="py-24 relative overflow-hidden bg-dark-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">How AutoMind Works</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A seamless, secure pipeline from your intent to execution.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto py-12">
          {/* Connection Lines Background */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500/50 to-transparent -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            
            {/* User */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-24 h-24 rounded-2xl glass-card flex items-center justify-center mb-4 border-white/10 relative">
                <User className="w-10 h-10 text-gray-300" />
                <div className="md:hidden absolute -bottom-6 text-white/30"><ArrowRight className="rotate-90 md:rotate-0" /></div>
              </div>
              <h3 className="text-lg font-semibold text-white">You</h3>
              <p className="text-sm text-gray-400 text-center mt-2">Natural Language Request</p>
            </motion.div>

            {/* AutoMind Desktop */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="w-24 h-24 rounded-2xl glass-card bg-primary-500/10 border-primary-500/30 shadow-[0_0_30px_rgba(59,130,246,0.2)] flex items-center justify-center mb-4 relative">
                <MonitorSmartphone className="w-10 h-10 text-primary-400" />
                <div className="md:hidden absolute -bottom-6 text-white/30"><ArrowRight className="rotate-90 md:rotate-0" /></div>
              </div>
              <h3 className="text-lg font-semibold text-primary-400">AutoMind</h3>
              <p className="text-sm text-gray-400 text-center mt-2">Task Orchestration & Planning</p>
            </motion.div>

            {/* AI Agents */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center"
            >
              <div className="w-24 h-24 rounded-2xl glass-card bg-accent-500/10 border-accent-500/30 flex items-center justify-center mb-4 relative">
                <Bot className="w-10 h-10 text-accent-400" />
                <div className="md:hidden absolute -bottom-6 text-white/30"><ArrowRight className="rotate-90 md:rotate-0" /></div>
              </div>
              <h3 className="text-lg font-semibold text-accent-400">Agents</h3>
              <p className="text-sm text-gray-400 text-center mt-2">Specialized Execution</p>
            </motion.div>

            {/* Ollama Core */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-col items-center"
            >
              <div className="w-24 h-24 rounded-2xl glass-card border-white/10 flex items-center justify-center mb-4">
                <Database className="w-10 h-10 text-gray-300" />
              </div>
              <h3 className="text-lg font-semibold text-white">Ollama / Local LLM</h3>
              <p className="text-sm text-gray-400 text-center mt-2">Inference & Generation</p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
