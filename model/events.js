const mongoose = require('mongoose')

const graphqlSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    event:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users"
        }
    ]
})

const Graphql = mongoose.model('Graphql',graphqlSchema)

module.exports = Graphql

