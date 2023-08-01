import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import routerProduct from "./routes/product";
import cateRouter from "./routes/categories";


const app = express();

dotenv.config();

mongoose.connect(process.env.URI)


app.use(express.json());
app.use(cors());
app.use("/api", routerProduct)
app.use("/api", cateRouter)

export const viteNodeApp = app;
