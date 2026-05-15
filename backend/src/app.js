import express from "express"
import testRoute from "./routes/test.routes.js"
import userRoute from "./routes/auth.routes.js"
const app = express()

app.use(express.json())

app.use("/api/test", testRoute)
app.use("/api/auth", userRoute)

export default app