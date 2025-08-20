
'use strict';

// Кастомный лоадер для изображений при статическом экспорте Next.js
export default function imageLoader({ src, width, quality }) {
  // Для статического экспорта возвращаем оригинальный src
  return src;
}
