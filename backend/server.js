import express from "express"
import dotenv from "dotenv"
import { log } from "console";
import authroutes from "./routes/auth.route.js"
import connectToMongoDB from "./utils/ConnectToMongo.js";

dotenv.config()

const PORT = process.env.PORT || 5000

const app = express();

app.use("/api/auth",authroutes);

app.listen(PORT,()=>{
    
    log(`server started at port : ${PORT}`)

    connectToMongoDB()


})