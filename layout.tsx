import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Movie Site - استریم فیلم و سریال",
  description: "پلتفرم تماشای آنلاین فیلم و سریال",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
