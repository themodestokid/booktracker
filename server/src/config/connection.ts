import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


console.log('ENV settings', process.env.MONGODB_URI)

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks');

export default mongoose.connection;
