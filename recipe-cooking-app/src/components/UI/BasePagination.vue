<template>
  <ul
    :class="
      prevPage !== null && currentPage > 1
        ? 'flex justify-between mx-8'
        : 'flex justify-end mx-8'
    "
  >
    <li v-show="prevPage !== null && currentPage > 1">
      <button
        class="h-10 w-32 bg-red-100 text-red-700 rounded-full hover:bg-red-200 duration-500 flex justify-center items-center gap-3"
        @click="changeCurrentPage(currentPage - 1)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-5 h-5"
        >
          <path
            fill-rule="evenodd"
            d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
            clip-rule="evenodd"
          />
        </svg>
        Page {{ prevPage }}
      </button>
    </li>

    <li v-show="nextPage !== null && nextPage < numPage + 1">
      <button
        class="h-10 w-32 bg-red-100 text-red-700 rounded-full hover:bg-red-200 duration-500 flex justify-center items-center gap-3"
        @click="changeCurrentPage(currentPage + 1)"
      >
        Page {{ nextPage }}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-5 h-5"
        >
          <path
            fill-rule="evenodd"
            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </li>
  </ul>
</template>

<script setup>
import { computed, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();

//Next Page
const nextPage = computed(() => {
  return store.getters["SearchRecipe/nextPage"];
});

//Prev Page
const prevPage = computed(() => {
  return store.getters["SearchRecipe/prevPage"];
});

// Total Page
const numPage = computed(() => {
  return store.getters["SearchRecipe/numPage"];
});

// Update button nextPage and prevPage
watch(
  () => store.getters["SearchRecipe/currentPage"],
  (num) => {
    if (store.getters["SearchRecipe/currentPage"] + 1) {
      store.commit({
        type: "SearchRecipe/updateNextPage",
        value: num,
      });
    }
    if (store.getters["SearchRecipe/currentPage"] - 1) {
      store.commit({
        type: "SearchRecipe/updatePrevPage",
        value: num,
      });
    }
  }
);

//Current Page
const currentPage = computed(() => {
  return store.getters["SearchRecipe/currentPage"];
});

// Input change Current Page
function changeCurrentPage(num) {
  store.commit({
    type: "SearchRecipe/changeCurrentPage",
    value: num,
  });
}
</script>
