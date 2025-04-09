export interface Visitor {
  name: string;
  phone: string;
  relation: string;
  date: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  imageUrl: string;
  }