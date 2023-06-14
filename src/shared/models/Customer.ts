import { Timestamp } from 'firebase/firestore';

export interface Customer {
  address: string;
  zipCode: string;
  city: string;
  country: string;
  birthday?: Timestamp;
  creditCardExpMonth?: number;
  creditCardExpYear?: number;
  creditCardNumber?: number;
  email: string;
  gender: string;
  id: string;
  name: string;
  phoneNumber: string;
  notifications: boolean;
  shipAddress?: string;
  shipCity?: string;
  shipCountry?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
