import mongoose from 'mongoose'
const { Schema } = mongoose 

const waterSchema = new Schema({
    amount: { type: Number, require: true},
    time: { type: Date, default: Date.now },
    createdDateTime: { type: Date, default: Date.now }
})

const Water = mongoose.model('Water', waterSchema)
module.exports = Water