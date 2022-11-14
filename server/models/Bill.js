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
    total: {
        type: String,
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
    email:{
        type:String,
    },

  
}, { timestamps: true });


module.exports = mongoose.model("Bill", BillSchema);