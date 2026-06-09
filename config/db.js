const mongoose = require('mongoose')



function connectDB () {
    try {
        mongoose.connect(process.env.mongo_DB)

        console.log("DB connection Successfull")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB