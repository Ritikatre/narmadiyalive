const connectToMongo = require('./db');
connectToMongo(); 
const express = require('express')
const app = express()

//for heroku step 2
const port = process.env.port || 3000

var cors = require('cors')
app.use(cors())


app.use(express.json()) // for allowing entries by user in  JSON format 

// Avaialble Routes
app.use('/api/auth/', require('./routes/auth'))
app.use('/api/news', require('./Routes/news'))
app.use('/api/census', require('./Routes/census'))


//for heroku step 3
if (process.env.NODE_ENV == "production"){
  app.use(express.static('Frontend/build'));
}

app.listen(port, () => {
  console.log(`Narmadiya Backend listening on port ${port}`)
})

