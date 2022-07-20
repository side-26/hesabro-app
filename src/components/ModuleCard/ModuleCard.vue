<template lang="">
  <div class=" h-40 m-2  shadow-lg z-10 rounded-xl overflow-hidden  relative min-w-[75%] lg:min-w-0 lg:w-[40%] xl:w-[31%]">
    <section class="p-4 flex flex-col items-baseline justify-around lg:justify-start lg:items-center bg-white lg:flex-row h-full">
      <figure class="flex order-2 lg:order-1 justify-start items-center  p-5">
        <img :src="src" alt="title" class="w-12 self-center h-12" />
      </figure>
      <div class="flex flex-col lg:order-2 justify-center lg:w-[73%] ">
        <h4 class="font-extrabold text-lg mb-3">{{ title }}</h4>
        <p class="text-xs leading-6 text-justify font-IranYekan-regular">{{ desc }}</p>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'ModuleCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
}
</script>
