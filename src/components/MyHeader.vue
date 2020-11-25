<template>
  <header class="w-full relative h-64 sm:h-80 md:h-96 lg:h-104">
    <img
      v-if="bgImg"
      :src="bgImg"
      class="w-full h-full object-cover object-center"
    >
    <div
      class="absolute top-0 pt-8 md:pt-18 bg-black bg-opacity-25 h-full w-full text-white flex items-center justify-center"
      :class="{'no-bg': !bgImg}"
    >
      <div class="mb-8 text-center header-container">
        <slot />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "MyHeader",
  props: {
    bgImg: {
      type: String,
    },
  },
});
</script>

<style lang="sass">
.header-container
  h1
    @apply font-medium text-3xl mb-1
  p
    @apply font-normal

.no-bg
  @apply bg-gray-100 text-black #{!important}
</style>