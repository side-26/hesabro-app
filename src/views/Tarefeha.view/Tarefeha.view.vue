
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
            <servicesBox @handlesidePrice="handlesidePrice" v-model="sideServices1" :min="1"  :percent="75" :totalPrice="totalprice" :sideServices="sideServices" :title="subTitle" :desc="desc"/>
            <servicesBox  @handlesidePrice="handlesidePrice" v-model="sideServices2" :min="5" :percent="5" :totalPrice="totalprice" :sideServices="sideServices" :title="subTitle1" :desc="desc1"/>
            </template>
        </TarefehContainer>
        <TarefehContainer :title="title2" :classes="gap-4">
                <template lang="" v-slot:body>
                    <Bill :discount="discount" :taxes="taxes" :finalPrice="ff1" :totalPrice="sideServices"/>
                    <FormCo :statusCode="btnStatusCode" @handle-loading="handleLoading">
                        <InputCo :name="fullName" :type="text" :validateFu="handleValidateFullName" :title="title3" :placeHolder="placeHolder"/>
                        <InputCo :name="mobileNo" :type="text" :validateFu="handleValidatephoneNumber" :title="title4" :placeHolder="placeHolder1"/>
                    </FormCo>
                </template>
        </TarefehContainer>
    </main>
    <Loading v-if="loading" :msg="txt"/>
</template>
<script>
import Loading from '@/components/Loading.component/Loading.component.vue';
import NavBar from '@/layout/navBar/NavBar.layout.vue';
import TarefehContainer from '@/components/tarefehContainer.component/TarefehContainer.component.vue';
import tarefehCard from '@/components/tarefehCard.component/tarefehCard.component.vue';
import TotalPriceCon from '@/components/TotalPriceCon.component/TotalPriceCon.component.vue';
import servicesBox from '@/components/servicesBox.component/servicesBox.component.vue';
import Bill from '@/components/Bill.component/Bill.component.vue';
import FormCo from '@/components/form.component/form.component.vue';
import InputCo from '@/components/form.component/Input.component/Input.component.vue';
import {toFarsiNumber} from '@/utilities/ConvertToPersian';
import {tarefeha} from '@/api/tarefeha.api.js';
import {users} from '../../api/users.api';
import {BASE_URL} from '@/config/url.config'
export default {
    data() {
        return {
            Data:[],
            totalprice:0,
            discount:10,
            taxes:5,
            statusCode:0,
            btnStatusCode:0,
            sideServices:0,
            loading:true,
            customerInfo:{orders:[]},
            sideServices1:0,
            sideServices2:0,
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
            txt:"لطفا منتظر بمانید",
            fullName:"fullName",
            mobileNo:"mobileNo"
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
        handleTotalPrice(price,cardInfo,checked){
            this.totalprice+=+price;
            if(!checked)
                this.customerInfo.orders=this.customerInfo.orders.filter(item=>item.title!==cardInfo.title);
            else
                this.customerInfo.orders=[...this.customerInfo.orders,cardInfo];
            
            console.log(this.customerInfo);
        },
        handlesidePrice(price){
            this.sideServices+=+price;
            // console.log("side services is here",this.sideServices,price)
        },
        handleLoading(val){
            // this.loading=!this.loading;
            this.btnStatusCode=200;
            this.customerInfo={...this.customerInfo,...val}
            users.Post(`${BASE_URL}users`,this.customerInfo).then(item=>{
                console.log(item)
                if(item.status===201)
                    this.btnStatusCode=0
            })
        },
        toPersian(num){
            return toFarsiNumber(num)
        },
        handleValidateFullName(val){
            console.log(val)
            if(!val)
                return "فیلد مورد نظر خالی است!!"
            else if(val.length<8)
                return "نام و نام خانوادگی خود را کامل وارد کنید!!"
            return true;
        },
        handleValidatephoneNumber(val){
            console.log(val)
            if(!val)
                return "فیلد مورد نظر خالی است!!!"
            else if(val[0]!=="0"||val.length!=11)
                return "شماره تلفن معتبر نمی باشد!!"
            else if(isNaN(val))
                return "شماره تلفن باید عدد باشد!!!"
            return true;
            
        }
    },
    computed: {
        finalPrice(){
            return +(this.totalprice+this.taxes-this.discount)
        },
        ff1(){
           return this.totalprice+this.sideServices1+this.sideServices2
        },
        
    },
mounted() {
    tarefeha.Get(`${BASE_URL}items`).then(item=>{
        if(item.status===200)
            this.loading=false
         this.Data=item.data
        }).catch(err=>{
            alert(err.message)
        })
},
}
</script>