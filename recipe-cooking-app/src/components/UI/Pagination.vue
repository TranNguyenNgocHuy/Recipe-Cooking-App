<template>
  <ul class="flex justify-between">
    <li>
      <button
        class="h-8 w-20 bg-red-900 text-gray-200"
        @click="clickPreviousPage"
        :disabled="isInFirstPage"
      >
        Previous
      </button>
    </li>
    <li>number</li>
    <li>
      <button
        class="h-8 w-20 bg-red-900 text-gray-200"
        @click="clickNextPage"
        :disabled="isInLastPage"
      >
        Next
      </button>
    </li>
  </ul>
</template>

<script setup>
defineProps(["datas", "totalPages", "perPage", "currentPage"]);
</script>
