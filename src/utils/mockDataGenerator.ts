
export interface MockAnalysisResult {
  id: string;
  url: string;
  marketplace: string;
  platform: string;
  product: {
    name: string;
    price: string;
    originalPrice?: string;
    imageUrl: string;
    imageQuality: number;
    category: string;
    rating: number;
    reviewCount: number;
  };
  analysis: {
    titleSuggestions: string[];
    descriptionSuggestions: string[];
    pricingSuggestions: string[];
    imageSuggestions: string[];
    keywordSuggestions: string[];
    overallScore: number;
    competitorAnalysis: {
      averagePrice: string;
      pricePosition: 'above' | 'below' | 'competitive';
      marketShare: number;
    };
  };
  generatedAt: string;
}

const productNames = [
  "Wireless Bluetooth Headphones with Noise Cancellation",
  "Premium Coffee Maker with Built-in Grinder",
  "Smart Fitness Tracker with Heart Rate Monitor",
  "Ergonomic Office Chair with Lumbar Support",
  "Stainless Steel Water Bottle - 32oz",
  "LED Desk Lamp with USB Charging Port",
  "Portable Phone Stand for Desk and Travel",
  "Organic Cotton Bed Sheets - Queen Size",
  "Kitchen Knife Set with Wooden Block",
  "Bluetooth Speaker with 20-Hour Battery Life"
];

const categories = [
  "Electronics", "Home & Kitchen", "Health & Fitness", 
  "Office Products", "Sports & Outdoors", "Beauty & Personal Care"
];

const titleSuggestions = [
  "Include primary keyword at the beginning",
  "Add emotional triggers like 'Premium' or 'Professional'",
  "Mention key benefits in the title",
  "Use power words like 'Ultimate', 'Advanced', 'Pro'",
  "Include size/quantity information",
  "Add seasonal relevance if applicable"
];

const descriptionSuggestions = [
  "Start with a compelling hook in the first sentence",
  "Use bullet points for key features",
  "Include technical specifications",
  "Add social proof and testimonials",
  "Mention warranty and return policy",
  "Use action words and benefit-focused language"
];

const pricingSuggestions = [
  "Price is 15% higher than market average - consider lowering",
  "Competitive pricing detected - maintain current price",
  "Bundle with accessories to increase average order value",
  "Offer limited-time discount to boost conversions",
  "Price matches top competitors - good positioning",
  "Consider psychological pricing (e.g., $19.99 vs $20.00)"
];

const imageSuggestions = [
  "Add lifestyle images showing product in use",
  "Include size comparison with common objects",
  "Show product from multiple angles",
  "Add infographic highlighting key features",
  "Use consistent lighting and background",
  "Include packaging and unboxing shots"
];

const keywordSuggestions = [
  "wireless, bluetooth, noise-cancelling",
  "premium, professional, high-quality",
  "ergonomic, comfortable, durable",
  "portable, travel-friendly, compact",
  "smart, advanced, innovative",
  "organic, natural, eco-friendly"
];

export const generateMockAnalysis = (url: string, marketplace: string, platform: string): MockAnalysisResult => {
  const productName = productNames[Math.floor(Math.random() * productNames.length)];
  const category = categories[Math.floor(Math.random() * categories.length)];
  const price = (Math.random() * 200 + 10).toFixed(2);
  const originalPrice = Math.random() > 0.6 ? (parseFloat(price) * 1.2).toFixed(2) : undefined;
  const imageQuality = Math.floor(Math.random() * 15) + 85; // 85-99%
  const rating = Math.round((Math.random() * 2 + 3) * 10) / 10; // 3.0-5.0
  const reviewCount = Math.floor(Math.random() * 5000) + 100;
  const overallScore = Math.floor(Math.random() * 20) + 75; // 75-94%

  return {
    id: Math.random().toString(36).substr(2, 9),
    url,
    marketplace,
    platform,
    product: {
      name: productName,
      price: `$${price}`,
      originalPrice: originalPrice ? `$${originalPrice}` : undefined,
      imageUrl: "/placeholder.svg",
      imageQuality,
      category,
      rating,
      reviewCount
    },
    analysis: {
      titleSuggestions: titleSuggestions.slice(0, Math.floor(Math.random() * 3) + 3),
      descriptionSuggestions: descriptionSuggestions.slice(0, Math.floor(Math.random() * 3) + 3),
      pricingSuggestions: pricingSuggestions.slice(0, Math.floor(Math.random() * 2) + 2),
      imageSuggestions: imageSuggestions.slice(0, Math.floor(Math.random() * 3) + 3),
      keywordSuggestions: keywordSuggestions.slice(0, Math.floor(Math.random() * 3) + 3),
      overallScore,
      competitorAnalysis: {
        averagePrice: `$${(parseFloat(price) * (0.8 + Math.random() * 0.4)).toFixed(2)}`,
        pricePosition: Math.random() > 0.5 ? 'competitive' : Math.random() > 0.5 ? 'above' : 'below',
        marketShare: Math.floor(Math.random() * 30) + 15
      }
    },
    generatedAt: new Date().toISOString()
  };
};
