export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-400">
        <div>
          <h4 className="text-white font-bold mb-4">درباره ما</h4>
          <p>پلتفرم استریم فیلم و سریال</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">لینک‌ها</h4>
          <ul className="space-y-2">
            <li>قیمت‌ها</li>
            <li>پشتیبانی</li>
            <li>وبلاگ</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">قوانین</h4>
          <ul className="space-y-2">
            <li>حریم خصوصی</li>
            <li>شرایط استفاده</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">تماس</h4>
          <p>support@example.com</p>
        </div>
      </div>
      <div className="text-center text-gray-600 text-xs mt-12">
        © 2025 - ساخته شده به عنوان نمونه
      </div>
    </footer>
  );
}
