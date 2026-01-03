'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { useTheme } from '../../context/ThemeContext';

export default function ProjectSkeleton() {
  const { theme } = useTheme();
  
  return (
    <div className={`rounded-lg sm:rounded-xl shadow-lg border overflow-hidden ${
      theme === 'dark' 
        ? 'bg-slate-800/50 backdrop-blur border-slate-700/50' 
        : 'bg-white/90 backdrop-blur border-gray-200'
    }`}>
      {/* Image Skeleton */}
      <Skeleton className="w-full h-48 sm:h-56" />
      
      {/* Content Skeleton */}
      <div className="p-3 sm:p-4 lg:p-6">
        <Skeleton className="h-6 w-3/4 mb-3" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-5/6 mb-4" />
        
        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-14" />
        </div>
        
        {/* Button */}
        <Skeleton className="h-10 w-full" />
      </div>
    </div>
  );
}
