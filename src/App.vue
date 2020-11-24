<template>
  <navbar />
  <div class="flex flex-col min-h-screen">
    <router-view />
    <my-footer />
  </div>
</template>

<script lang="ts">
import Navbar from "@/components/Navbar.vue";
import MyFooter from "@/components/MyFooter.vue";

import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  components: {
    Navbar,
    MyFooter,
  },
});
</script>

<style lang="scss">
</style>
