<template lang="">
  <section class="font-medium md:bg-transparent bg-gray-100 p-4 text-gray-800 text-sm rounded-lg md:w-4/5 mx-2 md:mx-0 lg:w-full">
    <div class="my-5 flex justify-between">
      <span>قیمت ماژول‌ها :  </span><span>{{ toFarsiNumber(handleSprateNumber(finalPrice.toFixed())) }} {{currency}}</span>
    </div>
    <div class="my-5 flex justify-between">
      <span>شعب اضافه : </span><span>{{ toFarsiNumber(handleSprateNumber(finalPrice.toFixed())) }} {{currency}}</span>
    </div>
    <div class="my-5 flex justify-between">
      <span>کاربر اضافه : </span><span>{{ toFarsiNumber(handleSprateNumber(finalPrice.toFixed())) }} {{currency}}</span>
    </div>
    <!-- <div class="my-5 flex justify-between">
      <span> تخفیف : </span><span class="text-red-500">{{ toFarsiNumber(handleSprateNumber(discount.toFixed())) }} {{currency}} </span>
    </div> -->
    <div class="my-5 flex justify-between">
      <span> مالیات : </span><span>{{ toFarsiNumber(handleSprateNumber(taxes.toFixed())) }} {{currency}}</span>
    </div>
    <div class="my-4 pt-3 text-center font-extrabold border-gray-300 flex justify-center">
      <div>{{ toFarsiNumber(handleSprateNumber(totalPrice.toFixed())) }} {{currency}}</div>
    </div>
  </section>
</template>
<script>
import { computed } from 'vue'
import { toFarsiNumber } from '@/utilities/ConvertToPersian'
import { handleSprateNumber } from '@/utilities/SeprateNumbers';
import {currency} from '@/config/currency.config'

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
    const discount = computed(() => {
      return (props.discount * props.finalPrice) / 100
    })
    const taxes = computed(() => {
      return (9 / 100) * props.finalPrice
    })
    const totalPrice = computed(() => {
      return props.finalPrice + taxes.value
    })
    return {
      discount,
      taxes,
      totalPrice,
      toFarsiNumber,
      handleSprateNumber,
      currency
    }
  },
}
</script>
