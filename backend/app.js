const express=require('express');
const app=express();
const cors=require('cors');

const dotenv=require('dotenv')
const path=require('path')
const connectDatbase=require('./config/connectDatabase')
const authRoutes = require('./routes/auth'); // Adjust path as necessary

dotenv.config({path: path.join(__dirname, 'config', 'config.env')})

connectDatbase();   



//To ensure that the data sent  is JSON data
app.use(express.json())
app.use(cors());

const products= require('./routes/product');
const orders= require('./routes/order');

app.use('/auth', authRoutes);



app.use('/api/v1',products);

app.use('/api/v1',orders);


app.listen(process.env.PORT, ()=>{
    console.log(`Server listening to port ${process.env.PORT} in ${process.env.NODE_ENV}`)
})