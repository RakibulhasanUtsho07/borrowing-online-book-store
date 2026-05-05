import Link from 'next/link';
import { BookOpen, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 font-sans">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <BookOpen size={80} className="text-purple-600 animate-pulse" />
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              Lost!
            </div>
          </div>
        </div>

        <h1 className="text-9xl font-extrabold text-gray-200 tracking-widest">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mt-4">
          This Book Isn't on Our Shelf
        </h2>
        <p className="text-gray-600 mt-2 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all shadow-lg active:scale-95"
          >
            <Home size={20} />
            Back to Library
          </Link>
          
          <Link
            href="/books"
            className="flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 font-semibold py-3 px-8 rounded-lg transition-all shadow-sm active:scale-95"
          >
            Browse Books
          </Link>
        </div>

        <div className="mt-12 text-sm text-gray-400">
          <p>"Not all those who wander are lost, but this page definitely is."</p>
        </div>
      </div>
    </div>
  );
}