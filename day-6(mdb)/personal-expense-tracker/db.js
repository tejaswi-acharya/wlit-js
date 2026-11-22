const mongoose = require("mongoose");
const connectDB = async()=>{
    try{
        await mongoose.connect(
            "mongodb+srv://tejaswiacharya21_db_user:TejuDon@cluster0.sq3opqb.mongodb.net/"
        );

        console.log("MongoDB connected successfully!");

    }catch(error){
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1);
    }
};
module.exports = connectDB;