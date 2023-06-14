import { Timestamp } from 'firebase/firestore';
import { CategoryTypes } from '../enums/category-types.enum';

export interface Category {
  id: string;
  name: string;
  type: CategoryTypes;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
