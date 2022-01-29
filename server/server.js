// variable declarations
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 3001
const routes = require('./routes')

//defining middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}


// allows routing for both html and api routes
app.use(routes)

//gets the database connected and ready to listen
const connection = process.env.MONGODB_URI || 'mongodb://localhost/ecommerce'
mongoose.connect(connection, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("database now running!")
}).catch(err =>{
  console.log(err)
})

//gets the app listening
app.listen(PORT, () =>{
  console.log('App now listening on port 3001')
})