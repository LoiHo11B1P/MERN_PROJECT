import 'dotenv/config'
import mongoose from 'mongoose'



  mongoose.connect(process.env.MONGO_URI!, {
  
  })


module.exports.User = require('./users')
module.exports.Calories = require('./calories')
module.exports.Water = require('./water')

