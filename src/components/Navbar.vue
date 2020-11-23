<template>
  <nav class="sticky top-0 z-50 flex justify-center py-3 bg-white bg-opacity-95 text-black">
    <div class="flex-1 container flex justify-between mx-24">
      <ul class="flex space-x-2 items-center">
        <h1 class="font-bold text-xl cursor-pointer">KANAI'S</h1>
        <li class=" relative">
          <a
            href="#"
            @focus="showDropdown = !showDropdown"
            @focusout="showDropdown = false"
          >分类 <i class="fas fa-angle-down"></i></a>
          <ul
            v-show="showDropdown"
            class="absolute bg-white bg-opacity-95 w-48 py-2 rounded"
          >
            <li class="px-4 py-2 hover:bg-gray-200">分类一</li>
            <li class="px-4 py-2 hover:bg-gray-200">分类二</li>
          </ul>
        </li>
        <li>归档</li>
      </ul>
      <ul class="flex space-x-2">
        <li class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-900 hover:text-white transition ease-linear">
          <i class="fab fa-github"></i>
        </li>
        <li class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-900 hover:text-white transition ease-linear">
          <i class="fas fa-music"></i>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
  props: {},
  data() {
    return {
      showDropdown: false,
    };
  },
});
</script>

<style>
</style>