import mongoose from "mongoose";
import { DB_URL } from "./serverconfig.js";

export default async function connnectdb() {
    try {

        await mongoose.connect(DB_URL);
        console.log("Connected to mongodb DataBase Environment")
        
    } catch (error) {
        console.log("Error in connecting to the database")
    }
}