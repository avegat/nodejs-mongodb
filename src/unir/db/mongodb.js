const mongoose = require('mongoose');
const fs = require('fs');



mongoose.Promise = global.Promise;


const connectToDB = async (url) => {
    await mongoose.connect(url);
 
};


const disconnectToDB = async () => {
    await mongoose.disconnect();

};

const database = {
    connectToDB,
    disconnectToDB,
};


module.exports = database;