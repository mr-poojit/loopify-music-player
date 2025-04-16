
import { useParams } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import { Play, Clock } from "lucide-react";

const PlaylistView = () => {
  const { id } = useParams();

  // Mock data with unique playlists based on ID
  const playlists = {
    'chill-lounge': {
      id: 'chill-lounge',
      title: "Chill Lounge",
      description: "Relax and unwind with these lounge tracks",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      tracks: [
        { 
          id: 1, 
          title: "Midnight Dreams", 
          artist: "Luna Ray", 
          duration: "3:45",
          image: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
        },
        { 
          id: 2, 
          title: "Ocean Waves", 
          artist: "Stellar Beats", 
          duration: "4:20",
          image: "https://images.unsplash.com/photo-1636176525397-0e69d24b8394?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
        },
      ]
    },
    'workout-mix': {
      id: 'workout-mix',
      title: "Workout Mix",
      description: "High-energy tracks to fuel your workout",
      image: "https://images.unsplash.com/photo-1594882645126-14020914d58d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      tracks: [
        { 
          id: 1, 
          title: "Power Up", 
          artist: "Electric Flow", 
          duration: "3:30",
          image: "https://images.unsplash.com/photo-1614846384571-1e31322ed3a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
        },
        { 
          id: 2, 
          title: "Energy Rush", 
          artist: "Stellar Beats", 
          duration: "4:15",
          image: "https://images.unsplash.com/photo-1636176525397-0e69d24b8394?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
        },
      ]
    },
    'jazz-classics': {
      id: 'jazz-classics',
      title: "Jazz Classics",
      description: "Timeless jazz masterpieces",
      image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      tracks: [
        { 
          id: 1, 
          title: "Moonlight Serenade", 
          artist: "Jazz Masters", 
          duration: "5:20",
          image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
        },
        { 
          id: 2, 
          title: "Night in Paris", 
          artist: "The Jazz Quartet", 
          duration: "6:10",
          image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
        },
      ]
    }
  };

  const playlist = playlists[id as keyof typeof playlists] || playlists['chill-lounge'];

  return (
    <MainLayout>
      <div className="p-8">
        <div className="flex gap-8 items-end mb-8">
          <img 
            src={playlist.image} 
            alt={playlist.title} 
            className="w-60 h-60 rounded-lg shadow-lg object-cover"
          />
          <div>
            <p className="text-white/60 mb-2">Playlist</p>
            <h1 className="text-5xl font-bold text-white mb-4">{playlist.title}</h1>
            <p className="text-white/60 mb-6">{playlist.description}</p>
            <button className="bg-loopify-purple hover:bg-loopify-purple/90 text-white py-3 px-8 rounded-full flex items-center gap-2 transition-colors">
              <Play className="h-5 w-5" />
              <span>Play</span>
            </button>
          </div>
        </div>

        <div className="mt-8">
          <table className="w-full">
            <thead>
              <tr className="text-white/60 border-b border-white/10">
                <th className="pb-4 text-left font-medium w-12">#</th>
                <th className="pb-4 text-left font-medium"></th>
                <th className="pb-4 text-left font-medium">Title</th>
                <th className="pb-4 text-left font-medium">Artist</th>
                <th className="pb-4 text-right font-medium">
                  <Clock className="h-4 w-4 inline-block" />
                </th>
              </tr>
            </thead>
            <tbody>
              {playlist.tracks.map((track, index) => (
                <tr key={track.id} className="text-white/80 hover:bg-white/5 group cursor-pointer">
                  <td className="py-4 w-12">{index + 1}</td>
                  <td className="py-2 w-12">
                    <img 
                      src={track.image} 
                      alt={track.title}
                      className="w-10 h-10 rounded object-cover"
                    />
                  </td>
                  <td className="py-4">{track.title}</td>
                  <td className="py-4 text-white/60">{track.artist}</td>
                  <td className="py-4 text-right text-white/60">{track.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  );
};

export default PlaylistView;
