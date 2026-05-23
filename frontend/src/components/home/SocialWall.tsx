import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Youtube, Heart, MessageCircle, Share2 } from 'lucide-react';

const socialPosts = [
  {
    id: 1,
    platform: 'instagram',
    image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&q=80',
    caption: '🎨 Art class creativity at its finest! Our little artists are painting their dreams. #PlaypenSchool #ArtEducation',
    likes: 245,
    comments: 18,
  },
  {
    id: 2,
    platform: 'facebook',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80',
    caption: '📚 Back to school vibes! Welcoming our students for the new academic year with excitement and joy.',
    likes: 532,
    comments: 45,
  },
  {
    id: 3,
    platform: 'twitter',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80',
    caption: '🏃‍♂️ Sports day preparations are in full swing! Who\'s excited for the big day? #PlaypenSports',
    likes: 189,
    comments: 12,
  },
  {
    id: 4,
    platform: 'instagram',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&q=80',
    caption: '🔬 Future scientists at work! Our STEM lab is where curiosity meets discovery. #STEMEducation',
    likes: 312,
    comments: 28,
  },
  {
    id: 5,
    platform: 'youtube',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80',
    caption: '🎭 Annual Day performances were absolutely magical! Watch the full video on our channel.',
    likes: 421,
    comments: 56,
  },
  {
    id: 6,
    platform: 'facebook',
    image: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&q=80',
    caption: '🌱 Earth Day celebrations! Teaching our students to be responsible global citizens.',
    likes: 278,
    comments: 22,
  },
];

const platformIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
  youtube: Youtube,
};

const platformColors: Record<string, string> = {
  facebook: 'bg-blue-600',
  instagram: 'bg-gradient-to-r from-purple-500 to-pink-500',
  twitter: 'bg-sky-500',
  youtube: 'bg-red-600',
};

export const SocialWall = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4"
          >
            Social Media
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            Live Updates From Our Community
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Follow us on social media to stay connected with the latest happenings at Playpen School.
          </motion.p>
        </div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-12"
        >
          {Object.entries(platformIcons).map(([platform, Icon]) => (
            <a
              key={platform}
              href="#"
              className={`w-12 h-12 rounded-full ${platformColors[platform]} flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg`}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>

        {/* Social Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {socialPosts.map((post, index) => {
            const PlatformIcon = platformIcons[post.platform];
            return (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
              >
                {/* Image */}
                <img
                  src={post.image}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                  {/* Platform Icon */}
                  <div className={`w-8 h-8 rounded-full ${platformColors[post.platform]} flex items-center justify-center`}>
                    <PlatformIcon className="w-4 h-4 text-white" />
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-4 text-primary-foreground text-sm">
                    <span className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      {post.comments}
                    </span>
                    <Share2 className="w-4 h-4 ml-auto" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
