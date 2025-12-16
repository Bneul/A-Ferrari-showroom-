import { CarModel } from './types';

export const FEATURED_MODELS: CarModel[] = [
  {
    id: 'sf90-stradale',
    name: 'SF90 Stradale',
    tagline: 'Beyond Imagination',
    price: 'AED 2,000,000+',
    specs: {
      engine: 'V8 Turbo + 3 Electric Motors',
      power: '1000 cv',
      acceleration: '0-100 km/h in 2.5s',
      maxSpeed: '340 km/h'
    },
    image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=2070&auto=format&fit=crop',
    category: 'Sports'
  },
  {
    id: 'purosangue',
    name: 'Ferrari Purosangue',
    tagline: 'Unlike Any Other',
    price: 'AED 1,700,000+',
    specs: {
      engine: 'V12 Naturally Aspirated',
      power: '725 cv',
      acceleration: '0-100 km/h in 3.3s',
      maxSpeed: '> 310 km/h'
    },
    image: 'https://images.unsplash.com/photo-1695058763583-1763784f1839?q=80&w=2070&auto=format&fit=crop',
    category: 'GT'
  },
  {
    id: 'roma-spider',
    name: 'Ferrari Roma Spider',
    tagline: 'La Nuova Dolce Vita',
    price: 'AED 1,100,000+',
    specs: {
      engine: 'V8 Turbo',
      power: '620 cv',
      acceleration: '0-100 km/h in 3.4s',
      maxSpeed: '320 km/h'
    },
    image: 'https://images.unsplash.com/photo-1620882015091-68b3756b5001?q=80&w=2070&auto=format&fit=crop',
    category: 'GT'
  },
  {
    id: '296-gtb',
    name: '296 GTB',
    tagline: 'Defining Fun to Drive',
    price: 'AED 1,300,000+',
    specs: {
      engine: 'V6 Hybrid',
      power: '830 cv',
      acceleration: '0-100 km/h in 2.9s',
      maxSpeed: '> 330 km/h'
    },
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop',
    category: 'Sports'
  }
];

export const NAV_LINKS = [
  { name: 'Models', href: '#models' },
  { name: 'Universe', href: '#universe' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];
