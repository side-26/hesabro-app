<template lang="">
    <section class="my-12  shadow-md md:shadow-none flex rounded-md py-4 snap-x overflow-auto">
        <div class="snap-start md:min-w-max min-w-2.7  text-right mx-3 pl-3 lg:pl-14 lg:border-l-2 border-gray-300">
            <div class="text-cyan-500 font-IranYecan-extraBold mb-3 text-xl">{{convertToPersian(60)}}+</div>
        <div class="text-xs md:text-sm font-IranYecan-medium">لورم ایپسوم</div>
        </div>
        <div class="snap-start md:min-w-max min-w-2.7  text-right  pl-3 lg:pl-14 lg:border-l-2 border-gray-300">
            <div class="text-cyan-500 font-IranYecan-extraBold mb-3 text-xl">{{convertToPersian(60)}}+</div>
        <div class="text-xs md:text-sm font-IranYecan-medium">لورم ایپسوم</div>
        </div>
        <div class="snap-start md:min-w-max min-w-2.7  text-right mx-3">
            <div class="text-cyan-500 font-IranYecan-extraBold mb-3 text-xl">{{convertToPersian(60)}}+</div>
        <div class="text-xs md:text-sm font-IranYecan-medium">لورم ایپسوم</div>
        </div>
        

    </section>
</template>
<script>
import {toFarsiNumber} from '../../utilities/ConvertToPersian'
export default {
    name:"OptionCom",
    props:["convertToPersian"],
    methods:{
        convertToPersian(val){
            return toFarsiNumber(val);
        }
    }
}
</script>