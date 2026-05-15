import User from "../models/user.model.js";



export async function register(req,res) {
    try{
        const {email ,name ,password ,role } = req.body;

        await User.create({
            email,
            name,
            password,
            role
        })

        res.json({
            message: "You are registered"
        })
    }catch (error) {
        res.status(500).json({
            message: "signup failed",
            error: error.message
        })
    }
}
