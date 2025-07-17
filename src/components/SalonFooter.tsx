import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

export const SalonFooter = () => {
  return (
    <footer className="bg-elegant py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-white hover:text-primary transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-white hover:text-primary transition-colors">
            <Facebook className="w-6 h-6" />
          </a>
        </div>
        
        <p className="font-sans text-white/80 text-sm">
          © 2025 Glow & Go Salon | Designed by Areeba
        </p>
      </div>
    </footer>
  );
};