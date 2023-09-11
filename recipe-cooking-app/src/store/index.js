import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    recipe: [],
    searchRecipesResult: [],
    search: "",
    id: "",

    // Pagination
    numPage: null,
    currentPage: 1,
    resultPerPage: 10,
    nextPage: null,
    prevPage: null,
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
    },

    // take input search
    takeInputSearch(state, payload) {
      state.search = payload.value;
    },
    // Data Search Recipe Result
    POST_SEARCH(state, payload) {
      let { recipes } = payload;
      // Custom Search Recipes Result
      state.searchRecipesResult = recipes.map((rec) => {
        return {
          id: rec.id,
          title: rec.title,
          publisher: rec.publisher,
          image: rec.image_url,
        };
      });

      // Set CurrentPage = 1
      state.currentPage = 1;

      // Computed Number Page
      state.numPage = Math.ceil(recipes.length / state.resultPerPage);
      console.log(state.numPage);

      //Page 1, and there are other pages
      if (state.currentPage === 1 && state.numPage > 1) {
        return (state.nextPage = state.currentPage + 1);
      }
      //Last Page
      if (state.currentPage === state.numPage && state.numPage > 1) {
        return (state.prevPage = state.currentPage - 1);
      }
      //Other page
      if (state.currentPage < state.numPage) {
        return (
          (state.nextPage = state.currentPage + 1) &&
          (state.prevPage = state.currentPage - 1)
        );
      }
      //Page 1, and there are NO other pages
    },

    //take Change Current Page
    changeCurrentPage(state, payload) {
      return (state.currentPage = payload.value);
    },
    //Update Next page
    updateNextPage(state, payload) {
      return (state.nextPage = payload.value + 1);
    },
    //Update Prev page
    updatePrevPage(state, payload) {
      return (state.prevPage = payload.value - 1);
    },
  },
  getters: {
    //số trang hiện tại
    currentPage(state) {
      return state.currentPage;
    },

    // tổng số phân trang
    numPage(state) {
      return state.numPage;
    },

    //Next Page
    nextPage(state) {
      return state.nextPage;
    },

    //Prev Page
    prevPage(state) {
      return state.prevPage;
    },

    // Kết quả tìm kiếm của 1 trang
    isSearchResultPage(state) {
      const start = (state.currentPage - 1) * state.resultPerPage;
      const end = state.currentPage * state.resultPerPage;
      return state.searchRecipesResult.slice(start, end);
    },

    InputSearch(state) {
      return state.search;
    },

    changeId(state) {
      return state.id;
    },
  },
});

export default store;
