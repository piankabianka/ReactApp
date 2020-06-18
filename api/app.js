const express=require('express'); //ok
var cors = require("cors");
const app=express(); //ok
const mongoose=require('mongoose');
const bodyParser= require('body-parser');
app.use(bodyParser.json());
require('dotenv/config');


app.use(express.json());
app.use(cors());

const authRoute=require('./routes/auth');
app.use('/user', authRoute);

const tvSeriesRoute=require('./routes/tvseries');
app.use('/tvseries', tvSeriesRoute);


mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true, useUnifiedTopology: true},  ()=>{
    console.log("DATA BASE CONNECTED");
});


app.listen(9000);   //ok