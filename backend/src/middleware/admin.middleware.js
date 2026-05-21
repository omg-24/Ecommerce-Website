export const adminMiddleware = (req, res, next) => {

    try {

        const userRole = req.user.role

        if (userRole !== "admin") {
            return res.status(403).json({
                message: "Access denied. Admin only."
            })
        }

        next()

    } catch (error) {

        res.status(500).json({
            message: "Authorization failed",
            error: error.message
        })
    }
}