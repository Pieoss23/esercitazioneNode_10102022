import express from "express";
import router from "./routes/products";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/api", router);
app.listen(3000);
console.log("server connected");
