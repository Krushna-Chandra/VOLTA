import { VehicleModel, TechFeature } from '../types';

export const vehicleModels: VehicleModel[] = [
  {
    id: 'lx-400e',
    name: 'LX 400e',
    tagline: 'Urban Elegance Redefined',
    range: 420,
    acceleration: '5.8',
    chargeTime: '40',
    topSpeed: 180,
    price: '₹45,00,000',
    image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    id: 'mx-550e',
    name: 'MX 550e',
    tagline: 'Performance Meets Luxury',
    range: 480,
    acceleration: '4.2',
    chargeTime: '35',
    topSpeed: 220,
    price: '₹65,00,000',
    image: 'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    id: 'rx-performance',
    name: 'RX Performance',
    tagline: 'Unleash Pure Power',
    range: 450,
    acceleration: '3.1',
    chargeTime: '30',
    topSpeed: 260,
    price: '₹85,00,000',
    image: 'https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
];

export const techFeatures: TechFeature[] = [
  {
    id: '1',
    title: 'Autonomous Driving Suite',
    description: 'Level 3 autonomous driving with AI-powered navigation, adaptive cruise control, and intelligent lane assistance.',
    icon: 'brain-circuit',
  },
  {
    id: '2',
    title: 'AI Battery Management',
    description: 'Neural network-optimized battery system that learns your driving patterns to maximize range and efficiency.',
    icon: 'battery-charging',
  },
  {
    id: '3',
    title: 'Smart Infotainment OS',
    description: 'Next-generation 17" touchscreen interface with voice control, gesture recognition, and cloud connectivity.',
    icon: 'smartphone',
  },
  {
    id: '4',
    title: 'OTA Software Updates',
    description: 'Continuous improvements delivered wirelessly. Your vehicle gets better over time with new features and enhancements.',
    icon: 'download-cloud',
  },
];

export const colorOptions = [
  { id: 'midnight-black', name: 'Midnight Black', hex: '#0a0a0a' },
  { id: 'polar-white', name: 'Polar White', hex: '#f5f5f5' },
  { id: 'meteor-grey', name: 'Meteor Grey', hex: '#71717a' },
  { id: 'electric-blue', name: 'Electric Blue', hex: '#3b82f6' },
  { id: 'quantum-silver', name: 'Quantum Silver', hex: '#94a3b8' },
];

export const wheelOptions = [
  { id: '19-aero', name: '19" Aero Wheels', image: '🔘' },
  { id: '20-sport', name: '20" Sport Wheels', image: '⚙️' },
  { id: '21-performance', name: '21" Performance Wheels', image: '⭕' },
];

export const interiorOptions = [
  { id: 'black-vegan', name: 'Black Vegan Leather', color: '#1a1a1a' },
  { id: 'cream-luxury', name: 'Cream Luxury', color: '#faf8f3' },
  { id: 'carbon-sport', name: 'Carbon Sport', color: '#27272a' },
];
