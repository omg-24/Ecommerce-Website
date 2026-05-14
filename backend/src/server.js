import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import connectDB from "./database/db.js";

const port = process.env.PORT || 5000;

const startServer = async () => {
    try {
        await connectDB();

        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });

    } catch (error) {
        console.error("Server startup failed", error);
    }
};

startServer();