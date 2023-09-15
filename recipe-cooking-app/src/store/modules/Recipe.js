import API_SERVICE from "../service/API_SERVICE.js";

const recipe = {
  namespaced: true,
  state: {
    recipe: [],
    id: "",
    bookmarks: [],
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
      state.recipe = {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        sourceUrl: recipe.source_url,
        image: recipe.image_url,
        servings: recipe.servings,
        cookingTime: recipe.cooking_time,
        ingredients: recipe.ingredients,
      };

      if (state.bookmarks.some((bookmark) => bookmark.id === state.recipe.id)) {
        state.recipe.bookmarked = true;
      } else {
        state.recipe.bookmarked = false;
      }
    },

    // Update new Serving
    updateNewServings(state, newServings) {
      state.recipe.ingredients.forEach((ing) => {
        ing.quantity =
          (ing.quantity * newServings.value) / state.recipe.servings;
      });
      state.recipe.servings = newServings.value;
    },

    // Thêm bookmark
    addBookMark(state, recipe) {
      state.bookmarks.push(recipe.value);

      if (recipe.value.id === state.recipe.id) state.recipe.bookmarked = true;

      localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
    },

    // Xóa bookmark
    deleteBookMark(state, id) {
      const index = state.bookmarks.findIndex((el) => el.id === id.value);
      state.bookmarks.splice(index, 1);

      if (id.value === state.recipe.id) state.recipe.bookmarked = false;

      localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
    },
  },
  getters: {
    changeId(state) {
      return state.id;
    },

    isRecipe(state) {
      return state.recipe;
    },

    isBookMark(state) {
      const storage = localStorage.getItem("bookmarks");
      if (storage) return (state.bookmarks = JSON.parse(storage));
    },
  },
};

export default recipe;
