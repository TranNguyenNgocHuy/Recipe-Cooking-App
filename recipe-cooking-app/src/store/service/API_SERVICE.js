import axios from "axios";

const API_BASE_URL = "https://forkify-api.herokuapp.com/api/v2/recipes";
const KEY = "e5ec2333-b9c8-4a7c-8643-98f2dd6be810";

export default {
  // Lấy công thức
  getRecipe(id) {
    return axios.get(`${API_BASE_URL}/${id}?key=${KEY}`);
  },

  // Tìm công thức
  searchRecipe(search) {
    return axios.get(`${API_BASE_URL}?search=${search}&key=${KEY}`);
  },

  // Gửi công thức
  postRecipe(recipe) {
    return axios.post(`${API_BASE_URL}?key=${KEY}`, recipe, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },

  // Xóa công thức
  deleteRecipe(id) {
    return axios.delete(`${API_BASE_URL}/${id}?key=${KEY}`);
  },
};
