<template>
  <my-header
    v-if="post.id"
    :bgImg="post.bg_image"
  >
    <h1>{{ post.title }}</h1>
    <p>
      {{ post.create_date }} · <router-link
        class="text-teal-500 border-b-2 border-transparent hover:border-teal-500 transition uppercase"
        :to="{name:'PostListByCategory', params: {category: post.category.id, page: 1}}"
      >{{ post.category.name }}</router-link> · {{ post.read_number }} Reads
    </p>
  </my-header>

  <body class="flex-1 flex justify-center mb-12">
    <article
      v-if="!post.needs_verify"
      class="article-container prose prose-teal max-w-none"
      v-html="post.body"
    >
    </article>
    <div
      v-else
      class="article-container flex flex-col items-center justify-center"
    >
      <transition enter-from-class="scale-0">
        <p
          v-if="showWrongPasswordTip"
          class="transform transition"
        >
          WRONG PASSWORD!!!
        </p>
      </transition>
      <input
        class="w-full sm:w-11/12 md:w-8/12 lg:w-6/12"
        type="password"
        placeholder="Enter the password to unlock this post"
        @keyup.enter="verifyPassword"
        v-model="password"
      >
      <button
        @click="verifyPassword"
        class="border border-black rounded-full px-8 py-2 hover:bg-gray-900 hover:text-gray-50 transition duration-300 ease-linear mt-2"
      >SUBMIT</button>
    </div>
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
      password: "",
      showWrongPasswordTip: false,
      post: {} as Post,
      closeWacth: {} as WatchStopHandle,
    };
  },
  async activated() {
    this.password = "";
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
    async verifyPassword() {
      if (!this.password) return;
      this.showWrongPasswordTip = false;
      await this.getPost();
      if (this.post.needs_verify) {
        this.showWrongPasswordTip = true;
      }
    },
    async getPost() {
      this.post = await fetchPost(
        this.$route.params.id as string,
        this.password
      );
      this.$nextTick(() => {
        dispatchEvent(postLoadedEvent);
      });
    },
  },
});
</script>

<style lang="sass">
.article-container
  @apply w-11/12 md:w-10/12 lg:w-8/12 xl:w-7/12 py-4
</style>