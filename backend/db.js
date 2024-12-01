const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://Chathula:chatula2002@inventory.mbjab.mongodb.net/?retryWrites=true&w=majority&appName=Inventory'


mongoose.connect(mongoURL)

var connection = mongoose.connection

connection.on('error' , ()=>{
    console.log('MongoDB connection failed')
})

connection.on('connected' , ()=>{
    console.log('MongoDB connection successful')
})

module.exports = mongoose