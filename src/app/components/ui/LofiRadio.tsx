'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Radio } from 'lucide-react';

interface Station {
  name: string;
  url: string;
  description: string;
}

const stations: Station[] = [
  {
    name: "ChillHop Radio",
    url: "https://streams.ilovemusic.de/iloveradio17.mp3",
    description: "24/7 Chill Hip Hop beats"
  },
  {
    name: "LoFi Hip Hop",
    url: "https://streams.ilovemusic.de/iloveradio36.mp3", 
    description: "Relaxing LoFi beats to study/work"
  },
  {
    name: "Coding Radio",
    url: "https://radio.plaza.one/mp3",
    description: "Electronic music for programming"
  },
  {
    name: "Jazz Lounge",
    url: "https://streams.ilovemusic.de/iloveradio15.mp3",
    description: "Smooth jazz for focus"
  }
];

export default function LofiRadio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [isMuted, setIsMuted] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);
  const [currentStation, setCurrentStation] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = async () => {
    if (!audioRef.current) return;
    
    setError(null);
    setIsLoading(true);

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.src = stations[currentStation].url;
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (err) {
      console.error('Error playing audio:', err);
      setError('Erro ao reproduzir a estação. Tente outra.');
      setIsPlaying(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (newVolume > 0) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const changeStation = (index: number) => {
    if (audioRef.current && isPlaying) {
      audioRef.current.pause();
    }
    setCurrentStation(index);
    setIsPlaying(false);
    setError(null);
  };

  const handleError = () => {
    setError('Estação indisponível no momento');
    setIsPlaying(false);
    setIsLoading(false);
  };

  const handleCanPlay = () => {
    setIsLoading(false);
    setError(null);
  };

  return (
    <div className="fixed top-16 right-3 z-50">
      <audio
        ref={audioRef}
        onError={handleError}
        onCanPlay={handleCanPlay}
        onLoadStart={() => setIsLoading(true)}
        onLoadedData={() => setIsLoading(false)}
      />
      
      {/* Minimized View */}
      {isMinimized && (
        <div 
          className="bg-gray-900/90 backdrop-blur-md border border-gray-700/50 rounded-full p-3 shadow-lg cursor-pointer hover:bg-gray-800/90 transition-all duration-300 group"
          onClick={() => setIsMinimized(false)}
        >
          <div className="flex items-center space-x-2">
            <Radio className="w-5 h-5 text-cyan-400" />
            {isPlaying && (
              <div className="flex space-x-1">
                <div className="w-1 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="w-1 h-3 bg-purple-400 rounded-full animate-pulse delay-75"></div>
                <div className="w-1 h-5 bg-blue-400 rounded-full animate-pulse delay-150"></div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Expanded View */}
      {!isMinimized && (
        <div className="bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-2xl p-4 shadow-2xl w-80 max-w-[calc(100vw-2rem)]">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Radio className="w-5 h-5 text-cyan-400" />
              <h3 className="text-white font-medium">LoFi Radio</h3>
            </div>
            <button
              onClick={() => setIsMinimized(true)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <div className="w-4 h-4">−</div>
            </button>
          </div>

          {error && (
            <div className="mb-3 p-2 bg-red-900/50 border border-red-700/50 rounded-lg">
              <p className="text-red-300 text-sm">{error}</p>
            </div>
          )}

          {/* Station Info */}
          <div className="mb-4">
            <h4 className="text-white font-medium">{stations[currentStation].name}</h4>
            <p className="text-gray-400 text-sm">{stations[currentStation].description}</p>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-3 mb-4">
            <button
              onClick={togglePlay}
              disabled={isLoading}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-full p-2 transition-all duration-300 shadow-lg"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : isPlaying ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5 ml-0.5" />
              )}
            </button>

            <div className="flex-1 flex items-center space-x-2">
              <button
                onClick={toggleMute}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-4 h-4" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="flex-1 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                aria-label="Controle de volume"
                title="Ajustar volume"
              />
            </div>
          </div>

          {/* Station Selector */}
          <div className="space-y-1">
            <p className="text-gray-400 text-sm mb-2">Estações:</p>
            <div className="grid grid-cols-2 gap-1">
              {stations.map((station, index) => (
                <button
                  key={index}
                  onClick={() => changeStation(index)}
                  className={`p-2 rounded-lg text-left transition-all duration-200 ${
                    currentStation === index
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30'
                      : 'bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/30'
                  }`}
                >
                  <div className="text-white text-sm font-medium truncate">
                    {station.name}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Visual Equalizer */}
          {isPlaying && (
            <div className="flex items-center justify-center space-x-1 mt-4 h-8">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className={`bg-gradient-to-t from-cyan-500 to-purple-500 rounded-full w-1 animate-pulse equalizer-bar-${i % 4}`}
                />
              ))}
            </div>
          )}
        </div>
      )}

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: linear-gradient(45deg, #06b6d4, #8b5cf6);
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        }
        
        .slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: linear-gradient(45deg, #06b6d4, #8b5cf6);
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        }

        .equalizer-bar-0 { height: 20%; animation: equalizerPulse 0.6s ease-in-out infinite alternate; }
        .equalizer-bar-1 { height: 60%; animation: equalizerPulse 0.8s ease-in-out infinite alternate; }
        .equalizer-bar-2 { height: 40%; animation: equalizerPulse 0.7s ease-in-out infinite alternate; }
        .equalizer-bar-3 { height: 80%; animation: equalizerPulse 0.9s ease-in-out infinite alternate; }

        @keyframes equalizerPulse {
          0% { transform: scaleY(0.3); }
          100% { transform: scaleY(1); }
        }
      `}</style>
    </div>
  );
}
