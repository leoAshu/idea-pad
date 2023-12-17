const express = require("express")
const bodyParser = require("body-parser")
const { v4: uuidv4 } = require("uuid")

const app = express()
const PORT = 3000

app.use(bodyParser.urlencoded({ extended: false }))

let ideas = []

app.get("/api/ideas", (req, res) => {
    res.status(200).json({ ideas })
})

app.post("/api/ideas", (req, res) => {
    const { title, description } = req.body
    const newIdea = {
        id: uuidv4(),
        title,
        description,
    }
    res.status(200).json({ idea: newIdea })
})

app.listen(PORT, () => {
    console.log(`Server started at port: ${PORT}`)
})
