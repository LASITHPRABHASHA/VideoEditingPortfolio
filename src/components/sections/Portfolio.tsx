'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Play} from 'lucide-react';
import { FaThLarge, FaFilm, FaGraduationCap, FaYoutube, FaInstagram,} from 'react-icons/fa';
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
      color: 'text-red-400'
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
     { 
      id: 'shorts', 
      label: 'Shorts',
      icon: FaInstagram,
      color: 'text-red-500'
    },
  ];

  const projects = [
    {
      id: 1,
      title: 'Company Film Reel',
      category: 'reels',
      thumbnail: '/Thumbnails/film.png',
      videoUrl: 'https://youtu.be/b6jldmLc0zo',
      description: 'Dynamic commercial showcasing innovative tech solutions with sleek animations.',
      duration: '2:30',
      views: '11K',
    },
    {
      id: 2,
      title: 'Child Care Course For Parents',
      category: 'courses',
      thumbnail: '/Thumbnails/child.png',
      videoUrl: 'https://youtu.be/ZaCSbQjLCTI',
      description: 'Viral-ready content optimized for social media engagement.',
      duration: '0:30',
      views: '8K'
    },
    {
      id: 3,
      title: 'Real Estate Podcast',
      category: 'commercial',
      thumbnail: '/Thumbnails/podcast.png',
      videoUrl: 'https://youtu.be/diYvWZ3uGYw',
      description: 'Compelling brand story with emotional narrative and stunning visuals.',
      duration: '8:45',
      views: '6K'
    },
    {
      id: 4,
      title: 'Corporate Explainer Reel',
      category: 'reels',
      thumbnail: '/Thumbnails/corporate .png',
      videoUrl: 'https://youtu.be/msSOXqrT2tc',
      description: 'Complex concepts simplified through engaging motion design.',
      duration: '3:15',
      views: '15K'
    },
    {
      id: 5,
      title: 'Meditation Course',
      category: 'courses',
      thumbnail: '/Thumbnails/Deal & let go.png',
      videoUrl: 'https://youtu.be/kfDegxD4tPc',
      description: 'High-converting product showcase with premium aesthetics.',
      duration: '1:45',
      views: '2K'
    },
    {
      id: 6,
      title: 'Business English Course',
      category: 'courses',
      thumbnail: '/Thumbnails/Convo.jpg',
      videoUrl: 'https://youtu.be/vGiOJSA89kw',
      description: 'Trend-focused content designed for maximum engagement.',
      duration: '0:15',
      views: '5K'
    },
    {
      id: 7,
      title: 'Drawing Lessons for Kids',
      category: 'commercial',
      thumbnail: '/Thumbnails/drawing.png',
      videoUrl: 'https://youtu.be/SUXHWbhHmvw',
      description: 'Trend-focused content designed for maximum engagement.',
      duration: '0:15',
      views: '3K'
    },
    {
      id: 8,
      title: 'Diet Lessons for Beginners',
      category: 'courses',
      thumbnail: '/Thumbnails/Day 1  Release The Restriction Mindset.png',
      videoUrl: 'https://youtu.be/4UJznPv7E10',
      description: 'Trend-focused content designed for maximum engagement.',
      duration: '0:15',
      views: '3K'
    },
     {
      id: 9,
      title: 'Real Estate Course',
      category: 'courses',
      thumbnail: '/Thumbnails/Real Estate.png',
      videoUrl: 'https://youtu.be/AyIoNa0CQj8',
      description: 'Trend-focused content designed for maximum engagement.',
      duration: '0:15',
      views: '3K'
    },
     {
      id: 10,
      title: 'Flower Decoration Course',
      category: 'courses',
      thumbnail: '/portfolio/customer10.png',
      videoUrl: 'https://youtu.be/Z3fvaLyAQA0',
      description: 'Trend-focused content designed for maximum engagement.',
      duration: '0:15',
      views: '12K'
    },
     {
      id: 11,
      title: 'Website Development Course',
      category: 'commercial',
      thumbnail: '/portfolio/customer11.png',
      videoUrl: 'https://youtu.be/xtoTSCbgDqQ',
      description: 'Trend-focused content designed for maximum engagement.',
      duration: '0:15',
      views: '2K'
    },
     {
      id: 12,
      title: 'Yoga for Beginners Course',
      category: 'courses',
      thumbnail: '/portfolio/customer12.png',
      videoUrl: 'https://youtu.be/75s6xC6HM7k',
      description: 'Trend-focused content designed for maximum engagement.',
      duration: '0:15',
      views: '6K'
    },
     {
      id: 13,
      title: 'Social Media Short Promo Video',
      category: 'shorts',
      thumbnail: '/Thumbnails/floral2.jpeg',
      videoUrl: 'https://youtube.com/shorts/U69ceNiFGgs?feature=share',
      description: 'Trend-focused content designed for maximum engagement.',
      duration: '0:15',
      views: '6K'
    },
    
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // helper: extract a YouTube ID from a variety of inputs (ID, full URL, or
  // "youtube:ID")
  const getYouTubeId = (input: string): string | null => {
    if (!input) return null;

    // explicit "youtube:ID" marker
    if (input.startsWith('youtube:')) return input.split('youtube:')[1] || null;

    // raw 11‑character ID
    if (/^[\w-]{11}$/.test(input)) return input;

    // v= query string
    const vMatch = input.match(/[?&]v=([^&]+)/);
    if (vMatch) return vMatch[1];

    // youtu.be short link
    const shortMatch = input.match(/youtu\.be\/([^?&/]+)/);
    if (shortMatch) return shortMatch[1];

    // regular embed URL
    const embedMatch = input.match(/youtube\.com\/embed\/([^?&/]+)/);
    if (embedMatch) return embedMatch[1];

    // **new**: shorts URL
    const shortsMatch = input.match(/youtube\.com\/shorts\/([^?&/]+)/);
    if (shortsMatch) return shortsMatch[1];

    return null;
  };

  // compute once per render for the modal
  const modalYouTubeId = selectedVideo ? getYouTubeId(selectedVideo.videoUrl) : null;

  return (
    <section id="portfolio" className="py-20 bg-[#E7F2EF]">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-[#19183B] mb-6">
            My <span className="text-[#19183B]">Portfolio</span>
          </h2>
          <p className="text-xl text-[#708993] max-w-3xl mx-auto mb-12">
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
                      ? 'bg-primary text-[#19183B] shadow-lg shadow-primary/30 border border-primary/50'
                      : 'bg-surface/80 backdrop-blur-sm text-[#19183B] hover:text-white hover:bg-primary/20 border border-border hover:border-primary/30'
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
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="absolute inset-0 bg-black/0" />
                  <motion.button
                    className="w-16 h-16  rounded-full flex items-center justify-center  pointer-events-auto"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedVideo(project)}
                  >
                    <Play className="w-8 h-8 text-white fill-current ml-1" />
                  </motion.button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#19183B] mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-xs">{project.views} views</span>
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
                    src={`https://www.youtube.com/embed/${modalYouTubeId}?autoplay=1&rel=0&modestbranding=1`}
                    title={selectedVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <video
                    src={selectedVideo.videoUrl}
                    controls
                    autoPlay
                    controlsList="nodownload nofullscreen noremoteplayback"
                    disablePictureInPicture
                    className="w-full h-full bg-black"
                    onContextMenu={(e) => e.preventDefault()} // Disable right-click
                    style={{ pointerEvents: 'auto' }}
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>

              <p className="text-white">{selectedVideo.description}</p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
