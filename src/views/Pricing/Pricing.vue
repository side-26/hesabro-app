<template lang="">
  <div id="selectedContainer">
    <NavBar :class="{ blur: loading.spinner }" />
    <section class="flex flex-col lg:flex-row relative justify-between items-start mx-4 md:mx-[6rem] mt-10 mb-8 2xl:mx-[8%]">
      <!-- بخش اصلی سایت -->
      <main class="lg:mb-0 w-full lg:w-[80%] 2xl:w-[83%]" :class="{ blur: loading.spinner }">
        <section class="bg-gray-100 mb-5 lg:mb-0 lg:mx-5 md:mx-8 px-1 md:px-6 lg:px-5 rounded-2xl shadow-lg">
          <div v-if="selectedPricingData.length > 0" class="py-5 mr-[0.390625rem]">
            <div class="text-xl font-extrabold">انتخاب شده ها</div>
          </div>
          <TransitionGroup v-if="selectedPricingData.length > 0" class="flex flex-wrap sm:justify-center lg:justify-start pb-5" tag="div" name="list">
            <SelectedCard @handleDeleteSelectedCard="handleDeleteSelectedCard" :pricingInfo="item" v-for="item in selectedPricingData" :key="item.id" />
          </TransitionGroup>
          <div v-if="pricingData.items">
            <div class="py-5 mr-[0.390625rem]">
              <div class="text-xl font-extrabold">تعرفه های حسابرو</div>
            </div>
            <div>
              <TransitionGroup class="pb-4" tag="div" name="list">
                <PricingCard v-if="pricingData" @handle-select-card="handleSelectCard" :tarefehInfo="item" v-for="item in pricingData.items" :key="item.id" />
              </TransitionGroup>
            </div>
            <!-- <figure  class="w-52 h-48 mx-auto">
          <img class="w-full h-full" src="../../../public/img/emptyList.svg" alt="emptyList">
          <span class="font-extrabold text-3xl">هورااا</span>
          <p>تعرفه ها همه انتخاب شده اند برای نهایی کردن خرید ثبت سفارش کنید</p>
        </figure> -->
          </div>
        </section>
        <!-- <pricing-container title="امکانات جانبی">
        <template lang="" v-slot:body>
          
        </template>
        <template v-slot:footer lang="">
         
        </template>
      </pricing-container> -->
        <!-- <pricing-container title="ثبت سفارش">
        
      </pricing-container> -->
      </main>
      <aside :class="{ blur: loading.spinner }" class="bg-gray-100 sticky top-20 rounded-2xl w-full overflow-hidden p-5 lg:w-[33%] 2xl:w-[25%]">
        <!-- <section class="bg-gray-200"> -->
        <services-box v-if="pricingData.const_prices" v-model="PerBranch" :min="pricingData.const_prices.default_branches_count" :percent="pricingData.const_prices.price_per_branch" :totalPrice="totalprice" title="تعداد شعب" desc="شعبه جدید" />
        <services-box v-if="pricingData.const_prices" v-model="PerUser" :min="pricingData.const_prices.default_users_count" :percent="pricingData.const_prices.price_per_user" :totalPrice="totalprice" title="تعداد کاربران همزمان" desc="کاربر جدید" />
        <Bill class="w-full" :pricePerBranch="PerBranch.price" :pricePerUsers="PerUser.price" :discount="discount" :taxes="taxes" :totalPrice="totalprice" />
        <!-- </section> -->
        <Button :disabled="totalprice === 0 ||loading.submit " type="button" @click="handleOpenForm()">ثبت سفارش</Button>
      </aside>
    </section>
    <Footer :class="{ blur: loading.spinner }" />
    <Loading v-if="loading.spinner" msg="لطفا منتظر بمانید" />
  </div>
  <Teleport to="#modalTel">
    <transition>
      <info-modal v-model="modalInfo.show" :path="modalInfo.redirectPath" v-if="modalInfo.show" :title="modalInfo.title" :type="modalInfo.type" :desc="modalInfo.desc" btnText="تایید" />
    </transition>
  </Teleport>
  <Teleport to="#modalTel">
    <transition name="modal">
      <form-modal v-model="formModal.show" v-if="formModal.show" :title="formModal.title">
        <user-form :submitLoading="loading.submit" class="w-full mt-5" @handleSubmit="handleSubmit" />
      </form-modal>
    </transition>
  </Teleport>
</template>
<script>
import { reactive, ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import Loading from '@/components/Loading/Loading.vue'
import NavBar from '@/layout/navBar/NavBar.layout.vue'
import SelectedCard from '@/components/selectedCard/SelectedCard.vue'
import PricingContainer from '@/components/PricingContainer/PricingContainer.vue'
import PricingCard from '@/components/PricingCard/PricingCard.vue'
import TotalPriceContainer from '@/components/TotalPriceContainer/TotalPriceContainer.vue'
import servicesBox from '@/components/servicesBox/servicesBox.vue'
import Bill from '@/components/Bill/Bill.vue'
import userForm from '@/components/UserForm/userForm.vue'
import InfoModal from '@/components/Modal/InfoModal/InfoModal.vue'
import FormModal from '@/components/Modal/formModal/FormModal.vue'
import Button from '@/components/button/Button.vue'
import Footer from '@/layout/footer/Footer.layout.vue'
import { tarefeha } from '@/api/tarefeha.api'
import { users } from '@/api/users.api'
export default {
  setup() {
    const router = useRouter()
    const pricingData = ref([])
    const selectedPricingData = ref([])
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
    const formModal = reactive({ show: false, title: 'ثبت سفارش' })
    const finalPrice = computed(() => +(totalprice.value + taxes.value - discount.value))
    const handleDeleteSelectedCard = (inselectedCard) => {
      handleTotalPrice(-+inselectedCard.price)
      pricingData.value.items.push(inselectedCard)
      selectedPricingData.value = selectedPricingData.value.filter((item) => item.id !== inselectedCard.id)
      pricingData.value.items.sort((firstItem, secondItem) => firstItem.id - secondItem.id)
    }
    const handleOpenForm = () => {
      formModal.show = !formModal.show
    }
    const totalPrice = computed(() => totalprice.value + PerBranch.value.price + PerUser.value.price)
    const handleSelectCard = (price, cardInfo) => {
      handleTotalPrice(price)
      selectedPricingData.value.push(cardInfo)
      pricingData.value.items = pricingData.value.items.filter((item) => item.id !== cardInfo.id);
      selected_modules_id.value.push(cardInfo.id)
      router.push('#selectedContainer')
    }
    
    const handleTotalPrice = (price) => {
      totalprice.value += +price
    }
    const handleSubmit = (val) => {
      btnStatusCode.value = 200
      modalInfo.title = 'ثبت سفارش'
      const selectedModulesIdArray = JSON.stringify(selected_modules_id.value)
      loading.submit = true
      customerInfo = { ...val, selected_modules_id: selectedModulesIdArray, users_count: PerUser.value.count, branches_count: PerBranch.value.count }
      console.log(customerInfo)
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
      formModal.show = false
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
      selectedPricingData,
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
      handleOpenForm,
      formModal,
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
    FormModal,
    Button,
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
.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
