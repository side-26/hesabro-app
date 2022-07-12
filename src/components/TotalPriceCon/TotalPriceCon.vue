<template lang="">
  <div class="md:border-t-2 md:block flex justify-between w-full px-5 pb-1 md:pt-4 md:border-gray-200 md:mt-5 mt-3">
    <span class="text-sm text-gray-700 font-bold">{{ title }} :</span>
    <span class="font-bold text-black side-26"
      >{{ toPersianNu(seprateNu(totalPrice)) }}
      <span class="text-xs font-extrabold">تومان</span>
    </span>
  </div>
</template>
<script>
import { toFarsiNumber } from '@/utilities/ConvertToPersian'
import { handleSprateNumber } from '@/utilities/SeprateNumbers'
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
  setup(props) {
    const toPersianNu = (val) => {
      return toFarsiNumber(val)
    }
    const seprateNu = (val) => {
      return handleSprateNumber(val)
    }
    return {
      toPersianNu,
      seprateNu,
    }
  },
}
</script>
