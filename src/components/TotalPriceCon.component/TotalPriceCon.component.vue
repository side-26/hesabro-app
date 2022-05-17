<template lang="">
    <div class="border-t-2 text-gray-900 w-full px-5 pb-1 pt-4 border-gray-200 mt-5">
        قیمت کل : <span class="font-IranYecan-bold text-black">{{Price}}</span> تومان 
    </div>
</template>
<script>
export default {
    name:"totalPrice",
    props:["totalPrice"],
    computed:{
        Price(){
             return   this.totalPrice.reduce(
  (previousValue, currentValue) => +previousValue + +currentValue,
  0
);
        }
    }
}
</script>
