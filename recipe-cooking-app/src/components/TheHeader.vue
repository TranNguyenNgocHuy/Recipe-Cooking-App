<template>
  <section
    class="h-24 bg-red-100 rounded-t-lg px-5 flex justify-between items-center"
  >
    <div class="flex gap-14">
      <!-- begin div -->
      <div class="flex items-center">
        <img class="h-16 w-16" src="../IMG/Logo.png" alt="logo" />
        <p class="logo font-black text-2xl text-red-950">Recipe Cooking</p>
      </div>
      <!-- end div -->

      <!-- begin div -->
      <div
        class="flex items-center relative hover:drop-shadow-md hover:-translate-y-[2px] duration-300"
      >
        <input
          class="rounded-full h-12 w-[340px] px-5 focus:outline-0 focus:invalid:border-none focus:invalid:ring-"
          id="search"
          type="text"
          placeholder="Search over 1,000,000 recipes..."
          v-model.trim="searchInput"
          @keyup.enter="takeInputSearch()"
        />
        <button
          class="h-12 w-40 rounded-full bg-gradient-to-br from-red-700 to-red-950 text-xs font-semibold tracking-wider text-gray-100 flex justify-center items-center gap-2 absolute right-[-6rem]"
          @click="takeInputSearch()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <span> SEARCH </span>
        </button>
      </div>
      <!-- end div -->
    </div>

    <!-- begin div -->
    <div class="h-full flex items-center text-sm font-semibold">
      <div class="h-full px-5 flex items-center hover:bg-red-200">
        <button class="flex gap-1 items-center" @click="toggleAddRecipe()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="#7f1d1d"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>

          ADD RECIPE
        </button>
      </div>

      <div
        class="h-full px-5 flex items-center relative hover:bg-red-200"
        @mouseover="bookMarkOpen = true"
        @mouseleave="bookMarkOpen = false"
      >
        <button class="h-full flex gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="#7f1d1d"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
            />
          </svg>
          BOOKMARKS
        </button>
        <BookMark class="z-10 absolute -right-5 top-24" v-if="bookMarkOpen" />
      </div>
    </div>
    <!-- end div -->
  </section>
</template>

<script setup>
import BookMark from "./TheMainList/MainRecipeList/BookMark.vue";
import { useStore } from "vuex";
// store vuex
const store = useStore();
import { ref } from "vue";

//toggle form
function toggleAddRecipe() {
  store.commit("toggle/toggleAddRecipe");
}

// show data Book Mark
const bookMarkOpen = ref(false);

// Input Search
const searchInput = ref("");
function takeInputSearch() {
  store.commit({
    type: "SearchRecipe/takeInputSearch",
    value: searchInput.value,
  });
  searchInput.value = "";
}
</script>

<style scoped>
.logo {
  font-family: Dancing Script;
  font-style: italic;
}
</style>
