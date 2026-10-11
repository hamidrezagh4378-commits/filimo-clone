"use client";
import Navbar from "@/components/Navbar";
import {
  Play,
  Pause,
  Volume2,
  Maximize,
  Settings,
  SkipForward,
  SkipBack,
  ArrowRight,
  Subtitles,
} from "lucide-react";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { getMovieById } from "@/lib/data";

export default function WatchPage({ params }: { params: { id: string } }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [movieTitle, setMovieTitle] = useState("در حال بارگذاری...");
  const [durationText, setDurationText] = useState("");

  useEffect(() => {
    const movie = getMovieById(params.id);
    if (movie) {
      setMovieTitle(movie.title);
      setDurationText(movie.duration || "۱۲۰ دقیقه");
    }
  }, [params.id]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) videoRef.current.pause();
    else videoRef.current.play();
    setPlaying(!playing);
  };

  const onTimeUpdate = () => {
    if (!videoRef.current) return;
    const p = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(p || 0);
  };

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const t = (parseFloat(e.target.value) / 100) * videoRef.current.duration;
    videoRef.current.currentTime = t;
    setProgress(parseFloat(e.target.value));
  };

  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 mb-4">
          <Link
            href={`/movie/${params.id}`}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm"
          >
            <ArrowRight className="w-4 h-4" /> بازگشت به صفحه فیلم
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="relative bg-black rounded-2xl overflow-hidden group aspect-video">
            <video
              ref={videoRef}
              className="w-full h-full"
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              onTimeUpdate={onTimeUpdate}
              onClick={togglePlay}
            />

            {!playing && (
              <button
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition"
              >
                <div className="w-24 h-24 rounded-full bg-red-600 flex items-center justify-center hover:scale-110 transition">
                  <Play className="w-10 h-10 fill-white ml-1" />
                </div>
              </button>
            )}

            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition">
              <input
                type="range"
                min={0}
                max={100}
                value={progress}
                onChange={seek}
                className="w-full accent-red-600 mb-4 cursor-pointer"
              />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <button onClick={togglePlay}>
                    {playing ? (
                      <Pause className="w-7 h-7 fill-white" />
                    ) : (
                      <Play className="w-7 h-7 fill-white" />
                    )}
                  </button>
                  <SkipBack className="w-6 h-6 cursor-pointer hover:text-red-500" />
                  <SkipForward className="w-6 h-6 cursor-pointer hover:text-red-500" />

                  <div className="flex items-center gap-2">
                    <Volume2 className="w-6 h-6" />
                    <input
                      type="range"
                      min={0}
                      max={1}
                      step={0.05}
                      value={volume}
                      onChange={(e) => {
                        const v = parseFloat(e.target.value);
                        setVolume(v);
                        if (videoRef.current) videoRef.current.volume = v;
                      }}
                      className="w-24 accent-red-600"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <Subtitles className="w-6 h-6 cursor-pointer hover:text-red-500" />
                  <Settings className="w-6 h-6 cursor-pointer hover:text-red-500" />
                  <Maximize
                    className="w-6 h-6 cursor-pointer hover:text-red-500"
                    onClick={() => videoRef.current?.requestFullscreen()}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-start justify-between flex-wrap gap-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{movieTitle}</h1>
              <p className="text-gray-400 text-sm">
                کیفیت: 1080p • زیرنویس فارسی • مدت: {durationText}
              </p>
            </div>
            <div className="flex gap-3">
              <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-bold">
                ادامه تماشا
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
