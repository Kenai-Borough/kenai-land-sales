export interface User {
  id: string;
  email: string;
  full_name?: string;
  phone?: string;
  created_at: string;
}

export interface LandListing {
  id: string;
  user_id: string;
  title: string;
  description: string;
  price: number;
  acreage: number;
  location: string;
  latitude?: number;
  longitude?: number;
  
  zoning?: string;
  parcel_number?: string;
  road_access: 'paved' | 'gravel' | 'trail' | 'none';
  utilities_water: boolean;
  utilities_electric: boolean;
  utilities_sewer: boolean;
  utilities_gas: boolean;
  topography: string;
  land_use_suggestions?: string;
  property_tax_annual?: number;
  survey_available: boolean;
  
  images: string[];
  video_url?: string;
  documents: string[];
  
  status: 'pending' | 'active' | 'sold' | 'expired';
  payment_status: 'unpaid' | 'paid';
  featured: boolean;
  featured_until?: string;
  
  views: number;
  created_at: string;
  updated_at: string;
  expires_at: string;
  
  user?: User;
}

export interface PaymentIntent {
  id: string;
  user_id: string;
  listing_id?: string;
  amount: number;
  type: 'listing' | 'featured';
  stripe_payment_id?: string;
  status: 'pending' | 'completed' | 'failed';
  created_at: string;
}

export interface Message {
  id: string;
  listing_id: string;
  from_user_id: string;
  to_user_id: string;
  message: string;
  read: boolean;
  created_at: string;
}

export interface SearchFilters {
  minPrice?: number;
  maxPrice?: number;
  minAcreage?: number;
  maxAcreage?: number;
  location?: string;
  zoning?: string;
  roadAccess?: string[];
  utilities?: string[];
  sortBy?: 'price_asc' | 'price_desc' | 'acreage_asc' | 'acreage_desc' | 'newest' | 'oldest';
}
