import mongoose from 'mongoose'
const { Schema } = mongoose 

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true},
    pin: { type: String, required: true},
    gender: { type: String, required: true },
    weight: { type: Number, required: true },
    height: { type: Number, required: true },
    isPrivate: {type: Boolean, default: false},
    activeness: { type: String, required: true},
    waterGoal: { type: Number},
    caloriesGoal: { type: Number },
  
    caloriesIntake: [{
        type: Schema.Types.ObjectId,
        ref: 'Calories'

    }],

    waterIntake: [{
        type: Schema.Types.ObjectId,
        ref: 'Water'
    }]

})


const User = mongoose.model('User', userSchema)
module.exports = User