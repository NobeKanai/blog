<template>
  <header class="w-full relative h-56 md:h-80 lg:h-96">
    <img
      :src="bgImg"
      class="w-full h-full object-cover object-center"
    >
    <div class="absolute top-0 bg-black bg-opacity-25 h-full w-full text-white flex items-center justify-center">
      <div class="mb-4 text-center">
        <h1 class="font-medium text-3xl">
          {{title}}
        </h1>
        <p>{{ subtitle }}</p>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MyHeader",
  props: {
    bgImg: {
      type: String
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
    }
  }
}
</script>

<style>
</style>