import { Router } from "express"
import { testController } from "../controllers/test.controller.js"

const testRoute = Router()

testRoute.get("/", testController)

export default testRoute