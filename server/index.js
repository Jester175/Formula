// import mongoose from "mongoose"; 
import express from "express";
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();


const startApp = () => {
    try {
        app.listen(PORT, () => console.log(`Server started on ${PORT}, http://localhost:${PORT}`));
    } catch (error) {
        console.log(error)
    }
}

startApp();