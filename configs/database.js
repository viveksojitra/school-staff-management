const mongoose = require("mongoose");

const connectionURL = process.env.DATABASE_URL;

mongoose.connect(connectionURL).then(() => {
    console.log("Database connected.");
}).catch((err) => {
    console.log("ERROR! Connecting to database.", err);
});

module.exports = mongoose.connection;