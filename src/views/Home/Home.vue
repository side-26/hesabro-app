<template lang="">
<div>
    <NavBar/>
    <header class="">
            <section class="bg-center bg-cover bg-main-bg  sm:px-24 px-10 relative z-10   sm:py-40 pt-10 md:pb-72 flex  justify-start items-center">
                <div class="pb-20 sm:mb-0">
                    <h1  class="sm:text-4xl text-white text-3xl font-IranYecan-extraBold sm:leading-loose leading-normal">حسابرو<br/> مدیریت مالی و حسابداری</h1>
                    <!-- <p  class="font-IranYecan-bold  absolute sm:static sm:w-2/3 w-full md:w-2/4 side-26 right-0 -bottom-11  px-4 sm:px-0  bg-white sm:bg-transparent text-justify leading-6 text-gray-600 text-sm sm:py-0 sm:mt-10 py-10 ">سامانه یکپارچه حسابرو ، راهکاری نوین جهت راه اندازی و مدیریت کسب و کار هاست. حسابرو تمامی نیازهای یک کسب و کار را از امور حسابداری و مالی ، خرید و فروش ، انبارگردانی،فروشگاه اینترنتی و دیگر فرآیند ها را در بستری ساده و کم هزینه فراهم می آورد.</p> -->
                </div>
            <!-- <div class="absolute bg-gradient-to-l from-black to-transparent   w-full h-full left-0 top-0">
            </div> -->
            </section>
    </header>
    <main class="overflow-hidden">
        <section id="advantages" class="mx-auto py-10 px-2 md:px-5 lg:px-10 2xl:container 2xl:px-0">
                <AdvCart v-for="item in advantagesData" :key="item.id" :cardProperty="item"/>
        </section>
        <section id="about_us" class="my-24 relative flex justify-start items-center  right-0">
            <div class="flex justify-center py-96 px-10 sm:px-20 md:p-0 md:w-97  lg:w-105 md:h-105  rounded-l-3xl overflow-hidden  bg-gray-100">
                <div class="text-4xl text-gray-300  lg:pt-36 font-IranYecan-thin text-right tracking-wider  md:rotate-90"><span class="hidden md:inline-block">درباره ما</span></div>
            </div>
            <div class=" flex lg:flex-row flex-col items-center relative  lg:-right-36">
                <figure class="border-8 border-white ml-3 lg:ml-0  translate-x-14  mb-5   md:my-0 w-full   lg:w-80 rounded-3xl overflow-hidden lg:h-97">
                    <img class="w-full h-full " alt="about-us" src="@/assets/img/about_us_img.jpg" loading="lazy" />
                </figure>
                <div class="mr-3 md:mr-5 lg:mr-10 lg:w-2/3">
                    <h4 class="font-IranYecan-extraBold  text-2xl mb-10">درباره ما</h4>
                    <p class="font-IranYecan-medium text-gray-900 text-xs">سامانه یکپارچه حسابرو، راهکاری نوین جهت راه اندازی و مدیریت کسب و کارهاست. حسابرو تمامی نیازهای یک کسب و کار را از امور حسابداری و مالی ، خرید و فروش ، انبارگردانی،فروشگاه اینترنتی و دیگر فرایند ها را در بستری ساده و کم هزینه فراهم می آورد</p>
                    <OptionCom :convertToPersian='convertToPersian'/> 
                    <div class="font-IranYecan-medium text-sm md:text-base  mt-7">
                        <span class="text-slate-500">تلفن : </span>
                        <a class="text-slate-900 " href="tel:03491002424">{{convertToPersian("03491002424")}}</a>
                    </div>
                    <div class="font-IranYecan-medium mt-7 text-sm md:text-base ">
                        <span class="text-slate-500">ادرس : </span>
                        <span class="text-slate-900 ">کرمان ، خیابان نامدار محمدی </span>
                    </div>
                </div>
            </div>
        </section>
        <section class="py-32 lg:relative h-100 2xl:px-20">
            <div class=" lg:absolute lg:border-3  2xl:left-40.5  lg:-top-5 lg:left-1/3 -z-10  border-cyan-600 rounded-full lg:h-98 lg:w-97 lg:flex justify-center items-center">
                <h4 class="font-IranYecan-extraBold justify-center mb-5 lg:flex-col text-center flex text-3xl ">
                    <span class="lg:mb-64">
                        ماژول های
                    </span>
                    <span class="text-cyan-600">
                       حسابرو
                    </span>
                    </h4>
            </div>
            <div class="overflow-auto  h-48 md:h-56 lg:h-48 flex snap-x">
                <ModuleCard v-for="Module in modules" :key="Module.id" :title="Module.title" :desc="Module.desc" :src="Module.src"/>
            </div>
        </section>
        <section class="container mx-auto">
            <h4 class="font-IranYecan-extraBold text-2xl text-center my-5">
                مشتریان حسابرو
            </h4>
            <p class="text-center text-xs font-IranYecan-medium"> گروه مشتریان هدف حسابرو شامل تمامی کسب و کار های کوچک و متوسط می باشد شرکتهای فنی و مهندسی شرکت های مالی استارت آپ ها فروشندگان کالای دیجیتال و هایپر مارکت ها با ابعاد متوسط از جمله مشتریان حسابرو به شمار می آیند</p>
            <div class="flex flex-wrap justify-center  my-20">
                <div class="mx-10 my-4 lg:my-0 text-center" v-for="customer in customers" :key="customer.id">
                    <a :href="customer.href" target="_blank">
                        <figure  class="mb-5">
                            <img class="w-24 h-24" :src="customer.src" alt=""/>
                        </figure>
                    </a>
                    <a :href="customer.href" target="_blank" class="text-center font-IranYecan-bold text-sm">{{customer.title}}</a>
                </div>
            </div>
        </section>
    </main>
    <Footer/>
</div>

    </template>
<script>
    import NavBar from '@/layout/navBar/NavBar.layout.vue';
    import Footer from '@/layout/footer/Footer.layout.vue';
    import AdvCart from '@/components/advCard/AdvCard.vue';
    import OptionCom from '@/components/Options/Option.vue';
    import ModuleCard from '@/components/ModuleCard/ModuleCard.vue';
    import {toFarsiNumber} from '@/utilities/ConvertToPersian';
    import {advantages} from '@/config/tarefeh.data';
    import {modules} from '@/config/tarefeh.data';
    import {customers} from '@/config/tarefeh.data';
    

export default {
    name:"home",
    data() {
        return {
            advantagesData:advantages,
            modules:modules,
            customers:customers
        } 
    },
    components:{
        NavBar,
        Footer,
        AdvCart,
        OptionCom,
        ModuleCard
    },
    methods:{
        handleNavigate(){
            this.$router.push('/tarefeha')
        },
        convertToPersian(num){
            return toFarsiNumber(num)
        }

    }
}
</script>
<style lang="css">
.before-enter{
opacity: 0;
transform: translate(100px);
transition: all .35s ease-in-out;
}
.enter{
opacity: 1;
transform: translate(0);
}
::-webkit-scrollbar-track {
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
}
::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
}

</style>
