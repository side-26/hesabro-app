
<template lang="">
    <header class="mb-10" :class="{'blur':loading}">
        <NavBar/>
    </header>
    <main class="container mx-auto sm:px-14 md:px-10 lg:px-28 " :class="{'blur':loading}">
        <TarefehContainer :title="title">
        <template v-slot:body>
            <tarefehCard :toPersian="toPersian" @handle-total-price="handleTotalPrice"  :tarefehInfo="item" v-for="item in Data" :key="item.title"/>
        </template>
        <template v-slot:footer>
            <TotalPriceCon :toPersian="toPersian"  :totalPrice="totalprice"/>
        </template>
        </TarefehContainer>
        <TarefehContainer :title="title1" :classes="gap-4">
            <template lang="" v-slot:body>
            <servicesBox @handlesidePrice="handlesidePrice" v-model="side1" :min="1"  :percent="75" :totalPrice="totalprice" :sideServices="sideServices" :title="subTitle" :desc="desc"/>
            <servicesBox  @handlesidePrice="handlesidePrice" v-model="side2" :min="5" :percent="5" :totalPrice="totalprice" :sideServices="sideServices" :title="subTitle1" :desc="desc1"/>
            </template>
        </TarefehContainer>
        <TarefehContainer :title="title2" :classes="gap-4">
                <template lang="" v-slot:body>
                    <Bill :discount="discount" :taxes="taxes" :finalPrice="ff1" :totalPrice="sideServices"/>
                    <FormCo @handle-loading="handleLoading">
                        <InputCo :type="text" :title="title3" :placeHolder="placeHolder"/>
                        <InputCo :type="text" :title="title4" :placeHolder="placeHolder1"/>
                    </FormCo>
                </template>
        </TarefehContainer>
    </main>
    <Loading v-if="loading" :msg="txt"/>
</template>
<script>
import Loading from '../../components/Loading.component/Loading.component.vue';
import NavBar from '../../layout/navBar/NavBar.layout.vue';
import TarefehContainer from '../../components/tarefehContainer.component/TarefehContainer.component.vue';
import tarefehCard from '../../components/tarefehCard.component/tarefehCard.component.vue';
import TotalPriceCon from '../../components/TotalPriceCon.component/TotalPriceCon.component.vue';
import servicesBox from '../../components/servicesBox.component/servicesBox.component.vue';
import Bill from '../../components/Bill.component/Bill.component.vue';
import FormCo from '../../components/form.component/form.component.vue';
import InputCo from '../../components/form.component/Input.component/Input.component.vue';
import {toFarsiNumber} from '../../utilities/ConvertToPersian'
import {data} from '../../config/tarefeh.data';

export default {
    data() {
        return {
            Data:data,
            totalprice:0,
            discount:10,
            taxes:5,
            sideServices:0,
            loading:false,
            side1:0,
            side2:0,
            title:"تعرفه های حسابرو",
            title1:"امکانات جانبی",
            title2:"ثبت سفارش",
            title3:"نام و نام خانوادگی",
            title4:"موبایل",
            subTitle:"تعداد شعب",
            subTitle1:"تعداد کاربران همزمان",
            desc:"شعبه جدید",
            desc1:"کاربر جدید",
            placeHolder:"نام و نام خانوادگی خود را وارد کنید",
            placeHolder1:"موبایل خود را وارد کنید",
            txt:"لطفا منتظر بمانید"
        }
    },
    components:{
        NavBar,
        TarefehContainer,
        tarefehCard,
        TotalPriceCon,
        servicesBox,
        Bill,
        FormCo,
        InputCo,
        Loading
    },
    methods: {
        handleTotalPrice(price){
            this.totalprice+=+price
            // console.log(price)
        },
        handlesidePrice(price){
            this.sideServices+=+price;
            // console.log("side services is here",this.sideServices,price)
        },
        handleLoading(){
            this.loading=!this.loading;
        },
        toPersian(num){
            return toFarsiNumber(num)
        }
    },
    computed: {
        finalPrice(){
            return +(this.totalprice+this.taxes-this.discount)
        },
        ff1(){
           return this.totalprice+this.side1+this.side2
        },
        
    },
}
</script>
<style lang="">
    
</style>