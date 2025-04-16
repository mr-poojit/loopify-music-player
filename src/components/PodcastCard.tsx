
import { Mic } from "lucide-react";

interface PodcastCardProps {
  title: string;
  host: string;
  image: string;
  episode: string;
  duration: string;
}

const PodcastCard = ({ title, host, image, episode, duration }: PodcastCardProps) => {
  return (
    <div className="bg-loopify-card rounded-xl overflow-hidden hover:bg-white/10 transition-colors duration-300 cursor-pointer">
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <Mic className="h-4 w-4 text-loopify-purple" />
          <span className="text-xs text-loopify-purple uppercase font-medium">Podcast</span>
        </div>
        <h3 className="font-semibold text-white mb-1">{title}</h3>
        <p className="text-sm text-white/60">{host}</p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-xs text-white/60">{episode}</span>
          <span className="text-xs text-white/60">{duration}</span>
        </div>
      </div>
    </div>
  );
};

export default PodcastCard;
