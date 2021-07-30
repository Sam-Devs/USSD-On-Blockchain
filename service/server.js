require("dotenv").config();
const mongoose = require("mongoose");

const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const cluster = process.env.Cluster;
const dbName = process.env.DBName;

async function dataBase() {
    const uri = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbName}?retryWrites=true&w=majority`

    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
        console.log("Database Connected");
    } catch (error) {
        console.log(error);
    }
}
dataBase();