import express from "express";
import {
  addProduct,
  getAllProducts,
  getOneProduct,
  remove,
  update,
} from "../controllers/products";
import { authenticate } from "../middleware/authenticate";

const routerProduct = express.Router();

routerProduct.get("/products", getAllProducts);
routerProduct.get("/products/:id", getOneProduct);
routerProduct.post("/products", authenticate, addProduct);
routerProduct.delete("/products/:id", authenticate, remove);
routerProduct.patch("/products/:id", authenticate, update);
export default routerProduct;
