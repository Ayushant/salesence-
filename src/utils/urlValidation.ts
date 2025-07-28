
export const validateProductUrl = (url: string): { isValid: boolean; error?: string } => {
  if (!url.trim()) {
    return { isValid: false, error: "Please enter a product URL" };
  }

  try {
    const urlObj = new URL(url);
    const hostname = urlObj.hostname.toLowerCase();
    
    // Check for supported marketplaces
    const supportedMarketplaces = [
      'amazon.com', 'amazon.co.uk', 'amazon.ca', 'amazon.de', 'amazon.fr',
      'ebay.com', 'ebay.co.uk', 'ebay.ca', 'ebay.de', 'ebay.fr',
      'etsy.com',
      'shopify.com',
      'walmart.com',
      'target.com',
      'aliexpress.com',
      'alibaba.com'
    ];

    const isSupported = supportedMarketplaces.some(domain => 
      hostname.includes(domain) || hostname.endsWith(domain)
    );

    if (!isSupported) {
      return { isValid: false, error: "Please enter a valid marketplace URL (Amazon, eBay, Etsy, etc.)" };
    }

    return { isValid: true };
  } catch {
    return { isValid: false, error: "Please enter a valid URL" };
  }
};

export const extractProductInfo = (url: string) => {
  const urlObj = new URL(url);
  const hostname = urlObj.hostname.toLowerCase();
  
  // Extract basic info from URL structure
  if (hostname.includes('amazon')) {
    return { marketplace: 'Amazon', platform: 'amazon' };
  } else if (hostname.includes('ebay')) {
    return { marketplace: 'eBay', platform: 'ebay' };
  } else if (hostname.includes('etsy')) {
    return { marketplace: 'Etsy', platform: 'etsy' };
  } else if (hostname.includes('shopify')) {
    return { marketplace: 'Shopify Store', platform: 'shopify' };
  } else if (hostname.includes('walmart')) {
    return { marketplace: 'Walmart', platform: 'walmart' };
  } else if (hostname.includes('target')) {
    return { marketplace: 'Target', platform: 'target' };
  } else {
    return { marketplace: 'Online Store', platform: 'generic' };
  }
};
