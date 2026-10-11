"use client";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { Movie } from "@/lib/data";

export default function MovieRow({ title, movies }: { title: string; movies: Movie[] }) {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    ref.current?.scrollBy({ left: dir === "left" ? -600 : 600, behavior: "smooth" });
  };

  return (
    <section className="mb-12">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex gap-2">
          <button onClick={() => scroll("right")} className="p-2 rounded-full bg-white/10 hover:bg-white/20">
            <ChevronRight className="w-5 h-5" />
          </button>
          <button onClick={() => scroll("left")} className="p-2 rounded-full bg-white/10 hover:bg-white/20">
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-6 pb-4"
      >
        {movies.map((m) => (
          <Link
            key={m.id}
            href={`/movie/${m.id}`}
            className="group relative flex-shrink-0 w-56 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:z-20"
          >
            <img src={m.poster} alt={m.title} className="w-full h-80 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-4">
              <h3 className="font-bold mb-1">{m.title}</h3>
              <div className="flex items-center gap-2 text-xs text-gray-300 mb-3">
                <span className="text-green-400">⭐ {m.rating}</span>
                <span>{m.year}</span>
              </div>
              <button className="bg-white text-black py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2">
                <Play className="w-4 h-4 fill-black" /> پخش
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
