'use client';

import { motion } from 'framer-motion';
import { Play, Award, Users, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-screen bg-dark" />;
  }

  const navItems = [
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#about', label: 'About' },
  ];

  const stats = [
    { icon: Award, value: '500+', label: 'Projects Completed' },
    { icon: Users, value: '200+', label: 'Happy Clients' },
    { icon: Zap, value: '5+', label: 'Years Experience' },
  ];

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover overla"
        >
          <source src="/videos/hero.webm" type="video/webm" />
        </video>
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#19183B]/30 via-[#708993]/20 to-[#A1C2BD]/40" />
        {/* Alternative: Simple dark overlay */}
        {/* <div className="absolute inset-0 bg-[#19183B]/70" /> */}
      </div>

      {/* 3D Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-accent-purple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent-blue/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Professional Video Editor
            <span className="bg-gradient-to-r from-primary to-accent-gold bg-clip-text text-transparent">
             
            </span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-100 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Bringing your vision to life with cinematic storytelling and premium post-production. 
            Level 2 Fiverr seller with 5+ years of experience creating stunning visual content.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >

            <motion.a
              href="#portfolio"
             className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark rounded-full text-white font-semibold text-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center space-x-3 inline-flex"
              whileHover={{ scale: 1.05, borderColor: 'rgba(255, 255, 255, 0.6)'  }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-6 h-6 fill-current" />
              <span>View My Work</span>
            </motion.a>

            <motion.a
              href="#about"
              className="px-8 py-4 border-2 border-white/30 rounded-full text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05, borderColor: 'rgba(255, 255, 255, 0.6)' }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Stats */}
          {/* <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass rounded-2xl p-6 text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + index * 0.1, type: 'spring', stiffness: 300 }}
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div> */}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        {/* <motion.div
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div> */}
      </motion.div>
    </section>
  );
};

export default Hero;
