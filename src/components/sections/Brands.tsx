'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  SiFiverr,
  SiUpwork,
  SiUdemy,
  SiCoursera,
  SiAdobe,
  SiYoutube,
  SiNetflix,
  SiVimeo,
} from 'react-icons/si';

const Brands = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const brands = [
    { name: 'Fiverr',      Icon: SiFiverr,      color: '#1DBF73' },
    { name: 'Upwork',      Icon: SiUpwork,      color: '#6FDA44' },
    { name: 'Udemy',       Icon: SiUdemy,       color: '#EC5252' },
    { name: 'Coursera',    Icon: SiCoursera,    color: '#2A73CC' },
    { name: 'Adobe',       Icon: SiAdobe,       color: '#FF0000' },
    { name: 'YouTube',     Icon: SiYoutube,     color: '#FF0000' },
    { name: 'Netflix',     Icon: SiNetflix,     color: '#E50914' },
    { name: 'Vimeo',       Icon: SiVimeo,       color: '#1AB7EA' },
  ];

  return (
    <section id="brands" className="relative overflow-hidden">
      {/* Background ambiance */}
      <div className="absolute inset-0 " />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-20"
        >
         
        </motion.div>
       
          {brands.map((brand, index) => {
            const Icon = brand.Icon;

            return (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 60 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                whileHover={{ y: -20, scale: 1.1 }}
                className="group relative"
              >
              </motion.div>
            );
          })}

        {/* Subtle Marquee (optional elegance) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 1 }}
          className="mt-24 overflow-hidden"
        >
          <div className="flex animate-marquee whitespace-nowrap">
            {[...brands, ...brands].map((brand, i) => {
              const Icon = brand.Icon;
              return (
                <div key={i} className="mx-12 flex items-center">
                  <Icon size={60} color={brand.color} className="opacity-90" />
                </div>
              );
            })}
          </div>
        </motion.div>

      
      </div>

      {/* Custom marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Brands;