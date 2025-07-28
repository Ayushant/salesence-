
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Zap, TrendingUp, BarChart3, ArrowRight, Play } from "lucide-react";
import { HeroSection } from "@/components/landing/HeroSection";
import { DemoSection } from "@/components/landing/DemoSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { AuthModal } from "@/components/auth/AuthModal";

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('signup');

  const handleGetStarted = () => {
    setAuthMode('signup');
    setIsAuthModalOpen(true);
  };

  const handleSignIn = () => {
    setAuthMode('login');
    setIsAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-little-dipper bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-wall-street">Salesence</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-sm font-medium text-buffed-plum hover:text-wall-street transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-sm font-medium text-buffed-plum hover:text-wall-street transition-colors">
              Pricing
            </a>
            <Button variant="ghost" size="sm" onClick={handleSignIn} className="text-buffed-plum hover:text-wall-street">
              Sign in
            </Button>
            <Button size="sm" className="gradient-primary text-white hover:opacity-90" onClick={handleGetStarted}>
              Get Started
            </Button>
          </nav>
          
          <div className="flex md:hidden items-center space-x-2">
            <Button variant="ghost" size="sm" onClick={handleSignIn} className="text-buffed-plum hover:text-wall-street">
              Sign in
            </Button>
            <Button size="sm" className="gradient-primary text-white hover:opacity-90" onClick={handleGetStarted}>
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <HeroSection onGetStarted={handleGetStarted} />
        <DemoSection />
        <FeaturesSection />
        
        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-brilliance">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-wall-street sm:text-4xl">
                Ready to optimize your listings?
              </h2>
              <p className="mt-6 text-lg leading-8 text-buffed-plum">
                Join thousands of sellers who've increased their sales with AI-powered optimization.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button size="lg" className="gradient-primary" onClick={handleGetStarted}>
                  Start your free analysis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="ghost" size="lg" className="text-wall-street">
                  <Play className="mr-2 h-4 w-4" />
                  Watch demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-little-dipper bg-background">
        <div className="container px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="flex h-6 w-6 items-center justify-center rounded gradient-primary">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium">Salesence</span>
            </div>
            <p className="text-sm text-buffed-plum">
              © 2024 Salesence. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </div>
  );
};

export default Index;
