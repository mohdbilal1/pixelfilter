import express from "express";
import connectDB from "./db/database.js";
import web from './router/web.js';
import dotenv from 'dotenv';
dotenv.config();
import {join} from 'path';
const app=express();
const port=process.env.PORT;
const database=process.env.DATABASE_URL;

connectDB(database);

app.use(express.static(join(process.cwd(),'public')));

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}));

app.use('/',web);


app.listen(port,()=>{
    console.log(`localhost runnig on ${port}`)
})


