import express from 'express'

// สร้าง express app
const app = express()

// Express middleware parse json
app.use(express.json())

// import user routes
import userRoutes from './routes/userRoutes'

// use user routes
app.use('/users',userRoutes)

// start server
const port = process.env.PORT || 5000
app.listen(port,()=>{
  console.log(`Server is running on port ${port}`)
})