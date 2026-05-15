import User from "../models/user.model.js";

export async function register(req, res) {
    try {
        const { email, name, password } = req.body;

        await User.create({
            email,
            name,
            password
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