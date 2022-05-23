<template lang="">
    <section class="font-IranYecan-medium text-gray-800 text-sm md:w-4/5 mx-4 md:mx-0 lg:w-2/3">
        <div class=" my-3 flex justify-between"><span>  قیمت کل : </span><span>{{finalPrice.toFixed()}} تومان</span></div>
        <div class=" my-3 flex justify-between "><span>  تخفیف : </span><span class="text-red-500">{{Discount.toFixed()}} تومان </span></div>
        <div class=" my-3 flex justify-between"><span>  مالیات : </span><span>{{Taxes.toFixed()}} تومان</span></div>
        <div class=" border-t-2 my-4 pt-3 border-gray-300 flex justify-between"><span>جمع کل</span><span>{{totalPrice}} تومان</span></div>
    </section>
</template>
<script>
export default {
    name:"Bill",
    props:["discount","taxes","finalPrice",],
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
}
</script>
<style lang="">
    
</style>