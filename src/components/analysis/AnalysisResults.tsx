
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  CheckCircle, 
  AlertCircle, 
  TrendingUp, 
  TrendingDown, 
  Star, 
  ExternalLink,
  Image as ImageIcon,
  DollarSign,
  Target,
  MessageSquare
} from "lucide-react";
import { MockAnalysisResult } from "@/utils/mockDataGenerator";

interface AnalysisResultsProps {
  analysis: MockAnalysisResult;
}

export const AnalysisResults = ({ analysis }: AnalysisResultsProps) => {
  const { product, analysis: analysisData } = analysis;
  
  const getQualityColor = (score: number) => {
    if (score >= 90) return "text-garish-green";
    if (score >= 75) return "text-primary";
    return "text-destructive";
  };

  const getQualityBadgeColor = (score: number) => {
    if (score >= 90) return "bg-garish-green/10 text-garish-green border-garish-green/20";
    if (score >= 75) return "bg-primary/10 text-primary border-primary/20";
    return "bg-destructive/10 text-destructive border-destructive/20";
  };

  const getPriceIcon = (position: string) => {
    switch (position) {
      case 'above': return <TrendingUp className="h-4 w-4 text-destructive" />;
      case 'below': return <TrendingDown className="h-4 w-4 text-garish-green" />;
      default: return <Target className="h-4 w-4 text-primary" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Product Overview Card */}
      <Card className="bg-brilliance border-diamond-cut shadow-subtle">
        <CardContent className="p-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-[4/3] bg-pale-grey rounded-12 overflow-hidden">
                <img 
                  src={product.imageUrl} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <Badge 
                className={`absolute top-2 right-2 ${getQualityBadgeColor(product.imageQuality)}`}
              >
                <ImageIcon className="h-3 w-3 mr-1" />
                {product.imageQuality}% Quality
              </Badge>
            </div>

            {/* Product Details */}
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-bold text-wall-street mb-2">{product.name}</h2>
                <Badge variant="outline" className="mb-3">
                  {analysis.marketplace}
                </Badge>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{product.rating}</span>
                  </div>
                  <span className="text-buffed-plum">({product.reviewCount.toLocaleString()} reviews)</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-wall-street font-mono">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-lg text-buffed-plum line-through font-mono">{product.originalPrice}</span>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-buffed-plum">Overall Optimization Score</span>
                  <span className={`font-bold ${getQualityColor(analysisData.overallScore)}`}>
                    {analysisData.overallScore}%
                  </span>
                </div>
                <Progress value={analysisData.overallScore} className="h-2" />
              </div>

              <Button variant="outline" className="w-full">
                <ExternalLink className="h-4 w-4 mr-2" />
                View Original Listing
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Competitive Analysis */}
      <Card className="bg-brilliance border-diamond-cut shadow-subtle">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Competitive Analysis
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="text-center p-4 bg-pale-grey rounded-12">
              <div className="flex items-center justify-center gap-2 mb-2">
                {getPriceIcon(analysisData.competitorAnalysis.pricePosition)}
                <span className="font-medium">Price Position</span>
              </div>
              <p className="text-sm text-buffed-plum capitalize">
                {analysisData.competitorAnalysis.pricePosition} market average
              </p>
            </div>
            
            <div className="text-center p-4 bg-pale-grey rounded-12">
              <div className="flex items-center justify-center gap-2 mb-2">
                <DollarSign className="h-4 w-4 text-primary" />
                <span className="font-medium">Market Average</span>
              </div>
              <p className="text-sm text-buffed-plum font-mono">
                {analysisData.competitorAnalysis.averagePrice}
              </p>
            </div>
            
            <div className="text-center p-4 bg-pale-grey rounded-12">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Target className="h-4 w-4 text-primary" />
                <span className="font-medium">Market Share</span>
              </div>
              <p className="text-sm text-buffed-plum">
                {analysisData.competitorAnalysis.marketShare}% category
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Suggestions */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Title Optimization */}
        <Card className="bg-brilliance border-diamond-cut shadow-subtle">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              Title Optimization
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {analysisData.titleSuggestions.map((suggestion, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-garish-green mt-0.5 flex-shrink-0" />
                <span className="text-sm text-wall-street">{suggestion}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Description Improvements */}
        <Card className="bg-brilliance border-diamond-cut shadow-subtle">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              Description Improvements
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {analysisData.descriptionSuggestions.map((suggestion, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-garish-green mt-0.5 flex-shrink-0" />
                <span className="text-sm text-wall-street">{suggestion}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Pricing Recommendations */}
        <Card className="bg-brilliance border-diamond-cut shadow-subtle">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-primary" />
              Pricing Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {analysisData.pricingSuggestions.map((suggestion, index) => (
              <div key={index} className="flex items-start gap-3">
                <AlertCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-wall-street">{suggestion}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Image Optimization */}
        <Card className="bg-brilliance border-diamond-cut shadow-subtle">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ImageIcon className="h-5 w-5 text-primary" />
              Image Optimization
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {analysisData.imageSuggestions.map((suggestion, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-garish-green mt-0.5 flex-shrink-0" />
                <span className="text-sm text-wall-street">{suggestion}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
