
const mongoose = require('mongoose');

mongoose.set("strictQuery", false);

URI = process.env.MONGO_URI;

const connectDB = async () => { 
    try {
        const conn = await mongoose.connect(URI , {
            useUnifiedTopology:true,
            useNewUrlParser: true,
        })
        console.log(`Mongo Database Connected ...!! ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;