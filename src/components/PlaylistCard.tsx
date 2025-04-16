
import { Link } from "react-router-dom";

interface PlaylistCardProps {
  title: string;
  description: string;
  image: string;
}

const PlaylistCard = ({ title, description, image }: PlaylistCardProps) => {
  // Using the title as a simple ID for demo purposes
  const id = title.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <Link to={`/playlist/${id}`} className="playlist-card">
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="playlist-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-white mb-1">{title}</h3>
        <p className="text-sm text-white/60">{description}</p>
      </div>
    </Link>
  );
};

export default PlaylistCard;
