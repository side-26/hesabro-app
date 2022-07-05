<template lang="">
  <div class="py-2 h-full shadow-lg lg:rounded-none rounded-lg lg:shadow-none lg:bg-gray-50 min-w-[70%] mx-4 lg:mx-0 md:min-w-2.7 xl:min-w-2.3 relative after:absolute after:w-0 md:after:w-0.5 after:left-0 after:top-0 md:after:h-4/5 after:h-0 md:after:my-5 lg:after:my-4 after:bg-gray-200">
    <section class="p-4 flex flex-col h-full justify-between">
      <div class="flex">
        <figure class="hidden lg:block w-6 h-6 ml-3">
          <img :src="src" alt="title" class="w-full h-full" />
        </figure>
        <h5 class="font-IranYecan-extraBold mb-3">{{ title }}</h5>
      </div>
      <p class="text-xs font-IranYekan-regular">{{ desc }}</p>
      <figure class="flex lg:hidden w-8 h-8 lg:w-6 lg:h-6 mt-3 lg:ml-3">
        <img :src="src" alt="title" class="w-full h-full" />
      </figure>
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
