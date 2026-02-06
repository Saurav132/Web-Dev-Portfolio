import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { mockData } from '../mock';

const Skills = () => {
  const { skills } = mockData;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-[#0a0a0f] via-[#111118] to-[#0a0a0f] relative overflow-hidden">
      {/* Floating particles */}
      <motion.div 
        className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technologies I Use
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Modern tools and frameworks to build fast, reliable websites
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ 
                scale: 1.15, 
                y: -8,
                rotate: [0, -5, 5, 0],
                boxShadow: '0 10px 30px rgba(6, 182, 212, 0.3)',
              }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                y: {
                  duration: 2 + (index % 3),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.1,
                },
              }}
              className="px-6 py-3 backdrop-blur-sm bg-white/5 border border-white/10 rounded-full text-white font-medium hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-emerald-500/20 hover:border-cyan-500/50 transition-all duration-300 cursor-default"
            >
              <motion.span
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundImage: 'linear-gradient(90deg, #fff, #06b6d4, #10b981, #fff)',
                  backgroundSize: '200% auto',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                {skill}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated connecting lines */}
        <motion.svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.1 } : {}}
        >
          {skills.map((_, i) => (
            i < skills.length - 1 && (
              <motion.line
                key={i}
                x1={`${(i * 100) / skills.length}%`}
                y1="50%"
                x2={`${((i + 1) * 100) / skills.length}%`}
                y2="50%"
                stroke="url(#gradient)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: 2, delay: i * 0.1 }}
              />
            )
          ))}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>
    </section>
  );
};

export default Skills;
