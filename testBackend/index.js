const express=require('express')   //it is used to importing express module
require('dotenv').config()  //.env is used to preserve sensitive data 
 
const app = express()  //storintg express in app variable
const port = 3000

app.get('/',(req,res)=>{   //get is used to request data from a specified resources it need path and req,res
    res.send('Hello World')
})

app.get('/address',(req,res)=>{
    res.send('Aurangabad')
})

app.listen(process.env.PORT,()=>{  //it is used to listen the part 
    console.log(`Server is listening on port ${port}`);
    
})