<template lang="">
  <div @click="handleCheck(tarefehInfo.price)" :class="{ 'border-cyan-500 bg-white lg:border-0  border-2': checked,'h-auto ': !toggled, 'h-fit': toggled }" class="cursor-pointer bg-gray-200 p-3 md:p-5 flex-grow my-3 hover:-translate-y-1 hover:shadow-md hover:bg-white mx-4 md:mx-0 rounded-lg transition-all">
    <section :class="{ 'text-cyan-500 ': checked, 'mb-3': !toggled }" class="flex 0 transition-all  flex-wrap justify-between">
      <div class="flex justify-between flex-wrap items-center">
        <!-- <div :class="{ 'border-gray-300': !checked, 'border-cyan-500 bg-cyan-500 border-0  after:w-4 after:h-1.5 after:text-white after:absolute after:border-b-3 after:border-l-3': checked }" class="ml-3 relative border-2 w-5.5 h-5.5 rounded-md after:-rotate-47 after:bottom-2 after:left-1"></div> -->
        <h4 class="font-bold text-sm md:text-base">{{ tarefehInfo.module_name }}</h4>
      </div>
      <div class="items-center flex sm:mt-0 text-center sm:text-left" @click.stop="handleToggle()">
        <span class="font-bold">{{ toFarsiNumber(handleSprateNumber(tarefehInfo.price)) }} {{currency}}</span>
        <button type="button" :class="{ 'rotate-180': !toggled }" class="text-slate-900 hidden md:block transition-all mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
    <section class="py overflow-hidden" :class="{ 'h-0': toggled }">
      <ul>
        <li class="text-xs my-5 font-medium" v-for="(item, index) in itemArr" :key="item">{{ toFarsiNumber(index + 1) }}{{ item }}</li>
      </ul>
    </section>
  </div>
</template>
<script>
import { ref, onMounted } from 'vue'
import { toFarsiNumber } from '@/utilities/ConvertToPersian'
import { handleSprateNumber } from '@/utilities/SeprateNumbers';
import {currency} from '@/config/currency.config'
export default {
  name: 'PricingCard',
  props: {
    tarefehInfo: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    const checked = ref(false)
    const toggled = ref(true)
    const itemArr = ref([])
    const handleCheck = (price) => {
      checked.value = !checked.value
      if (checked.value) emit('handleTotalPrice', price, props.tarefehInfo)
      else emit('handleTotalPrice', -price, props.tarefehInfo.id, false)
    }
    const handleToggle = () => {
      toggled.value = !toggled.value
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
      checked,
      toggled,
      itemArr,
      handleCheck,
      convertToArray,
      toFarsiNumber,
      handleToggle,
      handleSprateNumber,
      currency
    }
  },
}
</script>
