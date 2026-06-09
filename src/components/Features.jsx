import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Network, Workflow, LineChart, WifiOff, ShieldCheck } from 'lucide-react';

const features = [
  {
    title: 'Local AI Processing',
    description: 'Run powerful LLMs directly on your machine via Ollama. No cloud dependencies, zero latency.',
    icon: Cpu,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10'
  },
  {
    title: 'Multi-Agent Collaboration',
    description: 'Deploy specialized AI agents that work together to solve complex, multi-step problems autonomously.',
    icon: Network,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10'
  },
  {
    title: 'Workflow Automation',
    description: 'Connect local tools, scripts, and APIs to create powerful automated pipelines triggered by AI.',
    icon: Workflow,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10'
  },
  {
    title: 'Data Analysis',
    description: 'Point agents to your local files and databases to securely extract insights without uploading data.',
    icon: LineChart,
    color: 'text-amber-400',
    bg: 'bg-amber-400/10'
  },
  {
    title: 'Offline Capability',
    description: 'True independence. Your entire AI ecosystem works flawlessly even without an internet connection.',
    icon: WifiOff,
    color: 'text-rose-400',
    bg: 'bg-rose-400/10'
  },
  {
    title: 'Privacy First',
    description: 'Your data never leaves your desktop. Total confidentiality for enterprise or personal use cases.',
    icon: ShieldCheck,
    color: 'text-primary-400',
    bg: 'bg-primary-400/10'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Powerful features built for <br />
            <span className="text-gradient">Local Intelligence</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            AutoMind combines the capabilities of modern LLMs with the security and speed of your own hardware.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl hover:-translate-y-1 transition-transform duration-300 group"
            >
              <div className={`w-14 h-14 rounded-xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
