const mongoose = require('mongoose')

const IdeaSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    date: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String },
    author: { type: String, required: true },
    upvotes: { type: Number, required: true },
})

const IdeaModel = mongoose.model('Idea', IdeaSchema)

module.exports = IdeaModel
