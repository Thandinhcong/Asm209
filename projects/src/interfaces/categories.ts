import { IProduct } from "./products";

export interface ICate {
  _id?: string;
  name: string;
  products: IProduct,
}
