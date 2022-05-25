<template lang="">
    <div class="border-t-2  w-full px-5 pb-1 pt-4 border-gray-200 mt-5">
        <span class="text-sm text-gray-700 font-IranYecan-bold">قیمت کل </span>: <span class="font-IranYecan-bold text-black">{{toPersian(totalPrice)}}</span> <span class="text-xs font-IranYecan-extraBold">تومان</span> 
    </div>
</template>
<script>
export default {
    name:"totalPrice",
    props:["totalPrice","toPersian"],
    
}
</script>
