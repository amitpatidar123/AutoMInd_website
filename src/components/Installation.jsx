import React from 'react';
import { Download, Database, HardDrive, Play, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useGitHubRelease } from '../hooks/useGitHubRelease';
import { getOS } from '../utils/osDetection';
import { trackDownload } from '../utils/analytics';

const steps = [
  {
    icon: Download,
    title: 'Download AutoMind',
    description: 'Get the latest installer for your operating system below.',
  },
  {
    icon: Database,
    title: 'Install Ollama',
    description: 'AutoMind requires Ollama running locally to serve models.',
  },
  {
    icon: HardDrive,
    title: 'Download a Model',
    description: 'Pull your preferred model through the AutoMind UI.',
  },
  {
    icon: Play,
    title: 'Launch & Automate',
    description: 'Start creating agents directly from your desktop.',
  }
];

const Installation = () => {
  const { release, loading } = useGitHubRelease();
  const os = getOS();

  const handleDownload = (assetName, isMock) => {
    trackDownload(os, release?.version || 'unknown');
    if (isMock) {
      alert(`Downloading ${assetName}... (Simulated)`);
    }
  };

  return (
    <section id="installation" className="py-24 relative bg-dark-800/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Download Center</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Get started with local AI in minutes. Fully open-source and free forever.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Installation Steps */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Quick Start Guide</h3>
            {steps.map((step, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-dark-900 border border-white/10 flex items-center justify-center shrink-0">
                  <step.icon className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">{index + 1}. {step.title}</h4>
                  <p className="text-sm text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Download Links & Release Notes */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-8 h-full flex flex-col border-primary-500/20 shadow-[0_0_40px_rgba(59,130,246,0.1)]">
              <div className="flex justify-between items-center mb-6 pb-6 border-b border-white/10">
                <div>
                  <h3 className="text-2xl font-bold text-white flex items-center space-x-3">
                    <span>Latest Release</span>
                    {!loading && <span className="text-sm bg-primary-500/20 text-primary-400 px-3 py-1 rounded-full">{release?.version}</span>}
                  </h3>
                  {!loading && <p className="text-sm text-gray-400 mt-2">Published on {release?.publishedAt}</p>}
                </div>
              </div>

              {loading ? (
                <div className="flex-1 flex items-center justify-center text-gray-500">Fetching latest release info...</div>
              ) : (
                <div className="flex-1 flex flex-col">
                  {/* Download Options */}
                  <div className="space-y-4 mb-8">
                    {release?.assets?.map((asset, idx) => {
                      const isRecommended = (os === 'Windows' && asset.name.includes('Windows')) || 
                                            (os === 'macOS' && asset.name.includes('macOS')) || 
                                            (os === 'Linux' && asset.name.includes('Linux'));
                      return (
                        <div key={idx} className={`flex items-center justify-between p-4 rounded-xl border transition-colors ${isRecommended ? 'bg-primary-500/10 border-primary-500/30' : 'bg-white/5 border-white/10 hover:border-white/20'}`}>
                          <div>
                            <div className="font-medium text-white flex items-center space-x-2">
                              <span>{asset.name}</span>
                              {isRecommended && <span className="text-xs bg-accent-500/20 text-accent-400 px-2 py-0.5 rounded flex items-center"><CheckCircle2 className="w-3 h-3 mr-1" /> Recommended</span>}
                            </div>
                            <div className="text-xs text-gray-500 mt-1">{asset.size}</div>
                          </div>
                          <a 
                            href={asset.downloadUrl === '#' ? undefined : asset.downloadUrl} 
                            download={asset.downloadUrl !== '#' ? asset.name : undefined}
                            onClick={(e) => { 
                              if(asset.downloadUrl==='#') { 
                                e.preventDefault(); 
                                handleDownload(asset.name, true); 
                              } else { 
                                handleDownload(asset.name, false); 
                              } 
                            }} 
                            className={isRecommended ? "btn-primary py-2 px-4 text-sm flex items-center space-x-2" : "btn-outline py-2 px-4 text-sm flex items-center space-x-2"}
                          >
                            <Download className="w-4 h-4" />
                            <span>Download</span>
                          </a>
                        </div>
                      );
                    })}
                  </div>

                  {/* Release Notes Preview */}
                  <div className="mt-auto bg-dark-900/50 rounded-xl p-6 border border-white/5">
                    <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Release Notes ({release?.version})</h4>
                    <div className="text-sm text-gray-400 space-y-2 whitespace-pre-line leading-relaxed">
                      {release?.body?.substring(0, 250)}...
                    </div>
                    <a href={release?.url || "#"} target="_blank" rel="noreferrer" className="text-primary-400 text-sm font-medium mt-4 inline-flex items-center hover:text-primary-300 transition-colors">
                      View full changelog on GitHub <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Installation;
