<template>
  <section class="basis-[35%] bg-gray-50 rounded-bl-lg pt-10">
    <div v-show="isLoading">
      <base-spiner></base-spiner>
    </div>

    <div v-show="!isLoading">
      <!-- <div v-if="!errorSearch">error</div> -->

      <div v-for="item in datasSearch" :key="item.id">
        <router-link
          class="w-[85%] mx-auto grid grid-cols-4 grid-rows-2 mb-5"
          :to="'/recipe/' + item.id"
        >
          <div class="row-span-2">
            <figure class="w-16 h-16 rounded-full bg-red-200">
              <img
                class="w-16 h-16 rounded-full opacity-50 bg-red-200"
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
defineProps(["datasSearch", "isLoading", "errorSearch"]);
</script>
