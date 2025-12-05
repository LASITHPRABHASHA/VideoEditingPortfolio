'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';
import { FaThLarge, FaFilm, FaGraduationCap, FaYoutube, FaBuilding } from 'react-icons/fa';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
  description: string;
  duration: string;
  views: string;
}

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState<Project | null>(null);

  const filters = [
    { 
      id: 'all', 
      label: 'All Projects',
      icon: FaThLarge,
      color: 'text-cyan-400'
    },
    { 
      id: 'reels', 
      label: 'Show Reels',
      icon: FaFilm,
      color: 'text-purple-400'
    },
    { 
      id: 'courses', 
      label: 'Online Courses',
      icon: FaGraduationCap,
      color: 'text-emerald-400'
    },
    { 
      id: 'commercial', 
      label: 'YouTube',
      icon: FaYoutube,
      color: 'text-red-500'
    },
    // { 
    //   id: 'corporate', 
    //   label: 'Corporate',
    //   icon: FaBuilding,
    //   color: 'text-amber-400'
    // },
  ];

  const projects = [
    {
      id: 1,
      title: 'Company Film Reel',
      category: 'reels',
      thumbnail: '/portfolio/customer1.png',
      videoUrl: 'https://idzwta0kj3aberar.public.blob.vercel-storage.com/Film%20Reel.mp4',
      description: 'Dynamic commercial showcasing innovative tech solutions with sleek animations.',
      duration: '2:30',
      views: '11K',

    },
    {
      id: 2,
      title: 'Child Care Course For Parents',
      category: 'course',
      thumbnail: '/portfolio/customer2.png',
      videoUrl: 'https://youtu.be/ZaCSbQjLCTI',
      description: 'Viral-ready content optimized for social media engagement.',
      duration: '0:30',
      views: '8K'
    },
    {
      id: 3,
      title: 'Real Estate Podcast',
      category: 'commercial',
      thumbnail: '/portfolio/customer4.png',
      videoUrl: 'https://idzwta0kj3aberar.public.blob.vercel-storage.com/Podcast.mp4',
      description: 'Compelling brand story with emotional narrative and stunning visuals.',
      duration: '8:45',
      views: '6K'
    },
    {
      id: 4,
      title: 'Corporate Explainer Reel',
      category: 'reels',
      thumbnail: '/portfolio/customer4.png',
      videoUrl: 'https://idzwta0kj3aberar.public.blob.vercel-storage.com/Corporate%20Reel.mp4',
      description: 'Complex concepts simplified through engaging motion design.',
      duration: '3:15',
      views: '15K'
    },
    {
      id: 5,
      title: 'Meditation Course',
      category: 'courses',
      thumbnail: '/portfolio/customer5.png',
      videoUrl: 'https://idzwta0kj3aberar.public.blob.vercel-storage.com/Meditation.mp4',
      description: 'High-converting product showcase with premium aesthetics.',
      duration: '1:45',
      views: '2K'
    },
    {
      id: 6,
      title: 'Business English Course',
      category: 'courses',
      thumbnail: '/portfolio/customer6.png',
      videoUrl: 'https://idzwta0kj3aberar.public.blob.vercel-storage.com/Introduction%20Video.mp4',
      description: 'Trend-focused content designed for maximum engagement.',
      duration: '0:15',
      views: '5K'
    },
    {
      id: 7,
      title: 'Drawing Lessons for Kids',
      category: 'commercial',
      thumbnail: '/portfolio/customer3.png',
      videoUrl: 'https://idzwta0kj3aberar.public.blob.vercel-storage.com/Drawing%20Lesson.mp4',
      description: 'Trend-focused content designed for maximum engagement.',
      duration: '0:15',
      views: '3K'
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // helper: extract a YouTube ID from a variety of inputs (ID, full URL, or "youtube:ID")
  const getYouTubeId = (input: string): string | null => {
    if (!input) return null;
    // allow explicit marker "youtube:VIDEOID"
    if (input.startsWith('youtube:')) return input.split('youtube:')[1] || null;
    // bare 11-char id
    if (/^[\w-]{11}$/.test(input)) return input;
    // try common URL patterns
    const vMatch = input.match(/[?&]v=([^&]+)/);
    if (vMatch) return vMatch[1];
    const shortMatch = input.match(/youtu\.be\/([^?&/]+)/);
    if (shortMatch) return shortMatch[1];
    const embedMatch = input.match(/youtube\.com\/embed\/([^?&/]+)/);
    if (embedMatch) return embedMatch[1];
    return null;
  };

  // compute once per render for the modal
  const modalYouTubeId = selectedVideo ? getYouTubeId(selectedVideo.videoUrl) : null;

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            My <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Explore a collection of my finest work, showcasing diverse styles and 
            cutting-edge techniques across various industries.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => {
              const IconComponent = filter.icon;
              return (
                <motion.button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                    activeFilter === filter.id
                      ? 'bg-primary text-white shadow-lg shadow-primary/30 border border-primary/50'
                      : 'bg-surface/80 backdrop-blur-sm text-gray-300 hover:text-white hover:bg-primary/20 border border-border hover:border-primary/30'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent 
                    className={`w-4 h-4 ${
                      activeFilter === filter.id ? 'text-white' : filter.color
                    } transition-colors duration-300`} 
                  />
                  <span className="text-sm font-medium">{filter.label}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group relative bg-dark-card rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Thumbnail */}
              <div className="relative h-65 w-full rounded-t-2xl overflow-hidden bg-black">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.button
                    className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedVideo(project)}
                  >
                    <Play className="w-8 h-8 text-white fill-current ml-1" />
                  </motion.button>
                </div>

                {/* Category Badge */}
                {/* <div className="absolute top-4 left-4 px-3 py-1 bg-primary/90 backdrop-blur-sm rounded-full text-white text-xs font-medium shadow-sm">
                  {project.category}
                </div> */}

                {/* Stats */}
                {/* <div className="absolute top-4 right-4 glass rounded-lg px-2 py-1">
                  <span className="text-white text-xs">{project.duration}</span>
                </div> */}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-xs">{project.views} views</span>
                  <motion.button
                    className="flex items-center space-x-2 text-primary hover:text-primary-light transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {/* <span className="text-sm">View Project</span> */}
                    {/* <ExternalLink className="w-4 h-4" /> */}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Video Modal */}
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-dark-card rounded-2xl p-6 max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-white">{selectedVideo.title}</h3>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="aspect-video rounded-lg overflow-hidden mb-4">
                {modalYouTubeId ? (
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${modalYouTubeId}?autoplay=1&rel=0`}
                    title={selectedVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <video
                    src={selectedVideo.videoUrl}
                    controls
                    autoPlay
                    className="w-full h-full bg-black"
                  />
                )}
              </div>

              <p className="text-gray-400">{selectedVideo.description}</p>
            </motion.div>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
