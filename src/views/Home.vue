<template>
  <post-list :bgImg="core.bg_image">
    <h1>{{ core.name }}</h1>
    <p>{{ core.summary }}</p>
  </post-list>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import PostList from "@/components/PostList.vue";
import { Core, fetchCore } from "@/api";

export default defineComponent({
  name: "Home",
  components: {
    PostList,
  },
  data() {
    return {
      core: {} as Core,
    };
  },
  async mounted() {
    this.core = await fetchCore();
    document.title = this.core.name;
  },
  activated() {
    if (this.core.name) document.title = this.core.name;
  },
});
</script>