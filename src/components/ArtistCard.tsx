
import { Link } from "react-router-dom";

interface ArtistCardProps {
  name: string;
  image: string;
}

const ArtistCard = ({ name, image }: ArtistCardProps) => {
  // Using the name as a simple ID for demo purposes
  const id = name.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <Link to={`/artist/${id}`} className="artist-card group">
      <div className="w-full aspect-square overflow-hidden rounded-full mb-3">
        <img 
          src={image} 
          alt={name} 
          className="artist-avatar transition-transform group-hover:scale-105 duration-500"
        />
      </div>
      <h3 className="font-semibold text-white mb-1">{name}</h3>
      <p className="text-xs text-white/60">Artist</p>
    </Link>
  );
};

export default ArtistCard;
