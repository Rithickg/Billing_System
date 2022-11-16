const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')
const billRoute = require('./routes/bill')
const userRoute =require('./routes/user')

app.use(express.json())
app.use(cors())
dotenv.config()

let port = process.env.PORT || 2002

mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("Connected to Mongodb Application..."))
    .catch((err) => console.log(err))

app.use('/api', billRoute);
app.use('/api',userRoute);

app.listen(port, () => {
    console.log(`The server is running on port ${port}...`)
})