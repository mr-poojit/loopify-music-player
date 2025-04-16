
import MainLayout from "@/layouts/MainLayout";
import AlbumCard from "@/components/AlbumCard";

const NewReleases = () => {
  const newReleases = [
    {
      title: "Electronic Dreams",
      artist: "Neon Echo",
      image: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Urban Vibes",
      artist: "City Flow",
      image: "https://images.unsplash.com/photo-1636176525397-0e69d24b8394?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Mountain Songs",
      artist: "Natural Vibes",
      image: "https://images.unsplash.com/photo-1520483691742-bada60a1edd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Ocean Waves",
      artist: "Luna Ray",
      image: "https://images.unsplash.com/photo-1502872364588-894d7d6ddfab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <MainLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-white">New Releases</h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {newReleases.map((album, index) => (
            <AlbumCard
              key={index}
              title={album.title}
              artist={album.artist}
              image={album.image}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default NewReleases;
