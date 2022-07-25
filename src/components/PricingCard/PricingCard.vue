<template lang="">
  <div
    @click="handleToggle()"
    :class="{ 'border-cyan-500 bg-white lg:border-0  border-2': checked, 'h-auto ': !toggled, 'h-fit': toggled }"
    class="cursor-pointer bg-gray-200 p-3 md:px-5 md:py-4 flex-grow my-3 hover:-translate-y-1 hover:shadow-md hover:bg-white mx-4 md:mx-0 rounded-lg transition-all"
  >
    <section class="flex 0 transition-all flex-wrap items-center justify-between">
      <div class="flex justify-between sm:w-40 flex-wrap items-center">
        <h4 class="font-bold text-sm md:text-base">{{ tarefehInfo.module_name }}</h4>
      </div>
      <div class="font-bold">{{ toFarsiNumber(handleSprateNumber(tarefehInfo.price)) }} {{ currency }}</div>
      <div class="items-center flex sm:mt-0 text-center sm:text-left" @click.stop="handleSelect(tarefehInfo.price)">
        <button type="button" class="text-cyan-500 hidden sm:flex hover:bg-cyan-500 hover:text-white text-sm font-semibold py-2 rounded-lg justify-between items-center px-3 transition-all mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          انتخاب ماژول
        </button>
      </div>
    </section>
    <section class="toggleSection overflow-hidden" :class="{ 'h-0': toggled }">
      <ul>
        <li class="text-xs my-5 font-medium" v-for="(item, index) in itemArr" :key="item">{{ toFarsiNumber(index + 1) }}{{ item }}</li>
      </ul>
    </section>
  </div>
</template>
<script>
import { ref, onMounted } from 'vue'
import { toFarsiNumber } from '@/utilities/ConvertToPersian'
import { handleSprateNumber } from '@/utilities/SeprateNumbers'
import { currency } from '@/config/currency.config'
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
    const handleSelect = (price) => {
      checked.value = !checked.value
      if (checked.value) emit('handleSelectCard', price, props.tarefehInfo)
    }
    const handleToggle = () => {
      const openToggle = document.querySelectorAll('.toggleSection')
      openToggle.forEach((element) => {
        element.classList.add('h-0')
      })
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
      handleSelect,
      convertToArray,
      toFarsiNumber,
      handleToggle,
      handleSprateNumber,
      currency,
    }
  },
}
</script>
