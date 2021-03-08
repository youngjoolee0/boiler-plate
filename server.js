/*const express = require('express')
const app = express()
const port=5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://youngjoo:1234@cluster0.hzgy7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false
}).then(()=>console.log('MongoDB connected..'))
  .catch(err=>console.log(err))

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) =>res.send('hello world'))
app.listen(port,()=>console.log(`Example app listening on port ${port}!`))*/

require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URL, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, 
    (err)=>{
  if(err){
    console.log("Err",err);
  }else{
    console.log("Connection Successful")
  }
})