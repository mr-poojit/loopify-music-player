
import MainLayout from "@/layouts/MainLayout";
import { Library as LibraryIcon, Plus } from "lucide-react";
import PlaylistCard from "@/components/PlaylistCard";
import AlbumCard from "@/components/AlbumCard";

const Library = () => {
  const playlists = [
    {
      title: "My Favorite Mix",
      description: "Your personal collection of favorite tracks",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Indie Vibes",
      description: "Best indie tracks curated for you",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const savedAlbums = [
    {
      title: "Night Drive",
      artist: "Stellar Beats",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Dawn Chorus",
      artist: "Luna Ray",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <MainLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <LibraryIcon className="w-8 h-8 text-white/80" />
            <h1 className="text-2xl font-bold text-white">Your Library</h1>
          </div>
          <button className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
            <Plus className="h-5 w-5" />
          </button>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Your Playlists</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {playlists.map((playlist, index) => (
              <PlaylistCard
                key={index}
                title={playlist.title}
                description={playlist.description}
                image={playlist.image}
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white mb-4">Saved Albums</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {savedAlbums.map((album, index) => (
              <AlbumCard
                key={index}
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

export default Library;
