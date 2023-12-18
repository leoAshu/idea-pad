const express = require('express')
const { v4: uuidv4 } = require('uuid')

const IdeaModel = require('../db/models/ideas')

const router = express.Router()

router.route('/').get(async (req, res) => {
    const ideas = await IdeaModel.find({})
    res.status(200).json({ ideas })
})

router.route('/').post(async (req, res) => {
    const { title, description } = req.body
    if (!title) {
        res.status(422).json({ error: 'Title cannot be empty.' })
    }

    const newIdea = new IdeaModel({
        id: uuidv4(),
        date: new Date().toUTCString(),
        title,
        description,
        author: 'Test Author',
        upvotes: 1,
    })
    await newIdea.save()
    res.status(200).json({ idea: newIdea })
})

module.exports = router
