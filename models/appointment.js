const mongoose = require("mongoose")

const appointmentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor"
    },

    appointmentDate: {
        type: String,
        required: true
    },

    status: {
        type: String,
        default: "Booked"
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Appointment", appointmentSchema)