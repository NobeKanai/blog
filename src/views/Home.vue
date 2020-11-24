<template>
  <my-header :bgImg="bgImg">
    <h1>KANAI'S BLOG</h1>
    <p>Im waiting you for a long time</p>
  </my-header>

  <body class="flex-1 flex flex-col">
    <div class="flex-1 my-8 inner-container space-y-4">
      <card>
        <h1 class="font-medium text-2xl">Nisi enim anim labore dolor eu ad</h1>
        <p class="my-3">Incididunt in incididunt reprehenderit nisi ea velit anim aute culpa enim eiusmod.</p>
      </card>
    </div>

    <div class="inner-container my-8 flex justify-between">
      <!-- 导航按钮 -->
      <button class="nav-btn">
        PREV
      </button>
      <button class="nav-btn">
        NEXT
      </button>
    </div>
  </body>
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


<style lang="sass">
.inner-container
  @apply w-11/12 md:w-9/12 lg:w-1/2 mx-auto

.nav-btn
  @apply px-8 py-2 border border-black rounded-full transition-colors hover:bg-gray-900 hover:text-white duration-300
</style>