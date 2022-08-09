<template lang="">
  <div>
    <button :disabled="disabled" :type="type" class="text-white w-full font-bold h-12 disabled:bg-gray-300 disabled:cursor-not-allowed px-4 bg-cyan-500 hover:bg-cyan-600 transition-all rounded-xl"><slot></slot></button>
  </div>
</template>
<script>
export default {
  name: 'AppButton',
  props:{
    type:{
      type:String,
      default:"button",
    },
    disabled:{
      type:Boolean,
      default:false
    } 
  },
}
</script>