import dotenv from "dotenv"
import { app } from "./app.js";
dotenv.config({
    path:".env"
})

const port = process.env.PORT

app.listen(port|8000,()=>{
    try {
        console.log("Server is running on port",port)
    } catch (error) {
        throw Error("Something went wrong while creating server",error)
    }
})