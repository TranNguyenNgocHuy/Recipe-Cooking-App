<template>
  
  <div class="form" @click.self="closePopupAddRecipe">
    <div v-show="sendRecipeSuccess" class="w-[1000px] bg-white rounded-lg py-40 pl-20"><p class="text-3xl font-semibold">Recipe was successfully upload!</p></div>
    <div v-show="!sendRecipeSuccess" class="w-[1000px] bg-white rounded-lg">
      <!-- begin div -->
      <div class="flex justify-end p-4">
        <button @click="closePopupAddRecipe">
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
      <!-- end div -->

      <form class="w-full" @submit.prevent="submitForm">
        <!-- begin div -->
        <div class="flex justify-between px-10 pb-12">
          <!-- begin div -->
          <div class="w-[380px] flex flex-col gap-8">
            <p class="text-2xl font-semibold mb-5">RECIPE DATA</p>
            <div class="input-container">
              <label>Title</label>
              <input
                class="input"
                type="text"
                name="title"
                required
                v-model="addRecipe.title"
              />
            </div>
            <div class="input-container">
              <label>URL</label>
              <input
                class="input"
                type="text"
                name="sourceUrl"
                required
                v-model="addRecipe.source_url"
              />
            </div>
            <div class="input-container">
              <label>Image URL</label>
              <input
                class="input"
                type="text"
                name="image"
                required
                v-model="addRecipe.image_url"
              />
            </div>
            <div class="input-container">
              <label>Publisher</label>
              <input
                class="input"
                type="text"
                name="publisher"
                required
                v-model="addRecipe.publisher"
              />
            </div>
            <div class="input-container">
              <label>Prep time</label>
              <input
                class="input"
                type="number"
                name="cookingTime"
                required
                v-model.number="addRecipe.cooking_time"
              />
            </div>
            <div class="input-container">
              <label>Servings</label>
              <input
                class="input"
                type="number"
                name="servings"
                required
                v-model.number="addRecipe.servings"
              />
            </div>
          </div>
          <!-- end div -->

          <!-- begin div -->
          <div class="w-[470px] flex flex-col gap-8">
            <p  
            :class="wrongFormat ? 'text-2xl font-semibold' : 'text-2xl font-semibold mb-5' "
            >
              INGREDIENTS
              <p
                v-if="wrongFormat"
                class="text-sm text-red-500 font-semibold"
              >
                Wrong ingredient format! Please use the corect format</p
              >
            </p>

            <div class="input-container">
              <label>Ingredient 1</label>
              <input
                class="input input--ingredient"
                type="text"
                name="ingredient-1"
                placeholder="Format: 'Quantity, Unit, Description'"
                v-model.trim="inputIngredient1"
                @blur="checkFormat(inputIngredient1)"
              />
              
            </div>

            <div class="input-container">
              <label>Ingredient 2</label>
              <input
                class="input input--ingredient"
                type="text"
                name="ingredient-2"
                placeholder="Format: 'Quantity, Unit, Description'"
                v-model.trim="inputIngredient2"
                @blur="checkFormat(inputIngredient2)"
              />
            </div>
            <div class="input-container">
              <label>Ingredient 3</label>
              <input
                class="input input--ingredient"
                type="text"
                name="ingredient-3"
                placeholder="Format: 'Quantity, Unit, Description'"
                v-model.trim="inputIngredient3"
                @blur="checkFormat(inputIngredient3)"
              />
            </div>
            <div class="input-container">
              <label>Ingredient 4</label>
              <input
                class="input input--ingredient"
                type="text"
                name="ingredient-4"
                placeholder="Format: 'Quantity, Unit, Description'"
                v-model.trim="inputIngredient4"
                @blur="checkFormat(inputIngredient4)"
              />
            </div>
            <div class="input-container">
              <label>Ingredient 5</label>
              <input
                class="input input--ingredient"
                type="text"
                name="ingredient-5"
                placeholder="Format: 'Quantity, Unit, Description'"
                v-model.trim="inputIngredient5"
                @blur="checkFormat(inputIngredient5)"
              />
            </div>
            <div class="input-container">
              <label>Ingredient 6</label>
              <input
                class="input input--ingredient"
                type="text"
                name="ingredient-6"
                placeholder="Format: 'Quantity, Unit, Description'"
                v-model.trim="inputIngredient6"
                @blur="checkFormat(inputIngredient6)"
              />
            </div>
          </div>
          <!-- end div -->
        </div>
        <!-- end div -->

        <!-- begin div -->
        <div class="flex justify-center mb-16">
          <button
            class="flex justify-center items-center gap-2 h-14 w-48 rounded-full bg-gradient-to-br from-red-700 to-red-950 text-lg font-semibold text-red-50 hover:drop-shadow-md hover:shadow-md hover:-translate-y-[2px] duration-300"
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
        <!-- end div -->
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useStore } from "vuex";
const store = useStore();

const addRecipe = reactive({
  title: "",
  source_url: "",
  image_url: "",
  publisher: "",
  cooking_time: null,
  servings: null,
  ingredients:[]
});

// Input Ingredient
const inputIngredient1 = ref("");
const inputIngredient2 = ref("");
const inputIngredient3 = ref("");
const inputIngredient4 = ref("");
const inputIngredient5 = ref("");
const inputIngredient6 = ref("");

// Check lỗi input Format
const wrongFormat = ref(false);

function checkFormat(input) {
  const ingArr = input.replaceAll(" ", "").split(",");
  if (ingArr.length !== 3) {
    wrongFormat.value = true;
  } else wrongFormat.value = false;
}

//Custom Ingredient
function getInputIngredient() {
  let ingArr = [
    inputIngredient1.value,
    inputIngredient2.value,
    inputIngredient3.value,
    inputIngredient4.value,
    inputIngredient5.value,
    inputIngredient6.value,
  ];

  ingArr.map((ing) => {
  const ingArr = ing.replaceAll(" ", "").split(",");
  if (ing) {
    const [quantity, unit, description] = ingArr;
    return addRecipe.ingredients.push({
      quantity: quantity ? +quantity : null,
      unit: unit,
      description: description,
    });
  } 
  });
}


// Gửi Form
const sendRecipeSuccess = ref(false)

async function submitForm() {
    getInputIngredient();
   
     await store.dispatch('Recipe/sendRecipe', addRecipe)

     sendRecipeSuccess.value = true
     setTimeout(() => {
       closePopupAddRecipe();
     }, 1000)
     
  } 


// close Popup
function closePopupAddRecipe() {
  store.dispatch("toggle/togglePopupAddRecipe");
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
  height: 40px;
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
  color: #adb5bd;
  font-weight: 400;
}

.input:hover {
  border: 2px solid #b91c1c;
}
.input:focus {
  border: 2px solid #b91c1c;
}
</style>
