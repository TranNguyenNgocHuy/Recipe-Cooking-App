<template>
  <!-- begin div ingredient -->
  <div class="w-full bg-red-100 pt-12 pb-10">
    <h1 class="text-xl font-semibold text-[#c92a2a] text-center pb-8">
      RECIPE INGREDIENTS
    </h1>

    <div class="ingredient-container mx-auto w-[75%] h-[250px] overflow-y-auto">
      <ul class="grid grid-cols-2 gap-8">
        <li class="flex items-center gap-4" v-for="ing in recipe.ingredients">
          <el-icon class="h-5 w-5 text-red-700 flex-shrink-0"
            ><Select
          /></el-icon>
          <span>{{ ing.quantity }} {{ ing.unit }} {{ ing.description }}</span>
        </li>
      </ul>
    </div>
  </div>
  <!-- end div ingredient -->
</template>

<script setup>
defineProps(["recipe"]);
</script>

<style scoped>
.ingredient-container::-webkit-scrollbar {
  width: 10px;
  background-color: #fef2f2;
  border-radius: 50px;
}
.ingredient-container::-webkit-scrollbar-track {
  width: 10px;
  background-color: #fef2f2;
  border-radius: 50px;
}
.ingredient-container::-webkit-scrollbar-thumb {
  width: 8px;
  background-color: rgb(201, 42, 42, 0.4);
  border-radius: 50px;
}
.ingredient-container::-webkit-scrollbar-thumb:hover {
  width: 8px;
  background-color: rgb(201, 42, 42, 0.6);
  border-radius: 50px;
}
</style>
