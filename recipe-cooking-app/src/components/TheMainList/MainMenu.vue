<template>
  <section
    class="basis-[35%] min-h-[100%] bg-gray-50 rounded-bl-lg pt-10 flex flex-col"
  >
    <!-- begin div Spiner -->
    <div v-show="isLoading">
      <base-spiner></base-spiner>
    </div>
    <!-- end div Spiner -->

    <!-- begin div error search -->
    <div
      class="px-10 pt-10 text-lg font-semibold text-center"
      v-if="SearchRecipeResults.length == 0 && !isLoading"
    >
      We could not find that recipe. Please try another one!
    </div>
    <!-- end div error search -->

    <div v-show="!isLoading">
      <div class="mb-8">
        <router-link
          v-for="item in SearchRecipeResults"
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
      <base-pagination v-if="SearchRecipeResults.length > 0" />
    </div>

    <footer class="mt-auto pb-10">
      <h1 class="px-10 text-xs text-center text-gray-400">
        <span>&#169;</span>Copyright by TRAN NGUYEN NGOC HUY <br />Used for job
        application projects
      </h1>
    </footer>
  </section>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";
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
const SearchRecipeResults = computed(() => {
  return store.getters["SearchRecipe/isSearchResultPage"];
});

onMounted(async () => {
  isLoading.value = true;
  await store.dispatch("SearchRecipe/fetchSearchRecipe");
  isLoading.value = false;
});
</script>

<style scoped>
a.router-link-active {
  background-color: #fee2e2;
  transform: translateY(-2px);
}
</style>
