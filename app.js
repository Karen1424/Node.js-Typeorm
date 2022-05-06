const express = require("express");
const typeorm = require("./src/database/typeorm");
const router = require("./src/controller/userController");

const PORT = 3310;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(router);


app.listen(PORT,() => console.log("server has been started on PORT " + PORT));