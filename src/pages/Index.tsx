import React from 'react';
import { SalonHero } from '@/components/SalonHero';
import { SalonServices } from '@/components/SalonServices';
import { SalonGallery } from '@/components/SalonGallery';
import { SalonTestimonials } from '@/components/SalonTestimonials';
import { SalonContact } from '@/components/SalonContact';
import { SalonFooter } from '@/components/SalonFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SalonHero />
      <SalonServices />
      <SalonGallery />
      <SalonTestimonials />
      <SalonContact />
      <SalonFooter />
    </div>
  );
};

export default Index;
