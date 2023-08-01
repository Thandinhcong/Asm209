import express from "express";
import { addProduct, getAllProducts, getOneProduct, remove, update } from "../controllers/products";

const routerProduct = express.Router();

routerProduct.get("/products", getAllProducts);
routerProduct.get("/products/:id", getOneProduct)
routerProduct.post("/products", addProduct)
routerProduct.delete("/products/:id", remove);
routerProduct.patch("/products/:id", update);
export default routerProduct;