const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false);

        // Connect to MongoDB using mongodb+srv
        await mongoose.connect(process.env.MONGO_URL)
        // Access the connection object after successful connection
        console.log(`MongoDB connected`);
    } catch (error) {
        console.log(`DB connection error: ${error}`);
    }
}

module.exports = {db};
