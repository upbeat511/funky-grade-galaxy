import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { GraduationCap, Calculator, Star, BookOpen, Mail, Lock, User } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero = ({ onGetStarted }: HeroProps) => {
  const [showLogin, setShowLogin] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just proceed to calculator
    onGetStarted();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (showLogin) {
    return (
      <div className="relative overflow-hidden bg-whimsical min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <button
                onClick={() => setShowLogin(false)}
                className="text-primary hover:text-primary/80 font-medium mb-4 inline-block"
              >
                ← Back to Home
              </button>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-2">
                {isSignUp ? 'Join GPA Magic' : 'Welcome Back'}
              </h1>
              <p className="text-foreground/70">
                {isSignUp ? 'Create your magical account! ✨' : 'Ready to calculate some magic? 🎓'}
              </p>
            </div>

            <Card className="card-whimsical bounce-in">
              <form onSubmit={handleSubmit} className="space-y-6 p-6">
                {isSignUp && (
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium mb-2 block">
                      Full Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="pl-10 rounded-xl"
                        required={isSignUp}
                      />
                    </div>
                  </div>
                )}

                <div>
                  <Label htmlFor="email" className="text-sm font-medium mb-2 block">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="pl-10 rounded-xl"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="password" className="text-sm font-medium mb-2 block">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      className="pl-10 rounded-xl"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full btn-hero"
                >
                  <Calculator className="w-4 h-4 mr-2" />
                  {isSignUp ? 'Create Account & Start' : 'Login & Calculate'}
                  <Star className="w-4 h-4 ml-2" />
                </Button>

                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setIsSignUp(!isSignUp)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign up"}
                  </button>
                </div>
              </form>
            </Card>

            <div className="text-center mt-6">
              <p className="text-foreground/60 text-sm">
                Made with 💜 for students who deserve beautiful tools
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

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

          {/* CTA Buttons */}
          <div className="bounce-in space-y-4" style={{animationDelay: '0.6s'}}>
            <Button
              onClick={() => setShowLogin(true)}
              className="btn-hero mr-4"
              size="hero"
            >
              <Calculator className="w-6 h-6 mr-3" />
              Start Calculating Magic
              <Star className="w-6 h-6 ml-3" />
            </Button>
            <div className="text-center">
              <button
                onClick={onGetStarted}
                className="text-white/80 hover:text-white text-sm underline transition-colors"
              >
                Skip login and try it out
              </button>
            </div>
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