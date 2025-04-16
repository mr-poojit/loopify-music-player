
import { Headphones, Music, Settings } from "lucide-react";

interface EquipmentCardProps {
  title: string;
  type: string;
  image: string;
  price: string;
  rating: number;
}

const EquipmentCard = ({ title, type, image, price, rating }: EquipmentCardProps) => {
  return (
    <div className="bg-loopify-card rounded-xl overflow-hidden hover:bg-white/10 transition-colors duration-300 cursor-pointer">
      <div className="aspect-video overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
        <div className="absolute top-3 right-3 bg-black/60 rounded-full py-1 px-3">
          <span className="text-white text-xs font-medium">{price}</span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          {type === "headphones" && <Headphones className="h-4 w-4 text-loopify-purple" />}
          {type === "interface" && <Music className="h-4 w-4 text-loopify-purple" />}
          {type === "mixer" && <Settings className="h-4 w-4 text-loopify-purple" />}
          <span className="text-xs text-loopify-purple uppercase font-medium">{type}</span>
        </div>
        <h3 className="font-semibold text-white mb-1">{title}</h3>
        <div className="flex items-center mt-2">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg 
                key={i} 
                className={`h-4 w-4 ${i < rating ? "text-yellow-400" : "text-gray-500"}`} 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <button className="ml-auto text-xs bg-loopify-purple/90 hover:bg-loopify-purple text-white py-1 px-3 rounded-full transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default EquipmentCard;
