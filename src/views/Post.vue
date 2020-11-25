<template>
  <my-header bgImg="https://i.loli.net/2020/07/08/uxZm7gqCXtU43VI.png">
    <h1>Blog Title</h1>
    <p>Ullamco ut id excepteur cupidatat commodo officia eiusmod elit id qui.</p>
  </my-header>

  <body class="flex-1 flex justify-center">
    <article class="article-container py-4 prose max-w-none">
      <p>Id voluptate velit culpa aliqua ea ex enim sunt occaecat in ipsum veniam ex nulla. Anim fugiat aute nostrud mollit consectetur laborum. Tempor duis incididunt magna labore aliquip culpa eiusmod. Eu incididunt non culpa aute veniam. Labore anim et nulla dolor non aute cillum ex incididunt. Sunt proident eu labore ullamco fugiat aliqua duis incididunt ut commodo.</p>
    </article>
  </body>
</template>

<script lang="ts">
import { fetchPost, Post } from "@/api/post";
import MyHeader from "@/components/MyHeader.vue";

import { defineComponent, WatchStopHandle } from "vue";
export default defineComponent({
  name: "Post",
  components: {
    MyHeader,
  },
  data() {
    return {
      post: {} as Post,
      closeWacth: {} as WatchStopHandle,
    };
  },
  activated() {
    if (parseInt(this.postId) !== this.post.id) this.getPost();
    this.closeWacth = this.$watch(this.postId, this.getPost);
  },
  deactivated() {
    this.closeWacth();
  },
  computed: {
    postId(): string {
      return this.$route.params.id as string;
    },
  },
  methods: {
    async getPost() {
      this.post = await fetchPost(this.$route.params.id as string);
    },
  },
});
</script>

<style lang="sass">
.article-container
  @apply w-11/12 md:w-10/12 lg:w-8/12 xl:w-7/12
</style>