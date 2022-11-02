const router = require('express').Router()
const Bill = require('../models/Bill')
const verify =require('./verifyToken')

//Create Bill
router.post('/create', async(req, res) => {
    const newBill = new Bill(req.body);
    try {
        const savedBill = await newBill.save();
        res.status(200).json(savedBill)
    } catch (error) {
        res.status(500).json(error)
    }
})

//Display All Bill
router.get('/display', async(req, res) => {
    try {
        const bills = await Bill.find()
        res.status(200).json(bills)
    } catch (error) {
        res.status(500).json(error)
    }
})

//Display by ID
router.get('/:id', async(req, res) => {
    try {
        const bill = await Bill.findById(req.params.id)
        res.status(200).json(bill)
    } catch (error) {
        res.status(500).json(error)
    }
})

//Update by ID
router.put('/:id', async(req, res) => {
    try {
        const updatedBill = await Bill.findByIdAndUpdate(req.params.id, { $set: req.body, }, { new: true })
        res.status(200).json(updatedBill)
    } catch (error) {
        res.status(500).json(error)
    }
})

//Delete Bill
router.delete('/:id', async(req, res) => {
    try {
        await Bill.findByIdAndDelete(req.params.id)
        res.status(200).json("Bill Deleted!")
    } catch (error) {
        res.status(500).json(error)
    }
})



module.exports = router;