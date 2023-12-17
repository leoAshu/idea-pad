const express = require("express")
const bodyParser = require("body-parser")

const app = express()
const PORT = 3000

let ideas = []

app.get("/api/ideas", (req, res) => {
    res.status(200).json({ ideas })
})

app.listen(PORT, () => {
    console.log(`Server started at port: ${PORT}`)
})
