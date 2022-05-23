<template lang="">
    <div class="bg-gray-100 p-5 rounded-xl mx-4 md:mx-0">
        <div class="flex justify-between sm:items-center mb-5 sm:flex-row flex-col">
            <h6 class="font-IranYecan-extraBold my-3 self-start sm:my-0  text-sm">{{title}}</h6>
            <Counter :min="min" @handle-counter="handleCounter" :count="count" :step="1"/>
        </div>
        <div class="text-xs font-IranYecan-medium mb-6 ">به ازای هر {{desc}}،{{percent}}درصد به قیمت ماژول ها اضافه میشود</div>
        <div class="text-xs flex justify-between font-IranYecan-medium "><span>برای هر شعبه جدید : <span class="">{{price.toFixed(0)}} تومان</span></span><span class="text-sm font-IranYekan-bold">{{finalPrice.toFixed(0)}} تومان</span></div>
    </div>
</template>
<script>
import Counter from '../counter.component/Counter.component.vue';
export default {
    name:"servicesContainer",
    props:["percent","title","totalPrice","desc","min","sideServices"],
    components:{
        Counter,
    },
    data() {
        return {
            count:0
        }
    },
    computed: {
        price(){
            return this.totalPrice*((+this.percent/100));
        },
        finalPrice(){
            return this.price*this.count;
        },
        ff(){
            
               return this.$emit("handleSidePrice",this.finalPrice);
        }
    },
    methods: {
        handleCounter(step){
                this.count+=step;
                console.log(this.finalPrice)
        }
    },
}
</script>
