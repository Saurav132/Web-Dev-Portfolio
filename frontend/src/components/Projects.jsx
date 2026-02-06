import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import { mockData } from '../mock';
import { Button } from './ui/button';

const Projects = () => {
  const { projects } = mockData;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-[#0a0a0f] via-[#111118] to-[#0a0a0f] relative overflow-hidden">
      {/* Animated background */}
      <motion.div 
        className="absolute top-0 left-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
        animate={{
          x: [-50, 50, -50],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 15,
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
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            animate={inView ? {
              scale: [1, 1.02, 1],
            } : {}}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Featured Projects
          </motion.h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Recent websites I've built for local businesses
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ 
                delay: index * 0.2, 
                duration: 0.8,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ 
                y: -15,
                rotateY: 5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Project Image with parallax effect */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent opacity-60"
                  whileHover={{ opacity: 0.3 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Floating badge */}
                <motion.div
                  className="absolute top-4 right-4 px-3 py-1 bg-cyan-500/80 backdrop-blur-sm rounded-full text-xs font-bold text-white"
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Featured
                </motion.div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <motion.h3 
                  className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300"
                  whileHover={{
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 0.4,
                    repeat: Infinity,
                  }}
                >
                  {project.title}
                </motion.h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-emerald-400 mb-2">Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: index * 0.2 + i * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300 cursor-default"
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2 + i * 0.1 }}
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: [0, -5, 5, 0],
                        }}
                        className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                {/* Action Buttons */}
<div className="flex gap-3 mt-6">
  <Button
    variant="outline"
    size="sm"
    onClick={() => window.open(project.liveLink, "_blank")}
    className="flex-1 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 group/btn"
  >
    <motion.div
      whileHover={{ rotate: 45 }}
      transition={{ duration: 0.3 }}
    >
      <ExternalLink className="mr-2 h-4 w-4" />
    </motion.div>
    Live Demo
  </Button>

  <Button
    variant="outline"
    size="sm"
    onClick={() => window.open(project.codeLink, "_blank")}
    className="flex-1 border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10"
  >
    <motion.div
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.2 }}
    >
      <Github className="mr-2 h-4 w-4" />
    </motion.div>
    Code
  </Button>
</div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
