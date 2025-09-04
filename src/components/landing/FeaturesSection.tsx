
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, TrendingUp, BarChart3, Target, Shield, Clock } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant AI Analysis",
    description: "Get comprehensive product optimization suggestions in seconds, powered by advanced AI algorithms."
  },
  {
    icon: TrendingUp,
    title: "Sales Optimization",
    description: "Increase your conversion rates with data-driven title, description, and pricing recommendations."
  },
  {
    icon: BarChart3,
    title: "Performance Tracking",
    description: "Monitor your improvements with detailed analytics and track which suggestions drive results."
  },
  {
    icon: Target,
    title: "Multi-Platform",
    description: "Works with Amazon, eBay, Etsy, and other major marketplaces. One tool for all your listings."
  },
  {
    icon: Shield,
    title: "Data Security",
    description: "Your product data is encrypted and secure. We never share your information with competitors."
  },
  {
    icon: Clock,
    title: "Save Time",
    description: "What used to take hours of research now takes minutes. Focus on growing your business, not optimizing."
  }
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-12 sm:py-16 lg:py-24 bg-pale-grey">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-wall-street">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              optimize your listings
            </span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-buffed-plum">
            Professional-grade analysis tools that help you compete with top sellers in any marketplace.
          </p>
        </div>
        
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="bg-brilliance border-diamond-cut shadow-subtle hover:shadow-hover transition-all duration-200 group"
            >
              <CardHeader className="pb-3 sm:pb-4">
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-lavender-blue group-hover:bg-primary transition-colors duration-200 flex-shrink-0">
                    <feature.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary group-hover:text-white transition-colors duration-200" />
                  </div>
                  <CardTitle className="text-base sm:text-lg font-semibold text-wall-street leading-tight">
                    {feature.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm sm:text-base text-buffed-plum leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
