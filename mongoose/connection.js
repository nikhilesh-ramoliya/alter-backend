const mongoose = require('mongoose');
const connection = mongoose.connect('mongodb+srv://socialapp:socialapp@cluster0.xttu2.mongodb.net/alterone').then(()=>{
console.log('data base is connected');
})
module.exports = connection;