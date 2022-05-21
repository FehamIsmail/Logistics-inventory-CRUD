const mongoose = require('mongoose')

const Schema = mongoose.Schema;

//Creating the scheme for the Item
const itemSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    description:{
        type: String,
        required: false,
    },
    quantity: {
        type: Number,
        required: true,
        min: 0
    },
    weight: {
        type: Number,
        required: true,
        min: 0.01
    },
    status: {
        type: String,
        enum: ['ORDER FILED', 'IN TRANSIT', 'DELIVERED'],
        required: true,
        default: ['ORDER FILED']
    }
}, {
    timestamps: true,
    strict: true
})

//Exporting the Schema to the module
const Item = mongoose.model('Item', itemSchema)
module.exports = Item

