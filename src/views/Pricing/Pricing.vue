<template lang="">
  <div>
    <NavBar :class="{ blur: loading.spinner }" />
    <main class="container mt-10 mx-auto sm:px-14 md:px-0 lg:px-28 md:mb-24" :class="{ blur: loading.spinner }">
      <section class="bg-gray-100 mx-5 px-5 rounded-3xl shadow-lg">
        <div class="py-4 mr-[0.390625rem]">
          <div class="text-xl font-extrabold">انتخاب شده ها</div>
        </div>
        <TransitionGroup class="flex flex-wrap sm:justify-center lg:justify-start pb-5" tag="div" name="list">
          <SelectedCard @handleDeleteSelectedCard="handleDeleteSelectedCard" :pricingInfo="item" v-for="item in selected_modules_id" :key="item.id" />
        </TransitionGroup>
        <div>
          <PricingCard v-if="pricingData" @handle-total-price="handleSelectCard" :tarefehInfo="item" v-for="item in pricingData.items" :key="item.id" />
        </div>
      </section>
      <pricing-container title="تعرفه های حسابرو">
        <template v-slot:body>
        </template>
        <template v-slot:footer>
          <total-price-container class="hidden md:block" title="قیمت کل زیر سیستم ها" :totalPrice="totalprice" />
        </template>
      </pricing-container>
      <pricing-container title="امکانات جانبی">
        <template lang="" v-slot:body>
          <services-box v-if="pricingData.const_prices" v-model="PerBranch" :min="pricingData.const_prices.default_branches_count" :percent="pricingData.const_prices.price_per_branch" :totalPrice="totalprice" title="تعداد شعب" desc="شعبه جدید" />
          <services-box v-if="pricingData.const_prices" v-model="PerUser" :min="pricingData.const_prices.default_users_count" :percent="pricingData.const_prices.price_per_user" :totalPrice="totalprice" title="تعداد کاربران همزمان" desc="کاربر جدید" />
        </template>
        <template v-slot:footer lang="">
          <total-price-container class="md:hidden" title="قیمت ماژول ها" :totalPrice="totalprice" />
          <total-price-container class="md:hidden" title="قیمت کل" :totalPrice="totalPrice" />
        </template>
      </pricing-container>
      <pricing-container title="ثبت سفارش">
        <template lang="" v-slot:body>
          <Bill :discount="discount" :taxes="taxes" :finalPrice="totalPrice" />
          <user-form :totalprice="totalprice" :submitLoading="loading.submit" class="lg:w-2/3 md:w-4/5 w-full mt-3 md:mt-0 md:mr-auto px-3" @handleSubmit="handleSubmit" />
        </template>
      </pricing-container>
    </main>
    <Footer :class="{ blur: loading.spinner }" />
    <Loading v-if="loading.spinner" msg="لطفا منتظر بمانید" />
  </div>
  <Teleport to="#modalTel">
    <transition>
      <InfoModal v-model="modalInfo.show" :path="modalInfo.redirectPath" v-if="modalInfo.show" :title="modalInfo.title" :type="modalInfo.type" :desc="modalInfo.desc" btnText="تایید" />
    </transition>
  </Teleport>
