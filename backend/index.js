import express from "express";

const app = express();

app.get("/", (req, res) => res.json("Welcome to Modern Store Backend"));

app.listen(3000, () => {
  console.log("Backend is listening on port : " + 3000 + "...");
});
