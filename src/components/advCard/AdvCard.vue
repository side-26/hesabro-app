<template lang="">
<div class="lg:mx-16 my-12"> 
    <div  class="flex flex-col md:flex-row md:items-end md:justify-start justify-center" :class="{'order-2 md:justify-end':cardProperty.align==='left'}">
        <figure :class="{'md:order-2':cardProperty.align==='left'}" class="rounded-2xl md:mx-5 w-full md:w-96 md:h-72 lg:w-100 lg:h-80 overflow-hidden">
            <img   class="w-full h-full"  :src='cardProperty.imgSrc' loading="lazy" alt="cardProperty.title" />
        </figure>
        <div :class="{'order-1 md:-translate-x-1/4':cardProperty.align==='left','order-1 md:translate-x-1/4':cardProperty.align==='right'}" class="p-4 rounded-2xl bg-white -translate-y-16  md:-translate-y-12 shadow-md mx-auto md:mx-0 w-5/6 md:w-2/4 lg:w-2/5">
            <h3 class="font-IranYecan-extraBold text-lg py-3">{{cardProperty.title}}</h3>
            <p  class="text-justify text-slate-800 font-IranYekan-regular text-xs">{{cardProperty.desc}}</p>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name:"AdvCart",
    props:['cardProperty'],
    
}
</script>
