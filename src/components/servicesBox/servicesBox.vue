<template lang="">
  <div class="relative bg-gray-100 first-of-type:mb-14 rounded-xl mx-4 md:mx-0 after:bg-gray-400 after:absolute after:w-full after:bottom-[-25%] after:left-0 after:rounded-md after:h-[2px]">
    <div class="flex justify-between sm:items-center mb-5 flex-row">
      <h6 class="font-extrabold sm:self-center my-3 self-start sm:my-0 text-sm">{{ title }}</h6>
      <Counter :price="price" :min="min" v-model="count" :count="count" :step="1" />
    </div>
    <div class="text-xs font-IranYekan-regular my-7 md:my-6">به ازای هر {{ desc }}،{{ toFarsiNumber(handleSprateNumber(percent)) }} درصد به قیمت ماژول‌ها‌ ‌اضافه میشود</div>
    <div class="text-xs flex-col side-26 lg:flex-row flex justify-between font-medium">
      <span>برای هر {{ desc }} : </span>
      <Transition name="fade">
        <span v-if="price > 0" class="mr-auto text-sm font-bold">{{ toFarsiNumber(handleSprateNumber(price.toFixed(0))) }} تومان</span>
        <span v-else class="text-sm mt-4 lg:mt-0 font-IranYekan-bold self-end lg:self-stretch">رایگان</span>
      </Transition>
      <!-- <span v-if="finalPrice > 0" class="text-base mt-4 lg:mt-0 font-IranYekan-bold self-end lg:self-stretch">{{ toFarsiNumber(handleSprateNumber(finalPrice.toFixed(0))) }} تومان</span> -->
    </div>
  </div>
</template>
<script>
import { ref, computed, watch, onMounted } from 'vue'
import Counter from '@/components/Counter/Counter.vue'
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
    onMounted(() => {
      count.value = props.min
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
<style lang="css">
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.fade-enter-active {
  transition: all 0.3s ease-out;
}

.fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>