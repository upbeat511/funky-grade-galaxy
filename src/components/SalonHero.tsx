import React from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-salon.jpg';

export const SalonHero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-elegant">
      <div className="absolute inset-0 bg-black/30"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="font-script text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
          Glow & Go Salon
        </h1>
        <p className="font-serif text-2xl md:text-3xl mb-4 drop-shadow-lg">
          Unleash Your Inner Glow
        </p>
        <p className="font-sans text-lg md:text-xl mb-8 drop-shadow-md">
          Expert beauty care for the confident you
        </p>
        <Button className="btn-hero font-sans text-lg px-12 py-6">
          Book an Appointment
        </Button>
      </div>
    </section>
  );
};