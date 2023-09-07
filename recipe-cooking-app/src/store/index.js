import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    recipe: [],
    searchRecipes: [],
    search: "",
    id: "",
  },
  actions: {
    // tải công thức
    async fetchRecipes({ commit, state }) {
      try {
        const data = await axios
          .get(`https://forkify-api.herokuapp.com/api/v2/recipes/${state.id}`)
          .then((response) => response.data);
        commit("POST_RECIPES", data.data);
      } catch (err) {
        console.error(`${err} ✨✨✨✨✨`);
      }
    },

    // tìm công thức
    async fetchSearchRecipe({ commit, state }) {
      try {
        const data = await axios
          .get(
            `https://forkify-api.herokuapp.com/api/v2/recipes/?search=${state.search}`
          )
          .then((response) => response.data);

        commit("POST_SEARCH", data.data);
      } catch (err) {
        console.error(`${err} 🎆🎆🎆🎆🎆`);
      }
    },
  },
  mutations: {
    // take id
    takeId(state, payload) {
      state.id = payload.value;
    },
    // Custom data Recipe
    POST_RECIPES(state, payload) {
      let { recipe } = payload;
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
      console.log(state.recipe);
    },

    // take input search
    takeInputSearch(state, payload) {
      state.search = payload.value;
    },
    // Custom data Search
    POST_SEARCH(state, payload) {
      let { recipes } = payload;
      state.searchRecipes = recipes.map((rec) => {
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
    checkSearch(state) {
      return state.searchRecipes;
    },
    changeSearch(state) {
      return state.search;
    },

    changeId(state) {
      return state.id;
    },
  },
});

export default store;
