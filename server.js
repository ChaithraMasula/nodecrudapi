// Import expressjs for creating the server and creating api routes
const express = require('express')

// Body Parser for urlencoded form data 
const bodyParser = require('body-parser')

// Importing Mongo client
const MongoClient = require('mongodb').MongoClient 

// Creating app function from the express functional constructor to use it for creating
// server and apis
const app = express()

// Enabling body parser with urlencoded form data to be true
app.use(bodyParser.urlencoded({extended:true}))

// Database Connection String
const connectionString ="mongodb+srv://chaithra13:chaithu13@cluster0.fiuey.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

// Connecting the database
MongoClient.connect(connectionString,{useUnifiedTopology:true})
 .then(client => {
     console.log('connected to database server')
     const db= client.db('star-wars-quotes')
     const quotesCollection = db.collection('quotes')
     //Create with POST
     // Two parameters first one route, second one is function what you want to execute
        app.post('/quotes', (req,res) => {
            quotesCollection.insertOne(req.body)
            .then(result=>{
                console.log(result)
            })
            .catch(error=>console.error(error))
        })

}).catch(console.error)

// Reading data from the MongoDB
    app.get('/getall',(req,res) => {
        db.collection('quotes').find().toArray()
        .then(result =>{
            res.send(result)
        })
        .catch(error=>console.error(error))
    })


// Creating the server
const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server is Running on PORT: ${PORT}`)
})