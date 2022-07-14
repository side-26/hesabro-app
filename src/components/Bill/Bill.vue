<template lang="">
  <section class="font-medium md:bg-transparent bg-gray-100 p-4 text-gray-800 text-base rounded-lg md:w-4/5 mx-2 md:mx-0 lg:w-2/3">
    <div class="my-5 flex justify-between">
      <span> قیمت کل : </span><span>{{ toFarsiNumber(handleSprateNumber(finalPrice.toFixed())) }} تومان</span>
    </div>
    <!-- <div class="my-5 flex justify-between">
      <span> تخفیف : </span><span class="text-red-500">{{ toFarsiNumber(handleSprateNumber(discount.toFixed())) }} تومان </span>
    </div> -->
    <div class="my-5 flex justify-between">
      <span> مالیات : </span><span>{{ toFarsiNumber(handleSprateNumber(taxes.toFixed())) }} تومان</span>
    </div>
    <div class="border-t-2 my-4 pt-3 border-gray-300 flex justify-between">
      <span>جمع کل</span><span>{{ toFarsiNumber(handleSprateNumber(totalPrice.toFixed())) }} تومان</span>
    </div>
  </section>
</template>
<script>
import { computed } from 'vue'
import { toFarsiNumber } from '@/utilities/ConvertToPersian'
import { handleSprateNumber } from '@/utilities/SeprateNumbers'
export default {
  name: 'Bill',
  props: {
    discount: {
      type: Number,
      required: true,
    },
    taxes: {
      type: Number,
      required: true,
    },
    finalPrice: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const discount = computed(() => {
      return(props.discount * props.finalPrice) / 100
    })
    const taxes = computed(() => {
      return ((9 / 100) * props.finalPrice)
    })
    const totalPrice = computed(() => {
      return props.finalPrice+taxes.value
    })
    return {
      discount,
      taxes,
      totalPrice,
      toFarsiNumber,
      handleSprateNumber
    }
  },
}
</script>
