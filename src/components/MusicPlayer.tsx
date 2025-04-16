
import { useState } from "react";
import { 
  Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, 
  Volume2, VolumeX, Maximize2, ListMusic, Heart 
} from "lucide-react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState("1:22");
  const [totalTime, setTotalTime] = useState("4:56");
  const [volume, setVolume] = useState(70);
  const [progress, setProgress] = useState(22); // percentage

  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleMute = () => setIsMuted(!isMuted);

  return (
    <div className="h-20 bg-loopify-darker border-t border-white/5 px-4 flex items-center justify-between">
      <div className="flex items-center w-1/4">
        <div className="h-12 w-12 rounded bg-purple-900/60 flex-shrink-0 mr-3">
          <img 
            src="/lovable-uploads/ec9bf55e-10d2-4cfb-900f-e51d5f52febb.png" 
            alt="Now playing" 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="text-sm font-medium text-white">Midnight Dreams</h4>
          <p className="text-xs text-white/60">Luna Ray</p>
        </div>
        <button className="ml-4 text-white/60 hover:text-loopify-purple transition-colors">
          <Heart className="h-4 w-4" />
        </button>
      </div>

      <div className="flex flex-col items-center w-2/4">
        <div className="flex items-center gap-2 mb-2">
          <button className="player-button text-white/70 hover:text-white">
            <Shuffle className="h-4 w-4" />
          </button>
          <button className="player-button text-white/70 hover:text-white">
            <SkipBack className="h-5 w-5" />
          </button>
          <button 
            className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-black hover:scale-105 transition-transform"
            onClick={togglePlay}
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
          </button>
          <button className="player-button text-white/70 hover:text-white">
            <SkipForward className="h-5 w-5" />
          </button>
          <button className="player-button text-white/70 hover:text-white">
            <Repeat className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center gap-2 w-full">
          <span className="text-xs text-white/60">{currentTime}</span>
          <div className="progress-container group flex-1">
            <div className="progress-bar">
              <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
              <div className="progress-bar-hover" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
          <span className="text-xs text-white/60">{totalTime}</span>
        </div>
      </div>

      <div className="flex items-center justify-end w-1/4 gap-2">
        <button className="player-button text-white/70 hover:text-white">
          <ListMusic className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-2">
          <button 
            className="player-button text-white/70 hover:text-white"
            onClick={toggleMute}
          >
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>
          <div className="progress-container group w-20">
            <div className="progress-bar">
              <div 
                className="progress-bar-fill" 
                style={{ width: `${isMuted ? 0 : volume}%` }}
              ></div>
              <div 
                className="progress-bar-hover" 
                style={{ width: `${isMuted ? 0 : volume}%` }}
              ></div>
            </div>
          </div>
        </div>
        <button className="player-button text-white/70 hover:text-white">
          <Maximize2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
