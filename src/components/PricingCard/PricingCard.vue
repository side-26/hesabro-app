<template lang="">
  <div :class="{ 'sm:h-auto ': isClose, 'sm:h-fit': !isClose,'my-1':isSelected }" class="sm:cursor-pointer relative hover:z-[100] sm:bg-gray-200 px-4 py-[1.375rem] md:px-5 md:py-4 flex-grow my-2 sm:hover:-translate-y-1 sm:hover:shadow-md sm:hover:bg-white mx-0 rounded-lg transition-all">
    <section class="flex transition-all flex-wrap items-center justify-between">
      <div class="flex justify-between items-center flex-grow">
        <div class="flex sm:items-center sm:justify-between flex-col sm:flex-row md:w-4/5 xl:w-2/3">
          <div class="flex items-start">
            <h4 class="font-bold text-sm md:text-base mb-2 md:mb-0">
              {{ tarefehInfo.module_name }}
            </h4>
            <button v-if="!isSelected" type="button" @click.stop="hanleOpenToolTip(tarefehInfo.id)" class="md:hidden mr-1 relative">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <ToolTip :itemsArr="itemArr" :isClose="isClose" :isLast="isLast" />
            </button>
          </div>
          <div class="font-bold">{{ toSepratedFarsiNo(tarefehInfo.price) }} {{ currency }}</div>
        </div>
      </div>
      <div class="items-center flex sm:mt-0 mt-3 text-center sm:text-left" @click.stop="handleSelect(tarefehInfo.price)">
        <button v-if="!isSelected" type="button" class="text-cyan-500 flex sm:flex-none justify-center md:hover:bg-cyan-500 ml-1 md:hover:text-white text-sm font-semibold py-2 rounded-lg sm:justify-between items-center px-3 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <span class=""> انتخاب ماژول </span>
        </button>
        <button  v-else @click="handleDelete(tarefehInfo)" class="text-gray-400 w-full sm:w-auto px-2 py-2 rounded-md flex-wrap text-xs transition-all hover:text-red-500 hover:bg-red-200 justify-center my-2 sm:my-0 flex items-center font-semibold" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
          <span class="">حذف</span>
        </button>
      </div>
    </section>
    <section class="hidden sm:block transition-all toggleSection overflow-hidden" :class="{ 'sm:h-0': !isClose }">
      <ul class="">
        <li class="text-xs my-5 font-medium" v-for="(item, index) in itemArr" :key="item">
          <span>{{ toFarsiNumber(index + 1) }}</span>
          <span>
            {{ item }}
          </span>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
import { ref, onMounted } from 'vue'
import ToolTip from '../ToolTip/ToolTip.vue'
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
    isClose: {
      type: Boolean,
      required: true,
    },
    isLast: {
      type: Boolean,
      required: true,
    },
    isSelected: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    ToolTip,
  },
  setup(props, { emit }) {
    const itemArr = ref([])
    const handleSelect = (price) => {
      emit('handleSelectCard', price, props.tarefehInfo)
    }
    const hanleOpenToolTip = (id) => {
      emit('handleOpenToggle', id)
    }
    const handleDelete = (selectedCard) => {

      emit('handleDeleteSelectedCard', selectedCard)
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
      hanleOpenToolTip,
      handleDelete,
      toSepratedFarsiNo,
      toFarsiNumber,
      convertToArray,
      currency,
    }
  },
}
</script>
