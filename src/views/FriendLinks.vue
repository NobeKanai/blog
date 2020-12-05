<template>
  <my-header bgImg="https://i.loli.net/2020/11/27/xSJvmz34lrp9nZ7.jpg">
    <h1>友链</h1>
  </my-header>

  <body class="flex-1">
    <div class="w-11/12 md:w-9/12 lg:w-7/12 mx-auto | my-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      <a
        class="bg-white border flex flex-col justify-between border-gray-200 overflow-hidden shadow-sm hover:shadow rounded transition duration-300 ease-linear text-gray-700"
        v-for="f in friendLinks"
        target="_blank"
        :key="f.id"
        :href="f.href"
      >
        <img
          :src="f.avatar || 'https://gravatar.com/avatar/a5a36c72c61d74e3d038d303cf9e78aa?s=200&d=mp&r=x'"
          class="w-full object-cover"
        >
        <div class="p-4 text-center">
          {{ f.name }}
        </div>
      </a>
    </div>
  </body>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MyHeader from "@/components/MyHeader.vue";
import { fetchFriendsLink, FriendLink } from "@/api";

export default defineComponent({
  name: "FriendLinks",
  components: {
    MyHeader,
  },
  data() {
    return {
      friendLinks: [] as Array<FriendLink>,
    };
  },
  async created() {
    this.friendLinks = await fetchFriendsLink();
  },
  activated() {
    document.title = "友链";
  },
});
</script>

<style>
</style>