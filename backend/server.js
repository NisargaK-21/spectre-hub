const dotenv = require("dotenv");

dotenv.config();

const express = require("express");
const cors = require("cors");


const connectDB = require("./config/db");
const stageRoutes = require("./routes/stage");
const reviewRoutes = require("./routes/review");

console.log(process.env.GEMINI_API_KEY);
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/stages", stageRoutes);
app.use("/api/review", reviewRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});