import connectDb from "./src/db/index.js";
import dotenv from 'dotenv'
import app from "./src/db/app.js";

dotenv.config({
    path:'./.env'
})



connectDb()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`server connection successful`);
        
    })
})
.catch((error)=>{
    console.log(`server connection failed`, error);
    process.exit(`1`)
    
})

