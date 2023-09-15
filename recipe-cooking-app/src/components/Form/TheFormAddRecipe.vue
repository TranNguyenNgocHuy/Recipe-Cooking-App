<template>
  <div class="form">
    <div class="w-[1000px] bg-white rounded-lg">
      <div class="flex justify-end p-4">
        <button @click="toggleAddRecipe()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            class="w-8 h-8 stroke-slate-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <form class="w-full flex justify-between px-10 pb-12">
        <div class="w-[380px] flex flex-col gap-5">
          <p class="text-2xl font-semibold mb-5">RECIPE DATA</p>
          <div class="input-container">
            <label for="Add Recipe">Title</label>
            <input class="input" type="text" />
          </div>
          <div class="input-container">
            <label for="Add Recipe">URL</label>
            <input class="input" type="text" />
          </div>
          <div class="input-container">
            <label for="Add Recipe">Image URL</label>
            <input class="input" type="text" />
          </div>
          <div class="input-container">
            <label for="Add Recipe">Publisher</label>
            <input class="input" type="text" />
          </div>
          <div class="input-container">
            <label for="Add Recipe">Prep time</label>
            <input class="input" type="text" />
          </div>
          <div class="input-container">
            <label for="Add Recipe">Servings</label>
            <input class="input" type="text" />
          </div>
        </div>

        <div class="w-[470px] flex flex-col gap-5">
          <p class="text-2xl font-semibold mb-5">INGREDIENTS</p>
          <div class="input-container">
            <label for="Ingredient">Ingredient 1</label>
            <input
              class="input input--ingredient"
              type="text"
              placeholder="Format: 'Quantity, Unit, Description'"
            />
          </div>
          <div class="input-container">
            <label for="Ingredient">Ingredient 2</label>
            <input
              class="input input--ingredient"
              type="text"
              placeholder="Format: 'Quantity, Unit, Description'"
            />
          </div>
          <div class="input-container">
            <label for="Ingredient">Ingredient 3</label>
            <input
              class="input input--ingredient"
              type="text"
              placeholder="Format: 'Quantity, Unit, Description'"
            />
          </div>
          <div class="input-container">
            <label for="Ingredient">Ingredient 4</label>
            <input
              class="input input--ingredient"
              type="text"
              placeholder="Format: 'Quantity, Unit, Description'"
            />
          </div>
          <div class="input-container">
            <label for="Ingredient">Ingredient 5</label>
            <input
              class="input input--ingredient"
              type="text"
              placeholder="Format: 'Quantity, Unit, Description'"
            />
          </div>
          <div class="input-container">
            <label for="Ingredient">Ingredient 6</label>
            <input
              class="input input--ingredient"
              type="text"
              placeholder="Format: 'Quantity, Unit, Description'"
            />
          </div>
        </div>
      </form>
      <div class="flex justify-center mb-16">
        <button
          class="flex justify-center items-center gap-1 h-16 w-40 rounded-full bg-gradient-to-br from-red-700 to-red-950 text-lg font-semibold text-red-50 hover:drop-shadow-md hover:shadow-md hover:-translate-y-[2px] duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            class="w-6 h-6 stroke-red-50"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
            />
          </svg>
          <span>Upload</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
const store = useStore();

function toggleAddRecipe() {
  store.commit("toggle/toggleAddRecipe");
}
</script>

<style scoped>
.form {
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 1;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  background-color: rgb(0, 0, 0, 0.3);
}

.input-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
}

.input {
  width: 250px;
  padding: 5px 10px 5px 10px;
  border: 2px solid #dee2e6;
  border-radius: 8px;
  outline: none;
  transition: 0.3s;
  font-weight: 400;
}

.input--ingredient {
  width: 320px;
}
.input--ingredient::placeholder {
  color: #ced4da;
  font-weight: 400;
}

.input:hover {
  border: 2px solid #868e96;
}
.input:focus {
  border: 2px solid #868e96;
}
</style>
