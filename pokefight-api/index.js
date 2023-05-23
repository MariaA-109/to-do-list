require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT"],
  })
);

app.use("/");

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));