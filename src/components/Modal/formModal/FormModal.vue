<template lang="">
  <div  class="flex z-[200] bg-slate-800 bg-opacity-40 fixed w-full h-full left-0 top-0 items-center justify-center">
    <div class="p-5 bg-white rounded-xl z-[201] w-full md:w-1/2 lg:w-1/4 2xl:w-1/5 mx-5 sm:mx-8 md:mx-32 lg:mx-0">
      <div class="font-extrabold">
        {{ title }}
      </div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FormModal',
  props: {
    title: {
      type: String,
      required: true,
      default: 'ثبت سفارش',
    },
  },
  setup(props, { emit }) {
    const handelCloseModal = () => {
      emit('update:modelValue', false)
    }
    return {
      handelCloseModal,
    }
  },
}
</script>
<style lang=""></style>
