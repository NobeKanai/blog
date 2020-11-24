<template>
  <header class="w-full relative h-64 sm:h-80 md:h-96 lg:h-104">
    <img
      :src="bgImg"
      class="w-full h-full object-cover object-center -mt-18"
    >
    <div class="absolute top-0 pt-18 bg-black bg-opacity-25 h-full w-full text-white flex items-center justify-center">
      <div class="mb-8 text-center">
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