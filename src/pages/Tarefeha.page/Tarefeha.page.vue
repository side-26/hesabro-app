
<template lang="">
    <header class="mb-10">
        <NavBar/>
    </header>
    <main class="container mx-auto sm:px-14 md:px-10 lg:px-28">
        <TarefehContainer :title="title">
        <template v-slot:body>
            <tarefehCard @handle-total-price="handleTotalPrice"  :tarefehInfo="item" v-for="item in Data" :key="item.title"/>
        </template>
        <template v-slot:footer>
            <TotalPriceCon   :totalPrice="totalprice"/>
        </template>
        </TarefehContainer>
        <TarefehContainer :title="title1" :classes="gap-4">
            <template lang="" v-slot:body>
            
            <servicesBox  :percent="75" :totalPrice="totalprice" :title="subTitle" :desc="desc"/>
            <servicesBox :percent="5" :totalPrice="totalprice" :title="subTitle1" :desc="desc1"/>
                
            </template>
        </TarefehContainer>
    </main>
</template>
<script>
import NavBar from '../../layout/navBar/NavBar.layout.vue';
import TarefehContainer from '../../components/tarefehContainer.component/TarefehContainer.component.vue';
import tarefehCard from '../../components/tarefehCard.component/tarefehCard.component.vue';
import TotalPriceCon from '../../components/TotalPriceCon.component/TotalPriceCon.component.vue';
import servicesBox from '../../components/servicesBox.component/servicesBox.component.vue'
import {data} from '../../config/tarefeh.data';
export default {
    data() {
        return {
            Data:data,
            totalprice:0,
            title:"تعرفه های حسابرو",
            title1:"امکانات جانبی",
            subTitle:"تعداد شعب",
            subTitle1:"تعداد کاربران همزمان",
            desc:"شعبه جدید",
            desc1:"کاربر جدید",
        }
    },
    components:{
        NavBar,
        TarefehContainer,
        tarefehCard,
        TotalPriceCon,
        servicesBox
    },
    methods: {
        handleTotalPrice(price){
            this.totalprice+=+price
            console.log(price)
        }
    },
}
</script>
<style lang="">
    
</style>