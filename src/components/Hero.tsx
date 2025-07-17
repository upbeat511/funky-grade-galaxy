import React from 'react';
import { Button } from '@/components/ui/button';
import { GraduationCap, Calculator, Star, BookOpen } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <div className="relative overflow-hidden bg-whimsical min-h-screen flex items-center justify-center">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 text-primary/20">
          <Star className="w-12 h-12 float-animation" style={{animationDelay: '0s'}} />
        </div>
        <div className="absolute top-40 right-20 text-accent/30">
          <BookOpen className="w-16 h-16 float-animation" style={{animationDelay: '1s'}} />
        </div>
        <div className="absolute bottom-32 left-20 text-secondary-foreground/20">
          <Calculator className="w-14 h-14 float-animation" style={{animationDelay: '2s'}} />
        </div>
        <div className="absolute bottom-20 right-10 text-primary/20">
          <GraduationCap className="w-20 h-20 float-animation" style={{animationDelay: '0.5s'}} />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <div className="bounce-in mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-primary-foreground to-white bg-clip-text text-transparent">
                GPA
              </span>
              <br />
              <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                Magic ✨
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="bounce-in mb-12" style={{animationDelay: '0.2s'}}>
            <p className="text-xl md:text-2xl text-white/90 font-medium leading-relaxed">
              The most adorable way to calculate your GPA! 🎓
              <br />
              <span className="text-lg">
                Track your academic journey with style, colors, and a sprinkle of fun!
              </span>
            </p>
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="card-whimsical bounce-in" style={{animationDelay: '0.3s'}}>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Multiple Semesters</h3>
                <p className="text-muted-foreground text-sm">
                  Add and manage all your semesters in one beautiful place
                </p>
              </div>
            </div>

            <div className="card-whimsical bounce-in" style={{animationDelay: '0.4s'}}>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Real-time Calculation</h3>
                <p className="text-muted-foreground text-sm">
                  Watch your CGPA and SGPA update magically as you type
                </p>
              </div>
            </div>

            <div className="card-whimsical bounce-in" style={{animationDelay: '0.5s'}}>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-foreground to-secondary-foreground/80 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Whimsical Design</h3>
                <p className="text-muted-foreground text-sm">
                  Because calculating grades should be fun, not stressful!
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="bounce-in" style={{animationDelay: '0.6s'}}>
            <Button
              onClick={onGetStarted}
              className="btn-hero"
              size="hero"
            >
              <Calculator className="w-6 h-6 mr-3" />
              Start Calculating Magic
              <Star className="w-6 h-6 ml-3" />
            </Button>
          </div>

          {/* Fun subtitle */}
          <div className="bounce-in mt-8" style={{animationDelay: '0.7s'}}>
            <p className="text-white/70 text-sm">
              Made with 💜 for students who deserve beautiful tools
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};