
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section className="relative py-12 sm:py-16 lg:py-24 xl:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brilliance via-pale-grey to-lavender-blue/30" />
      
      {/* Content */}
      <div className="relative container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-little-dipper bg-brilliance/50 px-3 py-1 text-xs sm:text-sm font-medium backdrop-blur-sm">
            <Sparkles className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-primary" />
            AI-Powered Marketplace Analysis
          </div>
          
          {/* Headline */}
          <h1 className="mt-6 sm:mt-8 text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-wall-street">
            Unlock AI insights for{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              any product
            </span>
          </h1>
          
          {/* Subline */}
          <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 text-buffed-plum max-w-3xl mx-auto">
            Paste a link, get instant recommendations. Transform your marketplace listings 
            with AI-powered optimization that drives sales.
          </p>
          
          {/* CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Button 
              size="lg" 
              className="gradient-primary shadow-hover hover:shadow-hover transition-all duration-200 min-h-[48px] sm:min-h-[52px] px-6 sm:px-8 w-full sm:w-auto"
              onClick={onGetStarted}
            >
              Start Free Analysis
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            
            <div className="flex items-center space-x-2 text-xs sm:text-sm text-buffed-plum">
              <div className="flex -space-x-1 sm:-space-x-2">
                <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-garish-green border-2 border-white" />
                <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-primary border-2 border-white" />
                <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-accent border-2 border-white" />
              </div>
              <span>Trusted by 10,000+ sellers</span>
            </div>
          </div>
          
          {/* Stats */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-16">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-wall-street">500K+</div>
              <div className="mt-2 text-xs sm:text-sm text-buffed-plum">Products analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-wall-street">35%</div>
              <div className="mt-2 text-xs sm:text-sm text-buffed-plum">Average sales increase</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-wall-street">4.9/5</div>
              <div className="mt-2 text-xs sm:text-sm text-buffed-plum">User satisfaction</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-accent/5 rounded-full blur-3xl" />
    </section>
  );
};
