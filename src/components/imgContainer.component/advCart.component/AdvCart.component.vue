<template lang="">
    <div  class="flex items-end justify-start" :class="{'order-2 justify-end':cardProperty.align==='left'}">
        <figure :class="{'order-2':cardProperty.align==='left'}" class="rounded-2xl mx-5 w-100 h-80 overflow-hidden">
            <img   class="w-full h-full"  :src='cardProperty.imgSrc' loading="lazy" alt="cardProperty.title" />
        </figure>
        <div :class="{'order-1 -translate-x-1/4':cardProperty.align==='left'}" class="p-4 rounded-2xl bg-white -translate-y-12 translate-x-1/4  shadow-md w-2/5">
            <h3 class="font-IranYecan-extraBold text-lg py-3">{{cardProperty.title}}</h3>
            <p  class="text-justify font-IranYekan-regular text-xs">{{cardProperty.desc}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name:"AdvCart",
    props:['cardProperty'],
    
}
</script>
