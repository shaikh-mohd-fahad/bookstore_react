import express from "express"
import { home } from "../controller/homeController.js";
const site=express.Router();
site.get("/",home)
export {site}