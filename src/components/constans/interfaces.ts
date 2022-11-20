import { CartObject } from "../../redux/features/cart";

export interface CardScooter {
  title: string;
  price: number;
  popular: string;
  stockPrice: number;
  battery: string;
  maxSpeed: string;
  power: string;
  maxDistance: string;
  charger: string;
  description: string;
  id: string;
  category: string;
  images: string[];
  rating: {
    rate: string;
    count: string;
  };
}

export interface Order {
  userInformation: UserInformation;
  userProducts: CartObject[];
  totalPrice: number;
}

export interface UserInformation {
  adress: string;
  email: string;
  phone: string;
  userId?: string;
}
