import type { SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
  name: 'Kenai Land Sales',
  title: 'Kenai Land Sales - Premier Land Marketplace',
  description: 'Acreage, lots, and raw land for sale on the Kenai Peninsula. Build your Alaska dream on prime land',
  url: 'https://kenailandsales.com',
  ogImage: '/og-image.jpg',
  phone: '(907) 555-0104',
  email: 'land@kenailandsales.com',
  address: 'Kenai Peninsula, Alaska',
  businessType: 'RealEstateAgent',
  primaryColor: '#2d9f5f',
  relatedSites: [
    { name: 'Kenai Borough', url: 'https://kenaiborough.com', description: 'Official Kenai Peninsula Borough portal' },
    { name: 'Kenai Borough Realty', url: 'https://kenaiboroughrealty.com', description: 'Full-service real estate for homes, land, and commercial properties' },
    { name: 'Kenai Peninsula Rentals', url: 'https://kenaipeninsularentals.com', description: 'Long-term and short-term rental listings' },
    { name: 'Kenai Home Sales', url: 'https://kenaihomesales.com', description: 'Residential home sales experts' },
    { name: 'Kenai Auto Sales', url: 'https://kenaiautosales.com', description: 'Quality vehicles for Alaska living' }
  ],
  listingTypes: ['land', 'lot']
};
