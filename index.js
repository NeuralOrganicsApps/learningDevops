const express = require("express");
const app = express();
const cors = require("cors");
const {
  Addition,
  Subtraction,
  Multiplication,
  Division,
} = require("./Application/Functions/functionsExport");
const { env } = require("./Application/Environment/Index");

//middleware
app.use(cors());
app.use(express.json())

app.post("/add", (req, res) => {
  const { x, y } = req.body;
  const result = Addition(x, y);
  res.json({ status: true, msg: result });
});

app.listen(env.PORT, () => {
  console.log("Server started");
});
