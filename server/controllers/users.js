const express = require('express')
const user = express.Router()

const db = require('../models')



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

// DELETE USER
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

// INPUT WATER
user.post('/water/:id', async(req, res) => {
    try {
        const currentUser = await db.User.findById(req.params.id)

        const currentWaterIntake = await db.Water.create(req.body)

        currentUser.waterIntake.push(currentWaterIntake.id)
        currentUser.save()

        res.status(200).json({
            success: true,
            message: `Successfully record water intake for user ${currentUser.name}`,
            data: currentWaterIntake
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Unable to add water intake."
        })
    }
})

// Get A List of Water
user.get('/water/:id&:timePeriod', async (req, res) => {
    console.log(req.params.timePeriod)
    try {
        db.User.findById(req.params.id)
        .populate({
            path: "waterIntake",
            match: { time: {$gte: req.params.timePeriod} }
        })
        .then(water => {
            res.status(200).json({
                success: true,
                message: `Retrieve water recorded.`,
                data: water.waterIntake
            })
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Unable to get water recorded.",
            data: error
        })
    }
    

})

// Input Calories
user.post('/calories/:id', async(req, res) => {
    try {
        const currentUser = await db.User.findById(req.params.id)

        const currentCaloriesIntake = await db.Calories.create(req.body)

        currentUser.caloriesIntake.push(currentCaloriesIntake.id)
        currentUser.save()

        res.status(200).json({
            success: true,
            message: `Successfully record calories intake for user ${currentUser.name}`,
            data: currentCaloriesIntake
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Unable to add calories intake."
        })
    }
})

// Get A List of Calories
user.get('/calories/:id&:timePeriod', async (req, res) => {
    
    try {
        db.User.findById(req.params.id)
        .populate({
            path: "caloriesIntake",
            match: { dateTime: {$gte: req.params.timePeriod} }
        })
        .then(calories => {
            res.status(200).json({
                success: true,
                message: `Retrieve calories recorded.`,
                data: calories.caloriesIntake
            })
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Unable to get calories recorded.",
            data: error
        })
    }
    

})

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
        res.status(500).json({
            success: false,
            message: "Unable to get users records.",
            data: error
        })
    }
    
})
module.exports = user