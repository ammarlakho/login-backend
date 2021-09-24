const connectDB = require('./connection')
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

const app = express();

dotenv.config({path: '.env'})
const PORT = 3000;

// log requests
app.use(morgan('tiny'));

// Mongodb Connection
connectDB();


app.use(express.json());

// load routers
app.use('/', require('./router'))

app.listen(PORT, ()=>{console.log(`Server is running on http://localhost:${PORT}`)});