import express from "express";
require('dotenv').config()
const app = express();
import mongoose from 'mongoose';
import path from 'path';
import cors from 'cors';


// dev server port
const PORT = process.env.PORT || 3001

// Middle Wares
app.use(cors());
app.use(express.json()); // to parse request body json

// serve static front end in production mode
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, 'client', 'build')));
}


// Mongoose
mongoose.connect(process.env.MONGO_URI!, {}, 
    () => { console.log('connected to mongo on 3001 ') }
  )

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../health_buddy/build')));

// Controllers
app.use('/users', require('./controllers/users'))

// test response
app.get("/api", (req, res) => {
    res.json({message: "Hello Front End! From Backend!"})
})

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../health_buddy/build', 'index.html'));
  });

app.listen(PORT, () => {
    console.log(`Server listening on por: ${PORT}`)
})