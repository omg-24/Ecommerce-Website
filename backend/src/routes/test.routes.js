import { Router } from "express"

const testRoute = Router()

testRoute.get("/", async function(req, res) {
    res.json({
        message: "Test api is working"
    })
})

export default testRoute