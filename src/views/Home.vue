<template>
  <my-header
    title="Title"
    :bgImg="bgImg"
    subtitle="Im waiting you for a long time"
  ></my-header>
  <div class="h-screen"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MyHeader from "@/components/MyHeader.vue";

export default defineComponent({
  name: "Home",
  components: {
    MyHeader,
  },
  data() {
    return {
      bgImg: "https://i.loli.net/2020/10/25/l4iaDnoy27cNpvF.jpg",
    };
  },
});
</script>
