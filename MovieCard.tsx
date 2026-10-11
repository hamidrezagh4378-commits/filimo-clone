import { Play } from "lucide-react";
import Link from "next/link";
import { Movie } from "@/lib/data";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Link
      href={`/movie/${movie.id}`}
      className="group relative rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105"
    >
      <img src={movie.poster} alt={movie.title} className="w-full h-72 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-4">
        <h3 className="font-bold mb-1 text-sm">{movie.title}</h3>
        <div className="flex items-center gap-2 text-xs text-gray-300 mb-3">
          <span className="text-yellow-400">⭐ {movie.rating}</span>
          <span>{movie.year}</span>
        </div>
        <button className="bg-red-600 hover:bg-red-700 py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2">
          <Play className="w-4 h-4 fill-white" /> پخش
        </button>
      </div>
    </Link>
  );
}
