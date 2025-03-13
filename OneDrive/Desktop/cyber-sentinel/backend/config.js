const { default: mongoose } = require("mongoose");
require("dotenv").config();

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongo DB connection established");
    }
    catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;