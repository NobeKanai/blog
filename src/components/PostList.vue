<template>
  <my-header :bgImg="bgImg">
    <slot :category="pagination.category"></slot>
  </my-header>

  <body class="flex-1 flex flex-col">
    <transition-group
      tag="div"
      class="flex-1 my-8 inner-container space-y-4"
      enter-from-class="scale-x-0"
      enter-class="duration-500 ease-linear"
      appear
    >
      <card
        v-for="p in pagination.items"
        :key="p.id"
        :to="`/p/`+p.id"
        :bgImg="p.bg_image"
      >
        <h1 class="font-medium text-2xl">{{ p.title }}</h1>
        <p class="my-3">{{ p.create_date }} · {{ p.category.name }} · {{ p.read_number }} Reads</p>
      </card>
    </transition-group>

    <div class="inner-container my-8 flex justify-between">
      <!-- 导航按钮 -->
      <router-link
        :to="{name: $route.name, params: {page: pagination.page - 1}}"
        class="nav-btn"
        v-show="pagination.has_prev"
      >
        PREV
      </router-link>
      <router-link
        :to="{name: $route.name, params: {page: pagination.page + 1}}"
        class="nav-btn ml-auto"
        v-show="pagination.has_next"
      >
        NEXT
      </router-link>
    </div>
  </body>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MyHeader from "@/components/MyHeader.vue";
import Card from "@/components/Card.vue";
import usePostPagination from "@/composables/usePostPagination";

export default defineComponent({
  name: "PostList",
  components: {
    MyHeader,
    Card,
  },
  props: {
    bgImg: {
      type: String,
    },
  },
  setup() {
    const { pagination } = usePostPagination();
    return {
      pagination,
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