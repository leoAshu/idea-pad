const mongoose = require('mongoose')

const connectDB = async (url) => {
    mongoose
        .connect(url)
        .then(() => console.log('Connected to DB'))
        .catch((e) => console.log(e))
}

module.exports = connectDB
