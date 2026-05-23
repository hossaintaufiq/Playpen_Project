import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { X, ChevronLeft, ChevronRight, Search, Filter, Play, Image as ImageIcon, Film } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const categories = ['All', 'Events', 'Classroom', 'Sports', 'Arts', 'Campus', 'Celebrations'];

const galleryItems = [
  { id: 1, type: 'image', category: 'Events', src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80', title: 'Annual Day 2024' },
  { id: 2, type: 'image', category: 'Classroom', src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80', title: 'Smart Classroom' },
  { id: 3, type: 'video', category: 'Events', src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80', title: 'Science Fair 2024' },
  { id: 4, type: 'image', category: 'Sports', src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80', title: 'Sports Day' },
  { id: 5, type: 'image', category: 'Arts', src: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&q=80', title: 'Art Exhibition' },
  { id: 6, type: 'image', category: 'Campus', src: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80', title: 'Library' },
  { id: 7, type: 'image', category: 'Celebrations', src: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80', title: 'Independence Day' },
  { id: 8, type: 'video', category: 'Sports', src: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80', title: 'Football Tournament' },
  { id: 9, type: 'image', category: 'Classroom', src: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&q=80', title: 'Lab Session' },
  { id: 10, type: 'image', category: 'Events', src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80', title: 'Award Ceremony' },
  { id: 11, type: 'image', category: 'Arts', src: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?w=800&q=80', title: 'Music Class' },
  { id: 12, type: 'image', category: 'Campus', src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80', title: 'Main Building' },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [filterType, setFilterType] = useState<'all' | 'image' | 'video'>('all');

  const filteredItems = galleryItems.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === 'all' || item.type === filterType;
    return matchesCategory && matchesSearch && matchesType;
  });

  const currentIndex = selectedItem !== null ? filteredItems.findIndex((item) => item.id === selectedItem) : -1;

  const navigateGallery = (direction: 'prev' | 'next') => {
    if (currentIndex === -1) return;
    const newIndex = direction === 'prev' 
      ? (currentIndex - 1 + filteredItems.length) % filteredItems.length
      : (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[newIndex].id);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 hero-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 bg-primary-foreground/20 text-primary-foreground text-sm font-semibold rounded-full mb-6">
              Gallery
            </span>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Moments & Memories
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Explore our collection of photos and videos capturing the vibrant life at Playpen School.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-card border-b border-border sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search gallery..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Type Filter */}
            <div className="flex gap-2">
              <Button
                variant={filterType === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterType('all')}
              >
                <Filter className="w-4 h-4 mr-1" />
                All
              </Button>
              <Button
                variant={filterType === 'image' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterType('image')}
              >
                <ImageIcon className="w-4 h-4 mr-1" />
                Photos
              </Button>
              <Button
                variant={filterType === 'video' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterType('video')}
              >
                <Film className="w-4 h-4 mr-1" />
                Videos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setSelectedItem(item.id)}
                  className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-xs text-white/70">{item.category}</span>
                      <h3 className="text-white font-semibold">{item.title}</h3>
                    </div>
                  </div>
                  {item.type === 'video' && (
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Play className="w-5 h-5 text-white fill-white" />
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No items found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={() => setSelectedItem(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => { e.stopPropagation(); navigateGallery('prev'); }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigateGallery('next'); }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Image */}
            <motion.div
              key={selectedItem}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl max-h-[85vh] mx-4"
            >
              {filteredItems.find((item) => item.id === selectedItem) && (
                <>
                  <img
                    src={filteredItems.find((item) => item.id === selectedItem)?.src}
                    alt={filteredItems.find((item) => item.id === selectedItem)?.title}
                    className="max-w-full max-h-[75vh] object-contain rounded-lg"
                  />
                  <div className="text-center mt-4">
                    <h3 className="text-white text-xl font-semibold">
                      {filteredItems.find((item) => item.id === selectedItem)?.title}
                    </h3>
                    <p className="text-white/60">
                      {filteredItems.find((item) => item.id === selectedItem)?.category}
                    </p>
                    <p className="text-white/40 text-sm mt-2">
                      {currentIndex + 1} of {filteredItems.length}
                    </p>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
