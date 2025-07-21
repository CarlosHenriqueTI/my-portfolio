import Image from 'next/image';
import React from 'react';

interface ProfileImageProps {
  src?: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  placeholder?: boolean;
}

export default function ProfileImage({ 
  src, 
  alt, 
  width = 300, 
  height = 300, 
  className = "",
  placeholder = false 
}: ProfileImageProps) {
  // Fallback para imagem local se não houver src ou se placeholder for true
  const imageSrc = placeholder || !src 
    ? `data:image/svg+xml;base64,${Buffer.from(
        `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#06b6d4;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:1" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grad1)"/>
          <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" font-weight="bold" text-anchor="middle" dy=".3em" fill="white">
            Carlos H
          </text>
          <circle cx="50%" cy="35%" r="8" fill="white" opacity="0.8"/>
          <rect x="40%" y="55%" width="20%" height="3" rx="1.5" fill="white" opacity="0.6"/>
          <rect x="35%" y="62%" width="30%" height="3" rx="1.5" fill="white" opacity="0.4"/>
          <rect x="42%" y="69%" width="16%" height="3" rx="1.5" fill="white" opacity="0.4"/>
        </svg>`
      ).toString('base64')}` 
    : src;

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={true}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
    />
  );
}
