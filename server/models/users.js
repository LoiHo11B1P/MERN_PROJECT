const mongoose = require('mongoose')
const { Schema } = mongoose 

const userSchema = new Schema({
    name: { type: String, required: true },
    gender: { type: String, required: true },
    weight: { type: Number, required: true },
    height: { type: Number, required: true },
    activeness: { type: String, required: true},
    waterGoal: { type: Number},
    caloriesGoal: { type: Number },
  
    caloriesIntake: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Calories'

    }],
    waterIntake: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Water'
    }]
 

})


const User = mongoose.model('User', userSchema)
module.exports = User