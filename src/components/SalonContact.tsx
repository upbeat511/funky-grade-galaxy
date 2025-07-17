import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Instagram, MessageCircle } from 'lucide-react';

export const SalonContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="font-sans text-lg text-muted-foreground">
            Ready to glow? Contact us to book your appointment
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card-elegant">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-sans text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div>
                <label className="block font-sans text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div>
                <label className="block font-sans text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="form-textarea"
                  required
                />
              </div>
              
              <Button type="submit" className="btn-hero w-full">
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="card-elegant">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    Visit Us
                  </h3>
                  <p className="font-sans text-muted-foreground">
                    123 Rose Avenue<br />
                    Karachi, Pakistan
                  </p>
                </div>
              </div>
            </div>
            
            <div className="card-elegant">
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    Call Us
                  </h3>
                  <p className="font-sans text-muted-foreground">
                    +92 300 1234567
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <Button className="btn-hero flex-1 flex items-center justify-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>Chat with Us</span>
              </Button>
              
              <Button variant="outline" className="p-3">
                <Instagram className="w-5 h-5 text-primary" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};