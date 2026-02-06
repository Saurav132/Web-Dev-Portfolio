import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check } from 'lucide-react';
import { mockData } from '../mock';
import { Button } from './ui/button';

const Pricing = () => {
  const { pricing } = mockData;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-[#0a0a0f] via-[#111118] to-[#0a0a0f] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the package that fits your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricing.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                delay: index * 0.2, 
                duration: 0.8,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                y: -15,
                scale: 1.05,
                rotateY: plan.popular ? 0 : 5,
              }}
              className={`relative backdrop-blur-sm border rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 border-cyan-500/50 scale-105 shadow-2xl shadow-cyan-500/20'
                  : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-cyan-500/50'
              } transition-all duration-300`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {plan.popular && (
                <>
                  {/* Animated glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 rounded-2xl blur-xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  
                  {/* Popular badge with animation */}
                  <motion.div 
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full text-sm font-bold text-white shadow-lg"
                    animate={{
                      y: [0, -5, 0],
                      boxShadow: [
                        '0 4px 20px rgba(6, 182, 212, 0.3)',
                        '0 8px 30px rgba(16, 185, 129, 0.5)',
                        '0 4px 20px rgba(6, 182, 212, 0.3)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    Most Popular
                  </motion.div>
                </>
              )}

              <div className="text-center mb-8 relative z-10">
                <motion.h3 
                  className="text-2xl font-bold text-white mb-2"
                  whileHover={{
                    scale: 1.05,
                  }}
                >
                  {plan.name}
                </motion.h3>
                <p className="text-gray-400 text-sm mb-4">
                  {plan.description}
                </p>
                <motion.div 
                  className="mb-6"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <span className="text-5xl font-bold text-white">
                    {plan.price}
                  </span>
                </motion.div>
              </div>

              <ul className="space-y-4 mb-8 relative z-10">
                {plan.features.map((feature, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.2 + i * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5"
                      whileHover={{
                        scale: 1.2,
                        rotate: 360,
                        backgroundColor: 'rgba(16, 185, 129, 0.4)',
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <Check className="h-4 w-4 text-emerald-400" />
                    </motion.div>
                    <span className="text-gray-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <Button
                onClick={scrollToContact}
                className={`w-full py-6 text-lg font-semibold rounded-lg transition-all duration-300 relative z-10 overflow-hidden group ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white shadow-lg shadow-cyan-500/30'
                    : 'bg-white/5 border border-white/20 text-white hover:bg-white/10 hover:border-cyan-500/50'
                }`}
              >
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ['-200%', '200%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                />
                <span className="relative z-10">{plan.buttonText}</span>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
