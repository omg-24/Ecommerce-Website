import { Router } from "express"
import { register } from "../controllers/auth.controller.js"

const userRoute = Router()

userRoute.post("/register", register)

export default userRoute