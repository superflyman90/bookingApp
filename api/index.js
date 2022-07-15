import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
dotenv.config()

const app = express()

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log("connected to mongoDB");
  } catch (error) {
    throw error
  }
};

mongoose.connection.on("connected", ()=>{
    console.log('mongoDB connected');
})

mongoose.connection.on("disconnected", ()=>{
    console.log('mongoDB disconnected');
})

// Middlewares

app.use(express.json())

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.listen(8800, () => {
  connect()
  console.log('Connected to backend!')
})
