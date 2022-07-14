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
          <dynamic-form class="lg:w-2/3 md:w-4/5 w-full mt-3 md:mt-0 md:mr-auto px-3" @handleSubmit="handleSubmit">
            <template lang="" v-slot:inputs>
              <dynamic-input name="name" :type="text" title="نام و نام خانوادگی" placeHolder="نام و نام خانوادگی خود را وارد کنید" />
              <dynamic-input name="phone_number" :type="text" title="موبایل" placeHolder="موبایل خود را وارد کنید" />
            </template>
            <template v-slot:submitBtn>
              <button
                :disabled="totalprice === 0"
                :class="{ 'bg-gray-200 cursor-not-allowed': totalprice === 0, 'bg-cyan-500 hover:bg-cyan-600': totalprice !== 0 }"
                type="submit"
                class="rounded-xl flex justify-center items-center font-bold md:mt-4 mt-60 text-sm transition-all py-3 text-white w-full"
              >
                ثبت سفارش
                <!-- <span v-else class="animate-spin loading-spinner mx-1" v-for="item in 3" :key="item"></span> -->
              </button>
            </template>
          </dynamic-form>
        </template>
      </pricing-container>
    </main>
    <Footer :class="{ blur: loading }" />
    <Loading v-if="loading" msg="لطفا منتظر بمانید" />
  </div>
  <Teleport to="#modalTel">
    <transition>
      <InfoModal v-model="modalInfo.show" :path="modalInfo.redirectPath" v-if="modalInfo.show" :title="modalInfo.title" :type="modalInfo.type" :desc="modalInfo.desc" btnText="تایید" />
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
import dynamicForm from '../../components/dynamicForm/dynamicForm.vue'
import dynamicInput from '../../components/dynamicForm/dynamicInput/dynamicInput.vue'
import Footer from '@/layout/footer/Footer.layout.vue'
import { tarefeha } from '@/api/tarefeha.api'
import { users } from '@/api/users.api'
import InfoModal from '@/components/Modal/InfoModal/InfoModal.vue'
export default {
  setup(props) {
    const pricingData = ref([])
    const totalprice = ref(0)
    const discount = ref(0)
    const taxes = ref(5)
    const loading = ref(true)
    const btnStatusCode = ref(0)
    const selected_modules_id = ref([])
    let customerInfo = reactive({})
    let PerBranch = ref({ price: 0, count: 0 })
    let PerUser = ref({ price: 0, count: 0 })
    const modalInfo = reactive({ desc: '', title: 'خطا', show: false, redirectPath: '', type: 'failed' })
    const finalPrice = computed(() => {
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
    const handleSubmit = (val) => {
      btnStatusCode.value = 200
      modalInfo.title = 'ثبت سفارش'
      const selectedModulesIdArray = JSON.stringify(selected_modules_id.value)
      customerInfo = { ...val, selected_modules_id: selectedModulesIdArray, users_count: PerUser.value.count, branches_count: PerBranch.value.count }
      users.post(customerInfo).then((item) => {
        modalInfo.show = true
        btnStatusCode.value = 0
        if (item.data.success !== 'success') {
          modalInfo.desc = 'سفارش شما با موفقیت انجام شد.با شما تماس گرفته خواهد شد.'
          modalInfo.type = 'success'
          modalInfo.redirectPath = '/'
        } else {
          modalInfo.type = 'faild'
          modalInfo.desc = 'ثبت نام کنسل شد'
          modalInfo.redirectPath = '/pricing'
        }
      })
    }

    onMounted(() => {
      try {
        tarefeha.get().then((item) => {
          loading.value = false
          if (item.status > 200) {
            modalInfo.type = 'failed'
            modalInfo.show = true
            loading.value = false
            modalInfo.title = 'خطا!!'
            modalInfo.redirectPath = '/'
            modalInfo.desc = 'دریافت اطلاعات با خطا مواجه شد'
          }
          pricingData.value = item.data.data
        })
      } catch (error) {
        alert('سایت با مشکل مواجه شد.')
      }
    })
    return {
      pricingData,
      totalprice,
      discount,
      taxes,
      btnStatusCode,
      loading,
      selected_modules_id,
      customerInfo,
      PerBranch,
      PerUser,
      modalInfo,
      finalPrice,
      totalPrice,
      handleTotalPrice,
      handleSubmit,
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
    dynamicForm,
    dynamicInput,
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
