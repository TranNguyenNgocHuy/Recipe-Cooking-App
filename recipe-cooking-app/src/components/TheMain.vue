<template>
  <section class="w-full min-h-[900px] flex flex-row">
    <MainMenu
      :datasSearch="searchRecipes"
      :isLoading="isLoading"
      :errorSearch="errorSearch"
    />
    <router-view></router-view>
  </section>
</template>

<script setup>
import store from "../store";
import MainMenu from "./TheMainList/MainMenu.vue";

import { onMounted, computed, watch, ref } from "vue";
//Spiner Loading
const isLoading = ref(false);
const errorSearch = ref(false);

//datas Search recipe
const searchRecipes = computed(() => {
  return store.state.searchRecipes;
});

// watch(
//   () => store.getters.changeSearch,
//   function checkSearch() {
//     if (store.getters.checkSearch.length > 0) {
//       return (errorSearch.value = true);
//     } else if (store.getters.checkSearch.length === 0) {
//       return (errorSearch.value = false);
//     }
//   }
// );

watch(
  () => store.getters.changeSearch,
  onMounted(async () => {
    isLoading.value = true;
    await store.dispatch("fetchSearchRecipe");
    isLoading.value = false;
  })
);
</script>
