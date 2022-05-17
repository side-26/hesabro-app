<template lang="">
    <div class="">
        <div class="flex justify-between items-center">
            <h6>{{title}}</h6>
            <Counter :count="count" :step="1"/>
        </div>
        <div>به ازای هر {{desc}}،{{percent}} به قیمت ماژول ها اضافه میشود</div>
        <div><span>برای هر شعبه جدید : <span>{{price}}</span></span><span>{{finalPrice}}</span></div>
    </div>
</template>
<script>
import Counter from '../counter.component/Counter.component.vue'
export default {
    name:"servicesContainer",
    props:["percent","title","totalPrice","desc"],
    components:{
        Counter
    },
    data() {
        return {
            count:0
        }
    },
    computed: {
        price(){
            return 0;
        },
        finalPrice(){
            return 0;
        }
    },
}
</script>
