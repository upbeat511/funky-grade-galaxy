import React, { useState } from 'react';
import { Hero } from '@/components/Hero';
import { GPACalculator } from '@/components/GPACalculator';

const Index = () => {
  const [showCalculator, setShowCalculator] = useState(false);

  if (showCalculator) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <button
              onClick={() => setShowCalculator(false)}
              className="text-primary hover:text-primary/80 font-medium mb-4 inline-block"
            >
              ← Back to Home
            </button>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-2">
              GPA Calculator
            </h1>
            <p className="text-muted-foreground">
              Let's make your academic tracking magical! ✨
            </p>
          </div>
          <GPACalculator />
        </div>
      </div>
    );
  }

  return <Hero onGetStarted={() => setShowCalculator(true)} />;
};

export default Index;
