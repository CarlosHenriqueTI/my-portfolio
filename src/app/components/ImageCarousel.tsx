'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
  projectName: string;
}

export default function ImageCarousel({ images, projectName }: ImageCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageError, setImageError] = useState<boolean[]>(new Array(images.length).fill(false));

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const handleImageError = (index: number) => {
    setImageError(prev => {
      const newErrors = [...prev];
      newErrors[index] = true;
      return newErrors;
    });
  };

  if (images.length === 0) {
    return (
      <div className="relative aspect-video w-full bg-gray-800 flex items-center justify-center rounded-lg">
        <div className="flex flex-col items-center justify-center text-gray-500">
          <ImageIcon size={48} />
          <span className="text-sm mt-2">Nenhuma imagem disponível</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-video w-full bg-gray-900 group rounded-lg overflow-hidden">
      {/* Imagem Principal */}
      <div className="relative h-full w-full">
        {imageError[currentImageIndex] ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <ImageIcon size={48} />
            <span className="text-sm mt-2">Imagem não encontrada</span>
          </div>
        ) : (
          <Image
            src={images[currentImageIndex]}
            alt={`Screenshot ${currentImageIndex + 1} do projeto ${projectName}`}
            fill
            className="object-contain transition-opacity duration-300"
            onError={() => handleImageError(currentImageIndex)}
            priority={currentImageIndex === 0}
          />
        )}
      </div>

      {/* Setas de Navegação - Aparecem apenas quando há mais de uma imagem */}
      {images.length > 1 && (
        <>
          {/* Seta Esquerda */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 hover:scale-110"
            aria-label="Imagem anterior"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Seta Direita */}
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 hover:scale-110"
            aria-label="Próxima imagem"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicadores de Página */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                  index === currentImageIndex 
                    ? 'bg-white w-8' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>

          {/* Contador de Imagens */}
          <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {currentImageIndex + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
}
