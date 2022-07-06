<template lang="">
  <section class="bg-white shadow-none md:shadow-md pb-4 md:mx-0 my-6 mx-1 lg:mx-6 justify-center md:justify-between overflow-hidden rounded-2xl flex sm:justify-center flex-wrap text-black">
    <div class="rounded-t-md text-C-base font-IranYecan-extraBold md:mb-3 mb-1 side-26 bg-white text-right md:bg-cyan-600 w-full md:text-white py-5 px-5">
    <h4>{{ title }}</h4>
  </div>
    <section class="grid sm:grid-cols-1 md:grid-cols-2 px-0 gap-4 md:px-4 w-full">
      <slot name="body"> </slot>
    </section>
    <slot name="footer"> </slot>
  </section>
</template>
<script>
export default {
  name: 'pricingContainer',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>
