import express from "express"
import { signup,login } from "../controller/userController.js";
const user_route=express.Router();
user_route.post("/signup",signup)
user_route.post("/login",login)

export default user_route;