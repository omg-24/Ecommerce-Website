import { Router } from "express"

import { authMiddleware } from "../middleware/auth.middleware.js"
import { adminMiddleware } from "../middleware/admin.middleware.js"

import { adminDashboard } from "../controllers/admin.controller.js"

const adminRoute = Router()

adminRoute.get(
    "/dashboard",
    authMiddleware,
    adminMiddleware,
    adminDashboard
)

export default adminRoute