'use client';

import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';

interface LottieAnimationProps {
  animationPath: string;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

export default function LottieAnimation({ 
  animationPath, 
  className = '',
  loop = true,
  autoplay = true 
}: LottieAnimationProps) {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Carregar animação Lottie
    fetch(animationPath)
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading Lottie animation:', error));
  }, [animationPath]);

  if (!animationData) {
    return null;
  }

  return (
    <Lottie 
      animationData={animationData} 
      loop={loop}
      autoplay={autoplay}
      className={className}
    />
  );
}
