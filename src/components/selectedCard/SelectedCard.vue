<template>
  <div class="w-[48%] my-[0.390625rem] md:m-[0.390625rem] mr-1 md:w-[45%] lg:w-[40%] xl:w-[30%] 2xl:w-[23%]">
    <div @click="handleToggle()" class="p-2 sm:p-4 bg-white rounded-xl cursor-pointer shadow-md text-cyan-500">
      <h3 class="mb-4 sm:font-extrabold font-bold text-center sm:text-right text-sm sm:text-base">{{ pricingInfo.module_name }}</h3>
      <div class="flex flex-col sm:flex-row justify-between items-center">
        <div class="font-bold sm:text-sm text-xs">
          {{ toFarsiNumber(handleSprateNumber(pricingInfo.price)) }}
          {{ currency }}
        </div>
        <button @click.stop="handleDelete(pricingInfo)" class="text-gray-300  w-full sm:w-auto px-2 py-2 rounded-md flex-wrap text-xs transition-all hover:text-red-500 hover:bg-red-300 justify-center my-2 sm:my-0 flex items-center font-semibold" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
          <span class="">حذف</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import { toFarsiNumber } from '@/utilities/ConvertToPersian'
import { handleSprateNumber } from '@/utilities/SeprateNumbers'
import { currency } from '@/config/currency.config'
export default {
  name: 'SelectedPricingCard',
  props: {
    pricingInfo: {
      required: true,
      type: Object,
    },
  },
  setup(props, { emit }) {
    const toggle = ref(false)
    const handleDelete = (id) => {
      emit('handleDeleteSelectedCard', id)
    }
    const handleToggle = () => {
      toggle.value = !toggle.value
    }
    return {
      handleDelete,
      currency,
      handleToggle,
      toFarsiNumber,
      handleSprateNumber,
    }
  },
}
</script>
