import mongoose from "mongoose";

export const connectDB = async (req, res) => {
    const db = "mongodb+srv://heymann955:6xV2vPQczHXpQWYg@cluster0.zsrqbue.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

    const {connection} = await mongoose.connect(db, { useNewUrlParser: true });

    console.log(`MongoDB Connected to ${connection.host}`);

}