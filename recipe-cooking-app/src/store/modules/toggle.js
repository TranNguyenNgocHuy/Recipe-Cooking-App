const toggle = {
  namespaced: true,
  state: {
    addRecipe: false,
  },
  mutations: {
    toggleAddRecipe(state) {
      state.addRecipe = !state.addRecipe;
      console.log(state.addRecipe);
    },
  },
  getters: {
    controlAddRecipe(state) {
      return state.addRecipe;
    },
  },
};

export default toggle;
