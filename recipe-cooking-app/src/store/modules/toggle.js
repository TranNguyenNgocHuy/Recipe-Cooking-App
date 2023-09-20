const toggle = {
  namespaced: true,
  state: {
    addRecipePopup: false,
  },
  mutations: {
    setPopupAddRecipe(state, isOpen) {
      state.addRecipePopup = isOpen;
    },
  },
  actions: {
    togglePopupAddRecipe({ commit, state }) {
      commit("setPopupAddRecipe", !state.addRecipePopup);
    },
    closePopupAddRecipe({ commit }) {
      commit("setPopupAddRecipe", false);
    },
  },
  getters: {
    isPopupAddRecipe(state) {
      return state.addRecipePopup;
    },
  },
};

export default toggle;
