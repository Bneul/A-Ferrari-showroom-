export interface CarModel {
  id: string;
  name: string;
  tagline: string;
  price: string;
  specs: {
    engine: string;
    power: string;
    acceleration: string;
    maxSpeed: string;
  };
  image: string;
  category: 'Sports' | 'GT' | 'Special Series' | 'Icona';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}
