const Appointment = require("../models/Appointment")

exports.bookAppointment = async (req, res) => {

    try {

        const appointment = await Appointment.create({
            user: req.user.id,
            doctor: req.body.doctor,
            appointmentDate: req.body.appointmentDate
        })

        res.status(201).json({
            success: true,
            appointment
        })

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

exports.getAppointments = async (req, res) => {

    try {

        let filter = {}

        if (req.query.status) {
            filter.status = req.query.status
        }

        const appointments = await Appointment.find(filter)
            .populate("user", "name email")
            .populate("doctor", "name specialization")
            .sort({ createdAt: -1 })

        res.status(200).json({
            success: true,
            appointments
        })

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}