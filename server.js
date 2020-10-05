import express from "express";
import routes from "./app/routes/recipe";
const PORT = 3000;
const app = express();

app.use(express.json());
routes(app);

app.listen(PORT, () => {
  console.log(`server is listening at ${PORT}`);
});
