const express = require("express");
var cors = require("cors");
const midrun = require("midrun-node");

const app = express();
app.use(cors());

const port = process.env.PORT || 3000;

const routes = require("./routes");

app.use("/", midrun.router([routes], {}));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
