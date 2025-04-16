
import { ChevronRight, Play, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";
import PlaylistCard from "@/components/PlaylistCard";
import AlbumCard from "@/components/AlbumCard";
import ArtistCard from "@/components/ArtistCard";
import PremiumBanner from "@/components/PremiumBanner";
import MainLayout from "@/layouts/MainLayout";

const Index = () => {
  // Featured playlists data
  const featuredPlaylists = [
    {
      id: "chill-lounge",
      title: "Chill Lounge",
      description: "Relax and unwind with these lounge tracks",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "workout-beats",
      title: "Workout Beats",
      description: "High energy tracks to power your workout",
      image: "https://images.unsplash.com/photo-1557330359-ffb0deed6163?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "study-focus",
      title: "Study Focus",
      description: "Concentration enhancing instrumentals",
      image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "evening-jazz",
      title: "Evening Jazz",
      description: "Smooth jazz for your evening",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  // New releases data
  const newReleases = [
    {
      id: "midnight-glow",
      title: "Midnight Glow",
      artist: "Luna Ray",
      image: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "cosmic-journey",
      title: "Cosmic Journey",
      artist: "Stellar Beats",
      image: "https://images.unsplash.com/photo-1636176525397-0e69d24b8394?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "electric-dreams",
      title: "Electric Dreams",
      artist: "Neon Echo",
      image: "https://images.unsplash.com/photo-1520483691742-bada60a1edd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "urban-pulse",
      title: "Urban Pulse",
      artist: "City Flow",
      image: "https://images.unsplash.com/photo-1502872364588-894d7d6ddfab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "mountain-echoes",
      title: "Mountain Echoes",
      artist: "Natural Vibes",
      image: "https://images.unsplash.com/photo-1505051508008-923feaf90180?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  // Popular artists data
  const popularArtists = [
    {
      id: "luna-ray",
      name: "Luna Ray",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "stellar-beats",
      name: "Stellar Beats",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "neon-echo",
      name: "Neon Echo",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "city-flow",
      name: "City Flow",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "natural-vibes",
      name: "Natural Vibes",
      image: "https://images.unsplash.com/photo-1552699611-e2c208d5d9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "rhythm-pulse",
      name: "Rhythm Pulse",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "electronic-dreams",
      name: "Electronic Dreams",
      image: "https://images.unsplash.com/photo-1567784177951-6fa58317e16b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  // Featured Album - Weekly Recommendation
  const featuredAlbum = {
    id: "urban-nights",
    title: "Urban Nights: Deep City Vibes",
    artist: "Various Artists",
    image: "/lovable-uploads/6817e341-5764-4a5e-af16-805d81b8f5a5.png",
    tracks: 18,
    duration: "1h 42m"
  };

  return (
    <MainLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white mb-6">Welcome to Loopify</h1>
          <PremiumBanner />
        </div>

        {/* Featured Album */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/40 rounded-xl p-6 flex flex-col md:flex-row gap-6">
            <img 
              src={featuredAlbum.image} 
              alt={featuredAlbum.title}
              className="w-40 h-40 object-cover rounded-lg shadow-lg"
            />
            <div className="flex flex-col justify-center">
              <span className="text-sm text-white/70 mb-1">Weekly Recommendation</span>
              <h2 className="text-2xl font-bold text-white mb-2">{featuredAlbum.title}</h2>
              <p className="text-white/70 mb-4">{featuredAlbum.artist} • {featuredAlbum.tracks} tracks • {featuredAlbum.duration}</p>
              <div className="flex gap-3">
                <button className="bg-loopify-purple hover:bg-loopify-purple/90 text-white py-2 px-6 rounded-full flex items-center gap-2 transition-colors">
                  <Play className="h-4 w-4" />
                  <span>Play Now</span>
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white py-2 px-6 rounded-full transition-colors">
                  View Album
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Playlists */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">Featured Playlists</h2>
            <Link to="/playlists" className="text-sm text-white/70 hover:text-white flex items-center gap-1">
              <span>View All</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredPlaylists.map((playlist) => (
              <PlaylistCard
                key={playlist.id}
                title={playlist.title}
                description={playlist.description}
                image={playlist.image}
              />
            ))}
          </div>
        </div>

        {/* New Releases */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">New Releases</h2>
            <Link to="/new-releases" className="text-sm text-white/70 hover:text-white flex items-center gap-1">
              <span>View All</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {newReleases.map((album) => (
              <AlbumCard
                key={album.id}
                title={album.title}
                artist={album.artist}
                image={album.image}
              />
            ))}
          </div>
        </div>

        {/* Popular Artists */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">Popular Artists</h2>
            <Link to="/artists" className="text-sm text-white/70 hover:text-white flex items-center gap-1">
              <span>View All</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-6">
            {popularArtists.map((artist) => (
              <ArtistCard
                key={artist.id}
                name={artist.name}
                image={artist.image}
              />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
