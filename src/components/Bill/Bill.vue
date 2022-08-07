<template lang="">
  <section vif="totalPrice" class="relative font-medium md:bg-transparent my-4 bg-gray-50 p-3 lg:p- lg:odd:bg-gray-100 text-gray-800 text-sm rounded-lg">
    <div class="my-4 hidden md:flex justify-between">
      <span>قیمت ماژول‌ها : </span><span class="font-extrabold">{{ toSepratedFarsiNo(totalPrice.toFixed()) }} {{ currency }}</span>
    </div>
    <!-- desktop size -->
    <div class="hidden md:flex my-4 justify-between">
      <span>شعب اضافه : </span><span v class="font-extrabold">{{ toSepratedFarsiNo(pricePerBranch.toFixed()) }} {{ currency }}</span>
    </div>
    <!-- desktop size -->
    <div class="hidden md:flex my-4 justify-between">
      <span>کاربر اضافه : </span><span class="font-extrabold">{{ toSepratedFarsiNo(pricePerUsers.toFixed()) }} {{ currency }}</span>
    </div>
    <!-- mobile-size -->
    <div class="md:hidden flex justify-between">
      <div>قیمت کل</div>
      <div class="font-extrabold">{{ toSepratedFarsiNo(sideServices) }} {{ currency }}</div>
    </div>
    <!-- <div class="my-4 flex justify-between">
      <span> تخفیف : </span><span class="text-red-500">{{ toSepratedFarsiNo(discount.toFixed()) }} {{currency}} </span>
    </div> -->
    <div class="my-4 flex justify-between">
      <span> مالیات : </span><span class="font-extrabold">{{ toSepratedFarsiNo(taxes.toFixed()) }} {{ currency }}</span>
    </div>
    <div class="my-4 md:mx-0 md:w-full bg-gray-300 w-full bottom-[25%] left-0 rounded-md py-[1px]"></div>
    <div class="mt-4 lg:my-4 text-center text-lg font-extrabold lg:border-gray-300 flex lg:justify-center">
      <div class="hidden lg:block">{{ toSepratedFarsiNo(finalPrice.toFixed()) }} {{ currency }}</div>
      <div class="flex lg:hidden text-sm font-medium justify-between w-full">
        <div class="font-bold">قیمت نهایی :</div>
        <div class="font-extrabold text-lg">{{ toSepratedFarsiNo(finalPrice.toFixed()) }} {{ currency }}</div>
      </div>
    </div>
  </section>
</template>
<script>
import { computed } from 'vue'
import { toSepratedFarsiNo } from '@/utilities/farsiSepratedNumber'
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
      default: 0,
    },
    pricePerUsers: {
      type: Number,
      default: 0,
    },
    pricePerBranch: {
      type: Number,
      default: 0,
    },
    sevicesPrice: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const discount = computed(() => (props.discount * sideServices.value) / 100)
    const taxes = computed(() => (9 / 100) * sideServices.value)
    // const totalPrice = computed(() => props.finalPrice + taxes.value)
    const sideServices = computed(() => {
      if (props.pricePerBranch > 0 && props.pricePerUsers > 0) return props.totalPrice + props.pricePerUsers + props.pricePerBranch
      else return  props.totalPrice+props.sevicesPrice
    })
    const finalPrice = computed(() => sideServices.value + taxes.value)
    return {
      discount,
      taxes,
      toSepratedFarsiNo,
      sideServices,
      finalPrice,
      currency,
    }
  },
}
</script>
