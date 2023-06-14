import { Timestamp } from 'firebase/firestore';
import { ProductRanking } from '../enums/product-ranking';

export interface Product {
  id: string;
  SKU: string;
  discount: number;
  price: number;
  quantity: number;
  categoryId: string;
  color?: string;
  description?: string;
  name: string;
  productDimensions?: string;
  ranking?: ProductRanking;
  supplierId: string;
  type?: string; //TODO: Create enum Type
  createdAt: Timestamp;
  updatedAt: Timestamp;

}
