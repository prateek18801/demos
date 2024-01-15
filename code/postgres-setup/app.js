const express = require("express");
const connectDB = require("./utils/db");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/v1/okta-callback", async (req, res, next) => {
    console.log(req.body);
    return res.status(200).json({
        ...req.body
    })
});

app.listen(process.env.PORT, () => {
    console.log(`service running on PORT ${process.env.PORT}`);
    connectDB();
});
