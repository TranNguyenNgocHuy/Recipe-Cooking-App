<template>
  <section class="w-full min-h-[1204px] flex flex-row">
    <MainMenu />
    <router-view></router-view>
  </section>
</template>

<script setup>
import MainMenu from "./TheMainList/MainMenu.vue";
</script>
