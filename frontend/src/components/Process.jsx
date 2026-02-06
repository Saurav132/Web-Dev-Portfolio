import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { mockData } from '../mock';

const Process = () => {
  const { process } = mockData;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-[#0f0f1a] to-[#0a0a0f] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How I Build Your Website
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A simple, transparent process from start to finish
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {process.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative mb-12 last:mb-0"
            >
              <div className="flex items-start gap-6">
                {/* Step Number */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.3, type: 'spring' }}
                  className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-cyan-500/30"
                >
                  {step.step}
                </motion.div>

                {/* Content */}
                <div className="flex-1 backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connecting Line */}
              {index < process.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={inView ? { scaleY: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.5, duration: 0.4 }}
                  className="absolute left-8 top-20 w-0.5 h-12 bg-gradient-to-b from-cyan-500 to-emerald-500 origin-top"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
