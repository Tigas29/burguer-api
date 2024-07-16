import { Router } from "express";
const routers = new Router();

routers.get("/", (req, res) => {
  return res.status(200).json({ text: "hello world" });
});

export default routers;
