import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/UserRoute";
const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();
const PORT = process.env.PORT;

mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch((error) => {
		console.error("Failed to connect to MongoDB", error);
	});
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
app.use("/api/user", userRoutes);
