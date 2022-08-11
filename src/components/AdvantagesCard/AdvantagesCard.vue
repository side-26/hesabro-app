<template lang="">
  <div class="lg:mx-16 my-5">
    <div class="flex p-8 flex-col md:flex-row md:items-end md:justify-start justify-center" :class="{ 'order-2 md:justify-end': cardProperty.align === 'left' }">
      <figure :class="{ 'md:order-2': cardProperty.align === 'left' }" class="rounded-2xl 2xl:rounded-3xl w-full md:w-96 md:h-72 lg:w-100 lg:h-80  overflow-hidden">
        <img class="w-full object-cover h-full" :src="cardProperty.imgSrc" loading="lazy" :alt="cardProperty.title" />
      </figure>
      <div :class="{ 'order-1 md:-translate-x-1/4': cardProperty.align === 'left', 'order-1 md:translate-x-1/4': cardProperty.align === 'right' }" class="p-4 rounded-2xl bg-white -translate-y-16 md:-translate-y-12 shadow-md mx-auto md:mx-0 w-5/6 md:w-2/4 lg:w-2/5">
        <h2 class="font-extrabold xl:text-xl 2xl:text-2xl mb-4 xl:mb-5">{{ cardProperty.title }}</h2>
        <p class="text-justify text-slate-800 font-IranYekan-regular text-xs">{{ cardProperty.desc }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AdvantagesCard',
  props: {
    cardProperty: {
      type: Object,
      required: true,
    },
  },
}
</script>
