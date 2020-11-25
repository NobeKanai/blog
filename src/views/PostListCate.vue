<template>
  <post-list>
    <template v-slot:default="slotProps">
      <h1>Category: {{ slotProps.category.name }}</h1>
    </template>
  </post-list>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import PostList from "@/components/PostList.vue";

export default defineComponent({
  name: "PostListCate",
  components: {
    PostList,
  },
});
</script>