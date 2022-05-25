import mongoose from 'mongoose'
const { Schema } = mongoose 

const caloriesSchema = new Schema({
    food: { type: String, require: true},
    amountOfFood: { type: Number, require: true},
    amountOfCalories: { type: Number, require: true },
    dateTime: { type: Date, default: Date.now },
    createdDateTime: { type: Date, default: Date.now }
})

const Calories = mongoose.model('Calories', caloriesSchema)
module.exports = Calories