
import { useParams } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import { Play, Heart } from "lucide-react";

const AlbumView = () => {
  const { id } = useParams();

  // Mock data for the album
  const album = {
    id,
    title: "Midnight Dreams",
    artist: "Luna Ray",
    image: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    year: "2024",
    tracks: [
      { id: 1, title: "Midnight Dreams", duration: "3:45" },
      { id: 2, title: "Starry Night", duration: "4:20" },
      { id: 3, title: "Luna's Song", duration: "3:55" },
      { id: 4, title: "Moonlight Sonata", duration: "4:10" },
    ]
  };

  return (
    <MainLayout>
      <div className="p-8">
        <div className="flex gap-8 items-end mb-8">
          <img 
            src={album.image} 
            alt={album.title} 
            className="w-60 h-60 rounded-lg shadow-lg"
          />
          <div>
            <p className="text-white/60 mb-2">Album</p>
            <h1 className="text-5xl font-bold text-white mb-2">{album.title}</h1>
            <div className="flex items-center gap-2 text-white/60 mb-6">
              <span>{album.artist}</span>
              <span>•</span>
              <span>{album.year}</span>
            </div>
            <div className="flex items-center gap-4">
              <button className="bg-loopify-purple hover:bg-loopify-purple/90 text-white py-3 px-8 rounded-full flex items-center gap-2 transition-colors">
                <Play className="h-5 w-5" />
                <span>Play</span>
              </button>
              <button className="text-white/60 hover:text-white transition-colors">
                <Heart className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <table className="w-full">
            <thead>
              <tr className="text-white/60 border-b border-white/10">
                <th className="pb-4 text-left font-medium">#</th>
                <th className="pb-4 text-left font-medium">Title</th>
                <th className="pb-4 text-right font-medium">Duration</th>
              </tr>
            </thead>
            <tbody>
              {album.tracks.map((track, index) => (
                <tr key={track.id} className="text-white/80 hover:bg-white/5 group">
                  <td className="py-4 w-12">{index + 1}</td>
                  <td className="py-4">{track.title}</td>
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

export default AlbumView;
