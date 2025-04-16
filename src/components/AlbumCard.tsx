
import { Link } from "react-router-dom";

interface AlbumCardProps {
  title: string;
  artist: string;
  image: string;
}

const AlbumCard = ({ title, artist, image }: AlbumCardProps) => {
  // Using the title as a simple ID for demo purposes
  const id = title.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <Link to={`/album/${id}`} className="album-card">
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="album-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-white mb-1">{title}</h3>
        <p className="text-sm text-white/60">{artist}</p>
      </div>
    </Link>
  );
};

export default AlbumCard;
