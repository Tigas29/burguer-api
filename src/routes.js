const { Router } = require("express");

const routers = new Router();

routers.get("/", (req, res) => {
  return res.status(200).json({ text: "hello world" });
});

module.exports = routers;
