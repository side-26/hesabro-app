<template lang="">
  <div class="md:my-8 lg:my-12 rounded-md py-1 md:py-4 relative md:after:w-0 md:before:w-0" :class="{ 'after:w-[2px] after:left-[1%] after:top-0 after:absolute after:h-[160%] after:bg-gray-200': itemArr.id % 2 !== 0,'before:w-[106%] before:absolute before:h-[2px]  before:bg-gray-200 before:top-[-25%]':(itemArr.id===3||itemArr.id===4) }">
    <div :class="{ 'lg:border-l-2': itemArr.id !== 4, 'mr-0': itemArr.id === 1 }" class="text-center md:text-right mx-3 md:pl-3 lg:pl-4 border-gray-300">
      <div v-if="itemArr" class="text-cyan-500 font-extrabold mb-1 md:mb-3 text-base md:text-xl">{{ persianNu(seprateNu(itemArr.amount)) }}+</div>
      <div v-if="itemArr" class="text-xs md:text-sm font-medium">{{ itemArr.title }}</div>
    </div>
  </div>
</template>
<script>
import { toFarsiNumber } from '@/utilities/ConvertToPersian'
import { handleSprateNumber } from '@/utilities/SeprateNumbers'
export default {
  name: 'OptionCom',
  props: {
    itemArr: {
      type: Object,
      required: true,
    },
  },
  methods: {
    persianNu(val) {
      return toFarsiNumber(val)
    },
    seprateNu(num) {
      return handleSprateNumber(num)
    },
  },
}
</script>
