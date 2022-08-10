<template lang="">
  <div id="selectedContainer">
    <NavBar :class="{ blur: loading.spinner }" />
    <transition-group tag="section" name="sections" class="flex flex-col lg:flex-row relative justify-between items-start mx-2 md:mx-[6rem] lg:mx-[3rem] xl:mx-[6rem] md:h-full lg:h-fit mt-2 sm:mb-8 2xl:mx-[8%] max-h-full">
      <!-- بخش اصلی سایت -->
      <main class="relative lg:mb-0 w-full lg:w-[80%] 2xl:w-[83%]" :class="{ blur: loading.spinner }">
        <transition-group name="list">
          <section v-if="stage === 0" class="md:bg-gray-100 mb-5 lg:mb-0 lg:mx-5 md:mx-8 px-1 md:px-6 lg:px-5 rounded-2xl md:shadow-lg max-h-full">
            <div v-if="selectedPricingData.length > 0" class="hidden md:block py-5 mr-[0.390625rem]">
              <div class="text-xl font-extrabold">انتخاب شده ها</div>
            </div>
            <TransitionGroup v-if="selectedPricingData.length > 0" class="hidden md:flex flex-wrap sm:justify-center lg:justify-start pb-5" tag="div" name="list">
              <selected-card v-for="item in selectedPricingData" :key="item.id" @handleDeleteSelectedCard="handleDeleteSelectedCard" :pricingInfo="item" />
            </TransitionGroup>
            <div v-if="pricingData.items">
              <div class="pt-5 sm:mb-8 mr-[0.390625rem] flex justify-between items-center" v-if="pricingData.items.length > 0">
                <div class="text-base md:text-xl font-extrabold">تعرفه های حسابرو</div>
              </div>
              <div>
                <TransitionGroup v-if="pricingData.items.length > 0" class="pb-16 md:pb-4 h-full" tag="div" name="slide-fade">
                  <div v-for="(item, index) in pricingData.items" :key="item.id" @click="handleOpenToggle(item.id)" class="hidden md:block">
                    <pricing-card :isClose="selectedItem === item.id" v-if="pricingData" @handle-open-toggle="handleOpenTooltip" @handle-select-card="handleSelectCard" :isLast="pricingData.items.length - 2 <= index" :tarefehInfo="item" />
                  </div>
                  <div v-for="(item, index) in pricingData.items" :key="item.id" class="block md:hidden">
                    <pricing-card :isClose="selectedItem === item.id" v-if="pricingData" @handle-open-toggle="handleOpenTooltip" @handle-select-card="handleSelectCard" :isLast="pricingData.items.length - 2 <= index" :tarefehInfo="item" />
                  </div>
                </TransitionGroup>
              </div>
            </div>

            <mobile-selected-container @handle-next-stage="handleMoveStage" @handle-delete-item="handleDeleteSelectedCard" :finalPrice="totalprice" :selectedArr="selectedPricingData" />
          </section>
          <section v-if="stage === 1" class="md:hidden mt-2 flex justify-between flex-col h-full">
            <div class="mx-3 mt-2">
              <div class="mb-4 flex justify-between items-center">
                <div class="font-extrabold">امکانات جانبی</div>
                <div class="md:hidden">
                  <button @click="handlePreviousStage()" class="flex justify-between items-center">
                    بازگشت
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                </div>
              </div>
              <services-box v-if="pricingData.const_prices" v-model="perBranch" :min="pricingData.const_prices.default_branches_count" :percent="pricingData.const_prices.price_per_branch" :totalPrice="totalprice" title="تعداد شعب" desc="شعبه جدید" />
              <services-box v-if="pricingData.const_prices" v-model="perUser" :min="pricingData.const_prices.default_users_count" :percent="pricingData.const_prices.price_per_user" :totalPrice="totalprice" title="تعداد کاربران همزمان" desc="کاربر جدید" />
              <total-price-container title="قیمت ماژول ها" :totalPrice="totalprice" />
              <total-price-container title="قیمت نهایی" :totalPrice="totalPrice" />
            </div>
            <AppButton @click="handleMoveStage()" class="fixed bottom-2 mx-auto left-0 right-0 w-[95%]"> ادامه </AppButton>
          </section>
          <section v-if="stage === 2" class="relative md:hidden mt-2 h-[89vh] px-3">
            <div class="mt-2 flex justify-between items-center">
              <div class="font-extrabold">ثبت سفارش</div>
              <div class="md:hidden">
                <button @click="handlePreviousStage()" class="flex justify-between items-center">
                  بازگشت
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              </div>
            </div>
            <Bill class="block lg:hidden w-full" :sevicesPrice="servicesPrice" :discount="discount" :taxes="taxes" :totalPrice="totalprice" />
            <user-form :submitLoading="loading.submit" class="w-full mt-5" @handleSubmit="handleSubmit" />
          </section>
        </transition-group>
      </main>
      <!-- descktop mode -->
      <aside :class="{ blur: loading.spinner }" class="bg-gray-100 hidden md:block sticky top-20 md:w-4/5 mx-auto rounded-2xl w-full overflow-hidden p-5 lg:w-[33%] 2xl:w-[25%]">
        <!-- <section class="bg-gray-200"> -->
        <services-box v-if="pricingData.const_prices" v-model="perBranch" :min="pricingData.const_prices.default_branches_count" :percent="pricingData.const_prices.price_per_branch" :totalPrice="totalprice" title="تعداد شعب" desc="شعبه جدید" />
        <services-box v-if="pricingData.const_prices" v-model="perUser" :min="pricingData.const_prices.default_users_count" :percent="pricingData.const_prices.price_per_user" :totalPrice="totalprice" title="تعداد کاربران همزمان" desc="کاربر جدید" />
        <Bill class="w-full" :pricePerBranch="perBranch.price" :pricePerUsers="perUser.price" :discount="discount" :taxes="taxes" :totalPrice="totalprice" />
        <!-- </section> -->
        <AppButton :disabled="totalprice === 0 || loading.submit" type="button" @click="handleOpenForm()">ثبت سفارش</AppButton>
      </aside>
    </transition-group>
    <transitionGroup tag="section" class="flex flex-col lg:flex-row relative justify-between items-start mx-2 md:mx-[6rem] mt-2 mb-8 2xl:mx-[8%]"> </transitionGroup>
    <Footer class="hidden md:block" :class="{ blur: loading.spinner }" />
    <Loading v-if="loading.spinner" msg="لطفا منتظر بمانید" />
  </div>
  <Modal v-model="formModalShow" :hasButton="false" title="ثبت سفارش">
    <user-form :submitLoading="loading.submit" class="w-full mt-5" @handleSubmit="handleSubmit" />
  </Modal>
  <Modal v-model="modalProps.show" :hasButton="true" :path="modalProps.redirectPath" :title="modalProps.title" :type="modalProps.type">
    <div class="p-3">
      <p class="text-xs font-IranYekan-regular text-gray-600 leading-6">{{ modalProps.desc }}</p>
    </div>
  </Modal>
