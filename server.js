const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('Sample Command')
    })
const PORT = 5000

app.listen(PORT,()=>{
    console.log(`server running at port ${PORT}`)
})