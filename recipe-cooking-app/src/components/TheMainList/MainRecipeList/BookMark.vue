<template>
  <div
    class="bookmark-container max-h-60 w-[365px] overflow-y-auto bg-white rounded-bl-lg py-2"
  >
    <!-- begin div no data -->
    <div
      class="px-10 py-5 text-center text-lg font-semibold"
      v-if="bookmarks.length === 0"
    >
      <p>No bookmark yet. Find a nice recipe and bookmark it</p>
    </div>
    <!-- end div no data -->

    <!-- begin div have data -->
    <router-link
      class="grid grid-cols-4 grid-rows-2 px-8 py-4 hover:bg-red-100 hover:-translate-y-[2px] duration-300"
      v-for="bookmark in bookmarks"
      :to="'/recipe/' + bookmark.id"
    >
      <div class="row-span-2">
        <figure class="w-16 h-16 rounded-full bg-red-200">
          <img
            class="w-16 h-16 rounded-full opacity-70 bg-red-200"
            :src="bookmark.image"
            :alt="bookmark.title"
          />
        </figure>
      </div>

      <p class="col-span-3 truncate text-[#c92a2a] uppercase self-end">
        {{ bookmark.title }}
      </p>
      <p class="col-span-3 truncate">{{ bookmark.publisher }}</p>
    </router-link>
    <!-- end div have data -->
  </div>
</template>

<script setup>
import { useStore } from "vuex";
const store = useStore();
import { computed } from "vue";

//data bookmark
const bookmarks = computed(() => {
  return store.getters["Recipe/isBookMark"];
});
</script>

<style scoped>
.bookmark-container::-webkit-scrollbar {
  width: 10px;
  background-color: #fef2f2;
  border-radius: 50px;
}
.bookmark-container::-webkit-scrollbar-track {
  width: 10px;
  background-color: #fef2f2;
  border-radius: 50px;
}
.bookmark-container::-webkit-scrollbar-thumb {
  width: 8px;
  background-color: rgb(201, 42, 42, 0.4);
  border-radius: 50px;
}
.bookmark-container::-webkit-scrollbar-thumb:hover {
  width: 8px;
  background-color: rgb(201, 42, 42, 0.6);
  border-radius: 50px;
}

a.router-link-active {
  background-color: #fee2e2;
  transform: translateY(-2px);
}
</style>
