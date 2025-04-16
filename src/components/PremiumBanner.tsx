
import { Crown, Star } from "lucide-react";

const PremiumBanner = () => {
  return (
    <div className="bg-gradient-to-r from-loopify-purple/80 to-indigo-600/80 rounded-lg p-5 flex items-center justify-between">
      <div>
        <div className="flex items-center gap-2">
          <Crown className="h-5 w-5 text-yellow-300" />
          <h2 className="text-lg font-bold text-white">Loopify Premium</h2>
        </div>
        <p className="text-white/80 mt-1">Get unlimited access to millions of songs and podcasts with no ads.</p>
        <div className="mt-3 flex items-center gap-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-4 w-4 fill-yellow-300 text-yellow-300" />
            ))}
          </div>
          <span className="text-sm text-white/80">Join millions of happy listeners</span>
        </div>
      </div>
      <button className="bg-white text-loopify-purple font-medium py-2 px-6 rounded-full hover:bg-white/90 transition-colors">
        Try Free
      </button>
    </div>
  );
};

export default PremiumBanner;
