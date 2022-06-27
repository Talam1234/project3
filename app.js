const express = require('express');
const connectDB = require('./dbconnection/connectDB');
const router = require('./routes/router');
const bodyparser = require('body-parser');


const app = express();


//calling DB
connectDB();

//middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));


//routing
app.use('/api/v1',router)

//listening
app.listen(3000, () => {
    console.log('Connected to server')
})