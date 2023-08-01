import express from "express";
import { Add, get, getAll, remove } from "../controllers/categories";
import { authenticate } from "../middleware/authenticate";
const cateRouter = express.Router();

cateRouter.get("/categories", getAll)
cateRouter.get("/categories/:id", get)
cateRouter.post("/categories", authenticate, Add);
cateRouter.delete("/categories/:id", authenticate, remove);


export default cateRouter;