import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Settings, DollarSign, Zap, Smartphone, Search, MessageCircle } from 'lucide-react';
import { mockData } from '../mock';

const WhyChooseMe = () => {
  const { whyChooseMe } = mockData;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const iconMap = {
    Settings,
    DollarSign,
    Zap,
    Smartphone,
    Search,
    MessageCircle
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="why-choose-me" className="py-20 bg-gradient-to-br from-[#0f0f1a] to-[#0a0a0f] relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose Me
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Benefits that make working with me different
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {whyChooseMe.map((benefit, index) => {
            const Icon = iconMap[benefit.icon];
            return (
              <motion.div
                key={index}
                variants={item}
                className={`group relative backdrop-blur-sm border rounded-2xl p-8 hover:scale-105 transition-all duration-300 ${
                  benefit.highlight
                    ? 'bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 border-cyan-500/50'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-cyan-500/50'
                }`}
              >
                {benefit.highlight && (
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 rounded-2xl"
                  />
                )}
                
                <div className="relative z-10">
                  {benefit.highlight && (
                    <div className="absolute -top-4 -right-4 px-3 py-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full text-xs font-bold text-white shadow-lg">
                      Featured
                    </div>
                  )}
                  
                  <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20">
                    <Icon className={`h-8 w-8 ${
                      benefit.highlight ? 'text-cyan-300' : 'text-cyan-400'
                    }`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
