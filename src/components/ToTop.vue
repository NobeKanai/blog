<template>
  <transition
    appear
    enter-from-class="scale-0"
    leave-to-class="scale-0"
  >
    <div
      @click="toTop"
      v-show="show"
      class="fixed w-14 h-14 md:w-16 md:h-16 bottom-4 transform transition-all duration-300 right-4 rounded-full border border-gray-100 shadow hover:scale-110 hover:shadow-xl bg-gray-50 text-gray-600 hover:text-gray-900 grid place-items-center"
    >
      <i class="fa fa-angle-up"></i>
    </div>
  </transition>
</template>

<script>
import gsap from '@/utils/gsap'

export default {
  name: "ToTop",
  data () {
    return {
      show: false,
    }
  },
  mounted () {
    window.onscroll = () => {
      if (window.scrollY > 100)
        this.show = true
      else this.show = false
    }
  },
  methods: {
    toTop () {
      gsap.to(window, { duration: 0.5, scrollTo: 0 })
    },
  },
}
</script>

<style>
</style>