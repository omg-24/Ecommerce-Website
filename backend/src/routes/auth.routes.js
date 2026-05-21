import { Router } from "express"
import { getme, login, register } from "../controllers/auth.controller.js"
import { authMiddleware } from "../middleware/auth.middleware.js"

const authRoute = Router()

authRoute.post("/register", register)
authRoute.post("/login",login)
authRoute.get( "/me", authMiddleware, getme )
export default authRoute