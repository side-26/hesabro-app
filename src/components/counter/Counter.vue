<template lang="">
  <div class="flex justify-between self-center">
    <button :disabled="count > 100" @click="handleCounter(step)">
      <svg xmlns="http://www.w3.org/2000/svg" class="lg:h-6 h-5 lg:w-6 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    </button>
    <span class="mx-4 py-2 px-5 rounded-md bg-gray-200 font-IranYecan-bold">{{ PersianConvertor(count) }}</span>
    <button :disabled="min >= count" :class="{ 'text-gray-300': min >= count, 'cursor-no-drop': min >= count }" @click="handleCounter(-step)">
      <svg xmlns="http://www.w3.org/2000/svg" class="lg:h-6 h-5 lg:w-6 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
      </svg>
    </button>
  </div>
</template>
<script>
import { toFarsiNumber } from '@/utilities/ConvertToPersian'
export default {
  name: 'counter',
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
  },
  methods: {
    handleCounter(step) {
      this.$emit('update:modelValue', this.modelValue + step)
    },
    PersianConvertor(val) {
      return toFarsiNumber(val)
    },
  },
}
</script>
