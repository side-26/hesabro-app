<template lang="">
  <div>
    <button  type="Button" class="text-white w-full font-bold py-3 px-4 bg-cyan-500 hover:bg-cyan-600 transition-all rounded-xl"><slot></slot></button>
  </div>
</template>
<script>
export default {
  name: 'Button',
  setup(props) {
    
  }
}
</script>
<style lang="css"></style>
