import express, { Application, Request, Response } from "express";
const app = express();
const PORT: number = 3000;

require("./model/index");

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
});

app.get("/about", (req: Request, res: Response) => {
  res.send("About Page");
});

app.get("/contact", (req: Request, res: Response) => {
  res.send("Contact Page");
});

app.listen(PORT, () => {
  console.log("Server has started at port", PORT);
});
