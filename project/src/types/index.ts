export interface VehicleModel {
  id: string;
  name: string;
  tagline: string;
  range: number;
  acceleration: string;
  chargeTime: string;
  topSpeed: number;
  price: string;
  image: string;
}

export interface VehicleConfig {
  model: string;
  color: string;
  wheels: string;
  interior: string;
}

export interface TestDriveBooking {
  name: string;
  email: string;
  phone: string;
  preferredModel: string;
  city: string;
}

export interface TechFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Language {
  code: 'en' | 'hi' | 'bn';
  name: string;
  flag: string;
}
