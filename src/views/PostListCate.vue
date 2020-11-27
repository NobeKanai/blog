<template>
  <post-list>
    <template v-slot:default="slotProps">
      <h1>Category: {{ slotProps.category.name }}</h1>
      {{ setSeo(slotProps.category.name) }}
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
  methods: {
    setSeo(typename?: string): string {
      if (typename) document.title = "Category: " + typename;
      return "";
    },
  },
});
</script>