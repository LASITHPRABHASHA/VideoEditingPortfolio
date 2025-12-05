'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { IconType } from 'react-icons';
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

// Define proper types
interface IconBrand {
  name: string;
  Icon: IconType;
  color: string;
  type: 'icon';
}

interface ImageBrand {
  name: string;
  imageSrc: string;
  type: 'image';
}

type Brand = IconBrand | ImageBrand;

const Brands = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const brands: Brand[] = [
    { name: 'Fiverr', Icon: SiFiverr, color: '#1DBF73', type: 'icon' },
    { name: 'Upwork', Icon: SiUpwork, color: '#6FDA44', type: 'icon' },
    { name: 'Udemy', Icon: SiUdemy, color: '#EC5252', type: 'icon' },
    { name: 'Coursera', Icon: SiCoursera, color: '#2A73CC', type: 'icon' },
    { name: 'YouTube', Icon: SiYoutube, color: '#FF0000', type: 'icon' },
    // Add your local brand images here
    { name: 'Michelle', imageSrc: '/brands/brand1.png', type: 'image' },
    { name: 'Dave', imageSrc: '/brands/brand2.png', type: 'image' },
    { name: 'NatKitney', imageSrc: '/brands/brand3.png', type: 'image' },
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
       

        {/* Subtle Marquee (optional elegance) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 1 }}
          className="mt-24 overflow-hidden"
        >
          <div className="flex animate-marquee whitespace-nowrap">
            {[...brands, ...brands].map((brand, i) => {
              return (
                <div key={i} className="mx-12 flex items-center">
                  {brand.type === 'icon' ? (
                    <brand.Icon size={60} color={brand.color} className="opacity-90" />
                  ) : (
                    <div className="relative w-20 h-25 grayscale opacity-70">
                      <Image
                        src={brand.imageSrc}
                        alt={`${brand.name} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
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