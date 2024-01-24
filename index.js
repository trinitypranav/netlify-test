const express = require("express");
require("dotenv").config();
const app = express();

app.get("/getData", (req, res) => {
  console.log(process.env.USER_DATA);
  res.status(200).send(process.env.USER_DATA);
});

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`Netlify-test is listening on port ${port}`)
);
