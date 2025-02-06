const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const notionRoutes = require("./routes/notionRoutes");
const app = express();

//environment variable
const dotenv = require("dotenv");
const env = process.env.NODE_ENV || "development";
dotenv.config({ path: `.env.${env}` });
const port = process.env.PORT || 3000;
const url = process.env.URL || "http://localhost:5173";

app.use(bodyParser.json());
app.use(
  cors({
    origin: url,
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());
app.use("/notion", notionRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  if (process.env.NODE_ENV === "production") {
    console.log("Running in production mode");
  } else {
    console.log("Running in development mode");
  }
});

module.exports = app;