</template>
<script>
import { reactive, ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import Loading from '@/components/Loading/Loading.vue'
import NavBar from '@/layout/navBar/NavBar.layout.vue'
import SelectedCard from '../../components/selectedCard/SelectedCard.vue'
import PricingContainer from '@/components/PricingContainer/PricingContainer.vue'
import PricingCard from '@/components/PricingCard/PricingCard.vue'
import TotalPriceContainer from '@/components/TotalPriceContainer/TotalPriceContainer.vue'
import servicesBox from '@/components/servicesBox/servicesBox.vue'
import Bill from '@/components/Bill/Bill.vue'
import userForm from '@/components/UserForm/userForm.vue'
import Footer from '@/layout/footer/Footer.layout.vue'
import { tarefeha } from '@/api/tarefeha.api'
import { users } from '@/api/users.api'
import InfoModal from '@/components/Modal/InfoModal/InfoModal.vue'
export default {
  setup() {
    const router = useRouter()
    const pricingData = ref([])
    const totalprice = ref(0)
    const discount = ref(0)
    const taxes = ref(5)
    const loading = reactive({ submit: false, spinner: true })
    const btnStatusCode = ref(0)
    const selected_modules_id = ref([])
    let customerInfo = reactive({})
    let PerBranch = ref({ price: 0, count: 0 })
    let PerUser = ref({ price: 0, count: 0 })
    const modalInfo = reactive({ desc: '', title: 'خطا', show: false, redirectPath: '', type: 'failed' })
    const finalPrice = computed(() => +(totalprice.value + taxes.value - discount.value))
    const handleDeleteSelectedCard = (inselectedCard) => {
      // pricingData.value={item:[...inselectedCard]}
      // console.log(pricingData.value.items)
      handleTotalPrice(-(+inselectedCard.price))
      pricingData.value.items.push(inselectedCard)
      selected_modules_id.value = selected_modules_id.value.filter((item) => item.id !== inselectedCard.id)
      pricingData.value.items.sort((firstItem, secondItem) => firstItem.id - secondItem.id)
    }
    const totalPrice = computed(() => totalprice.value + PerBranch.value.price + PerUser.value.price)
    const handleSelectCard = (price, cardInfo) => {
      // totalprice.value += +price
      // if (!checked) selected_modules_id.value = selected_modules_id.value.filter((id) => id !== cardInfo)
      // else selected_modules_id.value = [...selected_modules_id.value, cardInfo]
      handleTotalPrice(price);
      selected_modules_id.value.push(cardInfo)
      pricingData.value.items = pricingData.value.items.filter((item) => item.id !== cardInfo.id)
    }
    const handleTotalPrice=(price)=>{
      totalprice.value += +price
    }
    const handleSubmit = (val) => {
      btnStatusCode.value = 200
      modalInfo.title = 'ثبت سفارش'
      const selectedModulesIdArray = JSON.stringify(selected_modules_id.value)
      loading.submit = true
      customerInfo = { ...val, selected_modules_id: selectedModulesIdArray, users_count: PerUser.value.count, branches_count: PerBranch.value.count }
      users.post(customerInfo).then((item) => {
        modalInfo.show = true
        btnStatusCode.value = 0
        if (item) {
          modalInfo.desc = 'سفارش شما با موفقیت انجام شد.با شما تماس گرفته خواهد شد.'
          modalInfo.type = 'success'
          modalInfo.redirectPath = '/'
        } else {
          modalInfo.type = 'failed'
          modalInfo.desc = 'ثبت نام انجام نشد لطفا بعدا امتحان کنید.'
          modalInfo.redirectPath = '/pricing'
        }
        loading.submit = false
      })
    }

    onMounted(() => {
      try {
        tarefeha.get().then((item) => {
          loading.spinner = false
          if (!item) {
            modalInfo.type = 'failed'
            modalInfo.show = true
            loading.spinner = false
            modalInfo.title = 'خطا!!'
            modalInfo.redirectPath = '/'
            modalInfo.desc = 'دریافت اطلاعات با خطا مواجه شد'
          }
          pricingData.value = item.data.data
          console.log(pricingData.value)
        })
      } catch (error) {
        router.push('/')
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
      handleSelectCard,
      handleSubmit,
      handleDeleteSelectedCard,
    }
  },
  components: {
    NavBar,
    Footer,
    PricingContainer,
    PricingCard,
    TotalPriceContainer,
    servicesBox,
    Bill,
    userForm,
    Loading,
    InfoModal,
    SelectedCard,
  },
}
</script>
<style>
.modal {
  position: fixed;
  z-index: 9997575;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.list-leave-active {
  position: absolute;
}
</style>
