<template lang="">
  <div id="mobile_selected_container" class="sm:hidden sticky bottom-0 left-0 w-full bg-white overflow-x-hidden">
    <!-- <div :class="{ hidden: !isOpen }" class="bg-slate-800 bg-opacity-20 absolute w-full h-full z-[99]"></div> -->
    <div class="bg-white shadow-md overflow-x-hidden transition-all w-full" :class="{ 'sm:h-auto ': !isOpen, 'sm:h-fit': isOpen }">
      <section class="bg-white flex items-center justify-between px-3 py-4">
        <transition>
          <div v-if="selectedArr.length === 0" class="text-sm text-red-500 font-bold">هیچ ماژولی انتخاب نشده!!</div>
          <div v-else class="text-sm font-bold">انتخاب شده ها</div>
        </transition>
        <button type="button" class="relative cursor-pointer transition-all" @click="handleOpen()">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <div v-if="selectedArr.length > 0" class="absolute h-4 w-4 text-[12px] bg-red-600 left-[-50%] top-[-34%] text-white rounded-full">
            {{ toFarsiNumber(selectedArr.length) }}
          </div>
        </button>
      </section>
      <transition-group tag="div" name="list" class="bg-white overflow-x-hidden overflow-y-auto transition-all" :class="{ 'h-0': !isOpen }">
        <selected-pricing-card v-for="(item, index) in selectedArr" :key="item.id" @handleDeleteSelectedCard="handleDeleteItem" :tarefehInfo="item" :isClose="false" :isLast="index >= selectedArr.length - 2" :isSelected="true" />
      </transition-group>
      <section class="bg-white px-3 pb-2">
        <Button :disabled="selectedArr.length === 0" type="button">ادامه</Button>
      </section>
    </div>
  </div>
</template>
<script>
import { ref } from '@vue/reactivity'
import SelectedPricingCard from '../PricingCard/PricingCard.vue'
import { toFarsiNumber } from '@/utilities/ConvertToPersian'
import Button from '../Button/Button.vue'
export default {
  name: 'MobileSelectedContainer',
  props: {
    selectedArr: {
      type: Array,
      required: true,
    },
  },
  components: {
    SelectedPricingCard,
    Button,
  },
  setup(props, { emit }) {
    const isOpen = ref(false)
    const handleOpen = () => {
      if (props.selectedArr.length > 0) isOpen.value = !isOpen.value
    }
    const handleDeleteItem = (cardInfo) => {
      emit('handleDeleteItem', cardInfo)
    }
    return {
      isOpen,
      handleOpen,
      toFarsiNumber,
      handleDeleteItem,
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
</style>
