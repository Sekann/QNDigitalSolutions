export interface Visitor {
    name: string;
    phone: string;
    img: string;
    status: 'upcoming' | 'completed' | 'cancelled';
  }