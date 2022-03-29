const express = require('express')
const user = express.Router()

const db = require('../models')

// GET ALL NON-PRIVATE USERS
user.get('/', async(req, res) => {
    try {
        const allUserData = await db.User.find({
            $or: [
                {isPrivate: false},
                {isPrivate: undefined}
            ]
        }).select('-_id -pin -email -isPrivate')
        res.status(200).json({
            success: true,
            message: 'Retrieved all non-private user information.', 
            data: allUserData
        })
    } catch (error) {
        res.status(500).json()
    }
    
})

// LOGIN USING EMAIL AND PIN
user.post('/login', async(req, res) => {
    if(req.body.email && req.body.pin) {
        try {
            const currentUser = await db.User.find({
                $and: [
                    {email: req.body.email},
                    {pin: req.body.pin}
                ]
            })
            res.status(200).json({
                success: true,
                message: "User found.",
                data: currentUser
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error
            })
        }
    } else {
        res.status(422).json({
            success: false,
            message: 'Missing email or pin'
        })
    }
})

// CREATE NEW USER
user.post('/', async(req, res) => {

    try {
        const newUser = await db.User.create(req.body)
        res.status(200).json({
            success: true,
            message: 'User successfully created.',
            data: newUser
        })
    } catch (error) {
        res.status(500).json(error)
    }

})

// UPDATE USER 
user.put('/:id/update', async(req, res) => {
    try {
        const updateUser =  await db.User.findByIdAndUpdate(req.params.id, req.body, { new: true})
        console.log(updateUser)
        res.status(200).json({
            success: true,
            message: `Updated user ${updateUser.name} successful.`,
            data: updateUser
        })
    } catch (error) {
        res.status(500).json(error)
    }
    
})

user.delete('/:id/remove', async(req, res) => {
    if(req.params.id) {
        try{

            const result = await db.User.findByIdAndDelete(req.params.id)
            res.status(200).json({
                success: true,
                message: "Deleted user account successfully.",
                data: result
            })

        } catch (error) {
            res.status(500).json(error)
        }

    } else {
        res.status(422)
    }
})

module.exports = user