const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "CI/CD Node.js Application is running"
    });
});

module.exports = app;