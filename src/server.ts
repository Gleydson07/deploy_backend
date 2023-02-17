import express from "express";

const app = express();
const port = 3100;

app.get("/", (req, res) => {
  return res.json({ message: `Running on port ${port}. 🎉` });
});

app.listen(port);