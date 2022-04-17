const mongoose = require('mongoose')

const connect = () => {
    return mongoose.connect(
        //"mongodb://127.0.0.1:27017/psc"
        "mongodb+srv://ritika:ritika123@cluster0.aunco.mongodb.net/School?retryWrites=true&w=majority"
    )
}

module.exports = connect 