<template lang="">
  <div>
    <NavBar :currentPosition="currentPosition" />
    <!-- هدر سایت -->
    <header id="header" class="observing">
      <section class="bg-center bg-cover bg-no-repeat main-bg sm:px-24 px-10 relative z-10 side-26 sm:py-40 pt-10 lg:py-0 lg:h-57vh flex justify-start items-center">
        <div class="pb-20 sm:mb-0">
          <h1 class="sm:text-4xl 2xl:text-4.5xl shadow-black text-white text-3xl font-extrabold sm:leading-loose leading-normal">
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
      <!-- بخش درباره با ما -->
      <section id="aboutUs" class="observing z-50 md:my-0 lg:py-8 md:mt-20 my-5 relative flex justify-start items-stretch right-0">
        <div class="hidden md:flex justify-center px-10 min-w-33 lg:min-w-0 lg:w-97 min-h-full lg:min-h-0 lg:h-105 rounded-l-3xl overflow-hidden bg-gray-100">
          <div class="text-4xl text-gray-300 lg:pt-36 font-thin text-right tracking-wider md:rotate-90"><span class="hidden md:inline-block">درباره ما</span></div>
        </div>
        <div class="flex lg:flex-row mt-5 lg:mt-0 flex-col items-center relative lg:-right-36">
          <figure class="border-8 hidden md:block border-white ml-3 lg:ml-0 translate-x-14 mb-5 md:my-0 w-full lg:w-80 rounded-3xl overflow-hidden lg:h-97">
            <img class="w-full object-cover h-full" alt="about-us" src="/img/about_us_img.jpg" loading="lazy" />
          </figure>
          <div class="mr-3 md:mr-5 lg:mr-10 lg:w-2/3">
            <h3 class="font-extrabold text-center md:text-right text-3xl mb-10">درباره ما</h3>
            <p class="font-medium text-center md:text-right mx-auto md:mx-0 text-gray-900 w-4/5 text-xs">
              سامانه یکپارچه حسابرو، راهکاری نوین جهت راه‌اندازی و مدیریت کسب و کارهاست. حسابرو تمامی نیازهای یک کسب و کار را از امور حسابداری و مالی، خرید و فروش، انبارگردانی، فروشگاه اینترنتی و دیگر فرایندها را در بستری ساده و کم هزینه فراهم می‌آورد.
            </p>
            <section class="flex flex-wrap justify-center md:justify-start my-14 md:my-[52px] mx-auto md:mx-0 lg:mx-3">
              <about-us-item :itemArr="item" v-for="item in achivements" :key="item.id" />
            </section>
            <section class="bg-gray-50 py-4 px-3 mr-[-11px] md:mr-0 md:bg-transparent">
              <div class="font-medium text-sm md:text-base flex">
                <figure class="text-slate-500 ml-4 w-5 h-5"><img class="w-full h-full" src="/img/phoneIcon.svg" alt="company-phoneNumber" /></figure>
                <a class="text-slate-900" href="tel:03491002426">03491002426 </a>
              </div>
              <div class="font-medium text-sm md:text-base flex my-7">
                <figure class="text-slate-500 ml-4 w-5 h-5"><img class="w-full h-full" src="/img/whatsApp.svg" alt="company-whatsapp-account" /></figure>
                <a class="text-slate-900" href="https://api.whatsapp.com/send?phone=989981396467" target="_blank">09981396467</a>
              </div>
              <div class="font-medium text-sm md:text-base flex">
                <figure class="text-slate-500 ml-4 w-5 h-5"><img class="w-full h-full" src="/img/mapMarker.svg" alt="company-address" /></figure>
                <span class="text-slate-900">کرمان، میدان قرنی، ساختمان پدر</span>
              </div>
            </section>
          </div>
        </div>
      </section>
      <!-- ماژول های حسابرو -->
      <section class="py-32 z-40 lg:relative 2xl:px-20">
        <div class="">
          <div class="border-cyan-600 flex items-center justify-center">
            <h3 class="font-extrabold justify-center mb-14 text-center flex text-3xl">
              <span class="ml-4"> ماژول های </span>
              <span class="text-cyan-600"> حسابرو </span>
            </h3>
          </div>
        </div>
        <div class="flex lg:hidden overflow-x-auto min-h-min container mx-auto py-2">
          <ModuleCard v-for="Module in pricingModules" class="lg:hidden min-h-[18rem] md:min-h-[12rem] max-w-[70vw] block" :title="Module.title" :desc="Module.desc" :src="Module.src" />
        </div>
        <div class="lg:flex flex-wrap justify-center hidden my-4 px-12 2xl:container wxl:px-0 2xl:mx-auto">
          <ModuleCard class="hidden lg:block" v-for="Module in pricingModules" :title="Module.title" :desc="Module.desc" :src="Module.src" />
        </div>
        <HesabroWaterMark />
      </section>
      <!-- مشتریان حسابرو -->
      <section id="customers" class="observing relative z-50 container my-24 lg:mt-14 lg:mb-48 mx-auto">
        <h3 class="font-extrabold z-50 text-3xl text-center my-5">برخی از مشتریان حسابرو</h3>
        <p class="text-center px-4 md:w-[60%] 2xl:w-[50%] md:mx-auto md:px-0 text-xs font-medium">
          گروه مشتریان هدف حسابرو شامل تمامی کسب و کار های کوچک و متوسط می باشد شرکتهای فنی و مهندسی ، شرکت های مالی ، استارت آپ ها ، فروشندگان کالای دیجیتال و هایپر مارکت ها با ابعاد متوسط از جمله مشتریان حسابرو به شمار می آیند
        </p>
        <div class="flex flex-wrap justify-center my-14">
          <a :href="customer.href" target="_blank" rel="customer.rel" class="mx-2 sm:mx-4 my-4 border-2 transition-all overflow-hidden bg-white hover:border-gray-300 border-gray-100 w-24 md:w-auto rounded-xl md:rounded-2xl lg:my-0 text-center" v-for="customer in customers" :key="customer.id">
            <div>
              <figure class="mb-5 px-8 flex justify-center py-5">
                <img class="w-12 h-12 md:w-[4.7rem] md:h-[4.7rem]" :src="customer.src" :alt="customer.title" />
              </figure>
            </div>
            <div class="bg-gray-200 py-2 w-full">
              <div class="text-center font-bold text-xs md:text-sm">{{ customer.title }}</div>
            </div>
          </a>
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
import HesabroWaterMark from '@/components/hesabroWaterMark/HesabroWaterMark.vue'
import { advantages } from '@/config/tarefeh.data'
import { modules } from '@/config/tarefeh.data'
import { customers } from '@/config/tarefeh.data'
import { achivements } from '@/config/tarefeh.data'
export default {
  name: 'home',
  data () {
    return {
      advantagesData: advantages,
      pricingModules: modules,
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
    HesabroWaterMark,
  },
  setup () {
    const currentPosition = ref('')
    onMounted(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              currentPosition.value = entry.target.getAttribute('id')
            }
          })
        },
        { threshold: 0.25 },
      )
      document.querySelectorAll('.observing').forEach((section) => {
        observer.observe(section)
      })
    })
    return {
      currentPosition,
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
