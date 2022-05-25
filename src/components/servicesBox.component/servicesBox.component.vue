<template lang="">
    <div class="bg-gray-100 sm:p-5 px-2 py-5 rounded-xl mx-4 md:mx-0">
        <div class="flex justify-between sm:items-center mb-5 sm:flex-row flex-col">
            <h6 class="font-IranYecan-extraBold sm:self-center my-3 self-start sm:my-0  text-sm">{{title}}</h6>
            <Counter :toPersian="toPersian" :min="min" @handle-counter="handleCounter" :count="count"  :step="1"/>
        </div>
        <div class="text-xs font-IranYecan-medium mb-6 ">به ازای هر {{toPersian(desc)}} ، {{toPersian(percent)}} درصد به قیمت ماژول ها اضافه میشود</div>
        <div class="text-xs flex-col sm:flex-row flex justify-between font-IranYecan-medium "><span>برای هر شعبه جدید : <span class="">{{toPersian(price.toFixed(0))}} تومان</span></span><span class="text-sm font-IranYekan-bold mt-4 sm:mt-0 self-center sm:self-stretch">{{toPersian(finalPrice.toFixed(0))}} تومان</span></div>
    </div>
</template>
<script>
import Counter from '../counter.component/Counter.component.vue';
import {toFarsiNumber} from '../../utilities/ConvertToPersian'

export default {
    name:"servicesContainer",
    props:["percent","title","totalPrice","desc","min","sideServices","modelValue"],
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
                console.log(this.finalPrice)
        },
        ff(){
           
            this.$emit("handlesidePrice",this.finalPrice)
        },
        handleChange(){
            this.$emit("update:modelValue",this.finalPrice)
        },
        toPersian(num){
            return toFarsiNumber(num)
        }
    },
}
</script>
