const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const { v4: uuidv4 } = require("uuid")
const { ideas: dummyIdeas } = require("./ideas")

const app = express()
const PORT = 3000

let ideas = dummyIdeas

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/api", (req, res) => {
    res.status(200).json({ message: "Server is up!" })
})

app.get("/api/ideas", (req, res) => {
    res.status(200).json({ ideas })
})

app.post("/api/ideas", (req, res) => {
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

app.listen(PORT, () => {
    console.log(`Server started at port: ${PORT}`)
})
