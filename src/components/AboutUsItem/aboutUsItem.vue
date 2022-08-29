<template lang="">
  <div class="md:my-8 lg:my-1 rounded-md py-1 md:py-4 relative md:after:w-0 md:before:w-0">
    <div :class="{ 'lg:border-l-2': itemArr.id !== 3, 'mr-0': itemArr.id === 1 }" class="text-center md:text-right mx-3 md:pl-3 lg:pl-4 border-gray-300">
      <div v-if="itemArr" class="text-cyan-500 font-extrabold mb-1 md:mb-3 text-base md:text-xl">{{ handleSprateNumber(itemArr.amount) }}+</div>
      <div v-if="itemArr" class="text-xs md:text-sm font-medium">{{ itemArr.title }}</div>
    </div>
  </div>
</template>
<script>
import { handleSprateNumber } from '@/utilities/SeprateNumbers.js'
export default {
  name: 'OptionCom',
  props: {
    itemArr: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    return {
      handleSprateNumber
    }
  }
 
}
</script>
