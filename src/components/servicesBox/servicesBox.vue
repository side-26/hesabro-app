<template lang="">
    <div class="bg-gray-100 sm:p-5 px-2 py-5 rounded-xl mx-4 md:mx-0">
        <div class="flex justify-between sm:items-center mb-5 flex-row">
            <h6 class="font-IranYecan-bold sm:self-center my-3 self-start sm:my-0  text-base">{{title}}</h6>
            <Counter :toPersian="toPersian" :min="min" @handle-counter="handleCounter" :count="count"  :step="1"/>
        </div>
        <div class="text-xs font-IranYekan-regular my-7 md:my-6 ">به ازای هر {{toPersian(desc)}} ، {{toPersian(seprateNumbers(percent))}} درصد به قیمت ماژول ها اضافه میشود</div>
        <div class="text-xs flex-col side-26  lg:flex-row flex justify-between font-IranYecan-medium "><span>برای هر شعبه جدید : <span class="">{{toPersian(seprateNumbers(price.toFixed(0)))}} تومان</span></span><span class="text-base mt-4 lg:mt-0 font-IranYekan-bold self-end lg:self-stretch">{{toPersian(seprateNumbers(finalPrice.toFixed(0)))}} تومان</span></div>
    </div>
</template>
<script>
import Counter from '@/components/counter/Counter.vue';
import {toFarsiNumber} from '@/utilities/ConvertToPersian'
import {handleSprateNumber} from '@/utilities/SeprateNumbers'
export default {
    
    name:"servicesContainer",
    props:["percent","title","totalPrice","desc","min","modelValue"],
    components:{
        Counter,
    },
    data() {
        return {
            count:this.min,
        }
    },
    computed: {
        price(){
            return this.totalPrice*((+this.percent/100));
        },
        finalPrice(){
            if(this.count>this.min)
                return this.price*(this.count-this.min+1);
            return this.price;
        },
        
    },
    watch: {
        finalPrice(){
            this.handleChange()
        }
    },
    methods: {
        handleCounter(step){
                this.count+=step;
        },
        
        handleChange(){
            this.$emit("update:modelValue",{price:this.finalPrice,count:this.count})
        },
        
        toPersian(num){
            return toFarsiNumber(num)
        },
        seprateNumbers(val){
            return handleSprateNumber(val);
        }
    },
}
</script>
