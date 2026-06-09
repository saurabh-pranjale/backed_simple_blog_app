const express = require('express')

const app = express()
const connectDB = require('./config/db')
const cors = require('cors')
require('dotenv').config()
const userRoutes = require('./routes/user')
const blogRoutes = require('./routes/blog')
connectDB()

app.use(cors())
app.use(express.json())
app.use('/api/v1',userRoutes)
app.use('/api/v1',blogRoutes)
const port = process.env.port || 5000



app.listen(port,()=>{
    console.log(`server is running at this port ${port}`)
})