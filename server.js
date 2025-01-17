const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const notionRoutes = require("./routes/notionRoutes");

const app = express();

app.use(bodyParser.json());
app.use(
  cors({
    // origin: "https://n-yoshikawa.work:443",
    origin: "http://localhost:5173",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());
app.use("/notion", notionRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
