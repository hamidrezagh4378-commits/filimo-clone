export type Movie = {
  id: string;
  title: string;
  poster: string;
  backdrop: string;
  rating: number;
  year: number;
  genre: string;
  description: string;
  duration?: string;
};

export const trending: Movie[] = [
  {
    id: "1",
    title: "تلقین",
    poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
    rating: 8.8,
    year: 2010,
    genre: "علمی-تخیلی",
    description: "دام کاب دزدی حرفه‌ای است که با ورود به رؤیای افراد، اسرارشان را می‌دزدد. این بار مأموریتی معکوس به او پیشنهاد می‌شود.",
    duration: "۱۴۸ دقیقه",
  },
  {
    id: "2",
    title: "بین ستاره‌ای",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg",
    rating: 8.6,
    year: 2014,
    genre: "ماجراجویی",
    description: "گروهی از کاوشگران برای یافتن خانه‌ای جدید برای بشریت، سفری خطرناک را در میان ستاره‌ها آغاز می‌کنند.",
    duration: "۱۶۹ دقیقه",
  },
  {
    id: "3",
    title: "ماتریکس",
    poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/fNG7i7RqMErkcqhohV2a6cV1Ehy.jpg",
    rating: 8.7,
    year: 1999,
    genre: "اکشن",
    description: "هکر جوانی کشف می‌کند دنیایی که در آن زندگی می‌کند، واقعی نیست.",
    duration: "۱۳۶ دقیقه",
  },
];

export const action: Movie[] = [
  {
    id: "4",
    title: "شوالیه تاریکی",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/hkBaDkMWbLaf8B1lsWsKX7Ew3Xq.jpg",
    rating: 9.0,
    year: 2008,
    genre: "اکشن",
    description: "بتمن با جوکر، مجرمی بی‌رحم، روبرو می‌شود که شهر گاتهام را به آشوب می‌کشد.",
    duration: "۱۵۲ دقیقه",
  },
  {
    id: "5",
    title: "گلادیاتور",
    poster: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/Ar7QuJ8B1nwQ8bF9rNlqDqY9M0k.jpg",
    rating: 8.5,
    year: 2000,
    genre: "اکشن",
    description: "ژنرال رومی خیانت‌دیده توسط امپراتور، به گلادیاتور تبدیل می‌شود تا انتقام بگیرد.",
    duration: "۱۵۵ دقیقه",
  },
];

export const comedy: Movie[] = [
  {
    id: "6",
    title: "فارست گامپ",
    poster: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/7c9UVPPiTPltouxRVY6N9uugaVA.jpg",
    rating: 8.8,
    year: 1994,
    genre: "درام",
    description: "مردی ساده‌دل با قلبی پاک، شاهد و بخشی از رویدادهای مهم تاریخ آمریکا می‌شود.",
    duration: "۱۴۲ دقیقه",
  },
];

export const series: Movie[] = [
  {
    id: "7",
    title: "برکینگ بد",
    poster: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg",
    rating: 9.5,
    year: 2008,
    genre: "درام",
    description: "معلم شیمی دبیرستان پس از تشخیص سرطان، شروع به تولید مواد مخدر می‌کند.",
    duration: "۵ فصل",
  },
  {
    id: "8",
    title: "بازی تاج و تخت",
    poster: "https://image.tmdb.org/t/p/w500/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/suopoADq0k8YZr4dQXcU6pToj6s.jpg",
    rating: 9.3,
    year: 2011,
    genre: "فانتزی",
    description: "خاندان‌های نجیب برای تسخیر تخت آهنین وستروس با هم می‌جنگند.",
    duration: "۸ فصل",
  },
];

export const allMovies: Movie[] = [...trending, ...action, ...comedy, ...series];

export function getAllMovies(): Movie[] {
  return allMovies;
}

export function getMovieById(id: string): Movie | undefined {
  return allMovies.find((m) => m.id === id);
}
