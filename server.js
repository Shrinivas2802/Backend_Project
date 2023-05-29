const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
var cors=require('cors');
//connectDb();
const app = express();
const bodyparse=require("body-parser");
const port = process.env.PORT || 5000;
//app.use(bodyparse.json());
app.use(express.json());
//app.use(bodyparse.urlencoded({extended:true}));
app.use(cors());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});