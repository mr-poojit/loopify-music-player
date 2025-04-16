
import { Home, Search, Library, Music, ListMusic, Plus, Headphones, Mic } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-60 bg-loopify-dark h-screen flex flex-col">
      <div className="px-6 py-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-10 w-10 bg-loopify-purple rounded-full flex items-center justify-center">
            <Music className="h-5 w-5 text-white" />
          </div>
          <h1 className="text-xl font-bold text-white">Loopify</h1>
        </Link>
      </div>

      <nav className="mt-2 px-2">
        <Link to="/" className="sidebar-item sidebar-item-active">
          <Home className="sidebar-icon" />
          <span>Home</span>
        </Link>
        <Link to="/search" className="sidebar-item">
          <Search className="sidebar-icon" />
          <span>Search</span>
        </Link>
        <Link to="/library" className="sidebar-item">
          <Library className="sidebar-icon" />
          <span>Library</span>
        </Link>
        <Link to="/new-releases" className="sidebar-item">
          <Music className="sidebar-icon" />
          <span>New Releases</span>
        </Link>
        <Link to="/podcasts" className="sidebar-item">
          <Mic className="sidebar-icon" />
          <span>Podcasts</span>
        </Link>
        <Link to="/equipment" className="sidebar-item">
          <Headphones className="sidebar-icon" />
          <span>Equipment</span>
        </Link>
      </nav>

      <div className="mt-8 px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-white/80 uppercase text-xs tracking-widest">Playlists</h2>
          <button className="h-6 w-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
            <Plus className="h-4 w-4" />
          </button>
        </div>
        <div className="space-y-1">
          <Link to="/playlist/chill-lounge" className="block py-2 px-2 text-sm text-white/70 hover:text-white">
            Chill Lounge
          </Link>
          <Link to="/playlist/workout-beats" className="block py-2 px-2 text-sm text-white/70 hover:text-white">
            Workout Beats
          </Link>
          <Link to="/playlist/study-focus" className="block py-2 px-2 text-sm text-white/70 hover:text-white">
            Study Focus
          </Link>
          <Link to="/playlist/evening-jazz" className="block py-2 px-2 text-sm text-white/70 hover:text-white">
            Evening Jazz
          </Link>
          <Link to="/playlist/road-trip-mix" className="block py-2 px-2 text-sm text-white/70 hover:text-white">
            Road Trip Mix
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
