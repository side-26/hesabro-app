<template lang="">
  <div class="fixed flex justify-center z-40 items-center w-full min-h-screen top-0 left-0" @click="">
    <section class="z-50 relative">
      <figure class="animate-spin-slow mb-3">
        <img class="w-full h-full" src="/img/hesabro.logo.svg" alt="Hesabro-logo" />
      </figure>
      <span class="text-white font-IranYecan-bold text-sm">{{ msg }}</span>
    </section>
    <div class="absolute w-screen min-h-screen left-0 top-0 opacity-50 bg-black z-10"></div>
  </div>
</template>
<script>
export default {
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
}
</script>
