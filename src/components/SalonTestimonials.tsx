import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Absolutely love this salon! The facial made my skin glow.",
    name: "Aisha K.",
    rating: 5
  },
  {
    quote: "Best bridal makeup ever. Felt like a princess!",
    name: "Sarah M.",
    rating: 5
  },
  {
    quote: "Professional staff and cozy environment.",
    name: "Laila R.",
    rating: 5
  }
];

export const SalonTestimonials = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Client Love
          </h2>
          <p className="font-sans text-lg text-muted-foreground">
            Hear what our beautiful clients have to say
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-sans text-foreground mb-4 italic">
                "{testimonial.quote}"
              </p>
              <p className="font-serif text-primary font-medium">
                – {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};