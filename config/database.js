// const mongoose = require('mongoose');

// // funation connect to database

// const conectwithDB = () => {
//     mongoose.connect('mongodb://localhost:27017/express-mongo', {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }).then(() => {
//         console.log('Database connected');
//     }).catch((err) => {
//         console.log('Database connection failed');
//     });
// }

// module.exports = conectwithDB;

const mongoose = require("mongoose");

require("dotenv").config();

const conectwithDB = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB ka Connection is Successful"))
    .catch( (error) => {
        console.log("Issue in DB Connection");
        console.error(error.message);
        //iska matlab kya h ?
        process.exit(1);
    } );
}

module.exports = conectwithDB;