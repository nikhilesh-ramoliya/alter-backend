const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        wholesale: {
            type: Number,
            required: true
        },
        retail: {
            type: Number,
            required: true
        }
    },
    description: {
        type: String,
        required: true
    },
    longDescription: {
        type: String,
        required: true
    }
});

const product = mongoose.model('product', productSchema);

module.exports = product;