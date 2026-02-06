import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { mockData } from '../mock';

const About = () => {
  const { about } = mockData;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-[#0f0f1a] to-[#0a0a0f] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-8 text-center"
          >
            {about.title}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl"
          >
            <p className="text-xl text-gray-300 leading-relaxed">
              {about.description}
            </p>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-12 flex justify-center gap-4"
          >
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-transparent rounded-full" />
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-transparent rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
