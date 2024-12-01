require("dotenv").config();
const mongoose = require("mongoose");

const mongoURL = process.env.MONGO_URL;

mongoose.connect(mongoURL)

var connection = mongoose.connection

connection.on('error' , ()=>{
    console.log('MongoDB connection failed')
})

connection.on('connected' , ()=>{
    console.log('MongoDB connection successful')
})

module.exports = mongoose