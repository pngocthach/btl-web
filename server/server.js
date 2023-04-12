const express = require("express");
const cors = require("cors");
const app = express();

// import { Express } from "express";

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

//test
app.get("/api", (req, res) => {
  res.json({
    test: [1, 2, 3],
  });
});

app.listen(5000, () => {
  console.log("server started on port 5000");
});
