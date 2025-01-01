import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

// Connect to the database
// Always use async/await and try/catch syntax
const connectDb = async () => {
    try {
        const connectInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`);

        console.log(
            `\n Connected to database || Host: ${connectInstance.connection.host}`
        );
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1); // Exit process with failure
    }
};

export default connectDb;
