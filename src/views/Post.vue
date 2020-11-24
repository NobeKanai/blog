<template>
  <my-header
    title="Title"
    bgImg="https://i.loli.net/2020/07/08/uxZm7gqCXtU43VI.png"
    subtitle="Im waiting you for a long time"
  ></my-header>

  <body class="flex-1 flex justify-center">
    <article class="article-container py-4 prose max-w-none">
      <p>Id voluptate velit culpa aliqua ea ex enim sunt occaecat in ipsum veniam ex nulla. Anim fugiat aute nostrud mollit consectetur laborum. Tempor duis incididunt magna labore aliquip culpa eiusmod. Eu incididunt non culpa aute veniam. Labore anim et nulla dolor non aute cillum ex incididunt. Sunt proident eu labore ullamco fugiat aliqua duis incididunt ut commodo.</p>
    </article>
  </body>
</template>

<script lang="ts">
import MyHeader from "@/components/MyHeader.vue";

import { defineComponent } from "vue";
export default defineComponent({
  name: "Post",
  components: {
    MyHeader,
  },
});
</script>

<style lang="sass">
.article-container
  @apply w-11/12 md:w-10/12 lg:w-8/12 xl:w-7/12
</style>