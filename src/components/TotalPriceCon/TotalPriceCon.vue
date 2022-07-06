<template lang="">
  <div class="md:border-t-2 md:block flex justify-between w-full px-5 pb-1 md:pt-4 md:border-gray-200 md:mt-5 mt-3">
    <span class="text-sm text-gray-700 font-IranYecan-bold">{{ title }} :</span>
    <span class="font-IranYecan-bold text-black side-26"
      >{{ toPersianNu(seprateNu(totalPrice)) }}
      <span class="text-xs font-IranYecan-extraBold">تومان</span>
    </span>
  </div>
</template>
<script>
import { toFarsiNumber } from '@/utilities/ConvertToPersian'
import { handleSprateNumber } from '@/utilities/SeprateNumbers'
export default {
  name: 'totalPrice',
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
  methods: {
    toPersianNu(val) {
      return toFarsiNumber(val)
    },
    seprateNu(val) {
      return handleSprateNumber(val)
    },
  },
}
</script>
