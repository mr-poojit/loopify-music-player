
import { Filter, Search, SlidersHorizontal } from "lucide-react";
import MainLayout from "@/layouts/MainLayout";
import EquipmentCard from "@/components/EquipmentCard";

const Equipment = () => {
  // Equipment data
  const equipment = [
    {
      id: "studio-headphones",
      title: "Studio Pro X3 Headphones",
      type: "headphones",
      price: "$149.99",
      rating: 5,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "audio-interface",
      title: "AudioLink Pro Interface",
      type: "interface",
      price: "$199.99",
      rating: 4,
      image: "https://images.unsplash.com/photo-1558298723-54e23a5388f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "mixing-console",
      title: "MixMaster 12-Channel Mixer",
      type: "mixer",
      price: "$349.99",
      rating: 5,
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "wireless-headphones",
      title: "SoundWave Wireless Headphones",
      type: "headphones",
      price: "$129.99",
      rating: 4,
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "portable-recorder",
      title: "PocketRec Pro Recorder",
      type: "interface",
      price: "$89.99",
      rating: 3,
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "studio-monitors",
      title: "StudioSound 8\" Monitors (Pair)",
      type: "mixer",
      price: "$299.99",
      rating: 5,
      image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  // Equipment categories
  const categories = [
    { id: "headphones", name: "Headphones", count: 24 },
    { id: "interfaces", name: "Audio Interfaces", count: 18 },
    { id: "mixers", name: "Mixers & Controllers", count: 15 },
    { id: "microphones", name: "Microphones", count: 31 },
    { id: "monitors", name: "Studio Monitors", count: 12 },
    { id: "software", name: "Production Software", count: 9 }
  ];

  return (
    <MainLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white mb-4">Audio Equipment</h1>
          <p className="text-white/70">Professional audio equipment for music creation and production</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-loopify-card rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-white">Filters</h3>
                <Filter className="h-4 w-4 text-white/70" />
              </div>
              
              <div className="relative mb-4">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-white/50" />
                <input 
                  type="text" 
                  placeholder="Search equipment" 
                  className="w-full bg-loopify-dark/70 border border-white/10 rounded-md py-2 pl-9 pr-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-loopify-purple"
                />
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-medium text-white/80 mb-3">Categories</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center">
                      <input 
                        type="checkbox" 
                        id={category.id} 
                        className="h-4 w-4 rounded border-white/20 text-loopify-purple focus:ring-0 focus:ring-offset-0 bg-loopify-dark/50"
                      />
                      <label htmlFor={category.id} className="ml-2 text-sm text-white/80 flex-1">{category.name}</label>
                      <span className="text-xs text-white/50">({category.count})</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-medium text-white/80 mb-3">Price Range</h4>
                <div className="px-2">
                  <div className="h-1 bg-white/20 rounded-full relative">
                    <div className="absolute h-1 bg-loopify-purple rounded-full left-1/4 right-1/4"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full border-2 border-loopify-purple top-1/2 -translate-y-1/2 left-1/4 -ml-1.5"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full border-2 border-loopify-purple top-1/2 -translate-y-1/2 right-1/4 -mr-1.5"></div>
                  </div>
                  <div className="flex justify-between mt-4 text-xs text-white/70">
                    <span>$0</span>
                    <span>$1000+</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-white/80 mb-3">Rating</h4>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center">
                      <input 
                        type="checkbox" 
                        id={`rating-${rating}`} 
                        className="h-4 w-4 rounded border-white/20 text-loopify-purple focus:ring-0 focus:ring-offset-0 bg-loopify-dark/50"
                      />
                      <label htmlFor={`rating-${rating}`} className="ml-2 flex items-center">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg 
                            key={i} 
                            className={`h-4 w-4 ${i < rating ? "text-yellow-400" : "text-gray-500"}`} 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full bg-loopify-purple hover:bg-loopify-purple/90 text-white py-2 rounded-md mt-6 transition-colors">
                Apply Filters
              </button>
            </div>
          </div>

          {/* Equipment grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">Equipment (24)</h2>
              <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-md transition-colors">
                <SlidersHorizontal className="h-4 w-4" />
                <span>Sort</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {equipment.map((item) => (
                <EquipmentCard
                  key={item.id}
                  title={item.title}
                  type={item.type}
                  price={item.price}
                  rating={item.rating}
                  image={item.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Equipment;
