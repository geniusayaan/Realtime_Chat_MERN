import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import { log } from "console";
import authroutes from "./routes/auth.route.js"
import messageroute from "./routes/message.route.js"
import userToGet from "./routes/user.route.js"
import connectToMongoDB from "./db/ConnectToMongo.js";

dotenv.config()

const PORT = process.env.PORT || 5000

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth",authroutes);


app.use("/api/messages",messageroute)
app.use("/api",userToGet)

app.listen(PORT,()=>{
    
    log(`server started at port : ${PORT}`)

    connectToMongoDB()


})