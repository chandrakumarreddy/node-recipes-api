import RecipesData from "../data/recipe";

export default class Recipes {
  static getRecipes(req, res) {
    res.status(200).json({
      count: RecipesData.length,
      message: "List of all Recipe",
      recipes: RecipesData,
    });
  }
  static postRecipes(req, res) {
    const newId = RecipesData.length + 1;
    const { name, description } = req.body;
    const newRecipe = {
      id: newId,
      name,
      description,
      addedAt: new Date(),
    };
    RecipesData.push(newRecipe);
    res.status(201).json({
      message: "A new recipe has been added",
      data: { id: newId, name: name },
    });
  }
}
