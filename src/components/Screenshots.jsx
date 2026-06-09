import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, LayoutTemplate, Activity, FolderSearch } from 'lucide-react';

const tabs = [
  { id: 'chat', label: 'Local Chat', icon: MessageSquare },
  { id: 'workflow', label: 'Workflow Builder', icon: LayoutTemplate },
  { id: 'analysis', label: 'Data Analysis', icon: Activity },
  { id: 'files', label: 'Local File Search', icon: FolderSearch },
];

const Screenshots = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section id="screenshots" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Designed for Professionals</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A beautiful, intuitive interface that puts powerful AI tools at your fingertips.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-primary-500/20 text-primary-400 border border-primary-500/50'
                  : 'bg-white/5 text-gray-400 border border-transparent hover:bg-white/10'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="relative mx-auto max-w-5xl aspect-[16/10] md:aspect-[16/9]" aria-hidden="true">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 w-full h-full glass-card rounded-2xl border-white/10 overflow-hidden flex flex-col"
            >
              {/* Window Header */}
              <div className="h-10 bg-dark-900/80 border-b border-white/5 flex items-center px-4 space-x-2 shrink-0">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              
              {/* Window Body (Mockup) */}
              <div className="flex-1 bg-dark-900/50 p-6 flex flex-col justify-center items-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                
                {activeTab === 'chat' && (
                  <div className="w-full h-full flex flex-col space-y-4 max-w-3xl">
                    <div className="self-end bg-primary-500/20 border border-primary-500/30 text-white px-4 py-2 rounded-2xl rounded-tr-none max-w-[80%]">
                      Summarize the latest logs in the /var/log directory.
                    </div>
                    <div className="self-start bg-white/5 border border-white/10 text-gray-300 px-4 py-2 rounded-2xl rounded-tl-none max-w-[80%]">
                      <div className="flex space-x-2 mb-2 items-center text-xs text-primary-400">
                        <MessageSquare className="w-3 h-3" /> <span>System Agent</span>
                      </div>
                      I have analyzed the logs. There are 3 new warnings related to memory usage. Would you like me to generate a detailed report?
                    </div>
                  </div>
                )}

                {activeTab === 'workflow' && (
                  <div className="w-full h-full flex items-center justify-center relative">
                     <div className="glass-card p-4 rounded-xl flex items-center space-x-4 border-primary-500/30">
                        <div className="p-3 bg-white/5 rounded-lg"><Activity className="w-6 h-6 text-blue-400" /></div>
                        <div className="w-8 h-px bg-white/20" />
                        <div className="p-3 bg-white/5 rounded-lg border border-primary-500/50"><LayoutTemplate className="w-6 h-6 text-primary-400" /></div>
                        <div className="w-8 h-px bg-white/20" />
                        <div className="p-3 bg-white/5 rounded-lg"><MessageSquare className="w-6 h-6 text-purple-400" /></div>
                     </div>
                  </div>
                )}

                {activeTab === 'analysis' && (
                  <div className="w-full h-full grid grid-cols-2 gap-4">
                     <div className="bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full border-4 border-primary-500/30 border-t-primary-500"></div>
                     </div>
                     <div className="flex flex-col space-y-4">
                        <div className="h-1/3 bg-white/5 rounded-xl border border-white/10"></div>
                        <div className="h-2/3 bg-white/5 rounded-xl border border-white/10"></div>
                     </div>
                  </div>
                )}

                {activeTab === 'files' && (
                  <div className="w-full h-full flex flex-col space-y-4">
                    <div className="h-12 bg-white/5 rounded-xl border border-white/10 flex items-center px-4 space-x-3">
                      <FolderSearch className="w-5 h-5 text-gray-500" />
                      <div className="h-4 w-48 bg-white/10 rounded"></div>
                    </div>
                    <div className="flex-1 bg-white/5 rounded-xl border border-white/10 p-4 space-y-3">
                       {[1,2,3,4].map(i => (
                         <div key={i} className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded bg-white/10"></div>
                            <div className="h-4 w-64 bg-white/5 rounded"></div>
                         </div>
                       ))}
                    </div>
                  </div>
                )}

              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
