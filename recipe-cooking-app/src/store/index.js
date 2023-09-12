import { createStore } from "vuex";
import SearchRecipe from "./modules/SearchRecipe.js";
import Recipe from "./modules/Recipe.js";

const store = createStore({
  modules: {
    SearchRecipe: SearchRecipe,
    Recipe: Recipe,
  },
});

export default store;
