import express from "express";
import dotenv from "dotenv"
import { site } from "./route/web.js";
import mongoose, { mongo } from "mongoose";
import bookrouter from "./route/book_route.js";
import user_route from "./route/user_route.js";
import cors from "cors";
dotenv.config();
const app=express();
const PORT=process.env.PORT||3000
//this line is used so we can work on diff port for backend and frontend. else fronted cant get data from backend
app.use(cors());
//this line convert all data comming from post method to json form
app.use(express.json())

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
app.use("/user",user_route)
app.listen(PORT)