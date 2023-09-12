import API_SERVICE from "../service/API_SERVICE.js";

const apiModule = {
  namespaced: true,
  state: {
    recipe: [],
    searchRecipeResults: [],
    search: "",
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

    // Load search recipe results
    fetchSearchRecipe({ commit, state }) {
      return new Promise((resolve, reject) => {
        API_SERVICE.searchRecipe(state.search)
          .then((response) => {
            commit("POST_SEARCH_RECIPE", response.data);
            resolve(response.data);
          })
          .catch((err) => {
            reject(console.error(`${err} 🔍🔍🔍🔍🔍`));
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

    // take input search => Call API
    takeInputSearch(state, payload) {
      state.search = payload.value;
    },

    // Call API => Custom data search recipes
    POST_SEARCH_RECIPE(state, payload) {
      let { recipes } = payload.data;
      // Custom Search Recipes Result
      state.searchRecipeResults = recipes.map((rec) => {
        return {
          id: rec.id,
          title: rec.title,
          publisher: rec.publisher,
          image: rec.image_url,
        };
      });
    },
  },
  getters: {
    inputSearch(state) {
      return state.search;
    },

    changeId(state) {
      return state.id;
    },

    isRecipe(state) {
      return state.recipe;
    },

    // Kết quả tìm kiếm của 1 trang
    isSearchResultPage(state) {
      // const start =
      //   (state["pagination/currentPage"] - 1) *
      //   state["pagination/resultPerPage"];
      // const end =
      //   state["pagination/currentPage"] * state["pagination/resultPerPage"];
      // return state.searchRecipeResults.slice(start, end);

      return state.searchRecipeResults;
    },
  },
};

export default apiModule;
