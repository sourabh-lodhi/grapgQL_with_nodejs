const express = require("express");
const app = express();
require("./config/index");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const graphQlRouter = require('./routes/routes')
app.use('/',graphQlRouter)

app.listen(8080, () => {
  console.log("start server");
});
