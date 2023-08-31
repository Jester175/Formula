import mongoose from "mongoose"; 
import express from "express";
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 5000;
const username = process.env.USERNAME_DB;
const password = process.env.PASSWORD_DB;
const DB_URL = `mongodb+srv://${username}:${password}@cluster.txpnkmr.mongodb.net/?retryWrites=true&w=majority`
const app = express();


const startApp = async () => {
    try {
        app.listen(PORT, () => console.log(`Server started on ${PORT}, http://localhost:${PORT}`));
        await mongoose.connect(DB_URL);
    } catch (error) {
        console.log(error)
    }
}

startApp();