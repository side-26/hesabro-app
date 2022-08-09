<template lang="">
  <div class="relative bg-gray-100 first-of-type:mb-4 rounded-xl p-3 sm:p-4 md:px-3 lg:px-1 xl:px-3 md:mx-0 mb-3">
    <div class="flex justify-between sm:items-center mb-3 flex-row">
      <h6 class="font-extrabold sm:self-center my-3 self-start sm:my-0 text-sm">{{ title }}</h6>
      <Counter :price="price" :min="min" v-model="count" :count="count" :step="1" />
    </div>
    <div class="text-xs font-regular my-4 md:my-3">به ازای هر {{ desc }}،{{ toSepratedFarsiNo(percent) }} درصد به قیمت ماژول‌ها‌ ‌اضافه میشود</div>
    <div class="text-xs side-26 flex-row flex md:justify-between font-medium">
      <span>برای هر {{ desc }} : </span>
      <Transition name="fade" class="mr-3 md:mr-0">
        <div v-if="price > 0" class="md:mr-auto text-sm font-bold">{{ toSepratedFarsiNo(price.toFixed(0)) }} {{ currency }}</div>
        <div v-else class="hidden md:block text-sm font-bold md:self-end lg:self-stretch">رایگان</div>
      </Transition>
    </div>
    <transition name="fade" class="w-fit mr-auto">
      <div v-if="finalPrice > 0" class="md:hidden text-base mt-4 lg:mt-0 font-extrabold">{{ toSepratedFarsiNo(finalPrice.toFixed(0)) }} {{ currency }}</div>
      <div v-else class="md:hidden text-base mt-4 lg:mt-0 font-bold">رایگان</div>
    </transition>
  </div>
  <div class="hidden lg:block my-4 md:mx-0 md:w-full bg-gray-300 w-full rounded-md h-[1px]"></div>
</template>
<script>
import { ref, computed, watch, onMounted } from 'vue'
import Counter from '@/components/Counter/Counter.vue'
import { toSepratedFarsiNo } from '@/utilities/farsiSepratedNumber'
import { currency } from '@/config/currency.config'
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
      toSepratedFarsiNo,
      currency,
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
