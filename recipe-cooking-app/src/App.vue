<template>
  <section
    class="w-full min-h-[1400px] bg-gradient-to-br from-red-900 to-red-950"
  >
    <div class="pt-14">
      <TheApp />
    </div>
    <TheFormAddRecipe v-if="controlAddRecipe" />
  </section>
</template>

<script setup>
import TheApp from "./components/TheApp.vue";
import TheFormAddRecipe from "./components/Form/TheFormAddRecipe.vue";
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const controlAddRecipe = computed(() => {
  return store.getters["toggle/controlAddRecipe"];
});
</script>
