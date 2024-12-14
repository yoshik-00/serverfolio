const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const notionRoutes = require("./routes/notionRoutes");

const app = express();

app.use((req, res, next) => {
  console.log(
    `Request Method: ${req.method}, Request URL: ${req.url}, Body:`,
    req.body
  );
  next();
});

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use("/notion", notionRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
