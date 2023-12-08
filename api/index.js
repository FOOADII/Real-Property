import express from 'express'
import mongoose, { connect } from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();

mongoose.connect(process.env.MONGO) .then(() => {
    console.log('connected to mongodb ')
        }).catch((err)=> { console.log(err)
        
        }) 

const app = express () ;
app.listen (5173 , () =>{
    console.log('server is running on port 5173!!');
})