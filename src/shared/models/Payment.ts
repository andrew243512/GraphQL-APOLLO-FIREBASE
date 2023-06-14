import { Timestamp } from 'firebase/firestore';

export interface Payment {
  id: string;
  status: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
