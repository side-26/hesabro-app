<template lang="">
  <div :class="{'scale-0':!isClose ,'bottom-[100%]':isLast,'top-6':!isLast}" class="absolute z-[200] shadow-lg overflow-hidden right-[-100%] transition-all rounded-2xl bg-white  w-[13rem]">
    <ul class="text-right p-2">
      <li class="text-[11px] my-3 font-normal leading-6 flex justify-start" v-for="(item, index) in itemsArr" :key="item">
        <span>{{ toFarsiNumber(index + 1) }}</span>
        <span> {{item}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import {toFarsiNumber} from '@/utilities/ConvertToPersian'
export default {
  props: {
    itemsArr: {
      type: Array,
      required: true,
    },
    isClose:{
        type:Boolean,
        required:true
    },
    isLast:{
      type:Boolean,
      required:true
    }
  },
  setup(props) {
    return{
        toFarsiNumber
    }
  }
}
</script>
<style lang=""></style>
