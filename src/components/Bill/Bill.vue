<template lang="">
  <section class="relative font-medium md:bg-transparent my-6 bg-gray-100 py-4 text-gray-800 text-sm rounded-lg mx-2 md:mx-0 md:w-full after:bg-gray-400 after:absolute after:w-full after:bottom-[25%] after:left-0 after:rounded-md after:h-[2px]">
    <div class="my-5 flex justify-between">
      <span>قیمت ماژول‌ها : </span><span class="font-extrabold">{{ toFarsiNumber(handleSprateNumber(totalPrice.toFixed())) }} {{ currency }}</span>
    </div>
    <div class="my-5 flex justify-between">
      <span>شعب اضافه : </span><span class="font-extrabold">{{ toFarsiNumber(handleSprateNumber(pricePerBranch.toFixed())) }} {{ currency }}</span>
    </div>
    <div class="my-5 flex justify-between">
      <span>کاربر اضافه : </span><span class="font-extrabold">{{ toFarsiNumber(handleSprateNumber(pricePerUsers.toFixed())) }} {{ currency }}</span>
    </div>
    <!-- <div class="my-5 flex justify-between">
      <span> تخفیف : </span><span class="text-red-500">{{ toFarsiNumber(handleSprateNumber(discount.toFixed())) }} {{currency}} </span>
    </div> -->
    <div class="my-5 flex justify-between">
      <span> مالیات : </span><span class="font-extrabold">{{ toFarsiNumber(handleSprateNumber(taxes.toFixed())) }} {{ currency }}</span>
    </div>
    <div class="my-4 pt-3 text-center text-lg font-extrabold border-gray-300 flex justify-center">
      <div>{{ toFarsiNumber(handleSprateNumber(finalPrice.toFixed())) }} {{ currency }}</div>
    </div>
  </section>
</template>
<script>
import { computed } from 'vue'
import { toFarsiNumber } from '@/utilities/ConvertToPersian'
import { handleSprateNumber } from '@/utilities/SeprateNumbers'
import { currency } from '@/config/currency.config'

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
    totalPrice: {
      type: Number,
      required: true,
    },
    pricePerUsers: {
      type: Number,
      required: true,
    },
    pricePerBranch: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const discount = computed(() => (props.discount * sideServices.value) / 100)
    const taxes = computed(() => (9 / 100) * sideServices.value)
    // const totalPrice = computed(() => props.finalPrice + taxes.value)
    const sideServices = computed(() => props.totalPrice + props.pricePerUsers + props.pricePerBranch)
    const finalPrice=computed(()=>sideServices.value+discount.value+taxes.value)
    return {
      discount,
      taxes,
      toFarsiNumber,
      sideServices,
      finalPrice,
      handleSprateNumber,
      currency,
    }
  },
}
</script>
