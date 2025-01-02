import mongoose from 'mongoose'


const connectDb = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
        console.log(`database connected successfully `);
        
    } catch (error) {
        console.log(`ERROR OCCURED:`,error);
        process.exit(1)
        
    }
}


export default connectDb