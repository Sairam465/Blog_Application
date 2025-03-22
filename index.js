const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config({path: '.env'});

const port = process.env.PORT || 5000
const DB = process.env.DATABASE;
const app = express();

app.use(cors())



mongoose.connect(DB).then(()=> console.log("MongoDB connected")).catch((err)=> console.log(err))

app.use(express.json())

app.get('/', (req, res) => {
    res.json("Server Heroku started")
})

const userRouter = require('./routes/User.route')
app.use('/api/user',userRouter)


const blogRouter = require('./routes/Blog.route')
app.use('/api/blog',blogRouter)


app.listen(port, () => {
    console.log("Server Started at Port " + port)
})
