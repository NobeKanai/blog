<template>
  <div class="w-full h-52 md:h-60 flex items-center rounded-lg overflow-hidden relative cursor-pointer transform hover:scale-105 hover:translate-y-1 transition-transform duration-300">
    <img
      src="https://i.loli.net/2020/10/25/l4iaDnoy27cNpvF.jpg"
      class="w-full h-full object-cover object-center"
    >
    <div class="absolute w-full h-full px-4 pb-4 flex items-center justify-center text-white text-opacity-95 bg-black bg-opacity-25">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
}
</script>

<style>
</style>