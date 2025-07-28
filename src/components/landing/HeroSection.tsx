
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brilliance via-pale-grey to-lavender-blue/30" />
      
      {/* Content */}
      <div className="relative container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-little-dipper bg-brilliance/50 px-3 py-1 text-sm font-medium backdrop-blur-sm">
            <Sparkles className="mr-2 h-4 w-4 text-primary" />
            AI-Powered Marketplace Analysis
          </div>
          
          {/* Headline */}
          <h1 className="mt-8 text-4xl font-bold tracking-tight text-wall-street sm:text-6xl lg:text-7xl">
            Unlock AI insights for{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              any product
            </span>
          </h1>
          
          {/* Subline */}
          <p className="mt-6 text-lg leading-8 text-buffed-plum sm:text-xl">
            Paste a link, get instant recommendations. Transform your marketplace listings 
            with AI-powered optimization that drives sales.
          </p>
          
          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Button 
              size="lg" 
              className="gradient-primary shadow-hover hover:shadow-hover transition-all duration-200 min-h-[52px] px-8"
              onClick={onGetStarted}
            >
              Start Free Analysis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <div className="flex items-center space-x-2 text-sm text-buffed-plum">
              <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full bg-garish-green border-2 border-white" />
                <div className="h-8 w-8 rounded-full bg-primary border-2 border-white" />
                <div className="h-8 w-8 rounded-full bg-accent border-2 border-white" />
              </div>
              <span>Trusted by 10,000+ sellers</span>
            </div>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 lg:gap-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-wall-street">500K+</div>
              <div className="mt-2 text-sm text-buffed-plum">Products analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-wall-street">35%</div>
              <div className="mt-2 text-sm text-buffed-plum">Average sales increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-wall-street">4.9/5</div>
              <div className="mt-2 text-sm text-buffed-plum">User satisfaction</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
    </section>
  );
};
