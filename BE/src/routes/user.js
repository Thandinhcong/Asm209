import express from "express";
import { signin, signup } from "../controllers/auth";
import { getALL, getOneUser, getUserProfile, updateUserProfile } from "../controllers/user";
import { authorization } from "../middleware/authorization";

const routerUser = express.Router();

routerUser.post("/signup", signup);
routerUser.post("/signin", signin);
// routerUser.get("/users/profile", getUserProfile)
routerUser.put("/users/:id", updateUserProfile)
routerUser.get("/users", getALL)
routerUser.get("/users/:id", getOneUser)

export default routerUser;