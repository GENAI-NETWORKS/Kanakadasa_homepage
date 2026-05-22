import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

// Dynamically import all jpegs
const imageModules = import.meta.glob('../assets/*.jpeg', { eager: true, import: 'default' });

const categoriesList = [
  "Campus Gallery",
  "Classroom Activities",
  "Sports Activities",
  "Events & Celebrations",
  "Cultural Programs",
  "Laboratory Activities",
  "Field Trips"
];

const categories = ["All", ...categoriesList];

// Generate 47 images, distributed across categories
const galleryData = [];
for (let i = 1; i <= 47; i++) {
  const src = imageModules[`../assets/${i}.jpeg`];
  if (src) {
    // Math.floor((i - 1) / 7) maps 1-7 -> 0, 8-14 -> 1, etc.
    const categoryIndex = Math.min(Math.floor((i - 1) / 7), categoriesList.length - 1);
    galleryData.push({ 
      id: i, 
      src, 
      category: categoriesList[categoryIndex] 
    });
  }
}

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(20);

  const filteredImages = activeCategory === "All" 
    ? galleryData 
    : galleryData.filter(img => img.category === activeCategory);

  const displayedImages = filteredImages.slice(0, visibleCount);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setVisibleCount(20); // Reset visible count when changing category
  };

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="section-label text-center mb-2">CAMPUS LIFE</span>
          <h2 className="section-heading text-center">Photo Gallery</h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-white shadow-md scale-105"
                  : "bg-lightbg text-textmuted hover:bg-gray-200 hover:text-textdark border border-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {displayedImages.map((item) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id} 
                onClick={() => setSelectedImage(item.src)}
                className="relative group overflow-hidden rounded-2xl shadow-sm aspect-[4/3] bg-gray-100 cursor-pointer border border-gray-100"
              >
                <img 
                  src={item.src} 
                  alt={item.category} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                  <ZoomIn className="text-white" size={32} />
                  <span className="text-white font-medium text-sm tracking-wide bg-primary/40 px-3 py-1 rounded-full border border-white/20 text-center">{item.category}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredImages.length === 0 && (
          <div className="text-center py-12 text-textmuted">
            No images currently available in this category.
          </div>
        )}

        {/* Load More Button */}
        {visibleCount < filteredImages.length && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setVisibleCount(prev => prev + 20)}
              className="bg-primary text-white px-8 py-3 rounded-full hover:bg-accent hover:text-primary transition-colors font-medium shadow-sm hover:shadow-md"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {/* Full Screen Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 z-50 text-white/70 hover:text-white transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20"
            >
              <X size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage} 
              alt="Full Screen View" 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl relative z-40"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
