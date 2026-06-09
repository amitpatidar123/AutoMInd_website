import React from 'react';
import { Check, X, Shield, CloudOff, Lock } from 'lucide-react';

const Comparison = () => {
  return (
    <section className="py-24 relative bg-dark-800/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Why AutoMind?</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Unlike cloud-based assistants, AutoMind puts you in complete control of your AI infrastructure.
          </p>
        </div>

        <div className="glass-card rounded-3xl overflow-hidden border-white/10">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-6 bg-dark-900/50 w-1/4"></th>
                  <th className="p-6 bg-primary-500/10 border-b-2 border-primary-500 w-1/4">
                    <div className="text-xl font-bold text-white mb-1">AutoMind</div>
                    <div className="text-sm text-primary-400 font-normal">Local & Private</div>
                  </th>
                  <th className="p-6 bg-dark-900/50 w-1/4">
                    <div className="text-xl font-bold text-gray-300 mb-1">ChatGPT</div>
                    <div className="text-sm text-gray-500 font-normal">Cloud App</div>
                  </th>
                  <th className="p-6 bg-dark-900/50 w-1/4">
                    <div className="text-xl font-bold text-gray-300 mb-1">Claude Desktop</div>
                    <div className="text-sm text-gray-500 font-normal">Cloud App</div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { feature: 'Data Privacy', automind: true, chatgpt: false, claude: false, label: <span className="flex items-center space-x-2"><Lock className="w-4 h-4 text-primary-400" /><span>100% Private (Local)</span></span> },
                  { feature: 'Offline Support', automind: true, chatgpt: false, claude: false, label: <span className="flex items-center space-x-2"><CloudOff className="w-4 h-4 text-primary-400" /><span>Works without internet</span></span> },
                  { feature: 'Local File Access', automind: true, chatgpt: 'Upload Required', claude: 'Upload Required', label: 'Direct local access' },
                  { feature: 'Multi-Agent Workflows', automind: true, chatgpt: false, claude: false, label: 'Custom autonomous agents' },
                  { feature: 'Cost', automind: 'Free / Open Source', chatgpt: '$20/month', claude: '$20/month', label: 'Free (runs locally)' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-6 text-gray-300 font-medium">{row.feature}</td>
                    <td className="p-6 bg-primary-500/[0.02]">
                      {row.automind === true ? (
                        <div className="flex items-center space-x-2 text-primary-400">
                          <Check className="w-5 h-5" />
                          <span className="text-sm font-medium">{typeof row.label === 'string' ? row.label : row.label}</span>
                        </div>
                      ) : (
                        <span className="text-primary-400 font-medium">{row.automind}</span>
                      )}
                    </td>
                    <td className="p-6">
                      {row.chatgpt === false ? <X className="w-5 h-5 text-gray-600" /> : <span className="text-gray-500">{row.chatgpt}</span>}
                    </td>
                    <td className="p-6">
                      {row.claude === false ? <X className="w-5 h-5 text-gray-600" /> : <span className="text-gray-500">{row.claude}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
