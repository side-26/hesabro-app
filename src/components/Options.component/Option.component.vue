<template lang="">
    <section class="my-12 flex">
        <div class=" text-right mx-3 pl-14 border-l-2 border-gray-300">
            <div class="text-cyan-500 font-IranYecan-extraBold mb-3 text-xl">{{convertToPersian(60)}}+</div>
        <div class="text-sm font-IranYecan-medium">لورم ایپسوم</div>
        </div><div class=" text-right mx-3 pl-14 border-l-2 border-gray-300">
            <div class="text-cyan-500 font-IranYecan-extraBold mb-3 text-xl">{{convertToPersian(60)}}+</div>
        <div class="text-sm font-IranYecan-medium">لورم ایپسوم</div>
        </div><div class=" text-right mx-3">
            <div class="text-cyan-500 font-IranYecan-extraBold mb-3 text-xl">{{convertToPersian(60)}}+</div>
        <div class="text-sm font-IranYecan-medium">لورم ایپسوم</div>
        </div>
        

    </section>
</template>
<script>
export default {
    name:"OptionCom",
    props:["convertToPersian"]
}
</script>