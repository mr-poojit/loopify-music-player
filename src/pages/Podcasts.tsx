
import { ChevronRight, Mic, Search, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import PodcastCard from "@/components/PodcastCard";

const Podcasts = () => {
  // Featured podcasts data
  const featuredPodcasts = [
    {
      id: "sound-waves",
      title: "Sound Waves",
      host: "Alex Rivers",
      image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      episode: "EP 42",
      duration: "48 min"
    },
    {
      id: "music-matters",
      title: "Music Matters",
      host: "Sam & Taylor",
      image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      episode: "EP 156",
      duration: "62 min"
    },
    {
      id: "producer-talks",
      title: "Producer Talks",
      host: "DJ Maestro",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      episode: "EP 89",
      duration: "54 min"
    },
    {
      id: "industry-insider",
      title: "Industry Insider",
      host: "Lisa Chen",
      image: "https://images.unsplash.com/photo-1588479839125-8ffc8281dd5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      episode: "EP 127",
      duration: "45 min"
    }
  ];

  // Popular podcasts data
  const popularPodcasts = [
    {
      id: "beat-masters",
      title: "Beat Masters",
      host: "Jay Wilson",
      image: "https://images.unsplash.com/photo-1557494023-48bae95f1335?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      episode: "EP 75",
      duration: "39 min"
    },
    {
      id: "vinyl-hour",
      title: "Vinyl Hour",
      host: "Retro Collectors",
      image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      episode: "EP 204",
      duration: "57 min"
    },
    {
      id: "audio-tech",
      title: "Audio Tech Weekly",
      host: "Tech Team",
      image: "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      episode: "EP 63",
      duration: "42 min"
    },
    {
      id: "classic-rewind",
      title: "Classic Rewind",
      host: "Musical History",
      image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      episode: "EP 118",
      duration: "65 min"
    }
  ];

  // New episodes data
  const newEpisodes = [
    {
      title: "The Future of Digital Audio",
      podcast: "Audio Tech Weekly",
      image: "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      date: "Today",
      duration: "42 min"
    },
    {
      title: "Interview with Grammy Winner Sierra Luna",
      podcast: "Industry Insider",
      image: "https://images.unsplash.com/photo-1588479839125-8ffc8281dd5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      date: "Yesterday",
      duration: "58 min"
    },
    {
      title: "Creating the Perfect Beat",
      podcast: "Producer Talks",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      date: "2 days ago",
      duration: "47 min"
    },
    {
      title: "Top 10 Albums of the Month",
      podcast: "Music Matters",
      image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      date: "3 days ago",
      duration: "62 min"
    },
    {
      title: "Rare Vinyl Finds and Where to Get Them",
      podcast: "Vinyl Hour",
      image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      date: "4 days ago",
      duration: "51 min"
    }
  ];

  return (
    <MainLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white mb-4">Podcasts</h1>
          <div className="relative max-w-xl">
            <Search className="absolute left-3 top-3 h-5 w-5 text-white/50" />
            <input 
              type="text" 
              placeholder="Search for podcasts" 
              className="w-full bg-loopify-dark/70 border border-white/10 rounded-md py-3 pl-10 pr-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-loopify-purple"
            />
          </div>
        </div>

        {/* Featured Podcasts Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">Featured Podcasts</h2>
            <Link to="/podcasts/featured" className="text-sm text-white/70 hover:text-white flex items-center gap-1">
              <span>View All</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredPodcasts.map((podcast) => (
              <PodcastCard
                key={podcast.id}
                title={podcast.title}
                host={podcast.host}
                image={podcast.image}
                episode={podcast.episode}
                duration={podcast.duration}
              />
            ))}
          </div>
        </div>

        {/* New Episodes Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-white">New Episodes</h2>
              <span className="bg-loopify-purple/90 text-white text-xs py-1 px-2 rounded-full">Updated Today</span>
            </div>
          </div>
          <div className="bg-loopify-card rounded-xl overflow-hidden">
            <div className="p-4 space-y-2">
              {newEpisodes.map((episode, index) => (
                <div 
                  key={index} 
                  className="flex items-center p-3 hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
                >
                  <img 
                    src={episode.image} 
                    alt={episode.title} 
                    className="w-12 h-12 rounded object-cover mr-4"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-white text-sm truncate">{episode.title}</h3>
                    <p className="text-white/60 text-xs">{episode.podcast}</p>
                  </div>
                  <div className="flex flex-col items-end text-right">
                    <span className="text-white/40 text-xs">{episode.date}</span>
                    <span className="text-white/60 text-xs">{episode.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Popular Podcasts Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-white">Popular Now</h2>
              <TrendingUp className="h-5 w-5 text-loopify-purple" />
            </div>
            <Link to="/podcasts/popular" className="text-sm text-white/70 hover:text-white flex items-center gap-1">
              <span>View All</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {popularPodcasts.map((podcast) => (
              <PodcastCard
                key={podcast.id}
                title={podcast.title}
                host={podcast.host}
                image={podcast.image}
                episode={podcast.episode}
                duration={podcast.duration}
              />
            ))}
          </div>
        </div>

        {/* Categories Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">Categories</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Music Production", "Artist Interviews", "Industry News", 
              "Music History", "Audio Technology", "Music Theory", 
              "Instrument Tutorials", "DJ Culture", "Classical Music",
              "Hip Hop", "Electronic", "Jazz"
            ].map((category, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-loopify-purple/40 to-indigo-900/40 hover:from-loopify-purple/60 hover:to-indigo-900/60 rounded-xl p-4 text-center cursor-pointer transition-colors"
              >
                <Mic className="h-6 w-6 mx-auto mb-2 text-white" />
                <h3 className="text-sm font-medium text-white">{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Podcasts;
