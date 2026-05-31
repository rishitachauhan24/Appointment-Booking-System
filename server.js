<<<<<<< HEAD
const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const morgan = require("morgan")

const connectDB = require("./config/db")

const errorHandler = require("./middleware/errorMiddleware")

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.use(cors())

app.use(morgan("dev"))

app.get("/", (req, res) => {
    res.send("API Running Successfully")
})

app.use("/api/auth", require("./routes/authRoutes"))

app.use("/api/doctors", require("./routes/doctorRoutes"))

app.use("/api/appointments", require("./routes/appointmentRoutes"))

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
=======
const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const morgan = require("morgan")

const connectDB = require("./config/db")

const errorHandler = require("./middleware/errorMiddleware")

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.use(cors())

app.use(morgan("dev"))

app.get("/", (req, res) => {
    res.send("API Running Successfully")
})

app.use("/api/auth", require("./routes/authRoutes"))

app.use("/api/doctors", require("./routes/doctorRoutes"))

app.use("/api/appointments", require("./routes/appointmentRoutes"))

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
>>>>>>> 4d56996b5edac88e5f4acf68a76f97f7802d5f9d
})