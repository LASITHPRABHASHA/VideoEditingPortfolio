'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import Image from 'next/image';

interface CustomerReview {
  id: number;
  quote: string;
  description: string;
  author: string;
  role: string;
  company: string;
  country: string;
  avatar: string;
  heroImage: string;
  projectType: string;
  rating: number;
  videoUrl?: string;
}

const Reviews = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews: CustomerReview[] = [

     {
      id: 1,
      quote: "Professional and brought our brand story to life",
      description: "The color grading and cinematic approach brought our brand story to life beautifully. Amazing work on our social media content! The videos are perfectly optimized for each platform.",
      author: "Katie",
      role: "Content Creator and Lecturer",
      company: "Convo",
      country: "🇺🇸",
      avatar: "/Customers/customer6.png",
      heroImage: "/Customers/customer6.png",
      projectType: "Brand Documentary",
      rating: 5,
      videoUrl: "/videos/Meditation.mp4"
    },

    {
      id: 2,
      quote: "Absolutely phenomenal work! Exceeded all expectations",
      description: "The video quality was outstanding and the turnaround time was impressive. Our engagement rates increased by 300% after using the videos. Professional, creative, and delivered exactly what we envisioned.",
      author: "Hannah",
      role: "Real Eastate Agent",
      company: "",
      country: "🇺🇸",
      avatar: "/Customers/customer4.png",
      heroImage: "/Customers/customer4.png",
      projectType: "Product Launch Campaign",
      rating: 5,
      videoUrl: "/videos/Film Reel.mp4"
    },
    {
      id: 3,
      quote: "Game-changer for my YouTube channel",
      description: "Working with this editor transformed my content completely. The motion graphics and transitions are absolutely stunning. The attention to detail is incredible and every frame was carefully crafted.",
      author: "Mike",
      role: "Content Creator",
      company: "",
      country: "🇨🇦",
      avatar: "/Customers/customer4.png",
      heroImage: "/Customers/customer2.png",
      projectType: "YouTube Series",
      rating: 5,
      videoUrl: "/videos/Money Lesson.mp4"
    },
    {
      id: 4,
      quote: "Professional and brought our brand story to life",
      description: "The color grading and cinematic approach brought our brand story to life beautifully. Amazing work on our social media content! The videos are perfectly optimized for each platform.",
      author: "Emily Rodriguez",
      role: "Brand Manager",
      company: "Lifestyle Co.",
      country: "🇪🇸",
      avatar: "/Customers/customer3.png",
      heroImage: "/Customers/customer3.png",
      projectType: "Brand Documentary",
      rating: 5,
      videoUrl: "/videos/Meditation.mp4"
    },
    
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === reviews.length - 1 ? 0 : prev + 1
    );
  };

  const currentReview = reviews[currentIndex];

  const stats = [
    { value: '98%', label: 'Client Satisfaction' },
    { value: '4.9/5', label: 'Average Rating' },
    { value: '200+', label: 'Happy Clients' },
    { value: '24h', label: 'Response Time' },
  ];

  return (
    <section id="reviews" className="py-20  ">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-accent mb-4 font-medium tracking-wide uppercase">
            Level 2 Fiverr Seller • 200+ Projects Completed
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            What my clients
            <br />
            <span className="text-primary">say about me</span>
          </h2>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="text-center glass p-6 rounded-2xl"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-text-secondary text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Desktop Layout - Single Row with Overlapping Sections */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hidden lg:block relative"
        >
          <div className="flex items-center justify-center min-h-[600px] pl-50">
            {/* Hero Image - Full Width with Video Overlay */}
            <div className="relative w-[900px] h-[500px] mx-auto group">
              <Image
                src={currentReview.heroImage}
                alt={`${currentReview.projectType} preview`}
                fill
                className="object-cover rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Video Play Overlay */}
              {/* {currentReview.videoUrl && (
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center rounded-2xl">
                  <motion.button
                    className="w-20 h-20 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Play className="w-10 h-10 text-white fill-current ml-1" />
                  </motion.button>
                </div>
              )} */}

              {/* Project Type Badge */}
              {/* <div className="absolute top-6 left-6 px-4 py-2 bg-primary/90 backdrop-blur-sm rounded-full text-white text-sm font-medium shadow-lg">
                {currentReview.projectType}
              </div> */}
            </div>
            
            {/* Quote Section - Left Side Overlapping */}
            <div className="absolute left-20 mt-50 top-1/2 transform -translate-y-1/2 z-10 bg-surface/95 backdrop-blur-lg border border-border p-12 rounded-2xl shadow-2xl w-[500px] h-[400px] flex flex-col justify-center">
              <div className="space-y-6">
                {/* Quote Icon */}
                {/* <Quote className="text-primary w-10 h-10 opacity-30" /> */}
                
                {/* Stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(currentReview.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 text-accent fill-current" />
                  ))}
                </div>

                <blockquote className="text-2xl font-bold text-foreground leading-tight">
                  "{currentReview.quote}"
                </blockquote>
                
                <p className="text-text-secondary text-sm leading-relaxed">
                  {currentReview.description}
                </p>

                {/* Customer Info */}
                <div className="flex items-center space-x-4 pt-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={currentReview.avatar}
                      alt={currentReview.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-base">
                      {currentReview.author}
                    </p>
                    <p className="text-text-secondary text-sm">{currentReview.role}</p>
                    <div className="flex items-center space-x-2">
                      <span className="text-base">{currentReview.country}</span>
                      <span className="text-primary text-sm">{currentReview.company}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation - Top Left */}
          <div className="absolute top-50 left-20 flex space-x-4 ">
            <motion.button
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full bg-surface/80 backdrop-blur-sm border border-border hover:bg-primary/20 transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </motion.button>
            <motion.button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-primary hover:bg-primary-dark border border-border hover:bg-primary/20  transition-all duration-300 flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </motion.button>
          </div>

          {/* Desktop Indicators - Bottom Center */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {reviews.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary scale-125' : 'bg-border hover:bg-primary/50'
                }`}
                whileHover={{ scale: 1.2 }}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Mobile & Tablet Layout - Two Rows Stacked */}
        <div className="lg:hidden">
          {/* Row 1: Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mb-8 group"
          >
            <Image
              src={currentReview.heroImage}
              alt={`${currentReview.projectType} preview`}
              fill
              className="object-cover"
            />
            
            {/* Video Play Overlay */}
            {currentReview.videoUrl && (
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <motion.button
                  className="w-16 h-16 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Play className="w-8 h-8 text-white fill-current ml-1" />
                </motion.button>
              </div>
            )}

            {/* Project Type Badge */}
            <div className="absolute top-4 left-4 px-3 py-1 bg-primary/90 backdrop-blur-sm rounded-full text-white text-xs font-medium">
              {currentReview.projectType}
            </div>
          </motion.div>

          {/* Row 2: Quote Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-surface/80 backdrop-blur-lg border border-border p-8 rounded-2xl shadow-2xl"
          >
            <div className="space-y-6">
              {/* Quote Icon */}
              <Quote className="text-primary w-8 h-8 opacity-30" />
              
              {/* Stars */}
              <div className="flex items-center space-x-1">
                {[...Array(currentReview.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-current" />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl font-bold text-foreground leading-tight">
                "{currentReview.quote}"
              </blockquote>
              
              <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                {currentReview.description}
              </p>

              {/* Customer Info */}
              <div className="flex items-center space-x-4 pt-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={currentReview.avatar}
                    alt={currentReview.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {currentReview.author}
                  </p>
                  <p className="text-text-secondary text-sm">{currentReview.role}</p>
                  <div className="flex items-center space-x-2">
                    <span className="text-base">{currentReview.country}</span>
                    <span className="text-primary text-sm">{currentReview.company}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mobile/Tablet Navigation */}
          <div className="flex justify-center space-x-4 mt-8">
            <motion.button
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full bg-surface/80 backdrop-blur-sm border border-border hover:bg-primary/20 transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </motion.button>
            <motion.button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-primary hover:bg-primary-dark text-white transition-all duration-300 flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Mobile/Tablet Indicators */}
          <div className="flex justify-center space-x-3 mt-6">
            {reviews.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary scale-125' : 'bg-border hover:bg-primary/50'
                }`}
                whileHover={{ scale: 1.2 }}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-text-secondary mt-30 mb-6">
            Ready to join my satisfied clients?
          </p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark rounded-full text-white font-semibold text-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;