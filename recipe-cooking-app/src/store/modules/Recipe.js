import API_SERVICE from "../service/API_SERVICE.js";

const recipe = {
  namespaced: true,
  state: {
    recipe: [],
    id: "",
  },
  actions: {
    // Load Recipe
    fetchRecipe({ commit, state }) {
      return new Promise((resolve, reject) => {
        API_SERVICE.getRecipe(state.id)
          .then((response) => {
            commit("POST_RECIPE", response.data);
            resolve(response.data);
          })
          .catch((err) => {
            reject(console.error(`${err} 🆔🆔🆔🆔🆔`));
          });
      });
    },
  },
  mutations: {
    // take id Recipe => call API
    takeId(state, payload) {
      state.id = payload.value;
    },

    // call API => Custom data Recipe
    POST_RECIPE(state, payload) {
      let { recipe } = payload.data;
      recipe = {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        sourceUrl: recipe.source_url,
        image: recipe.image_url,
        servings: recipe.servings,
        cookingTime: recipe.cooking_time,
        ingredients: recipe.ingredients,
      };
      state.recipe = recipe;
    },
  },
  getters: {
    changeId(state) {
      return state.id;
    },

    isRecipe(state) {
      return state.recipe;
    },
  },
};

export default recipe;
