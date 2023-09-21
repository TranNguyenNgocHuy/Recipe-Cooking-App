import API_SERVICE from "../service/API_SERVICE.js";

const searchRecipe = {
  namespaced: true,
  state: {
    searchRecipeResults: [],
    search: "pizza",

    //Pagination
    numPage: null,
    currentPage: 1,
    resultPerPage: 10,
    nextPage: 2,
    prevPage: null,
  },

  actions: {
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
          ...(rec.key && { key: rec.key }),
        };
      });

      // Set CurrentPage = 1
      state.currentPage = 1;

      // Computed Number Page
      state.numPage = Math.ceil(recipes.length / state.resultPerPage);
    },

    //Delete result search recipe
    DELETE_RESULT_SEARCH(state, id) {
      const index = state.searchRecipeResults.findIndex((el) => el.id === id);
      state.searchRecipeResults.splice(index, 1);
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
    //Trang hiện tại
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
      return state.searchRecipeResults.slice(start, end);
    },

    // Input search
    inputSearch(state) {
      return state.search;
    },
  },
};

export default searchRecipe;
