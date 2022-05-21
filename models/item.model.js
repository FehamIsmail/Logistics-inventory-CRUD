const mongoose = require('mongoose')

const Schema = mongoose.Schema;

//Creating the scheme for the Item
const itemSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    description:{
        type: String,
        required: false,
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    },
    weight: {
        type: Number,
        required: true,
        min: 0.01
    },
    size: {
        type: String,
        enum: [
            'Extra Small',
            'Small',
            'Medium',
            'Large',
            'Extra Large',
        ],
        required: true,
        default: ['Medium']
    },
    status: {
        type: String,
        enum: [
            'Order Filed',
            'In Transit',
            'Item Delivered',
            'Shipment Delayed',
            'Undeliverable. Item Lost',
            'Undeliverable. Item Damaged',
            'Undeliverable. Item Seized'
            ],
        required: true,
        default: ['Order Filed']
    }
}, {
    timestamps: true,
    strict: true
})

//Exporting the Schema to the module
const Item = mongoose.model('Item', itemSchema)
module.exports = Item

