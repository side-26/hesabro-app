<template lang="">
  <div @click="handleOpen()" :class="{ 'bg-slate-900 max- h-full': isOpen }" id="mobile_selected_container" class="md:hidden fixed transition-all flex z-[150] items-end bottom-0 left-0 w-full bg-opacity-20 overflow-hidden shadow-self">
    <!-- <div :class="{ hidden: !isOpen }" class="bg-slate-800 bg-opacity-20 absolute w-full h-full z-[99]"></div> -->
    <div @click.stop="" class="bg-white shadow-self pb-3 transition-all w-full" :class="{ 'h-auto ': isOpen, 'h-fit': !isOpen }">
      <section @click="handleOpen()" class="bg-white flex items-center shadow-lg justify-between px-4 py-4">
        <transition-group tage="div" name="list" class="w-[88%]">
          <div v-if="selectedArr.length === 0" class="text-sm text-slate-800 w-full">هیچ ماژولی انتخاب نشده!!</div>
          <!-- <div v-else class="text-sm font-bold">تعرفه های انتخاب شده</div> -->
          <div v-if="!isOpen" class="text-sm font-bold text-ellipsis whitespace-nowrap overflow-hidden w-[90%]">
            <span class="text-[12px] font-normal" v-for="(item,index) in selectedArr" :key="item.id">{{ item.module_name }}<span v-if="index<selectedArr.length-1">,</span></span>
          </div>
          <div v-if="isOpen && selectedArr.length > 0">تعرفه های انتخاب شده</div>
        </transition-group>
        <button type="button" class="relative cursor-pointer transition-all" @click.stop="handleOpen()">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <div v-if="selectedArr.length > 0" class="absolute h-4 w-4 text-[12px] bg-red-600 left-[-50%] top-[-34%] text-white rounded-full">
            {{ toFarsiNumber(selectedArr.length) }}
          </div>
        </button>
      </section>
      <transition-group tag="section" name="list" class="bg-white sm:px-3 overflow-x-hidden overflow-y-auto transition-all" :class="{ 'h-0': !isOpen || selectedArr.length === 0, 'max-h-[74vh]': isOpen }">
        <selected-pricing-card v-for="(item, index) in selectedArr" :key="item.id" @handleDeleteSelectedCard="handleDeleteItem" :tarefehInfo="item" :isClose="false" :isLast="index >= selectedArr.length - 2" :isSelected="true" />
      </transition-group>
      <section class="bg-white px-3 pb-2">
        <AppButton @click="handleNextStage()" :disabled="selectedArr.length === 0" type="button"
          ><div class="flex justify-between items-center text-sm font-medium">
            <div>ادامه</div>
            <div class="font-extrabold">{{ toSepratedFarsiNo(finalPrice) }} {{ currency }}</div>
          </div></AppButton
        >
      </section>
    </div>
  </div>
</template>
<script>
import { ref } from '@vue/reactivity'
import SelectedPricingCard from '../PricingCard/PricingCard.vue'
import { toFarsiNumber } from '@/utilities/ConvertToPersian'
import { toSepratedFarsiNo } from '@/utilities/farsiSepratedNumber'
import { currency } from '@/config/currency.config'
import AppButton from '../Button/AppButton.vue'
export default {
  name: 'MobileSelectedContainer',
  props: {
    selectedArr: {
      type: Array,
      required: true,
    },
    finalPrice: {
      required: true,
    },
  },
  components: {
    SelectedPricingCard,
    AppButton,
  },
  setup(props, { emit }) {
    const isOpen = ref(false)
    const handleOpen = () => {
      isOpen.value = !isOpen.value
    }
    const handleDeleteItem = (cardInfo) => {
      emit('handleDeleteItem', cardInfo)
    }
    const handleNextStage = () => {
      emit('handleNextStage')
    }
    return {
      isOpen,
      handleOpen,
      toFarsiNumber,
      toSepratedFarsiNo,
      currency,
      handleDeleteItem,
      handleNextStage,
    }
  },
}
</script>
<style lang="css" scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.list-leave-active {
  position: absolute;
}
.shadow-self {
  box-shadow: 0px 0px 6px #00000029;
}
</style>
