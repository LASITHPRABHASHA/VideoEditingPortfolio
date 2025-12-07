'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiAdobephotoshop,
  SiAdobeaudition,
} from 'react-icons/si';
import Image from 'next/image';

const Software = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const software = [
    {
      name: 'Adobe Premiere Pro',
      category: 'Video Editing',
      description: 'Professional video editing and post-production',
      src:"/softwares/premiere-pro.png",
      icon: SiAdobepremierepro,
      color: '#6E41FF',
    },
    {
      name: 'Adobe After Effects',
      category: 'Motion Graphics',
      description: 'Advanced motion graphics and visual effects',
      src:"/softwares/after-effects.png", 
      icon: SiAdobeaftereffects,
      color: '#5C3BFF',
    },
    {
      name: 'Adobe Photoshop',
      category: 'Graphics',
      description: 'Image editing and graphic design',
      src:"/softwares/photoshop.png",
      icon: SiAdobephotoshop,
      color: '#31A8FF',
    },
    {
      name: 'Adobe Audition',
      category: 'Audio',
      description: 'Professional audio editing and mixing',
      src:"/softwares/adobe-audition.png",
      icon: SiAdobeaudition,
      color: '#00A79D',
    },
  ];

  return (
    <section id="software" className="py-20 bg-dark-lighter">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-[#19183B] mb-6">
            Software <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Mastering industry-leading tools to deliver professional results. 
            My technical proficiency ensures efficient workflows and stunning outcomes.
          </p>
        </motion.div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {software.map((tool, index) => {
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-dark-card rounded-2xl p-4 md:p-8 hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent-purple/5 transition-all duration-300 border border-transparent hover:border-primary/20"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Large Centered Image */}
                  <motion.div
                    className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4 md:mb-6 bg-gradient-to-br from-primary/20 to-accent-purple/20 rounded-2xl flex items-center justify-center overflow-hidden"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="w-12 h-12 md:w-20 md:h-20 relative">
                      <Image
                        src={tool.src}
                        alt={tool.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </motion.div>

                  {/* Title & Category */}
                  <h3 className="text-sm md:text-xl font-bold text-[#19183B] mb-1 md:mb-2 group-hover:text-primary transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-primary text-xs md:text-sm font-medium">
                    {tool.category}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Software;