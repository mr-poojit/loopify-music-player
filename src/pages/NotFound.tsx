
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-loopify-darker text-white p-4">
      <div className="flex flex-col items-center text-center max-w-md">
        <div className="h-24 w-24 bg-loopify-purple/20 rounded-full flex items-center justify-center mb-6">
          <div className="h-16 w-16 bg-loopify-purple rounded-full flex items-center justify-center">
            <span className="text-3xl font-bold">404</span>
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-2">Page not found</h1>
        <p className="text-white/70 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="bg-loopify-purple hover:bg-loopify-purple/90 text-white py-3 px-6 rounded-full flex items-center gap-2 transition-colors"
        >
          <Home className="h-5 w-5" />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
