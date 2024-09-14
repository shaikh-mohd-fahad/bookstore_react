import Book from "../model/book.model.js";
export const getBook= async(req,res)=>{
    // res.send("controller book work")
    try{
        const book=await Book.find();
        // console.log(book);
        res.status(200).json(book);
    }
    catch(error){
        console.log("error: "+error);
        res.status(500).json(error);
    }
}