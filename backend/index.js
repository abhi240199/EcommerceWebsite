const express = require("express");
const PORT = 8000;
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(require("./routes/index"));

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error in creating a server");
    return;
  }
  console.log("Server is running on Port : ", PORT);
});
