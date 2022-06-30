<template lang="">
  <section class="bg-white shadow-none md:shadow-md pb-4 md:mx-0 my-6 mx-1 lg:mx-6 justify-center md:justify-between overflow-hidden rounded-2xl flex sm:justify-center flex-wrap text-black">
    <Container_Header :title="title" />
    <section class="grid sm:grid-cols-1 md:grid-cols-2 px-0 gap-4 md:px-4 w-full">
      <slot name="body"> </slot>
    </section>
    <slot name="footer"> </slot>
  </section>
</template>
<script>
import Container_Header from '@/components/ContainerHeader/tarefehContainerHeader.vue'
export default {
  name: 'TarefehContainer',
  components: {
    Container_Header,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    classes: {
      type: String,
      required: true,
    },
  },
}
</script>
