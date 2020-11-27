<template>
  <my-header
    v-if="post.id"
    :bgImg="post.bg_image"
  >
    <h1>{{ post.title }}</h1>
    <p>
      {{ post.create_date }} · <router-link
        class="text-teal-500 border-b-2 border-transparent hover:border-teal-500 transition"
        :to="{name:'PostListByCategory', params: {category: post.category.id, page: 1}}"
      >{{ post.category.name }}</router-link> · {{ post.read_number }} Reads
    </p>
  </my-header>

  <body class="flex-1 flex justify-center">
    <article
      class="article-container py-4 prose prose-teal max-w-none"
      v-html="post.body"
    >
    </article>
  </body>
</template>

<script lang="ts">
import { fetchPost, Post } from "@/api/post";
import MyHeader from "@/components/MyHeader.vue";
import { defineComponent, WatchStopHandle } from "vue";
const postLoadedEvent = new Event("post-loaded");

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
  async activated() {
    if (parseInt(this.postId) !== this.post.id) await this.getPost();
    document.title = this.post.seo_title || this.post.title;

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
      this.$nextTick(() => {
        dispatchEvent(postLoadedEvent);
      });
    },
  },
});
</script>

<style lang="sass">
.article-container
  @apply w-11/12 md:w-10/12 lg:w-8/12 xl:w-7/12
</style>