import { createStore } from "vuex";
import SearchRecipe from "./modules/SearchRecipe.js";
import Recipe from "./modules/Recipe.js";
import toggle from "./modules/toggle.js";

const store = createStore({
  modules: {
    SearchRecipe: SearchRecipe,
    Recipe: Recipe,
    toggle: toggle,
  },
});

export default store;
