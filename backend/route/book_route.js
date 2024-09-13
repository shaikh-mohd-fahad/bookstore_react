import express from "express";
import { getBook } from "../controller/bookController.js";
const bookrouter=express.Router();
bookrouter.get("/",getBook)
export default bookrouter;