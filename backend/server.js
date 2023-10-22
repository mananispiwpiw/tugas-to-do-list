import express from "express";
import mongoose from "mongoose";
import { router as routes } from "./api/routes/ToDoRoute.js";
import "dotenv/config";
import cors from "cors";

const app = express();
const PORT = process.env.port || 3000;

app.use(express.json());
app.use(cors());

// Db Connection
mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to Database"))
    .catch((err) => console.log(err));

app.use(routes);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
