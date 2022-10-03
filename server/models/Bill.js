const mongoose = require('mongoose')

const BillSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    mobilenumber: {
        type: Number,
        required: true,
        unique: true,
    },
    gstnumber: {
        type: String,
        required: false,
    },
    address: {
        type: String,
    },
    date: {
        type: Date
    },
    order: [{
        item: {
            type: String
        },
        quantity: {
            type: Number
        },
        amount: {
            type: Number
        },

    }],
    total: {
        type: Number
    }
    // order: {
    //     type: Array,
    //     required: true
    // }
}, { timestamps: true });


module.exports = mongoose.model("Bill", BillSchema);