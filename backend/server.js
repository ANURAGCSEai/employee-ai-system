const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const employeeRoutes = require("./routes/employeeRoutes");
const authRoutes = require("./routes/authRoutes");
const aiRoutes = require("./routes/aiRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

app.use("/api/employees", employeeRoutes);

app.use("/api/auth", authRoutes);

app.use("/api/ai", aiRoutes);

app.get("/", (req, res) => {
    res.send("API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});