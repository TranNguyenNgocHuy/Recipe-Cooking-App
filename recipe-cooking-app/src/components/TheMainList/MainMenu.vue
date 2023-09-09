<template>
  <section class="basis-[35%] bg-gray-50 rounded-bl-lg pt-10">
    <div v-show="isLoading">
      <base-spiner></base-spiner>
    </div>

    <div v-show="!isLoading">
      <div v-for="item in dataSearchRecipes" :key="item.id">
        <router-link
          class="w-[100%] mx-auto grid grid-cols-4 grid-rows-2 px-8 py-5 hover:bg-red-100 hover:-translate-y-[2px] duration-300"
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
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUpdated } from "vue";
import { useStore } from "vuex";

// store vuex
const store = useStore();

//Spiner Loading
const isLoading = ref(false);

const dataSearchRecipes = computed(() => {
  return store.getters.takeSearch;
});

// watch(
//   () => store.getters.changeSearch,
//   onUpdated(() => {
//     let data = dataSearchRecipes.value;
//     if (data.length > 0) {
//       errorSearch.value = false;
//     } else if (data.length == 0) {
//       errorSearch.value = true;
//     }
//   })
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
