const express = require('express')

const UserModel = require('../db/models/user')

const router = express.Router()

router.route('/register').post(async (req, res) => {
    const { firstName, lastName, email, password } = req.body

    const userExists = await UserModel.findOne({ email })
    if (userExists) {
        res.status(400).json({ error: 'User already exists' })
        return
    }

    const user = new UserModel({
        firstName,
        lastName,
        email,
        password,
    })
    await user.save()

    res.status(200).json({ message: 'Registration successful' })
})

router.route('/login').post(async (req, res) => {
    const { email, password } = req.body

    const userExists = await UserModel.findOne({ email, password })
    if (!userExists) {
        res.status(404).json({ error: 'Invalid credentials' })
        return
    }

    res.status(200).json({ message: 'Login successful' })
})

module.exports = router
