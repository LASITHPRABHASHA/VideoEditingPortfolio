'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Lightbulb, Target, Heart } from 'lucide-react';
import Image from 'next/image';
import { SiFiverr, SiUpwork } from 'react-icons/si';
import Brands from './Brands';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    'Advanced Video Editing',
    'Motion Graphics Design',
    'Color Grading & Correction',
    'Audio Post-Production',
    'Visual Effects (VFX)',
    'Social Media Content',
    'Commercial Videos',
    'Documentary Editing'
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Creative Excellence',
      description: 'Every project is crafted with artistic vision and technical precision to exceed expectations.',
      colorClass: 'text-yellow-400'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Focused on delivering results that align with your brand objectives and audience engagement.',
      colorClass: 'text-indigo-400'
    },
    {
      icon: Heart,
      title: 'Client-Centered',
      description: 'Your success is my priority. I work collaboratively to bring your vision to life.',
      colorClass: 'text-pink-500'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate video editor with over 5 years of experience creating compelling visual stories 
            that captivate audiences and drive results.
          </p>

          {/* Profiles: Fiverr (Level 2) + Upwork (new) */}
          <motion.div
            className="mt-5 flex items-center justify-center gap-20"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.06, y: -5 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.12 }}
            >
              <a
                href="https://www.fiverr.com/lasithprabasha"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fiverr profile (opens in new tab)"
                className="inline-flex"
              >
                <SiFiverr className="w-20 h-20 text-green-400" aria-hidden />
              </a>
              <div className="text-left">
                <div className="text-sm text-gray-300">Fiverr</div>
                <a
                  href="https://www.fiverr.com/lasithprabasha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold"
                  aria-label="Fiverr profile (opens in new tab)"
                >
                  Level 2 Seller
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.06, y: -5 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.22 }}
            >
              <a
                href="https://www.upwork.com/freelancers/lasithp4"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Upwork profile (opens in new tab)"
                className="inline-flex"
              >
                <SiUpwork className="w-16 h-16 text-emerald-400" aria-hidden />
              </a>
              <div className="text-left">
                <div className="text-sm text-gray-300">Upwork</div>
                <a
                  href="https://www.upwork.com/freelancers/lasithp4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold"
                  aria-label="Upwork profile (opens in new tab)"
                >
                  Rising Talent
                </a> 
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Side - Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="w-full h-130 bg-gradient-to-br from-primary/20 to-accent-purple/20 rounded-3xl overflow-hidden">
                <Image
                  src="/Gemini_Generated_Image_eyx4feeyx4feeyx4 (1).png"
                  alt="Professional Video Editor"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              
              {/* Floating elements */}
              
              <div className="absolute -bottom-4 -left-4 glass rounded-2xl p-4 animate-float" style={{ animationDelay: '2s' }}>
                <div className="text-primary font-bold text-xl">300+</div>
                <div className="text-white text-sm">Projects</div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-3"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-4 mt-0">
                Crafting Visual Excellence Since 2019
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                As a Level 2 Fiverr seller and passionate video editor, I specialize in transforming 
                raw footage into compelling visual narratives. My expertise spans across various 
                industries, from corporate content to creative storytelling.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                I believe in the power of visual storytelling to connect, inspire, and drive action. 
                Every frame is carefully crafted to serve your message and engage your audience.
              </p>
            </div>

            {/* Skills Grid */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Core Expertise</h4>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        {/* Brand marquee inserted above Values */}
        <Brands />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >       
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            My <span className="text-primary">Values</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                className="glass rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <value.icon className={`w-12 h-12 mx-auto mb-4 ${value.colorClass}`} aria-hidden />
                <h4 className="text-xl font-semibold text-white mb-3">{value.title}</h4>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
