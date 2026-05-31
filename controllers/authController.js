const User = require("../models/User")

const bcrypt = require("bcryptjs")

const generateToken = require("../utils/generateToken")

exports.registerUser = async (req, res) => {

    try {

        const { name, email, password } = req.body

        const userExists = await User.findOne({ email })

        if (userExists) {

            return res.status(400).json({
                success: false,
                message: "User already exists"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })

        res.status(201).json({
            success: true,
            message: "User Registered Successfully",
            token: generateToken(user._id)
        })

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

exports.loginUser = async (req, res) => {

    try {

        const { email, password } = req.body

        const user = await User.findOne({ email })

        if (!user) {

            return res.status(400).json({
                success: false,
                message: "Invalid Email"
            })
        }

        const isMatch = await bcrypt.compare(
            password,
            user.password
        )

        if (!isMatch) {

            return res.status(400).json({
                success: false,
                message: "Invalid Password"
            })
        }

        res.status(200).json({
            success: true,
            message: "Login Successful",
            token: generateToken(user._id)
        })

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}