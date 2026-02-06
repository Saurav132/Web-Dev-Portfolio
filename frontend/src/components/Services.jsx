import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Coffee, ShoppingBag, Layout, FileText, RefreshCw } from 'lucide-react';
import { mockData } from '../mock';

const Services = () => {
  const { services } = mockData;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const iconMap = {
    Briefcase,
    Coffee,
    ShoppingBag,
    Layout,
    FileText,
    RefreshCw
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
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-[#0a0a0f] via-[#111118] to-[#0a0a0f] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Services I Offer
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From simple business websites to complex e-commerce solutions
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                variants={item}
                whileHover={{ 
                  y: -8,
                  rotateX: 5,
                  rotateY: 5,
                  transition: { duration: 0.3 } 
                }}
                className="group relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-emerald-500/0 group-hover:from-cyan-500/10 group-hover:to-emerald-500/10 rounded-2xl transition-all duration-300" />
                
                <div className="relative z-10">
                  <div className="mb-6 inline-flex p-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 group-hover:from-cyan-500/30 group-hover:to-emerald-500/30 transition-all duration-300">
                    <Icon className="h-8 w-8 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
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

export default Services;
