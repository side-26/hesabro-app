
<template lang="">
    <header class="mb-10">
        <NavBar/>
    </header>
    <main class="container mx-auto sm:px-20 md:px-12 lg:px-36">
        <TarefehContainer :title="title">
        <template v-slot:body>
            <tarefehCard @handle-total-price="handleTotalPrice"  :tarefehInfo="item" v-for="item in Data" :key="item.title"/>
        </template>
        <template v-slot:footer>
            <TotalPriceCon   :totalPrice="totalprice"/>
        </template>
        </TarefehContainer>
        <TarefehContainer :title="title1">
            <tarefehCard  :tarefehInfo="item" v-for="item in Data" :key="item.title"/>
        </TarefehContainer>
    </main>
</template>
<script>
import NavBar from '../../layout/navBar/NavBar.layout.vue';
import TarefehContainer from '../../components/tarefehContainer.component/TarefehContainer.component.vue';
import tarefehCard from '../../components/tarefehCard.component/tarefehCard.component.vue';
import TotalPriceCon from '../../components/TotalPriceCon.component/TotalPriceCon.component.vue'
import {data} from '../../config/tarefeh.data';
export default {
    data() {
        return {
            Data:data,
            totalprice:0,
            title:"تعرفه های حسابرو",
            title1:"امکانات جانبی"
        }
    },
    components:{
        NavBar,
        TarefehContainer,
        tarefehCard,
        TotalPriceCon
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