</template>
<script>
import { reactive, ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { convertNumbersToEnglish } from '../../utilities/convertNumberToEnglish'
import Loading from '@/components/Loading/Loading.vue'
import NavBar from '@/layout/navBar/NavBar.layout.vue'
import SelectedCard from '@/components/selectedCard/SelectedCard.vue'
import PricingCard from '@/components/PricingCard/PricingCard.vue'
import servicesBox from '@/components/servicesBox/servicesBox.vue'
import MobileSelectedContainer from '@/components/MobileSelectedContainer/MobileSelectedContainer.vue'
import TotalPriceContainer from '@/components/TotalPriceContainer/TotalPriceContainer.vue'
import Bill from '@/components/Bill/Bill.vue'
import userForm from '@/components/UserForm/userForm.vue'
import Modal from '@/components/Modal/Modal.vue'
import AppButton from '@/components/Button/AppButton.vue'
import Footer from '@/layout/footer/Footer.layout.vue'
import { pricing } from '@/api/pricing.api'
import { users } from '@/api/users.api'
export default {
  setup() {
    const router = useRouter()
    const stage = ref(0)
    const pricingData = ref([])
    const selectedPricingData = ref([])
    const totalprice = ref(0)
    const discount = ref(0)
    const taxes = ref(5)
    const toggled = ref(true)
    const selectedItem = ref(-1)
    const loading = reactive({ submit: false, spinner: true })
    const btnStatusCode = ref(0)
    const selectedModulesId = ref([])
    const customerInfo = ref({})
    const perBranch = ref({ price: 0, count: 0 })
    const perUser = ref({ price: 0, count: 0 })
    const formModalShow = ref(false)
    const modalProps = reactive({ desc: '', title: 'خطا', show: false, redirectPath: '', type: 'failed', isInfoModal: false })
    const finalPrice = computed(() => +(totalprice.value + taxes.value - discount.value))
    const servicesPrice = computed(() => perBranch.value.price + perUser.value.price)
    const handleDeleteSelectedCard = (inselectedCard) => {
      handleTotalPrice(-inselectedCard.price)
      pricingData.value.items.push(inselectedCard)
      selectedPricingData.value = selectedPricingData.value.filter((item) => item.id !== inselectedCard.id)
      pricingData.value.items.sort((firstItem, secondItem) => firstItem.id - secondItem.id)
    }
    const handleOpenToggle = (id) => {
      openToggle(id)
    }
    const handleOpenTooltip = (id) => {
      openToggle(id)
    }
    const openToggle = (id) => {
      if (id === selectedItem.value) {
        selectedItem.value = -1
      } else {
        selectedItem.value = id
      }
    }
    const handleMoveStage = () => {
      ++stage.value
    }
    const handlePreviousStage = () => {
      --stage.value
    }
    const handleOpenForm = () => {
      formModalShow.value = true
    }
    const totalPrice = computed(() => totalprice.value + servicesPrice.value)
    const handleSelectCard = (price, cardInfo) => {
      handleTotalPrice(price)
      selectedPricingData.value.push(cardInfo)
      pricingData.value.items = pricingData.value.items.filter((item) => item.id !== cardInfo.id)
      selectedModulesId.value.push(cardInfo.id)
      if (window.innerWidth > 1024) router.push('#selectedContainer')
    }

    const handleTotalPrice = (price) => {
      totalprice.value += +price
    }

    const handleSubmit = (val) => {
      modalProps.isInfoModal = true
      btnStatusCode.value = 200
      modalProps.title = 'ثبت سفارش'
      const selectedModulesIdArray = JSON.stringify(selectedModulesId.value)
      loading.submit = true
      val.phone_number = convertNumbersToEnglish(val.phone_number)
      customerInfo.value = { ...val, selected_modules_id: selectedModulesIdArray, users_count: perUser.value.count, branches_count: perBranch.value.count }
      users.post(customerInfo.value).then((item) => {
        modalProps.show = true
        btnStatusCode.value = 0
        if (item) {
          modalProps.desc = 'سفارش شما با موفقیت انجام شد.با شما تماس گرفته خواهد شد.'
          modalProps.type = 'success'
          modalProps.redirectPath = '/'
        } else {
          modalProps.type = 'failed'
          modalProps.desc = 'ثبت نام انجام نشد لطفا بعدا امتحان کنید.'
          modalProps.redirectPath = '/pricing'
        }
        loading.submit = false
      })
      formModalShow.value = false
    }

    onMounted(() => {
      try {
        pricing.get().then((item) => {
          loading.spinner = false
          if (!item) {
            modalProps.type = 'failed'
            modalProps.show = true
            loading.spinner = false
            modalProps.title = 'خطا!!'
            modalProps.redirectPath = '/'
            modalProps.desc = 'دریافت اطلاعات با خطا مواجه شد'
          }
          pricingData.value = item.data.data
        })
      } catch (error) {
        router.push('/')
      }
    })
    return {
      pricingData,
      servicesPrice,
      selectedPricingData,
      totalprice,
      discount,
      toggled,
      taxes,
      btnStatusCode,
      loading,
      selectedModulesId,
      customerInfo,
      perBranch,
      perUser,
      stage,
      modalProps,
      formModalShow,
      finalPrice,
      totalPrice,
      handleTotalPrice,
      handleSelectCard,
      handleSubmit,
      handleDeleteSelectedCard,
      handleOpenForm,
      selectedItem,
      openToggle,
      handleOpenToggle,
      handleMoveStage,
      handlePreviousStage,
      handleOpenTooltip,
      convertNumbersToEnglish,
    }
  },
  components: {
    NavBar,
    Footer,
    PricingCard,
    servicesBox,
    Bill,
    userForm,
    Loading,
    Modal,
    SelectedCard,
    AppButton,
    MobileSelectedContainer,
    TotalPriceContainer,
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
.slide-fade-enter-active {
  transition: all 0.35s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s ease-in;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
