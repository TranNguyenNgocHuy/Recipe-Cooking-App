<template>
  <section class="basis-[35%] bg-gray-50 rounded-bl-lg pt-10">
    <div v-show="isLoading">
      <base-spiner></base-spiner>
    </div>

    <div v-show="!isLoading">
      <div class="mb-8">
        <router-link
          v-for="item in SearchRecipesResult"
          :key="item.id"
          class="w-[100%] mx-auto grid grid-cols-4 grid-rows-2 px-8 py-4 hover:bg-red-100 hover:-translate-y-[2px] duration-300"
          :to="'/recipe/' + item.id"
        >
          <div class="row-span-2">
            <figure class="w-16 h-16 rounded-full bg-red-200">
              <img
                class="w-16 h-16 rounded-full opacity-70 bg-red-200"
                :src="item.image"
                :alt="item.title"
              />
            </figure>
          </div>

          <p class="col-span-3 truncate text-[#c92a2a] uppercase">
            {{ item.title }}
          </p>
          <p class="col-span-3 truncate">{{ item.publisher }}</p>
        </router-link>
      </div>
      <base-pagination v-if="SearchRecipesResult.length > 0" />
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch } from "vue";
// store vuex
import { useStore } from "vuex";
const store = useStore();

//Spiner Loading
const isLoading = ref(false);

// Theo dõi input search, nếu thay đổi sẽ cập nhật API Search Recipe
watch(
  () => store.getters["SearchRecipe/inputSearch"],
  async () => {
    isLoading.value = true;
    await store.dispatch("SearchRecipe/fetchSearchRecipe");
    isLoading.value = false;
  }
);

// Kết quả tìm kiếm công thức
const SearchRecipesResult = computed(() => {
  return store.getters["SearchRecipe/isSearchResultPage"];
});
</script>
