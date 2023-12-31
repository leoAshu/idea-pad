const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')

const connectDB = require('./src/db/db.connect')
const authRouter = require('./src/routes/auth.route')
const ideasRouter = require('./src/routes/ideas.route')

dotenv.config()

const app = express()
const PORT = 3000

app.use(cors())
app.use(bodyParser.json())

app.use('/api/auth', authRouter)
app.use('/api/ideas', ideasRouter)

app.get('/api', (req, res) => {
    res.status(200).json({ message: 'Server is up!' })
})

const startServer = async () => {
    try {
        connectDB(process.env.DB_URL)
        app.listen(PORT, () => {
            console.log(`Server started at port: ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

startServer()
