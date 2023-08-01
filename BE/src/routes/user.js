import express from "express";
import { signup } from "../controllers/auth";

const routerUser = express.Router();

routerUser.post("/signup", signup);

export default routerUser;