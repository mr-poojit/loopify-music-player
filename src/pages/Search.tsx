
import { useState } from "react";
import MainLayout from "@/layouts/MainLayout";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";
import ArtistCard from "@/components/ArtistCard";
import AlbumCard from "@/components/AlbumCard";
import PlaylistCard from "@/components/PlaylistCard";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Mock search results with more diverse data
  const artists = [
    {
      name: "Luna Ray",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Stellar Beats",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Electric Flow",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const albums = [
    {
      title: "Midnight Stories",
      artist: "Luna Ray",
      image: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Starlight",
      artist: "Stellar Beats",
      image: "https://images.unsplash.com/photo-1636176525397-0e69d24b8394?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Neon Dreams",
      artist: "Electric Flow",
      image: "https://images.unsplash.com/photo-1614846384571-1e31322ed3a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const genres = [
    { name: "Pop", image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { name: "Rock", image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { name: "Jazz", image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { name: "Electronic", image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { name: "Classical", image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" }
  ];

  return (
    <MainLayout>
      <div className="p-8">
        <div className="relative max-w-2xl mb-8">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/60" />
          <Input
            type="search"
            placeholder="Search for artists, songs, or playlists"
            className="pl-10 bg-white/10 border-none text-white placeholder:text-white/60"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Genres</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {genres.map((genre, index) => (
              <div key={index} className="relative group cursor-pointer overflow-hidden rounded-lg">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={genre.image} 
                    alt={genre.name}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">{genre.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Artists</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-6">
            {artists.map((artist, index) => (
              <ArtistCard
                key={index}
                name={artist.name}
                image={artist.image}
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white mb-4">Albums</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {albums.map((album, index) => (
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

export default Search;
