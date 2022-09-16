const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')
const billRoute = require('./routes/bill')

app.use(express.json())
app.use(cors())
dotenv.config()

port = process.env.PORT
mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("Connected to Mongodb Application..."))
    .catch((err) => console.log(err))

app.use('/api', billRoute);


app.listen('2002', () => {
    console.log(`The server is running on port ${port}...`)
})