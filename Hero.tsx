import { Play, Plus, Info } from "lucide-react";
import { Movie } from "@/lib/data";

export default function Hero({ movie }: { movie: Movie }) {
  return (
    <div className="relative h-[85vh] w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${movie.backdrop})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#0a0a0f]/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-end pb-40">
        <span className="text-red-500 font-bold mb-3">فیلم ویژه</span>
        <h1 className="text-6xl font-black mb-4 max-w-2xl">{movie.title}</h1>
        <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
          <span className="text-green-400 font-bold">⭐ {movie.rating}</span>
          <span>{movie.year}</span>
          <span>{movie.genre}</span>
          <span className="border border-gray-500 px-2 rounded">+13</span>
        </div>
        <p className="max-w-xl text-gray-300 mb-8 leading-relaxed">
          {movie.description}
        </p>
        <div className="flex gap-4">
          <button className="bg-white text-black px-8 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-gray-200 transition">
            <Play className="w-5 h-5 fill-black" /> پخش
          </button>
          <button className="bg-white/20 backdrop-blur px-8 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-white/30 transition">
            <Plus className="w-5 h-5" /> لیست من
          </button>
          <button className="bg-white/20 backdrop-blur px-8 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-white/30 transition">
            <Info className="w-5 h-5" /> اطلاعات
          </button>
        </div>
      </div>
    </div>
  );
}
