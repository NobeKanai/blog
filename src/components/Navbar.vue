<template>
  <nav class="hidden md:flex fixed w-full top-0 z-50 justify-center py-3 bg-white bg-opacity-90 text-black">
    <div class="flex-1 container flex justify-between mx-24">
      <ul class="flex space-x-3 items-center">
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
        <li class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-900 hover:text-white transition ease-linear duration-300">
          <i class="fab fa-github"></i>
        </li>
        <li class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-900 hover:text-white transition ease-linear duration-300">
          <i class="fas fa-music"></i>
        </li>
      </ul>
    </div>
  </nav>
  <button
    @click="showAside = !showAside"
    :class="{'show': showAside}"
    class="md:hidden transform rounded-full border border-black sticky top-3 left-3 z-50 bg-white px-3 py-1 font-light text-sm bg-opacity-90 hover:bg-black hover:text-white transition duration-300 ease-linear"
  >MENU</button>
  <transition
    enter-from-class="transform -translate-x-64"
    enter-active-class="transition-transform duration-300 ease-linear"
    leave-to-class="transform -translate-x-64"
    leave-active-class="transition-transform duration-300 ease-linear"
  >
    <aside
      v-show="showAside"
      class="flex md:hidden fixed z-40 top-0 bottom-0 bg-black w-64"
    >

    </aside>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
  props: {},
  data() {
    return {
      showDropdown: false,
      showAside: false,
    };
  },
});
</script>

<style lang="sass">
.show
  @apply translate-x-52 bg-black text-white #{!important}
</style>