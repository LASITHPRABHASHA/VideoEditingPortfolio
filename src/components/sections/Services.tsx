'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Video, Palette, Volume2, Sparkles, Monitor, Camera } from 'lucide-react';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video editing with seamless cuts, transitions, and storytelling.',
      features: ['Multi-cam editing', 'Timeline optimization', 'Advanced cuts', 'Workflow efficiency'],
      price: 'Starting at $50',
      colorClass: 'text-[#6E41FF]' // Premiere-like purple
    },
    {
      icon: Palette,
      title: 'Color Grading',
      description: 'Cinematic color correction and grading for professional-quality visuals.',
      features: ['LUT application', 'Color matching', 'Mood enhancement', 'Style consistency'],
      price: 'Starting at $75',
      colorClass: 'text-[#31A8FF]' // Photoshop-like blue
    },
    {
      icon: Volume2,
      title: 'Audio Post',
      description: 'Crystal-clear audio editing, mixing, and sound design services.',
      features: ['Noise reduction', 'Audio sync', 'Music mixing', 'Sound effects'],
      price: 'Starting at $40',
      colorClass: 'text-[#00A79D]' // Audition-like teal
    },
    {
      icon: Sparkles,
      title: 'Motion Graphics',
      description: 'Eye-catching animations and motion design for dynamic content.',
      features: ['2D animations', 'Text animations', 'Logo reveals', 'Infographics'],
      price: 'Starting at $100',
      colorClass: 'text-[#5C3BFF]' // After Effects-like indigo
    },
    {
      icon: Monitor,
      title: 'Social Media Content',
      description: 'Optimized content for all social platforms with engaging formats.',
      features: ['Platform optimization', 'Trending formats', 'Quick turnaround', 'Multiple formats'],
      price: 'Starting at $30',
      colorClass: 'text-[#FF7E29]' // Accent orange
    },
    {
      icon: Camera,
      title: 'Documentary Editing',
      description: 'Long-form storytelling with narrative structure and emotional impact.',
      features: ['Story structure', 'Interview editing', 'B-roll integration', 'Pacing expertise'],
      price: 'Starting at $200',
      colorClass: 'text-[#FF6A00]' // Cinema/3D orange
    },
  ];

  return (
    <section id="services" className="py-20 bg-dark-lighter mx-auto">
      <div className="container mx-auto px-6 w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive video production services tailored to your needs. From basic editing 
            to complex motion graphics, I've got you covered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-dark-card rounded-2xl p-8 hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent-purple/5 transition-all duration-300 border border-transparent hover:border-primary/20"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
              
              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-primary to-accent-purple rounded-2xl flex items-center justify-center mb-6 mx-auto"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <service.icon className={`w-30 h-30 ${service.colorClass}`} aria-hidden />
                </motion.div>

                <h3 className="text-2xl text-center font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                {/* <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.1 + idx * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div> */}

                {/* Price */}
                {/* <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <span className="text-primary font-bold text-lg">{service.price}</span>
                  <motion.button
                    className="px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Quote
                  </motion.button>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-12">
            My <span className="text-primary">Process</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Brief & Planning', desc: 'Understanding your vision and goals' },
              { step: '02', title: 'Asset Review', desc: 'Analyzing and organizing your footage' },
              { step: '03', title: 'Production', desc: 'Crafting your story with precision' },
              { step: '04', title: 'Delivery', desc: 'Final review and project delivery' }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 + index * 0.2 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-primary/20 mb-4">{item.step}</div>
                <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
                
                {/* Connector */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center mt-16"
        >
          <div className="glass rounded-3xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-400 mb-6">
              Get a custom quote based on your specific needs and timeline.
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark rounded-full text-white font-semibold text-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Custom Quote
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
