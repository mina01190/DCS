# DentaCore Landing Page — Static Site

موقع صفحة هبوط ثابت (HTML + CSS + JS)، سهل التعديل بدون أي أدوات.

## 📁 محتويات الفولدر

```
.
├── index.html      ← كل محتوى الصفحة (النصوص + البنية)
├── styles.css      ← كل التنسيق والألوان
├── script.js       ← التفاعلات (mobile menu + scroll)
└── README.md       ← الملف ده
```

## ✏️ إزاي تعدّل حاجة؟

### تغيير النصوص
افتح `index.html` بأي محرر نصوص (حتى Notepad بيشتغل).
كل نص عربي موجود داخل `<h1>...</h1>` أو `<p>...</p>` — غيّره مباشرة واحفظ.

### تغيير الإيميل أو لينك التواصل
دوّر على `contact@dentacore.example` في `index.html` وغيّره لإيميلك الحقيقي.

### تغيير الألوان الأساسية
افتح `styles.css` وعدّل المتغيرات في أول الملف:
```css
:root {
  --primary: #123b5d;        /* الأزرق الغامق (اللون الأساسي) */
  --accent: #2a8c88;         /* الأخضر المائل للأزرق (لون مميز) */
  --brass: #c89b3c;          /* الذهبي */
  --background: #f7f5ef;     /* البيج الفاتح (خلفية الموقع) */
}
```

### إضافة صورة حقيقية بدل الـ placeholder
دوّر على `<div class="editable-visual">` في القسم اللي عايز تغيّره، واستبدله بـ:
```html
<img src="images/hero.jpg" alt="وصف الصورة" />
```
وحط الصورة في فولدر `images/` جنب الملفات.

### إضافة أو حذف ميزة من قسم "المميزات"
كل ميزة موجودة في `<article class="feature-row">` داخل `index.html`.
- **لإضافة ميزة:** انسخ article كاملة، غيّر الرقم والعنوان والوصف.
- **لحذف ميزة:** امسح الـ article كلها.

## 🚀 إزاي ترفعها على GitHub Pages

1. امسح الملفات القديمة من الـ repo (الـ Vite source code).
2. ارفع الـ 3 ملفات (`index.html`, `styles.css`, `script.js`) في الـ **root** بتاع الـ repo.
3. من **Settings → Pages** تأكد إن:
   - Source: `Deploy from a branch`
   - Branch: `main` — Folder: `/ (root)`
4. استنى دقيقة-دقيقتين وافتح اللينك.

أوامر terminal لو بتحب ترفع من جهازك:
```bash
# من جوه فولدر المشروع
rm -rf public src index.html   # امسح ملفات Vite القديمة
# (انسخ الـ 3 ملفات الجديدة هنا)
git add .
git commit -m "Switch to static site"
git push
```
