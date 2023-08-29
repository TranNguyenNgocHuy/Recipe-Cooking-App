<template>
  <!-- begin div Recipe -->
  <div class="basis-2/3 bg-red-100 rounded-br-lg">
    <!-- begin div no data -->
    <!-- <div class="w-1/2 mx-auto text-base font-semibold pt-10 text-center">
        <h1>Start by searching for a recipe or an ingredient. Have fun!</h1>
      </div> -->
    <!-- end div no data -->

    <!-- begin div have data -->
    <!-- begin div -->
    <div class="w-full relative" v-for="data in recipes" :key="id">
      <figure>
        <img
          class="w-full opacity-50 h-80"
          :src="data.image"
          :alt="data.title"
        />
      </figure>

      <!-- begin div -->
      <div
        class="bg-gradient-to-br from-red-700 to-red-950 rounded-lg text-sm font-semibold uppercase text-gray-100 -skew-x-12 origin-bottom -rotate-6 p-4 absolute left-40 top-[280px]"
      >
        <p class="">{{ data.title }}</p>
      </div>
      <!-- end div -->

      <!-- begin div -->
      <div
        class="flex justify-between items-center pt-16 pb-10 px-[4.5rem] bg-red-50"
      >
        <div class="flex gap-12">
          <p class="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#450a0a"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>MINUTES</span>
          </p>

          <div class="flex items-start gap-5">
            <p class="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#450a0a"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>
              <span> SERVINGS</span>
            </p>

            <div class="plus-minus flex gap-1">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#450a0a"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#450a0a"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <button
          class="bg-gradient-to-br from-red-700 to-red-950 h-10 w-10 rounded-full flex justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="#fff"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
            />
          </svg>
        </button>
      </div>
      <!-- end div -->

      <!-- begin div ingredient -->
      <div class="w-full bg-red-100 pt-12 pb-10">
        <h1 class="text-xl font-semibold text-[#c92a2a] text-center pb-8">
          RECIPE INGREDIENTS
        </h1>

        <div class="mx-auto w-2/3">
          <ul class="grid grid-cols-2 gap-7">
            <li class="recipe-detail">
              <el-icon class="icon-check"><Select /></el-icon>
              <span>1</span>
            </li>
            <li class="recipe-detail">
              <el-icon class="icon-check"><Select /></el-icon>
              <span>1</span>
            </li>
            <li class="recipe-detail">
              <el-icon class="icon-check"><Select /></el-icon>
              <span>1</span>
            </li>
            <li class="recipe-detail">
              <el-icon class="icon-check"><Select /></el-icon>
              <span>1</span>
            </li>

            <li class="recipe-detail">
              <el-icon class="icon-check"><Select /></el-icon>
              <span>1</span>
            </li>
            <li class="recipe-detail">
              <el-icon class="icon-check"><Select /></el-icon>
              <span>1</span>
            </li>
            <li class="recipe-detail">
              <el-icon class="icon-check"><Select /></el-icon>
              <span>1</span>
            </li>
            <li class="recipe-detail">
              <el-icon class="icon-check"><Select /></el-icon>
              <span>1</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- end div ingredient -->
      <MainRecipeFooter />
    </div>
    <!-- end div have data -->
  </div>
  <!-- end div Recipe -->
</template>

<script setup>
import MainRecipeFooter from "./MainRecipeList/MainRecipeFooter.vue";
import { ref, onMounted } from "vue";

const recipes = ref([]);

async function showRecipe() {
  try {
    const res = await fetch(
      "https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886"
    );
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    let { recipe } = data.data;
    recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredient: recipe.ingredients,
    };
    recipes.value.push(recipe);
    console.log(recipes.value);
  } catch (err) {
    alert(err);
  }
}
onMounted(() => showRecipe());
</script>

<style scoped>
.icon-check {
  height: 14px;
  width: 14px;
  color: #c92a2a;
}

.recipe-detail {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
