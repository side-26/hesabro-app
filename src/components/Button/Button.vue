<template lang="">
  <div>
    <button :disabled="disabled" :type="type" class="text-white w-full font-bold py-3 disabled:bg-gray-300 disabled:cursor-not-allowed px-4 bg-cyan-500 hover:bg-cyan-600 transition-all rounded-xl"><slot></slot></button>
  </div>
</template>
<script>
export default {
  name: 'Button',
  props:{
    type:{
      type:String,
      default:"button",
      required:true
    },
    disabled:{
      type:Boolean,
      default:false,
      required:true
    }
  },
  setup(props) {
    
  }
}
</script>
<style lang="css"></style>
