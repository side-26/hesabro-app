<template lang="">
   <div class="rounded-t-md text-C-base font-IranYecan-extraBold md:mb-3 mb-1 side-26 bg-white text-right  md:bg-cyan-600 w-full md:text-white py-5 px-5">
        <h4 >{{title}}</h4>
        
   </div>
</template>
<script>
export default {
    name:"container-header",
    props:{title:{
        type:String,
        required:true
    }}
}
</script>
<style lang="">
    
</style>