const mongoose = require('mongoose')

const connectDB = () =>{
    mongoose.connect("mongodb://localhost:27017/BookLibrary")
    .then(()=>console.log("connection is sucessful..."))
    .catch((err)=> console.log(err));
}

module.exports = connectDB