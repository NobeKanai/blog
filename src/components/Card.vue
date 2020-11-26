<template>
  <router-link class="w-full select-none h-44 md:h-52 lg:h-60 flex items-center rounded-lg overflow-hidden relative cursor-pointer transform hover:scale-105 hover:shadow-xl hover:translate-y-1 transition duration-300">
    <img
      v-if="bgImg"
      :src="bgImg"
      @load="loaded=true"
      class="w-full h-full object-cover object-center transition duration-300 ease-linear"
      :class="{'opacity-0' : !loaded}"
    >
    <div
      v-else
      class="w-full h-full"
      :class="genRadomGradientColor()"
    >
    </div>
    <div class="absolute w-full h-full px-4 flex items-center justify-center text-white text-opacity-95 bg-black bg-opacity-25">
      <div class="text-center">
        <slot></slot>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts">
const colors = [
  "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500",
  "bg-gradient-to-r from-teal-400 to-blue-500",
  "bg-gradient-to-r from-teal-400 to-blue-500",
  "bg-gradient-to-r from-pink-500 to-orange-500",
];

import { defineComponent } from "vue";
export default defineComponent({
  name: "Card",
  data() {
    return {
      loaded: false,
    };
  },
  props: {
    bgImg: {
      type: String,
    },
  },
  methods: {
    genRadomGradientColor() {
      const index = Math.floor(Math.random() * colors.length);
      return colors[index];
    },
  },
});
</script>

<style>
</style>