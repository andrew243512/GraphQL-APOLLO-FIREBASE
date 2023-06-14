import { Timestamp } from 'firebase/firestore';

export interface Orders_Details {
  id: string;
  orderId: string;
  price: number;
  quantity: number;
  productId: string;
  total: number;
  discount: number;
  billDate: Timestamp;
  shipDate: Timestamp;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
