<template lang="">
  <div @click="handelCloseModal()" class="flex z-[200] bg-slate-800 bg-opacity-40 fixed w-full h-full left-0 top-0 items-center justify-center">
    <div @click.stop="" class="px-5 py-7 bg-white rounded-xl z-[201] w-full md:w-1/2 lg:w-1/4 2xl:w-1/5 mx-5 sm:mx-8 md:mx-32 lg:mx-0">
      <div class="font-extrabold flex justify-between items-center">
        <div>
          {{ title }}
        </div>
        <button @click="handelCloseModal()" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500 transition-all hover:text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
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
