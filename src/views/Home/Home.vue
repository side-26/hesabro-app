<template lang="">
  <div>
    <NavBar :currentPosition="currentPosition" />

    <header id="header" class="observing">
      <section class="bg-center bg-cover bg-no-repeat main-bg sm:px-24 px-10 relative z-10 side-26 sm:py-40 pt-10 lg:py-0 lg:h-57vh flex justify-start items-center">
        <div class="pb-20 sm:mb-0">
          <h1 class="sm:text-4xl shadow-black text-white text-3xl font-extrabold sm:leading-loose leading-normal">
            حسابرو<br />
            مدیریت مالی و حسابداری
          </h1>
        </div>
      </section>
    </header>
    <main class="overflow-hidden">
      <!-- راهکار ها و خدمات -->
      <section id="advantages" class="observing mx-auto py-1 px-2 md:px-5 lg:px-10 2xl:container 2xl:px-0">
        <AdvantagesCard v-for="item in advantagesData" :key="item.id" :cardProperty="item" />
      </section>
      <section id="aboutUs" class="observing md:my-0 lg:py-24 md:mt-20 my-10 relative flex justify-start items-stretch right-0">
        <div class="hidden md:flex justify-center px-10 min-w-33 lg:min-w-0 lg:w-97 min-h-full lg:min-h-0 lg:h-105 rounded-l-3xl overflow-hidden bg-gray-100">
          <div class="text-4xl text-gray-300 lg:pt-36 font-thin text-right tracking-wider md:rotate-90"><span class="hidden md:inline-block">درباره ما</span></div>
        </div>
        <div class="flex lg:flex-row mt-5 lg:mt-0 flex-col items-center relative lg:-right-36">
          <figure class="border-8 hidden md:block border-white ml-3 lg:ml-0 translate-x-14 mb-5 md:my-0 w-full lg:w-80 rounded-3xl overflow-hidden lg:h-97">
            <img class="w-full object-cover h-full" alt="about-us" src="/img/about_us_img.jpg" loading="lazy" />
          </figure>
          <div class="mr-3 md:mr-5 lg:mr-10 lg:w-2/3">
            <h3 class="font-extrabold text-center md:text-right text-2xl mb-10">درباره ما</h3>
            <p class="font-medium text-center md:text-right mx-auto md:mx-0 text-gray-900 w-4/5 text-xs">
              سامانه یکپارچه حسابرو، راهکاری نوین جهت راه اندازی و مدیریت کسب و کارهاست. حسابرو تمامی نیازهای یک کسب و کار را از امور حسابداری و مالی ، خرید و فروش ، انبارگردانی،فروشگاه اینترنتی و دیگر فرایند ها را در بستری ساده و کم هزینه فراهم می آورد
            </p>
            <section class="grid my-20 mx-auto lg:my-10 md:mx-0 lg:mx-3 grid-cols-2 lg:gap-0 gap-x-2 gap-y-8 md:grid-cols-none md:grid-flow-col">
              <about-us-item :itemArr="item" v-for="item in achivements" :key="item.id" />
            </section>
            <section class="bg-gray-50 py-4 px-3 mr-[-2%]md:mr-0 md:bg-transparent">
              <div class="font-medium text-sm md:text-base">
                <span class="text-slate-500">تلفن : </span>
                <a class="text-slate-900" href="tel:03491002424">{{ toFarsiNumber('03491002424') }}</a>
              </div>
              <div class="font-medium text-sm md:text-base mt-7">
                <span class="text-slate-500">واتس آپ : </span>
                <a class="text-slate-900" href="tel:09981396467">{{ toFarsiNumber('09981396467') }}</a>
              </div>
              <div class="font-medium mt-7 text-sm md:text-base">
                <span class="text-slate-500">ادرس : </span>
                <span class="text-slate-900">کرمان ، خیابان نامدار محمدی </span>
              </div>
            </section>
          </div>
        </div>
      </section>
      <!-- ماژول های حسابرو -->
      <section class="lg:py-32 test1 lg:relative h-100 flex flex-col lg:flex-row justify-center items-center 2xl:px-20">
        <div class="lg:absolute -z-10 top-0 left-0 w-full h-full flex justify-center items-center">
          <div class="border-cyan-600 flex items-center justify-center lg:border-3 lg:rounded-full lg:w-100 lg:h-100">
            <h3 class="font-extrabold justify-center mb-5 lg:m-0 lg:flex-col text-center flex text-4xl 2xl:text-5xl">
              <span class="lg:mb-72 lg:m-0 ml-4"> ماژول های </span>
              <span class="text-cyan-600"> حسابرو </span>
            </h3>
          </div>
        </div>
        <div class="flex lg:hidden overflow-x-auto h-97 container mx-auto py-2">
          <ModuleCard v-for="Module in TarefehaModules" class="min-h-[12rem] lg:hidden tw-min-w-[60vw] max-w-[70vw] block" :title="Module.title" :desc="Module.desc" :src="Module.src" />
        </div>
        <swiper
          :slidesPerView="'auto'"
          :spaceBetween="0"
          :autoplay="{
            delay: 2000,
            disableOnInteraction: true,
          }"
          :breakpoints="{
            '640': {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            '768': {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            '1024': {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            '1300': {
              slidesPerView: 4,
              spaceBetween: 0,
            },
          }"
          :centeredSlides="true"
          :loop="true"
          :navigation="false"
          :grabCursor="true"
          class="hidden lg:block h-80 lg:h-36"
          :modules="modules"
        >
          <swiper-slide class="hidden lg:flex" v-for="Module in TarefehaModules" :key="Module.id">
            <ModuleCard class="hidden lg:block" :title="Module.title" :desc="Module.desc" :src="Module.src" />
          </swiper-slide>
        </swiper>
      </section>
      <!-- مشتریان حسابرو -->
      <section id="customers" class="observing container my-24 lg:my-20 mx-auto">
        <h3 class="font-extrabold text-2xl text-center my-5">برخی از مشتریان حسابرو</h3>
        <p class="text-center px-4 md:w-[60%] 2xl:w-[50%] md:mx-auto md:px-0 text-xs font-medium">
          گروه مشتریان هدف حسابرو شامل تمامی کسب و کار های کوچک و متوسط می باشد شرکتهای فنی و مهندسی شرکت های مالی استارت آپ ها فروشندگان کالای دیجیتال و هایپر مارکت ها با ابعاد متوسط از جمله مشتریان حسابرو به شمار می آیند
        </p>
        <div class="flex flex-wrap justify-center my-20">
          <div class="mx-2 sm:mx-4 my-4 border-2 transition-all hover:border-gray-300 border-gray-100 px-2 py-3 w-24 md:w-auto md:py-6 md:px-7 rounded-xl md:rounded-2xl lg:my-0 text-center" v-for="customer in customers" :key="customer.id">
            <a :href="customer.href" target="_blank">
              <figure class="mb-5 flex justify-center">
                <img class="w-12 h-12 md:w-[4.7rem] md:h-[4.7rem]" :src="customer.src" :alt="customer.title" />
              </figure>
            </a>
            <a :href="customer.href" target="_blank" class="text-center font-bold text-xs md:text-sm">{{ customer.title }}</a>
          </div>
        </div>
      </section>
    </main>
    <!-- فوتر سایت -->
    <Footer />
  </div>
</template>
<script>
import { onMounted, ref } from 'vue'
import NavBar from '@/layout/navBar/NavBar.layout.vue'
import Footer from '@/layout/footer/Footer.layout.vue'
import AdvantagesCard from '@/components/AdvantagesCard/AdvantagesCard.vue'
import aboutUsItem from '@/components/AboutUsItem/aboutUsItem.vue'
import ModuleCard from '@/components/ModuleCard/ModuleCard.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper'
import { toFarsiNumber } from '@/utilities/ConvertToPersian'
import { advantages } from '@/config/tarefeh.data'
import { modules } from '@/config/tarefeh.data'
import { customers } from '@/config/tarefeh.data'
import { achivements } from '@/config/tarefeh.data'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
export default {
  name: 'home',
  data() {
    return {
      advantagesData: advantages,
      TarefehaModules: modules,
      customers: customers,
      achivements,
    }
  },
  components: {
    NavBar,
    Footer,
    AdvantagesCard,
    aboutUsItem,
    ModuleCard,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const currentPosition = ref('')
    onMounted(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // debugger;
              currentPosition.value = entry.target.getAttribute('id')
            }
          })
        },
        { threshold: 0.45 },
      )
      document.querySelectorAll('.observing').forEach((section) => {
        observer.observe(section)
      })
    })
    return {
      modules: [Pagination, Navigation, Autoplay],
      currentPosition,
      toFarsiNumber,
    }
  },
}
</script>
<style lang="css">
.before-enter {
  opacity: 0;
  transform: translate(100px);
  transition: all 0.35s ease-in-out;
}
.enter {
  opacity: 1;
  transform: translate(0);
}
.test {
  height: 100%;
}
.swiper-wrapper {
  display: flex !important;
  transition: all 1.95s ease-out !important;
}
.text-shadow {
  text-shadow: 1px 1px 10px #fff;
}
.main-bg {
  background-image: url('/img/main_bg.jpg');
}
</style>
