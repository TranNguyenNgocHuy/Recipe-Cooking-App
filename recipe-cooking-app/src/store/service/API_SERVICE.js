import axios from "axios";

const API_BASE_URL = "https://forkify-api.herokuapp.com/api/v2/recipes/";

export default {
  // Lấy công thức
  getRecipe(id) {
    return axios.get(`${API_BASE_URL}${id}`);
  },

  // https://forkify-api.herokuapp.com/api/v2/recipes/?search=${state.search}
  // Tìm công thức
  searchRecipe(search) {
    return axios.get(`${API_BASE_URL}?search=${search}`);
  },
};
