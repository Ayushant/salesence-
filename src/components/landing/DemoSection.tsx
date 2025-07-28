
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Package, ExternalLink } from "lucide-react";

export const DemoSection = () => {
  const [url, setUrl] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = async () => {
    if (!url.trim()) return;
    
    setIsAnalyzing(true);
    // Simulate API call
    setTimeout(() => {
      setIsAnalyzing(false);
      // Redirect to signup with URL
      console.log("Analyzing:", url);
    }, 2000);
  };

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Demo Input */}
          <Card className="bg-brilliance border-diamond-cut shadow-subtle">
            <CardContent className="p-6 sm:p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-wall-street mb-2">
                  Try it now - FREE
                </h2>
                <p className="text-buffed-plum">
                  Paste any Amazon, eBay, or Etsy product link to see AI recommendations
                </p>
              </div>
              
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                  <Input
                    type="url"
                    placeholder="https://amazon.com/product/..."
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="h-14 pl-12 text-base border-little-dipper bg-white/50 backdrop-blur-sm focus:border-primary"
                  />
                  <ExternalLink className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-buffed-plum" />
                </div>
                <Button
                  onClick={handleAnalyze}
                  disabled={!url.trim() || isAnalyzing}
                  className="h-14 px-8 gradient-primary shadow-hover hover:shadow-hover transition-all duration-200"
                >
                  {isAnalyzing ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Search className="mr-2 h-4 w-4" />
                      <span className="hidden sm:inline">Analyze Free</span>
                      <span className="sm:hidden">Analyze</span>
                    </>
                  )}
                </Button>
              </div>
              
              <div className="mt-6 text-center">
                <div className="inline-flex items-center space-x-2 text-sm text-buffed-plum">
                  <div className="h-2 w-2 bg-garish-green rounded-full" />
                  <span>Your first analysis is free—no signup required</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Empty State */}
          <div className="mt-12 text-center">
            <div className="mx-auto w-32 h-32 bg-diamond-cut rounded-full flex items-center justify-center mb-6">
              <Package className="h-16 w-16 text-buffed-plum stroke-1" />
            </div>
            <p className="text-buffed-plum text-base">
              Your first analysis is free—add a product above
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
