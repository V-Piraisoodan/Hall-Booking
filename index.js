const express=require('express');
const mongo=require("./shared");
const BookingRouter=require('./router/rooms');
const dotenv=require('dotenv');

dotenv.config();
const app=express();


app.use(express.json());

mongo.connect();

app.use('/',(req,res)=>{
    res.send('welcome to hall booking app')
}

)
app.use('/hallBooking',BookingRouter);

const port= process.env.PORT
app.listen(port,function(){
    console.log("Port connected")
});