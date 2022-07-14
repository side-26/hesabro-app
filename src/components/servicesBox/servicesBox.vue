<template lang="">
  <div class="bg-gray-100 sm:p-5 px-2 py-5 rounded-xl mx-4 md:mx-0">
    <div class="flex justify-between sm:items-center mb-5 flex-row">
      <h6 class="font-bold sm:self-center my-3 self-start sm:my-0 text-base">{{ title }}</h6>
      <Counter :price="price" :min="min" v-model="count" :count="count" :step="1" />
    </div>
    <div class="text-xs font-IranYekan-regular my-7 md:my-6">به ازای هر {{ desc }} ، {{ toFarsiNumber(handleSprateNumber(percent)) }} درصد به قیمت ماژول ها اضافه میشود</div>
    <div class="text-xs flex-col side-26 lg:flex-row flex justify-between font-medium">
      <span
        >برای هر {{ desc }}  : <span class="">{{ toFarsiNumber(handleSprateNumber(price.toFixed(0))) }} تومان</span></span
      ><span v-if="finalPrice > 0" class="text-base mt-4 lg:mt-0 font-IranYekan-bold self-end lg:self-stretch">{{ toFarsiNumber(handleSprateNumber(finalPrice.toFixed(0))) }} تومان</span>
      <span v-else class="text-base mt-4 lg:mt-0 font-IranYekan-bold self-end lg:self-stretch">رایگان</span>
    </div>
  </div>
</template>
<script>
import { ref, computed, watch, onMounted } from 'vue'
import Counter from '@/components/counter/Counter.vue'
import { toFarsiNumber } from '@/utilities/ConvertToPersian'
import { handleSprateNumber } from '@/utilities/SeprateNumbers'
export default {
  props: {
    percent: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
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
  setup(props, { emit }) {
    const count = ref(0)
    const price = computed(() => {
      return props.totalPrice * (+props.percent / 100)
    })
    const finalPrice = computed(() => {
      if (count.value === props.min) return 0
      return price.value * (count.value - props.min)
    })
    const handleCounter = (step) => {
      count.value += step
    }
    watch(finalPrice, () => {
      emit('update:modelValue', { price: finalPrice.value, count: count.value })
    })
    onMounted(()=>{
      count.value=props.min
    })
    return {
      count,
      price,
      finalPrice,
      handleCounter,
      handleSprateNumber,
      toFarsiNumber,
    }
  },
  components: {
    Counter,
  },
}
</script>
