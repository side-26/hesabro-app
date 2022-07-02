<template lang="">
  <section class="md:my-8 lg:my-12 shadow md:shadow-none flex rounded-md py-1 md:py-4 snap-x">
    <div  :class="{ 'lg:border-l-2': itemArr.id !== 4 }" class="snap-start md:min-w-max min-w-2.7 text-right mx-3 md:pl-3 lg:pl-4 border-gray-300">
      <div v-if="itemArr" class="text-cyan-500 font-IranYecan-extraBold mb-1 md:mb-3 text-xl">{{ persianNu(seprateNu(itemArr.amount)) }}+</div>
      <div v-if="itemArr" class="text-xs md:text-sm font-IranYecan-medium">{{itemArr.title}}</div>
    </div>
  </section>
</template>
<script>
import { toFarsiNumber } from '@/src/utilities/ConvertToPersian';
import {handleSprateNumber} from '../../utilities/SeprateNumbers'
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
    seprateNu(num){
      return handleSprateNumber(num)
    }
  },
}
</script>
