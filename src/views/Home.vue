<template>
  <my-header
    title="Title"
    :bgImg="bgImg"
    subtitle="Im waiting you for a long time"
  ></my-header>
  <div class="mx-auto my-4 w-11/12 md:w-9/12 lg:w-1/2 space-y-4">
    <card>
      <h1>Nisi enim anim labore dolor eu ad ad sit consequat ea.</h1>
    </card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MyHeader from "@/components/MyHeader.vue";
import Card from "@/components/Card.vue";

export default defineComponent({
  name: "Home",
  components: {
    MyHeader,
    Card,
  },
  data() {
    return {
      bgImg: "https://i.loli.net/2020/07/08/uxZm7gqCXtU43VI.png",
    };
  },
});
</script>
