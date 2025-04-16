
import { useParams } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import { Play, Heart } from "lucide-react";
import AlbumCard from "@/components/AlbumCard";

const ArtistView = () => {
  const { id } = useParams();

  // Mock data for different artists
  const artistsData = {
    'luna-ray': {
      name: "Luna Ray",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      monthlyListeners: "2.5M",
      albums: [
        { id: 1, title: "Midnight Dreams", image: "https://images.unsplash.com/photo-1614149162883-504ce4d13909", artist: "Luna Ray" },
        { id: 2, title: "Starlight", image: "https://images.unsplash.com/photo-1636176525397-0e69d24b8394", artist: "Luna Ray" }
      ]
    },
    'stellar-beats': {
      name: "Stellar Beats",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      monthlyListeners: "1.8M",
      albums: [
        { id: 1, title: "Night Drive", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819", artist: "Stellar Beats" },
        { id: 2, title: "Urban Life", image: "https://images.unsplash.com/photo-1502872364588-894d7d6ddfab", artist: "Stellar Beats" }
      ]
    },
    'neon-echo': {
      name: "Neon Echo",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      monthlyListeners: "3.2M",
      albums: [
        { id: 1, title: "Electric Dreams", image: "https://images.unsplash.com/photo-1520483691742-bada60a1edd6", artist: "Neon Echo" },
        { id: 2, title: "Cyber Soul", image: "https://images.unsplash.com/photo-1505051508008-923feaf90180", artist: "Neon Echo" }
      ]
    }
  };

  // Get artist data based on ID
  const artist = artistsData[id as keyof typeof artistsData] || artistsData['luna-ray'];

  return (
    <MainLayout>
      <div>
        <div className="relative h-80">
          <div className="absolute inset-0 bg-gradient-to-t from-loopify-darker via-transparent to-transparent" />
          <div 
            className="absolute inset-0 bg-center bg-cover opacity-30"
            style={{ backgroundImage: `url(${artist.image})` }}
          />
          <div className="absolute bottom-8 left-8 flex items-end gap-8">
            <img 
              src={artist.image} 
              alt={artist.name} 
              className="w-52 h-52 rounded-full object-cover ring-4 ring-loopify-purple/20"
            />
            <div className="relative">
              <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">{artist.name}</h1>
              <p className="text-white/60">{artist.monthlyListeners} monthly listeners</p>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="flex items-center gap-4 mb-8">
            <button className="bg-loopify-purple hover:bg-loopify-purple/90 text-white py-3 px-8 rounded-full flex items-center gap-2 transition-colors">
              <Play className="h-5 w-5" />
              <span>Play</span>
            </button>
            <button className="text-white/60 hover:text-white transition-colors">
              <Heart className="h-6 w-6" />
            </button>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6">Popular Albums</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {artist.albums.map((album) => (
              <AlbumCard
                key={album.id}
                title={album.title}
                artist={album.artist}
                image={album.image}
              />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ArtistView;
