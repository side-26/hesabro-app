
<template lang="">
<div>
    <NavBar/>
    <main class="container mt-10 mx-auto sm:px-14 md:px-0 lg:px-28 md:mb-24" :class="{'blur':loading}">
        <TarefehContainer title="تعرفه های حسابرو">
        <template v-slot:body>
            <tarefehCard @handle-total-price="handleTotalPrice"  :tarefehInfo="item" v-for="item in Data.items" :key="item.title"/>
        </template>
        <template v-slot:footer lang="">
                <TotalPriceCon class="hidden md:block" title="قیمت کل" :totalPrice="totalprice"/>
        </template>
        </TarefehContainer>
        <TarefehContainer title="امکانات جانبی" :classes="gap-4">
            <template lang="" v-slot:body> 
            <servicesBox  v-if="Data.const_prices" v-model="PerBranch" :min="1"  :percent="Data.const_prices.price_per_branch"  :totalPrice="totalprice" title="تعداد شعب" desc="شعبه جدید"/>
            <servicesBox  v-if="Data.const_prices" v-model="PerUser" :min="1" :percent="Data.const_prices.price_per_user" :totalPrice="totalprice" title="تعداد کاربران همزمان" desc="کاربر جدید"/>
            </template>
            <template v-slot:footer lang="">
                <TotalPriceCon class="md:hidden" title="قیمت ماژول ها" :totalPrice="totalprice"/>
                <TotalPriceCon class="md:hidden" title="قیمت کل" :totalPrice="totalPrice"/>
        </template>
        </TarefehContainer>
        <TarefehContainer title="ثبت سفارش" :classes="gap-4">
                <template lang="" v-slot:body>
                    <Bill :discount="discount"  :taxes="taxes" :finalPrice="totalPrice" :totalPrice="sideServices"/>
                    <FormCo :statusCode="btnStatusCode" @handlePost="handlePost">
                        <InputCo name="name" :type="text" :rules="handleValidateFullName" title="نام و نام خانوادگی" placeHolder="نام و نام خانوادگی خود را وارد کنید"/>
                        <InputCo name="phone_number" :type="text" :rules="handleValidatephoneNumber" title="موبایل" placeHolder="موبایل خود را وارد کنید"/>
                    </FormCo>
                </template>
        </TarefehContainer>
    </main>
    <Footer/>
    <Loading v-if="loading" msg="لطفا منتظر بمانید"/>
</div>
    <Teleport to="#modalTel">
        <transition>
            <InfoModal  @handleClose="handleClose" :path="modalPath" v-if="showRegisterdModal" :title="modalTitle" :type="registerdSuccess" desc="شعبه جدید" btnText="تایید"/>
        </transition>
    </Teleport>
</template>
<script>
import Loading from '@/components/Loading/Loading.vue';
import NavBar from '@/layout/navBar/NavBar.layout.vue';
import TarefehContainer from '@/components/tarefehContainer/TarefehContainer.vue';
import tarefehCard from '@/components/tarefehCard/tarefehCard.vue';
import TotalPriceCon from '@/components/TotalPriceCon/TotalPriceCon.vue';
import servicesBox from '@/components/servicesBox/servicesBox.vue';
import Bill from '@/components/Bill/Bill.vue';
import FormCo from '@/components/form/form.vue';
import InputCo from '@/components/form/input/input.vue';
import Footer from '@/layout/footer/Footer.layout.vue'
import {tarefeha} from '@/api/tarefeha.api';
import {users} from '@/api/users.api';
import InfoModal from '@/components/Modal/InfoModal/InfoModal.vue'

export default {
    data() {
        return {
            Data:[],
            totalprice:0,
            discount:0,
            taxes:5,
            statusCode:0,
            openModal:true,
            btnStatusCode:0,
            loading:true,
            'selected_modules_id':[],
            customerInfo:{},
            PerBranch:{price:0,count:0},
            PerUser:{price:0,count:0},
            registerdSuccess:"failed",
            modalDesc:"",
            modalTitle:"",
            showRegisterdModal:false,
            modalPath:""
        }
    },
    components:{
        NavBar,
        Footer,
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
                this.selected_modules_id=this.selected_modules_id.filter(id=>id!==cardInfo);
            else
                this.selected_modules_id=[...this.selected_modules_id,cardInfo];
        },
        handlesidePrice(price){
            this.sideServices+=+price;
        },
        handlePost(val){
            this.btnStatusCode=200;
            this.modalTitle="ثبت سفارش";
            const selectedModulesIdArray=JSON.stringify(this.selected_modules_id);
            this.customerInfo={...val,"selected_modules_id":selectedModulesIdArray,'users_count':this.PerUser.count,'branches_count':this.PerBranch.count}
            users.post(this.customerInfo).then(item=>{
                this.showRegisterdModal=true
                this.btnStatusCode=0
                if(item.data.success!=="success"){
                    this.modalDesc="ثبت نام با موفقیت ثبت شد"
                    this.registerdSuccess="success"
                    this.modalPath="/"
                }
                else{
                    this.registerdSuccess="faild";
                    this.modalDesc="ثبت نام کنسل شد"
                    this.modalPath=""
                }
            })
        },
        seprateNumber(num){
            return handleSprateNumber(num)
        },
        handleValidateFullName(val){
            if(!val)
                return "فیلد مورد نظر خالی است!!"
            else if(val.length<6)
                return "نام و نام خانوادگی خود را کامل وارد کنید!!"
            return true;
        },
        handleValidatephoneNumber(val){
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
            this.btnStatusCode=0;
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
        tarefeha.get().then(item=>{
            this.loading=false;
        if(!item.status&&item.response.status>200){
            this.registerdSuccess="failed"
            this.showRegisterdModal=true;
            this.loading=false
            this.modalTitle="خطا!!";
            this.modalPath="/"
            this.modalDesc="دریافت اطلاعات با خطا مواجه شد";
         }
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
  z-index: 9997575;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
</style>