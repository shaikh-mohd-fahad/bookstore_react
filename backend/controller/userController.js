import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";
export const signup=async (req,res)=>{
    try {
        const {fullname,email,password}=req.body;
        // const hashPassword=bcryptjs.hash(password,10);
        const user=await User.findOne({email})
        if(user){
            return res.status(400).json({message:"User already exists"})
        }else{
            const createdUser=new User({
                fullname:fullname,
                email:email,
                password:password,
            })
            await createdUser.save()
            return res.status(201).json({message:"User Account Created",user:{
                _id:createdUser._id,
                fullname:createdUser.fullname,
                email:createdUser.email
            }})
        }
    } catch (error) {
        console.log("erorr : "+error)
    }
}
export const login=async (req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await User.findOne({email});
        const isMatch=(user.password==password)
        if(!user || !isMatch){
            return res.status(400).json({message:"Invalid email or password"});

        }else{
            res.status(200).json({
                message:"Login succesfully",
                user:{
                    _id:user._id,
                    fullname:user.fullname,
                    email:user.email
                }
            })
        }
    } catch (error) {
        console.log("erorr: "+error.message);
        res.status(500).json({message:"Internal Server Error"})
    }
}