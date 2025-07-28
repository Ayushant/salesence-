
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
    <section id="features" className="py-16 sm:py-24 bg-pale-grey">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-wall-street sm:text-4xl">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              optimize your listings
            </span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-buffed-plum">
            Professional-grade analysis tools that help you compete with top sellers in any marketplace.
          </p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="bg-brilliance border-diamond-cut shadow-subtle hover:shadow-hover transition-all duration-200 group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-lavender-blue group-hover:bg-primary transition-colors duration-200">
                    <feature.icon className="h-5 w-5 text-primary group-hover:text-white transition-colors duration-200" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-wall-street">
                    {feature.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-buffed-plum leading-relaxed">
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
