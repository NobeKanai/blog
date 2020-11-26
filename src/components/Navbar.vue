<template>
  <nav class="hidden md:flex fixed w-full top-0 z-50 justify-center py-3 bg-white bg-opacity-95 text-black">
    <div class="flex-1 container flex justify-between mx-24">
      <ul class="flex space-x-3 items-center">
        <router-link
          to="/"
          class="font-bold text-xl"
        >KANAI'S</router-link>
        <li class=" relative">
          <button @click="showDropdown = !showDropdown">分类 <i class="fas fa-angle-down"></i></button>
          <ul
            v-show="showDropdown"
            @mouseleave="showDropdown = false"
            class="absolute bg-white w-48 py-2 rounded"
          >
            <li
              v-for="ct in categories"
              :key="ct.id"
              @click="showDropdown = false"
            >
              <router-link
                class="block px-4 py-2 hover:bg-gray-200"
                :to="{name:'PostListByCategory', params: {category: ct.id, page: 1}}"
              >{{ ct.name }}</router-link>
            </li>

          </ul>
        </li>
        <li>归档</li>
      </ul>
      <ul class="flex space-x-2">
        <a
          v-for="el in externalLinks"
          :key="el.id"
          class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-900 hover:text-white transition ease-linear duration-300"
          :href="el.href"
          target="_blank"
        ><i :class="el.icon"></i></a>
      </ul>
    </div>
  </nav>
  <button
    @click="showAside = !showAside"
    :class="{'show': showAside}"
    class="md:hidden transform rounded-full border border-black fixed top-3 left-3 z-50 bg-white px-3 py-1 font-light text-sm bg-opacity-90 hover:bg-black hover:text-white transition duration-300 ease-linear"
  >MENU</button>
  <transition
    enter-from-class="transform -translate-x-64"
    enter-active-class="transition-transform duration-300 ease-linear"
    leave-to-class="transform -translate-x-64"
    leave-active-class="transition-transform duration-300 ease-linear"
  >
    <aside
      v-show="showAside"
      class="flex flex-col md:hidden fixed z-40 top-0 bottom-0 bg-black bg-opacity-95 w-64"
    >
      <div class="py-10 mx-auto">
        <img
          class="w-32 rounded-full"
          :src="core.avatar"
        >
      </div>
      <div class="flex-1 text-white text-opacity-80 text-center">
        <router-link
          class="link"
          to="/"
        >首页</router-link>
        <a
          class="link"
          @click="showCategories=!showCategories"
        >分类
        </a>
        <ul
          v-show="showCategories"
          class="bg-gray-800 flex px-4 py-4 justify-between"
        >

          <router-link
            v-for="ct in categories"
            :key="ct.id"
            class="px-8 py-4 bg-black rounded"
            :to="{name:'PostListByCategory', params: {category: ct.id, page: 1}}"
          >{{ ct.name }}</router-link>

        </ul>
      </div>
      <div class="bg-black py-2">
        <div class="flex justify-center space-x-2">

          <a
            v-for="el in externalLinks"
            :key="el.id"
            class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-100 text-white hover:text-black transition ease-linear duration-300"
            :href="el.href"
            target="_blank"
          ><i :class="el.icon"></i></a>

        </div>
      </div>
    </aside>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  Category,
  Core,
  ExternalLink,
  fetchCategories,
  fetchCore,
  fetchExternalLinks,
} from "@/api";

export default defineComponent({
  name: "Navbar",
  props: {},
  data() {
    return {
      externalLinks: [] as Array<ExternalLink>,
      categories: [] as Array<Category>,
      showDropdown: false,
      showAside: false,
      core: {} as Core,
      showCategories: false,
    };
  },
  async created() {
    this.externalLinks = await fetchExternalLinks();
    this.categories = await fetchCategories();
    this.core = await fetchCore();
  },
});
</script>

<style lang="sass">
.show
  @apply translate-x-52 bg-black text-white #{!important}
.link
  @apply block py-3 text-lg hover:bg-gray-900 transition duration-300 ease-linear cursor-pointer
</style>