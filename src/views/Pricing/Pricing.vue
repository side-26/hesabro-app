<template lang="">
  <div>
    <NavBar :class="{ blur: loading }" />
    <main class="container mt-10 mx-auto sm:px-14 md:px-0 lg:px-28 md:mb-24" :class="{ blur: loading }">
      <pricing-container title="تعرفه های حسابرو">
        <template v-slot:body>
          <pricing-card v-if="pricingData" @handle-total-price="handleTotalPrice" :tarefehInfo="item" v-for="item in pricingData.items" :key="item.title" />
        </template>
        <template v-slot:footer lang="">
          <total-price-con class="hidden md:block" title="قیمت کل زیر سیستم ها" :totalPrice="totalprice" />
        </template>
      </pricing-container>
      <pricing-container title="امکانات جانبی" :classes="gap - 4">
        <template lang="" v-slot:body>
          <services-box v-if="pricingData.const_prices" v-model="PerBranch" :min="pricingData.const_prices.default_branches_count" :percent="pricingData.const_prices.price_per_branch" :totalPrice="totalprice" title="تعداد شعب" desc="شعبه جدید" />
          <services-box v-if="pricingData.const_prices" v-model="PerUser" :min="pricingData.const_prices.default_users_count" :percent="pricingData.const_prices.price_per_user" :totalPrice="totalprice" title="تعداد کاربران همزمان" desc="کاربر جدید" />
        </template>
        <template v-slot:footer lang="">
          <total-price-con class="md:hidden" title="قیمت ماژول ها" :totalPrice="totalprice" />
          <total-price-con class="md:hidden" title="قیمت کل" :totalPrice="totalPrice" />
        </template>
      </pricing-container>
      <pricing-container title="ثبت سفارش" :classes="gap - 4">
        <template lang="" v-slot:body>
          <Bill :discount="discount" :taxes="taxes" :finalPrice="totalPrice" />
          <FormCo :modulesArr="selected_modules_id.length" :statusCode="btnStatusCode" @handlePost="handlePost">
            <TextInput name="name" :type="text" :rules="handleValidateFullName" title="نام و نام خانوادگی" placeHolder="نام و نام خانوادگی خود را وارد کنید" />
            <TextInput name="phone_number" :type="text" :rules="handleValidatephoneNumber" title="موبایل" placeHolder="موبایل خود را وارد کنید" />
          </FormCo>
        </template>
      </pricing-container>
    </main>
    <Footer :class="{ blur: loading }" />
    <Loading v-if="loading" msg="لطفا منتظر بمانید" />
  </div>
  <Teleport to="#modalTel">
    <transition>
      <InfoModal v-model="showRegisterdModal" :path="modalPath" v-if="showRegisterdModal" :title="modalTitle" :type="registerdSuccess" :desc="modalDesc" btnText="تایید" />
    </transition>
  </Teleport>
</template>
<script>
import { reactive, ref, onMounted, computed } from 'vue'
import Loading from '@/components/Loading/Loading.vue'
import NavBar from '@/layout/navBar/NavBar.layout.vue'
import pricingContainer from '@/components/pricingContainer/pricingContainer.vue'
import pricingCard from '@/components/pricingCard/pricingCard.vue'
import TotalPriceCon from '@/components/TotalPriceCon/TotalPriceCon.vue'
import servicesBox from '@/components/servicesBox/servicesBox.vue'
import Bill from '@/components/Bill/Bill.vue'
import FormCo from '@/components/form/form.vue'
import TextInput from '@/components/form/Input/TextInput.vue'
import Footer from '@/layout/footer/Footer.layout.vue'
import { tarefeha } from '@/api/tarefeha.api'
import { users } from '@/api/users.api'
import InfoModal from '@/components/Modal/InfoModal/InfoModal.vue'

export default {
  //   props: {
  //     name: 'Pricing',
  //   },
  setup(props) {
    const pricingData = ref([])
    const totalprice = ref(0)
    const discount = ref(0)
    const taxes = ref(5)
    const statusCode = ref(0)
    const loading = ref(true)
    const btnStatusCode = ref(0)
    const selected_modules_id = ref([])
    let customerInfo = reactive({})
    let PerBranch = ref({ price: 0, count: 0 })
    let PerUser = ref({ price: 0, count: 0 })
    const registerdSuccess = ref('failed')
    const modalDesc = ref('')
    const modalTitle = ref('خطا')
    const showRegisterdModal = ref(false)
    const modalPath = ref('')
    const finalPrice = computed(totalprice.value, () => {
      return +(totalprice.value + taxes.value - discount.value)
    })
    const totalPrice = computed(() => {
      return totalprice.value + PerBranch.value.price + PerUser.value.price
    })
    const handleTotalPrice = (price, cardInfo, checked) => {
      totalprice.value += +price
      if (!checked) selected_modules_id.value = selected_modules_id.value.filter((id) => id !== cardInfo)
      else selected_modules_id.value = [...selected_modules_id.value, cardInfo]
    }
    const handlePost = (val) => {
      btnStatusCode.value = 200
      modalTitle.value = 'ثبت سفارش'
      const selectedModulesIdArray = JSON.stringify(selected_modules_id.value)
      customerInfo = { ...val, selected_modules_id: selectedModulesIdArray, users_count: PerUser.value.count, branches_count: PerBranch.value.count }
      users.post(customerInfo).then((item) => {
        showRegisterdModal.value = true
        btnStatusCode.value = 0
        if (item.data.success !== 'success') {
          modalDesc.value = 'سفارش شما با موفقیت انجام شد.با شما تماس گرفته خواهد شد.'
          registerdSuccess.value = 'success'
          modalPath.value = '/'
          statusCode.value = 200
        } else {
          registerdSuccess.value = 'faild'
          modalDesc.value = 'ثبت نام کنسل شد'
          modalPath.value = ''
        }
      })
    }
    const handleValidateFullName = (val) => {
        if (!val) return 'فیلد مورد نظر خالی است!!'
        else if (val.length < 2) return 'نام و نام خانوادگی خود را کامل وارد کنید!!'
        return true
      },
      handleValidatephoneNumber = (val) => {
        if (!val) return 'فیلد مورد نظر خالی است!!!'
        else if (val[0] !== '0' || val.length != 11) return 'شماره تلفن معتبر نمی باشد!!'
        else if (isNaN(val)) return 'شماره تلفن باید عدد باشد!!!'
        return true
      }
    onMounted(() => {
      try {
        tarefeha.get().then((item) => {
          loading.value = false
          if (item.status > 200) {
            registerdSuccess.value = 'failed'
            showRegisterdModal.value = true
            loading.value = false
            modalTitle.value = 'خطا!!'
            modalPath.value = '/'
            modalDesc.value = 'دریافت اطلاعات با خطا مواجه شد'
          }
          pricingData.value = item.data.data
        })
      } catch (error) {
        alert('سایت با مشکل مواجه شد.')
        // $router.push('/')
      }
    })
    return {
      pricingData,
      totalprice,
      discount,
      taxes,
      statusCode,
      btnStatusCode,
      loading,
      selected_modules_id,
      customerInfo,
      PerBranch,
      PerUser,
      registerdSuccess,
      modalDesc,
      modalTitle,
      showRegisterdModal,
      modalPath,
      finalPrice,
      totalPrice,
      handleTotalPrice,
      handleValidateFullName,
      handleValidatephoneNumber,
      handlePost,
    }
  },
  components: {
    NavBar,
    Footer,
    pricingContainer,
    pricingCard,
    TotalPriceCon,
    servicesBox,
    Bill,
    FormCo,
    TextInput,
    Loading,
    InfoModal,
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
