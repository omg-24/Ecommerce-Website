import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"
import dotenv from "dotenv"
dotenv.config()
export async function register(req, res) {
    try {
        const { email, name, password } = req.body;

        const existingUser = await User.findOne({ email })

        if(existingUser){
            return res.status(400).json({
                message: "User already exists"
            })
        }
        const hashedpass = await bcrypt.hash(password,10)
        await User.create({
            email,
            name,
            password:hashedpass
        });

        res.status(201).json({
            message: "User registered successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: "Signup failed",
            error: error.message
        });
    }
}

export async function login(req, res) {

    try {

        const { email, password } = req.body

        const user = await User.findOne({ email })

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            })
        }

        const isMatch = await bcrypt.compare(
            password,
            user.password
        )

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid credentials"
            })
        }

        const token = jwt.sign(
            {
                userId: user._id,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        )

        res.json({
            message: "Login successful",
            token
        })

    } catch (error) {

        res.status(500).json({
            message: "Login failed",
            error: error.message
        })
    }
}
