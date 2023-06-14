import { Timestamp } from 'firebase/firestore';
import { OrdersStatus } from '../enums/orders-status.enum';

export interface Orders {
  id: string;
  customerId: string;
  status: OrdersStatus;
  paymentStatus: boolean;
  paymentId: string;
  date: Timestamp;
  shipDate: Timestamp;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
