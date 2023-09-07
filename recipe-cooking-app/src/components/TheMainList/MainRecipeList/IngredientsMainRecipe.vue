<template>
  <!-- begin div ingredient -->
  <div class="w-full bg-red-100 pt-12 pb-10">
    <h1 class="text-xl font-semibold text-[#c92a2a] text-center pb-8">
      RECIPE INGREDIENTS
    </h1>

    <div class="mx-auto w-[75%] grid grid-cols-2 gap-6">
      <ul class="flex gap-5 items-center" v-for="ing in recipe.ingredients">
        <el-icon class="icon-check"><Select /></el-icon>
        <li class="recipe-detail">
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
.icon-check {
  height: 14px;
  width: 14px;
  flex-shrink: 0;
  color: #c92a2a;
}

.recipe-detail {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
