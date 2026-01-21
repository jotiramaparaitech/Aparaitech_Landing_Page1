import mongoose from "mongoose";

const connectDB = async()=> {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB Connection Successfull`);
    } catch (error) {
        console.error(`MongoDB Connection Failed`);
    }
}

export default connectDB;