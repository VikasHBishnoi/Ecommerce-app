import express from 'express';
import dotenv from "dotenv";
import morgan from 'morgan';
import connectDb from "./config/db.js";

// configure env
dotenv.config();

// Connect server
connectDb();

// rest Object
const app = express();

// morgan 
app.use(express.json());
app.use(morgan('dev'));

// Api
app.get("/", (req, res) => {
    res.send(
        "<h1>Hello</h1>"
    )
})

// PORT
const PORT = process.env.PORT || 8080;

// Run Listen
app.listen(PORT, () => {
    console.log(`Server Running ${PORT}`)
});