const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullName:String,
    email:String,
    password:String,
    creator:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Graphql"
        }
    ]
})

const User = mongoose.model('User',userSchema)

module.exports = User