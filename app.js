const express = require('express')
const path = require('path')
const app = express()
//const bodyparser = require('body-parser')
const port = process.env.PORT || 3000

app.use('/static',express.static('static'))
app.use(express.urlencoded())



//ENDPOINTS
app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname, '/views/index.html'))
})
app.get('/timetable.html',(req,res)=>{
    res.sendFile(path.join(__dirname, '/views/timetable.html'))
})
app.get('/noticeboard.html',(req,res)=>{
    res.sendFile(path.join(__dirname, '/views/noticeboard.html'))
})
app.get('/student.html',(req,res)=>{
    res.sendFile(path.join(__dirname, '/views/student.html'))
})
app.get('/to-do.html',(req,res)=>{
    res.sendFile(path.join(__dirname, '/views/to-do.html'))
})
app.get('/signup.html',(req,res)=>{
    res.sendFile(path.join(__dirname, '/views/signup.html'))
})


//Start the server
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
