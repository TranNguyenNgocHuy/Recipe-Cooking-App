const pagination = {
  namespaced: true,
  state: {
    numPage: null,
    currentPage: 1,
    resultPerPage: 10,
    nextPage: null,
    prevPage: null,
  },
  mutations: {
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
};

export default pagination;
