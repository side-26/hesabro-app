<template lang="">
    <section class="font-IranYecan-medium text-gray-800 text-base md:w-4/5 mx-4 md:mx-0 lg:w-2/3">
        <div class=" my-5 flex justify-between"><span>  قیمت کل : </span><span>{{toPersian(seprateFu(finalPrice.toFixed()))}} تومان</span></div>
        <div class=" my-5 flex justify-between "><span>  تخفیف : </span><span class="text-red-500">{{toPersian(seprateFu(Discount.toFixed()))}} تومان </span></div>
        <div class=" my-5 flex justify-between"><span>  مالیات : </span><span>{{toPersian(seprateFu(Taxes.toFixed()))}} تومان</span></div>
        <div class=" border-t-2 my-4 pt-3 border-gray-300 flex justify-between"><span>جمع کل</span><span>{{toPersian(seprateFu(totalPrice.toFixed()))}} تومان</span></div>
    </section>
</template>
<script>
import {toFarsiNumber} from '@/utilities/ConvertToPersian'
export default {
    name:"Bill",
    props:["discount","taxes","finalPrice","seprateFu"],
    computed: {
        Discount(){
            return this.discount*this.finalPrice/100
        },
        Taxes(){
            return this.taxes*this.finalPrice/100
        },
        totalPrice(){
           return this.finalPrice-this.Discount+this.Taxes
        }
    },
    methods: {
        toPersian(num){
            return toFarsiNumber(num)
        }
    },
}
</script>
<style lang="">
    
</style>