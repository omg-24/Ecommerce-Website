import express from "express"
import testRoute from "./routes/test.routes.js"
import userRoute from "./routes/auth.routes.js"
import adminRoute from "./routes/admin.routes.js"
const app = express()

app.use(express.json())

app.use("/api/test", testRoute)
app.use("/api/auth", userRoute)
app.use("/api/admin", adminRoute)

export default app