<template>
  <section
    class="bg-red-100 rounded-t-lg px-5 py-2 flex justify-between items-center"
  >
    <div class="flex gap-14">
      <!-- begin div -->
      <div class="flex items-center">
        <img class="h-16 w-16" src="../IMG/Logo.png" alt="logo" />
        <p class="logo font-black text-2xl text-red-950">Recipe Cooking</p>
      </div>
      <!-- end div -->

      <!-- begin div -->
      <div class="flex items-center relative">
        <input
          class="rounded-full h-12 w-[340px] px-5 focus:outline-0 focus:invalid:border-none focus:invalid:ring- focus:shadow-md focus:drop-shadow-md hover:shadow-md hover:drop-shadow-md duration-500"
          type="text"
          placeholder="Search over 1,000,000 recipes..."
        />
        <button
          class="h-12 w-40 rounded-full bg-gradient-to-br from-red-700 to-red-950 text-xs -tracking-wider text-gray-100 flex justify-center items-center gap-2 absolute right-[-6rem] hover:shadow-md hover:drop-shadow-md duration-500"
        >
          <el-icon style="height: 20px; width: 20px">
            <Search />
          </el-icon>
          <span> SEARCH </span>
        </button>
      </div>
      <!-- end div -->
    </div>

    <!-- begin div -->
    <div class="flex h-16 items-center gap-5 text-xs">
      <button class="flex items-center">
        <el-icon style="height: 20px; width: 20px; color: #450a0a"
          ><Edit /></el-icon
        >ADD RECIPE
      </button>
      <button class="flex items-center">
        <el-icon style="height: 20px; width: 20px; color: #450a0a"
          ><CollectionTag /></el-icon
        >BOOKMARKS
      </button>
    </div>
    <!-- end div -->
  </section>
</template>

<style scoped>
.logo {
  font-family: Dancing Script;
  font-style: italic;
}
</style>
