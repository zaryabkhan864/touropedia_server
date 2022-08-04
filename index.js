import express from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import userRoutes from './routes/user.js'
// mongodb+srv://zaryabkhan864:<password>@cluster0.cvwdcs4.mongodb.net/?retryWrites=true&w=majority
const app = express();
app.use(morgan("dev"));
app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}));
app.use(cors());
app.use('/users',userRoutes)
const MONGODB_URL = "mongodb+srv://zaryabkhan864:509143864@cluster0.cvwdcs4.mongodb.net/tour_db?retryWrites=true&w=majority"
const port = 5000;
mongoose.connect(MONGODB_URL).then(()=>{
    app.listen(port,()=>{
        console.log(`server is started port ${port}`)
    })
}).catch((error)=>console.log(`${error} did not connect`))
// app.get('/',(req,res)=>{
//     res.send("hello express");
// })
// app.listen(port,()=>{
//     console.log(`server is starterd... on port ${port}`)
// })