//Importing  Express js 

//Express js for creating server and api get ,post,put and delete
const express = require('express')

//Body parser for getting the data through the urls
const bodyParser = require('body-parser')

//Importing Mongo Client
const MongoClient = require('mongodb').MongoClient

//const app controlls the entire app with express functional constructor
const app = express()

// we are saying expressjs tat to use body parser urlencoded to be true
app.use(bodyParser.urlencoded({extended:true}))

// Database ConnectionString
const connectionString="mongodb+srv://chaithra13:chaithu13@cluster0.fiuey.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

//connecting the database
MongoClient.connect(connectionString,(err,client) => {
    if (err) return console.error (err)
    console.log('connected to the database')
})
app.post('/quotes', (req,res)=>{
    res.send(req.body)
}),
app.get('/', (req,res) => {
    res.sendFile(_dirname + './index.html')
    })

    const PORT =5000
app.listen(PORT,()=>{
    console.log(`server running at port ${PORT}`)
})