# Social API React Page - Setup Guide

## Overview
This package includes three React components that match your existing design system. Choose the one that best fits your project setup.

---

## 🎨 Design System Colors

Based on your existing CSS:

```
Primary Color:      #2d3bde (Blue)
Background:         #f5f6fa (Light Gray)
White:              #ffffff
Text:               #111827
Text Muted:         #6b7280
Text Light:         #9ca3af
Border:             #e5e7eb
Border Muted:       #e8eaf0
Border Radius:      12px (radius), 8px (radius-sm)
Shadow:             0 4px 16px rgba(0, 0, 0, 0.08)
Font Family:        'Sora', sans-serif
Font Size (Body):   14px
Header Height:      56px
```

---

## 📦 Component Versions

### 1. **SocialAPIPage.jsx** (Inline Styles)
- ✅ No dependencies
- ✅ Works immediately
- ❌ Larger component file
- ❌ Hard to maintain styles

**Usage:**
```jsx
import SocialAPIPage from './SocialAPIPage';

function App() {
  return <SocialAPIPage />;
}
```

---

### 2. **SocialAPIPage-Tailwind.jsx** (Tailwind CSS)
- ✅ Best if you're using Tailwind CSS
- ✅ Smaller file size
- ✅ Easy to customize
- ⚠️ Requires Tailwind CSS installed

**Setup (if not already installed):**
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**Usage:**
```jsx
import SocialAPIPage from './SocialAPIPage-Tailwind';

function App() {
  return <SocialAPIPage />;
}
```

---

### 3. **SocialAPIPage-CSSModule.jsx** (CSS Modules)
- ✅ Scoped styles (no conflicts)
- ✅ Easy to maintain
- ✅ Works in any React project
- ⚠️ Requires CSS Module support (built-in with Create React App)

**Files needed:**
- `SocialAPIPage-CSSModule.jsx` (Component)
- `SocialAPIPage.module.css` (Styles)

**Usage:**
```jsx
import SocialAPIPage from './SocialAPIPage-CSSModule';

function App() {
  return <SocialAPIPage />;
}
```

---

## 🚀 Quick Start

### For Create React App:
```bash
# Copy the component you want to your src/ folder
cp SocialAPIPage-CSSModule.jsx src/
cp SocialAPIPage.module.css src/

# Use in your App.jsx
import SocialAPIPage from './SocialAPIPage-CSSModule';

export default function App() {
  return <SocialAPIPage />;
}
```

### For Vite + React:
```bash
# Same as above for CSS Modules version
# Or use Tailwind version if you have it configured
```

---

## 🎯 Features

- ✅ Navigation bar with centered "Social API" title
- ✅ Centered content box with rounded corners and shadow
- ✅ Responsive design (mobile-friendly)
- ✅ Matches your existing design system
- ✅ Hover effects on button
- ✅ Matches your font family and spacing

---

## 🔧 Customization

### Change the content:
Edit the text inside the box component

### Change colors:
- **Inline version:** Update the hex color codes in inline styles
- **Tailwind version:** Modify Tailwind classes (e.g., `bg-blue-600`, `text-gray-900`)
- **CSS Module version:** Update `SocialAPIPage.module.css`

### Add navigation items:
Modify the navbar to include additional links or buttons as needed

### Adjust spacing:
- `padding: '48px 40px'` - Box padding
- `height: '56px'` - Header height
- Adjust in the relevant component

---

## 📱 Responsive Breakpoints

All versions include responsive design for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

---

## 🔗 Dependencies

| Version | Dependencies |
|---------|--------------|
| Inline Styles | None |
| Tailwind | `tailwindcss`, `postcss`, `autoprefixer` |
| CSS Modules | None (built-in) |

---

## 💡 Recommendations

- **Use Tailwind version** if your project already uses Tailwind CSS
- **Use CSS Module version** for better maintainability and scoped styles
- **Use Inline version** only for quick prototyping

---

## 📝 Notes

- All components use the "Sora" font family from Google Fonts (already in your project)
- The design matches your existing `--primary: #2d3bde` color system
- Component is fully responsive
- Button includes hover/active states

