
<template lang="">
    <header class="mb-10" :class="{'blur':loading}">
        <NavBar/>
    </header>
    <main class="container mx-auto sm:px-14 md:px-10 lg:px-28 " :class="{'blur':loading}">
        <TarefehContainer :title="title">
        <template v-slot:body>
            <tarefehCard :seprateFu="seprateNumber" :toPersian="toPersian" @handle-total-price="handleTotalPrice"  :tarefehInfo="item" v-for="item in Data.items" :key="item.title"/>
        </template>
        <template v-slot:footer>
            <TotalPriceCon :seprateFu="seprateNumber" :toPersian="toPersian"  :totalPrice="totalprice"/>
        </template>
        </TarefehContainer>
        <TarefehContainer :title="title1" :classes="gap-4">
            <template lang="" v-slot:body> 
            <servicesBox :seprateFu="seprateNumber" v-if="Data.const_prices" v-model="PerBranch" :min="1"  :percent="Data.const_prices.price_per_branch"  :totalPrice="totalprice" :title="subTitle" :desc="desc"/>
            <servicesBox :seprateFu="seprateNumber" v-if="Data.const_prices" v-model="PerUser" :min="1" :percent="Data.const_prices.price_per_user" :totalPrice="totalprice" :title="subTitle1" :desc="desc1"/>
            </template>
        </TarefehContainer>
        <TarefehContainer :title="title2" :classes="gap-4">
                <template lang="" v-slot:body>
                    <Bill :discount="discount" :seprateFu="seprateNumber" :taxes="taxes" :finalPrice="totalPrice" :totalPrice="sideServices"/>
                    <FormCo :statusCode="btnStatusCode" @handlePost="handlePost">
                        <InputCo :name="fullName" :type="text" :rules="handleValidateFullName" :title="title3" :placeHolder="placeHolder"/>
                        <InputCo :name="mobileNo" :type="text" :rules="handleValidatephoneNumber" :title="title4" :placeHolder="placeHolder1"/>
                    </FormCo>
                </template>
        </TarefehContainer>
    </main>
    <Loading v-if="loading" :msg="txt"/>
    <Teleport to="#modalTel">
        <InfoModal @handleClose="handleClose" v-if="showRegisterdModal" title="ثبت سفارش" :type="registerdSuccess" descSuccessfull="سفارش شما با موفقیت ثبت شد و پس از بررسی با شما تماس میگیرم." descFailed="سفارش شما با خطا مواجه شد لطفا مجددا تلاش کنید یا با پشتیبانی تماس بگیرید." btnText="تایید"/>
    </Teleport>
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
import {handleSprateNumber} from '@/utilities/SeprateNumbers'
import {tarefeha} from '@/api/tarefeha.api.js';
import {users} from '@/api/users.api';
import InfoModal from '@/components/Modal.component/InfoModal.component/InfoModal.component.vue'
export default {
    data() {
        return {
            Data:[],
            totalprice:0,
            discount:10,
            taxes:5,
            statusCode:0,
            openModal:true,
            btnStatusCode:0,
            loading:true,
            customerInfo:{'selected_modules':[]},
            PerBranch:{price:0,count:0},
            PerUser:{price:0,count:0},
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
            fullName:"name",
            mobileNo:"phone_number",
            registerdSuccess:"failed",
            showRegisterdModal:false,
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
        Loading,
        InfoModal
    },
    methods: {
        handleTotalPrice(price,cardInfo,checked){
            this.totalprice+=+price;
            if(!checked)
                this.customerInfo.selected_modules=this.customerInfo.selected_modules.filter(id=>id!==cardInfo);
            else
                this.customerInfo.selected_modules=[...this.customerInfo.selected_modules,cardInfo];
        },
        handlesidePrice(price){
            this.sideServices+=+price;
        },
        handlePost(val){
            this.btnStatusCode=200;
            // https://asrd.mobittest.ir/api/hesabro/shop-v1/modules-pricing
            this.customerInfo={...val,...this.customerInfo,'users_count':this.PerUser.count,'branches_count':this.PerBranch.count}
            // users.Post(`${BASE_URL}/hesabro/shop-v1/modules-pricing`,this.customerInfo).then(item=>{
            //     console.log(item)
            //     if(item.status===201){
            //         this.btnStatusCode=0
            //         this.registerdSuccess="sucess"
            //         this.showRegisterdModal=true
            //     }
            // })
        },
        toPersian(num){
            return toFarsiNumber(num)
        },
        seprateNumber(num){
            return handleSprateNumber(num)
        },
        handleValidateFullName(val){
            console.log(val)
            if(!val)
                return "فیلد مورد نظر خالی است!!"
            else if(val.length<6)
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
            
        },
        handleClose(){
            this.showRegisterdModal=false;
            this.btnStatusCode=0
        }
    },
    computed: {
        finalPrice(){
            return +(this.totalprice+this.taxes-this.discount)
        },
        totalPrice(){
           return this.totalprice+this.PerBranch.price+this.PerUser.price;
        },
        
    },
mounted() {
    try {
        tarefeha.Get().then(item=>{
        if(item.status===200)
            this.loading=false;
         this.Data=item.data.data;
         
        })
    } catch (error) {
        alert('try again')
    }
},
}
</script>
<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
</style>