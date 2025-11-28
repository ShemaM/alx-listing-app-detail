export interface Property {
  id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  reviewCount: number;
  location: string;
  description: string;
  amenities: string[];
  reviews: Review[];
}

export interface Review {
  id: string;
  user: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
}