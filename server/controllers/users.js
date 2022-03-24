const express = require('express')
const user = express.Router()

const db = require('../models')

// show all user
user.get('/', (req, res) => {
    res.status(200).json({message: 'REACHED USER API ENDPOINT.'})
})

// POST
user.post('/', async(req, res) => {

   
    try {
        const newUser = await db.User.create(req.body)
        res.status(200).json({
            message: 'User successfully created.',
            data: newUser
        })
    } catch (error) {
        res.status(500).json(error)
    }
    

})

module.exports = user