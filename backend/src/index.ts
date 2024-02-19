import express,{Request,Response}  from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

;(async ()=>{
    try{
    const connectionInstance = await mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
    console.log(`Database connected. DB HOST: ${connectionInstance.connection.host}`);
    }
    catch(err) {
        console.log(`DB connection error`,err);
    }
})();


const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", async (req : Request, res : Response) =>{
    res.json({message:"HELLO!!"});
})

app.listen(8000,(()=>console.log("Server started on localhost:8000")));