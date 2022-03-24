const express = require("express")
require('dotenv').config()
const app = express();
const mongoose = require('mongoose');

// dev server port
const PORT = process.env.PORT || 3001

// Middle Wares
app.use(express.json()); // to parse request body json

// Mongoose
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo on 3001 ') }
  )

// Controllers
app.use('/users', require('./controllers/users'))

// test response
app.get("/api", (req, res) => {
    res.json({message: "Hello Front End! From Backend!"})
})


app.listen(PORT, () => {
    console.log(`Server listening on por: ${PORT}`)
})