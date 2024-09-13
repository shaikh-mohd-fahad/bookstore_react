import express from "express";
import dotenv from "dotenv"
import { site } from "./route/web.js";
import mongoose, { mongo } from "mongoose";
import bookrouter from "./route/book_route.js";
dotenv.config();
const app=express();
const PORT=process.env.PORT||3000
//conntect to DB
const URI=process.env.mongoDBURI;
try{
    mongoose.connect(URI)
        console.log("db connected")
}
catch(error){
    console.log("eorror: "+error);
}

app.use("/book",bookrouter)
app.use("/home",site)
app.listen(PORT)