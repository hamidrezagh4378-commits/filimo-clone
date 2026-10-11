# FILIMO CLONE - سایت استریم فیلم و سریال

یک کلون ساده از فیلیمو ساخته شده با Next.js 14، Tailwind CSS و TypeScript.

## ویژگی‌ها

- صفحه اصلی با Hero و ردیف‌های فیلم
- صفحه جزئیات فیلم با تریلر و فیلم‌های مشابه
- صفحه پخش فیلم با کنترل‌های ویدیو
- صفحه لیست همه فیلم‌ها با جستجو و فیلتر (ژانر، سال، مرتب‌سازی)
- طراحی RTL و فارسی
- رابط کاربری تاریک و مدرن

## نصب و اجرا

```bash
cd movie-site
npm install
npm run dev
```

سپس به آدرس [http://localhost:3000](http://localhost:3000) بروید.

## ساختار پروژه

```
movie-site/
├── app/
│   ├── page.tsx              # صفحه اصلی
│   ├── layout.tsx
│   ├── globals.css
│   ├── movies/page.tsx       # لیست فیلم‌ها
│   ├── movie/[id]/page.tsx  # جزئیات فیلم
│   └── watch/[id]/page.tsx  # پخش فیلم
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── MovieRow.tsx
│   ├── MovieCard.tsx
│   └── Footer.tsx
└── lib/
    └── data.ts               # داده‌های نمونه فیلم‌ها
```

## نکات

- تصاویر از TMDB لود می‌شوند.
- ویدیو نمونه از Google Sample استفاده شده.
- داده‌ها استاتیک هستند و فقط برای دمو.
