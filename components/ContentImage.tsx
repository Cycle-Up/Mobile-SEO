import fs from 'fs';
import path from 'path';
import NextImage from 'next/image';
import type { ReactNode } from 'react';

/**
 * Server Component — renders a real photo when present in public/, otherwise shows
 * the `fallback` prop (or a styled placeholder with the alt text).
 *
 * To "activate" an image: generate it with AI and place the file at `public/[src]`.
 * The next build will automatically pick it up.
 *
 * Recommended AI generation tips are embedded as `generatePrompt` props on each usage site.
 */

interface ContentImageProps {
  src: string;            // relative to /public, e.g. "/images/hero-waterfilter.jpg"
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  caption?: string;
  fallback?: ReactNode;   // shown instead of the generic placeholder when image is missing
  generatePrompt?: string; // stored but not rendered; helps developers know what to generate
}

export function ContentImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority,
  caption,
  fallback,
  // generatePrompt intentionally unused at runtime; serves as documentation
}: ContentImageProps) {
  const fullPath = path.join(process.cwd(), 'public', src);
  const exists = fs.existsSync(fullPath);

  const content = (() => {
    if (exists) {
      return (
        <NextImage
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className={`rounded-2xl ${className}`}
        />
      );
    }
    if (fallback) {
      return <>{fallback}</>;
    }
    // Generic styled placeholder
    return (
      <div
        style={{ aspectRatio: `${width}/${height}` }}
        className="w-full bg-gradient-to-br from-[#E0F2FE] to-[#BAE6FD] rounded-2xl border border-dashed border-[#93C5FD] flex flex-col items-center justify-center gap-2 min-h-[120px]"
        role="img"
        aria-label={alt}
      >
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 opacity-40" aria-hidden="true">
          <rect x="2" y="6" width="20" height="14" rx="3" stroke="#005F8A" strokeWidth="1.5" />
          <circle cx="12" cy="13" r="3" stroke="#005F8A" strokeWidth="1.5" />
          <path d="M2 9l4-3h12l4 3" stroke="#005F8A" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
        <p className="text-xs text-[#005F8A] font-medium px-6 text-center leading-snug">{alt}</p>
      </div>
    );
  })();

  if (!caption) return content;

  return (
    <figure>
      {content}
      <figcaption className="text-xs text-gray-400 text-center mt-1.5">{caption}</figcaption>
    </figure>
  );
}
