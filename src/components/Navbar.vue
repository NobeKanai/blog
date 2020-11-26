<template>
  <nav class="hidden md:flex fixed w-full top-0 z-50 justify-center py-3 bg-white bg-opacity-90 text-black">
    <div class="flex-1 container flex justify-between mx-24">
      <ul class="flex space-x-3 items-center">
        <router-link
          to="/"
          class="font-bold text-xl"
        >KANAI'S</router-link>
        <li class=" relative">
          <a
            href="#"
            @click="showDropdown = !showDropdown"
          >分类 <i class="fas fa-angle-down"></i></a>
          <ul
            v-show="showDropdown"
            class="absolute bg-white bg-opacity-95 w-48 py-2 rounded"
          >
            <router-link
              v-for="ct in categories"
              :key="ct.id"
              tag="li"
              @click="showDropdown = false"
              class="block px-4 py-2 hover:bg-gray-200"
              :to="{name:'PostListByCategory', params: {category: ct.id, page: 1}}"
            >{{ ct.name }}</router-link>
          </ul>
        </li>
        <li>归档</li>
      </ul>
      <ul class="flex space-x-2">
        <li
          v-for="el in externalLinks"
          :key="el.id"
          class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-900 hover:text-white transition ease-linear duration-300"
        >
          <a
            :href="el.href"
            target="_blank"
          ><i :class="el.icon"></i></a>
        </li>
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
      class="flex md:hidden fixed z-40 top-0 bottom-0 bg-black w-64"
    >

    </aside>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  Category,
  ExternalLink,
  fetchCategories,
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
    };
  },
  async created() {
    this.externalLinks = await fetchExternalLinks();
    this.categories = await fetchCategories();
  },
});
</script>

<style lang="sass">
.show
  @apply translate-x-52 bg-black text-white #{!important}
</style>