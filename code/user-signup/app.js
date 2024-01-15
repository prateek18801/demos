const express = require("express");
const cors = require("cors");
const db = require("./database/models");
const controller = require("./controller");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

db.sequelize.sync();

app.get("/ping", (req, res, next) => {
    return res.status(200).json({
        message: "service running"
    });
});

app.post("/v1/users", controller.postUser);


app.listen(process.env.PORT, () => {
    console.log("service running");
    db.sequelize.authenticate().then(() => {
        console.log("db connection successful");
    }).catch((err) => {
        console.error("db connection failed");
    })
});
