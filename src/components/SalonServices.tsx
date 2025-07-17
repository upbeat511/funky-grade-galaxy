import React from 'react';
import { Scissors, Sparkles, Palette, Heart } from 'lucide-react';
import hairIcon from '@/assets/hair-icon.jpg';
import facialIcon from '@/assets/facial-icon.jpg';
import makeupIcon from '@/assets/makeup-icon.jpg';
import nailsIcon from '@/assets/nails-icon.jpg';

const services = [
  {
    title: "Haircuts & Styling",
    description: "From sleek cuts to voluminous blowouts",
    price: "Starting at $25",
    icon: Scissors,
    image: hairIcon
  },
  {
    title: "Facials & Skincare",
    description: "Deep cleansing facials tailored to your skin",
    price: "Starting at $35",
    icon: Sparkles,
    image: facialIcon
  },
  {
    title: "Makeup & Bridal",
    description: "Glam looks for any occasion",
    price: "Starting at $45",
    icon: Palette,
    image: makeupIcon
  },
  {
    title: "Manicure & Pedicure",
    description: "Relaxing hand and foot care",
    price: "Starting at $20",
    icon: Heart,
    image: nailsIcon
  }
];

export const SalonServices = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="font-sans text-lg text-muted-foreground">
            Discover our range of beauty treatments designed to make you glow
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-sans text-muted-foreground mb-4 text-sm">
                {service.description}
              </p>
              <p className="font-sans text-primary font-medium">
                {service.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};