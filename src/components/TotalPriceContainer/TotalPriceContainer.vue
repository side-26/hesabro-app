<template lang="">
  <div class="md:border-t-2 md:block px-3 flex justify-between w-full lg:px-5 pb-1 md:pt-4 md:border-gray-200 md:mt-5 mt-3">
    <span class="text-sm text-gray-700 font-bold">{{ title }} :</span>
    <span class="font-bold text-black side-26"
      >{{ handleSprateNumber(totalPrice) }}
      <span class="text-xs font-extrabold">{{currency}}</span>
    </span>
  </div>
</template>
<script>
import { handleSprateNumber } from '@/utilities/SeprateNumbers.js'
import {currency} from '@/config/currency.config'
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    totalPrice: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {
      handleSprateNumber,
      currency
    }
  },
}
</script>
