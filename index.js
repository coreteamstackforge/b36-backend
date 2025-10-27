const express = require("express");
require("dotenv").config();
const dbConnection = require("./config/dbConnection");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const cors = require("cors");

const app = express();

// use middleware
app.use(express.json());
app.use(cors());
app.use("/api", userRoutes);
app.use("/auth", authRoutes);
app.use("/products", productRoutes);

dbConnection();
app.listen(process.env.port, () => {
    console.log(`Server running on http://localhost:${process.env.port}`);
})