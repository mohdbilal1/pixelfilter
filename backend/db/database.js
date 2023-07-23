import mongoose from "mongoose";

const connectDB=async(database)=>{
    try {
        await mongoose.connect(database);
        console.log('mongodb connected');
        
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;