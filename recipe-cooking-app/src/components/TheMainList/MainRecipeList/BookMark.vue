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
      <div class="col-span-1 row-span-2">
        <figure class="w-16 h-16 rounded-full bg-red-200">
          <img
            class="w-16 h-16 rounded-full opacity-70 bg-gradient-to-br from-red-50 to-red-300"
            :src="bookmark.image"
            :alt="bookmark.title"
          />
        </figure>
      </div>

      <p
        class="col-span-3 row-span-1 truncate text-[#c92a2a] uppercase self-end"
      >
        {{ bookmark.title }}
      </p>
      <p class="col-span-2 row-span-1 truncate">{{ bookmark.publisher }}</p>

      <p
        v-if="bookmark.key"
        class="col-end-5 row-start-2 row-end-3 bg-gradient-to-br from-red-100 to-red-300 h-7 w-7 rounded-full self-center justify-self-center shrink-0 flex justify-center items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="#991b1b"
          class="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
      </p>
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
