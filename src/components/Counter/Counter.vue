<template lang="">
  <div class="flex justify-between self-center border-2 p-1 bg-gray-200 rounded-lg border-gray-300">
    <button :disabled="price == 0" class="disabled:cursor-not-allowed" @click="handleCounter(step)">
      <svg xmlns="http://www.w3.org/2000/svg" class="lg:h-6 h-5 lg:w-5 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    </button>
    <div class="mx-2 py-1 w-7 text-center text-sm bg-gray-200 font-bold">{{ toFarsiNumber(count) }}</div>
    <button :disabled="min >= count" class="disabled:text-gray-300 disabled:cursor-not-allowed" @click="handleCounter(-step)">
      <svg xmlns="http://www.w3.org/2000/svg" class="lg:h-6 h-5 lg:w-5 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
      </svg>
    </button>
  </div>
</template>
<script>
import { toFarsiNumber } from '@/utilities/ConvertToPersian'
export default {
  name: 'Counter',
  props: {
    count: {
      type: Number,
      required: true,
    },
    step: {
      type: Number,
      required: true,
    },
    min: {
      type: Number,
      required: true,
    },
    modelValue: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  setup(props, { emit }) {
    const handleCounter = (step) => {
      emit('update:modelValue', props.modelValue + step)
    }

    return {
      handleCounter,
      toFarsiNumber,
    }
  },
}
</script>
