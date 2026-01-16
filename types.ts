export interface Room {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  capacity: number;
  size: string;
  imageUrl: string;
  amenities: string[];
}

export interface Amenity {
  id: string;
  name: string;
  iconName: string;
  description: string;
}

export interface DateRange {
  startDate: string;
  endDate: string;
  guests: number;
}