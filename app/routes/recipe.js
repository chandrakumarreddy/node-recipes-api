import recipeController from "../controllers/recipe";

export default (app) => {
  app.get("/api/v1/", (req, res) => {
    res.status(200).json({ "Recipe API": "Healthy" });
  });
  app.get("/api/v1/recipes", recipeController.getRecipes);
  app.post("/api/v1/recipes", recipeController.postRecipes);
};
