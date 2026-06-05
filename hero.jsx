import React from 'react';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1689037676470-b72230d5236e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYWZlJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzgwNjU1MzM4fDA&ixlib=rb-4.1.0&q=85"
          alt="Point Cafe Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="max-w-3xl">
          <div className="inline-block mb-4 px-4 py-2 bg-emerald-500/20 backdrop-blur-sm rounded-full border border-emerald-500/30">
            <span className="text-emerald-300 font-medium text-sm">📍 Magelang, Central Java</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Always On
            <span className="text-emerald-400"> Point</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Nikmati kopi berkualitas premium dan hidangan lezat di tempat paling nyaman di Magelang
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={scrollToMenu}
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg px-8 py-6 rounded-xl transition-all hover:scale-105 hover:shadow-xl"
            >
              Lihat Menu
            </Button>
            <Button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6 rounded-xl transition-all hover:scale-105"
            >
              Hubungi Kami
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-emerald-400">1000+</div>
              <div className="text-gray-300 mt-1">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-emerald-400">4.9★</div>
              <div className="text-gray-300 mt-1">Rating</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-emerald-400">5+</div>
              <div className="text-gray-300 mt-1">Years Serving</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white" />
      </div>
    </section>
  );
};
