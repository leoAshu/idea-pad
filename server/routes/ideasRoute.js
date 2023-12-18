const express = require("express")
const { v4: uuidv4 } = require("uuid")
const { ideas: dummyIdeas } = require("../ideas")

const router = express.Router()
let ideas = dummyIdeas

router.route("/").get((req, res) => {
    res.status(200).json({ ideas })
})

router.route("/").post((req, res) => {
    const { title, description } = req.body
    if (!title) {
        res.status(422).json({ error: "Title cannot be empty." })
    }

    const newIdea = {
        id: uuidv4(),
        date: new Date().toUTCString(),
        title,
        description,
        author: "Test Author",
        upvotes: 1,
    }
    ideas.push(newIdea)
    res.status(200).json({ idea: newIdea })
})

module.exports = router
