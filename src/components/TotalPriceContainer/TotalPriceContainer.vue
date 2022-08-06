<template lang="">
  <div class="md:border-t-2 md:block flex justify-between w-full px-5 pb-1 md:pt-4 md:border-gray-200 md:mt-5 mt-3">
    <span class="text-sm text-gray-700 font-bold">{{ title }} :</span>
    <span class="font-bold text-black side-26"
      >{{ toSepratedFarsiNo(totalPrice) }}
      <span class="text-xs font-extrabold">{{currency}}</span>
    </span>
  </div>
</template>
<script>
import { toSepratedFarsiNo } from '@/utilities/farsiSepratedNumber'
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
      toSepratedFarsiNo,
      currency
    }
  },
}
</script>
