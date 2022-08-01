<template lang="">
  <div :class="{ 'h-auto ': isOpen, 'h-fit': !isOpen }" class="cursor-pointer bg-gray-200 p-3 md:px-5 md:py-4 flex-grow my-3 hover:-translate-y-1 hover:shadow-md hover:bg-white mx-0 rounded-lg transition-all">
    <section class="flex transition-all flex-wrap items-center justify-between">
      <div class="flex justify-between sm:w-40 flex-wrap items-center">
        <h4 class="font-bold text-sm md:text-base">{{ tarefehInfo.module_name }}</h4>
      </div>
      <div class="font-bold">{{ toSepratedFarsiNo(tarefehInfo.price) }} {{ currency }}</div>
      <div class="items-center flex sm:mt-0 mt-3 text-center sm:text-left w-full sm:w-auto" @click.stop="handleSelect(tarefehInfo.price)">
        <button type="button" class="text-cyan-500 flex flex-1 sm:flex-none justify-center hover:bg-cyan-500 hover:text-white text-sm font-semibold py-2 rounded-lg sm:justify-between items-center px-3 transition-all sm:mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <span class="hidden sm:block"> انتخاب ماژول </span>
        </button>
      </div>
    </section>
    <section class="toggleSection overflow-hidden" :class="{ 'h-0': !isOpen }">
      <ul>
        <li class="text-xs my-5 font-medium" v-for="(item, index) in itemArr" :key="item">{{ toFarsiNumber(index + 1) }}{{ item }}</li>
      </ul>
    </section>
  </div>
</template>
<script>
import { ref, onMounted } from 'vue'
import { currency } from '@/config/currency.config'
import { toSepratedFarsiNo } from '@/utilities/farsiSepratedNumber'
import { toFarsiNumber } from '@/utilities/ConvertToPersian'
export default {
  name: 'PricingCard',
  props: {
    tarefehInfo: {
      type: Object,
      required: true,
    },
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, { emit }) {
    const itemArr = ref([])
    const handleSelect = (price) => {
      emit('handleSelectCard', price, props.tarefehInfo)
    }
    const handleToggle = () => {
      emit('handleCloseALlCards')
    }
    const convertToArray = (str) => {
      let arr = []
      if (str.match(/\d+/)) {
        arr = str.split(/\d+/)
        arr.shift()
      } else {
        arr.push(`.${str}`)
      }
      return arr
    }
    onMounted(() => {
      itemArr.value = convertToArray(props.tarefehInfo.description)
    })
    return {
      itemArr,
      handleSelect,
      toSepratedFarsiNo,
      toFarsiNumber,
      convertToArray,
      handleToggle,
      currency,
    }
  },
}
</script>
