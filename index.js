import express from "express";
import router from "./routes/index.js";

const app = express();
const port = process.env.PORT || 4000;

app.use("/", router);

app.listen(port, () => {
  console.log(`Express se esta ejecutando en el puerto ${port}`);
});
