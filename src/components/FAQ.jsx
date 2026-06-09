import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'Do I need an internet connection to use AutoMind?',
    answer: 'No. Once you have downloaded AutoMind and the Ollama models you wish to use, everything runs 100% locally on your machine without requiring an internet connection.'
  },
  {
    question: 'What models does AutoMind support?',
    answer: 'AutoMind seamlessly integrates with any model supported by Ollama, including Llama 3, Mistral, Phi-3, Gemma, and many others.'
  },
  {
    question: 'Is AutoMind really private?',
    answer: 'Yes. Because all computation and data processing happens on your local hardware, your data never leaves your computer. We do not track, collect, or store your prompts or files.'
  },
  {
    question: 'Is AutoMind available for Mac or Linux?',
    answer: 'Currently, AutoMind is optimized for Windows 10 and 11. Support for macOS and Linux is on our roadmap for future releases.'
  },
  {
    question: 'How do multi-agent workflows work?',
    answer: 'You can create specialized agents with distinct instructions and tool access. A central orchestrator agent breaks down your complex tasks and delegates sub-tasks to these specialized agents, gathering their results to give you a final output.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-24 relative bg-dark-800/20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="glass-card rounded-2xl overflow-hidden border-white/5 transition-all duration-300"
            >
              <button
                id={`faq-button-${index}`}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none focus-visible:bg-white/5"
              >
                <span className="font-medium text-lg text-white">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-button-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-4 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
