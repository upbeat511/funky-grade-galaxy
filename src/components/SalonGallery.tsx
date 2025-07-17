import React from 'react';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import gallery6 from '@/assets/gallery-6.jpg';

const galleryImages = [
  { src: gallery1, alt: "Hair transformation" },
  { src: gallery2, alt: "Bridal makeup" },
  { src: gallery3, alt: "Nail art design" },
  { src: gallery4, alt: "Facial treatment" },
  { src: gallery5, alt: "Hair coloring" },
  { src: gallery6, alt: "Eyebrow shaping" }
];

export const SalonGallery = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Glow Up Gallery
          </h2>
          <p className="font-sans text-lg text-muted-foreground">
            See the beautiful transformations from our talented team
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-image">
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-80 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};