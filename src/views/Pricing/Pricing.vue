<template lang="">
  <div id="selectedContainer">
    <NavBar :class="{ blur: loading.spinner }" />
    <section class="flex flex-col lg:flex-row relative justify-between items-start mx-2 md:mx-[6rem] mt-10 mb-8 2xl:mx-[8%]">
      <!-- بخش اصلی سایت -->
      <main class="lg:mb-0 w-full lg:w-[80%] 2xl:w-[83%]" :class="{ blur: loading.spinner }">
        <section class="bg-gray-100 mb-5 lg:mb-0 lg:mx-5 md:mx-8 px-1 md:px-6 lg:px-5 rounded-2xl shadow-lg">
          <div v-if="selectedPricingData.length > 0" class="py-5 mr-[0.390625rem]">
            <div class="text-xl font-extrabold">انتخاب شده ها</div>
          </div>
          <TransitionGroup v-if="selectedPricingData.length > 0" class="flex flex-wrap sm:justify-center lg:justify-start pb-5" tag="div" name="list">
            <selected-card @handleDeleteSelectedCard="handleDeleteSelectedCard" :pricingInfo="item" v-for="item in selectedPricingData" :key="item.id" />
          </TransitionGroup>
          <div v-if="pricingData.items">
            <div class="py-5 mr-[0.390625rem]">
              <div class="text-xl font-extrabold">تعرفه های حسابرو</div>
            </div>
            <div>
              <TransitionGroup class="pb-4" tag="div" name="list">
                <div v-for="(item, index) in pricingData.items" :key="item.id" @click="openToggle(index)">
                <pricing-card  :isOpen="selectedItem !== index||selectedItem===-1" v-if="pricingData" @handle-select-card="handleSelectCard" :tarefehInfo="item"/>
                </div>
              </TransitionGroup>
            </div>
            <!-- <figure  class="w-52 h-48 mx-auto">
          <img class="w-full h-full" src="../../../public/img/emptyList.svg" alt="emptyList">
          <span class="font-extrabold text-3xl">هورااا</span>
          <p>تعرفه ها همه انتخاب٬ها اند برای نهایی کردن خرید ثبت سفارش کنید</p>
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
      <aside :class="{ blur: loading.spinner }" class="bg-gray-100 sticky top-20 md:w-4/5 mx-auto rounded-2xl w-full overflow-hidden p-5 lg:w-[33%] 2xl:w-[25%]">
        <!-- <section class="bg-gray-200"> -->
        <services-box v-if="pricingData.const_prices" v-model="perBranch" :min="pricingData.const_prices.default_branches_count" :percent="pricingData.const_prices.price_per_branch" :totalPrice="totalprice" title="تعداد شعب" desc="شعبه جدید" />
        <services-box v-if="pricingData.const_prices" v-model="perUser" :min="pricingData.const_prices.default_users_count" :percent="pricingData.const_prices.price_per_user" :totalPrice="totalprice" title="تعداد کاربران همزمان" desc="کاربر جدید" />
        <Bill class="w-full" :pricePerBranch="perBranch.price" :pricePerUsers="perUser.price" :discount="discount" :taxes="taxes" :totalPrice="totalprice" />
        <!-- </section> -->
        <transition-group>
          <Button :disabled="totalprice === 0 || loading.submit" v-if="buttonTxt !== 'ثبت سفارش'" type="button" @click="handleShowSelectedList()">{{ buttonTxt }}</Button>
          <Button v-else :disabled="totalprice === 0 || loading.submit" type="button" @click="handleOpenForm()">{{ buttonTxt }}</Button>
        </transition-group>
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
import PricingCard from '@/components/PricingCard/PricingCard.vue'
import servicesBox from '@/components/servicesBox/servicesBox.vue'
import Bill from '@/components/Bill/Bill.vue'
import userForm from '@/components/UserForm/userForm.vue'
import InfoModal from '@/components/Modal/InfoModal/InfoModal.vue'
import FormModal from '@/components/Modal/formModal/FormModal.vue'
import Button from '@/components/Button/Button.vue'
import Footer from '@/layout/footer/Footer.layout.vue'
import { pricing } from '@/api/pricing.api'
import { users } from '@/api/users.api'
export default {
  setup() {
    const router = useRouter()
    const buttonTxt = ref('مشاهده لیست انتخاب شده ها')
    const scrollPosition = ref(window.scrollY.toFixed())
    const pricingData = ref([])
    const selectedPricingData = ref([])
    const totalprice = ref(0)
    const discount = ref(0)
    const taxes = ref(5)
    const toggled = ref(true)
    const loading = reactive({ submit: false, spinner: true })
    const btnStatusCode = ref(0)
    const selectedModulesId = ref([])
    const customerInfo = ref({})
    const perBranch = ref({ price: 0, count: 0 })
    const perUser = ref({ price: 0, count: 0 })
    const modalInfo = reactive({ desc: '', title: 'خطا', show: false, redirectPath: '', type: 'failed' })
    const formModal = ref({ show: false, title: 'ثبت سفارش' })
    const finalPrice = computed(() => +(totalprice.value + taxes.value - discount.value))
    const handleDeleteSelectedCard = (inselectedCard) => {
      handleTotalPrice(-inselectedCard.price)
      pricingData.value.items.push(inselectedCard)
      selectedPricingData.value = selectedPricingData.value.filter((item) => item.id !== inselectedCard.id)
      pricingData.value.items.sort((firstItem, secondItem) => firstItem.id - secondItem.id)
      buttonTxt.value = 'مشاهده لیست انتخاب شده ها'
    }
    const selectedItem = ref(-1)

    const openToggle = (index) => {
      if (index === selectedItem.value) {
        selectedItem.value = -2;
      } else {
        selectedItem.value = index;
      }
    }

    const handleShowSelectedList = () => {
      console.log(scrollPosition.value)
      router.push('#selectedContainer')
      buttonTxt.value = 'ثبت سفارش'
    }
    const handleOpenForm = () => {
      formModal.value.show = !formModal.value.show
    }
    const totalPrice = computed(() => totalprice.value + perBranch.value.price + perUser.value.price)
    const handleSelectCard = (price, cardInfo) => {
      handleTotalPrice(price)
      selectedPricingData.value.push(cardInfo)
      pricingData.value.items = pricingData.value.items.filter((item) => item.id !== cardInfo.id)
      selectedModulesId.value.push(cardInfo.id)
      router.push('#selectedContainer')
      buttonTxt.value = 'مشاهده لیست انتخاب ها'
    }

    const handleTotalPrice = (price) => {
      totalprice.value += +price
    }

    const handleSubmit = (val) => {
      btnStatusCode.value = 200
      modalInfo.title = 'ثبت سفارش'
      const selectedModulesIdArray = JSON.stringify(selectedModulesId.value)
      loading.submit = true
      customerInfo.value = { ...val, selected_modules_id: selectedModulesIdArray, users_count: perUser.value.count, branches_count: perBranch.value.count }
      users.post(customerInfo.value).then((item) => {
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
      formModal.value.show = false
    }

    onMounted(() => {
      try {
        pricing.get().then((item) => {
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
        console.log(scrollPosition.value)
      } catch (error) {
        router.push('/')
      }
    })
    return {
      pricingData,
      buttonTxt,
      selectedPricingData,
      scrollPosition,
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
      modalInfo,
      finalPrice,
      totalPrice,
      handleTotalPrice,
      handleSelectCard,
      handleSubmit,
      handleShowSelectedList,
      handleDeleteSelectedCard,
      handleOpenForm,
      formModal,
      selectedItem,
      openToggle
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
