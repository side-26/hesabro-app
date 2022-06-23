<template lang="">
<div>
    <header class="bg-center relative bg-cover bg-main-bg bg-fixed">
        <NavBar/>
            <section class="sm:px-24 px-10 relative z-20   sm:pt-20 pt-10 pb-32  flex  justify-start items-center">
                <div class="pb-20 sm:mb-0">
                    <h1  class="sm:text-4xl text-3xl font-IranYecan-extraBold sm:leading-loose leading-normal">حسابرو <br/> راهکار جامع مدیریت مالی <br/> و کسب کار شما</h1>
                    
                    <!-- <p  class="font-IranYecan-bold  absolute sm:static sm:w-2/3 w-full md:w-2/4 side-26 right-0 -bottom-11  px-4 sm:px-0  bg-white sm:bg-transparent text-justify leading-6 text-gray-600 text-sm sm:py-0 sm:mt-10 py-10 ">سامانه یکپارچه حسابرو ، راهکاری نوین جهت راه اندازی و مدیریت کسب و کار هاست. حسابرو تمامی نیازهای یک کسب و کار را از امور حسابداری و مالی ، خرید و فروش ، انبارگردانی،فروشگاه اینترنتی و دیگر فرآیند ها را در بستری ساده و کم هزینه فراهم می آورد.</p> -->
                    <button @click="handleNavigate(s)" class="bg-cyan-600 flex justify-between text-sm rounded-lg mt-10 text-white font-IranYekan-regular py-3 px-6">
                            مشاهده تعرفه ها <span class="rotate-90"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                     </svg></span>
                    </button>
                </div>
            </section>
            <div class="absolute bg-gradient-to-l from-white to-transparent   w-full h-full left-0 top-0">
            </div>
    </header>
    <main class="overflow-hidden">
        <section class="mx-auto py-4 px-2 md:px-5 lg:px-10 2xl:container 2xl:px-0">
            <ImgContainer v-for="item in advantagesData" :key="item.id">
                <AdvCart  :cardProperty="item"/>
            </ImgContainer>
        </section>
        <section class="my-24 relative flex justify-start items-center  right-0">
            <div class="flex justify-center  w-105 h-105 rounded-l-3xl overflow-hidden  bg-gray-100">
                <div class="text-4xl text-gray-300 pt-36 font-IranYecan-thin text-right tracking-wider rotate-90">درباره ما</div>
            </div>
            <div class=" flex items-center relative -right-36">
                <figure class="border-8 border-white w-80 rounded-3xl overflow-hidden h-97">
                    <img class="w-full h-full" alt="about-us" src="@/assets/img/main_bg.jpg" loading="lazy" />
                </figure>
                <div class="mr-10 lg:w-2/3">
                    <h4 class="font-IranYecan-extraBold text-2xl mb-10">درباره ما</h4>
                    <p class="font-IranYecan-medium text-gray-900 text-xs">سامانه یکپارچه حسابرو، راهکاری نوین جهت راه اندازی و مدیریت کسب و کارهاست. حسابرو تمامی نیازهای یک کسب و کار را از امور حسابداری و مالی ، خرید و فروش ، انبارگردانی،فروشگاه اینترنتی و دیگر فرایند ها را در بستری ساده و کم هزینه فراهم می آورد</p>
                    <OptionCom :convertToPersian='convertToPersian'/> 
                    <div class="font-IranYecan-medium mt-14">
                        <span class="text-slate-500">تلفن : </span>
                        <a class="text-slate-900 " href="tel:03491002424">{{convertToPersian("03491002424")}}</a>
                    </div>
                    <div class="font-IranYecan-medium mt-14">
                        <span class="text-slate-500">ادرس : </span>
                        <span class="text-slate-900 ">کرمان ، خیابان نامدار محمدی </span>
                    </div>
                </div>
            </div>
        </section>
        <section class="py-32 relative h-100">
            <div class=" absolute border-3 -top-5 left-1/3 -z-10  border-cyan-600 rounded-full lg:h-98 lg:w-97 flex justify-center items-center">
                <h4 class="font-IranYecan-extraBold flex-col text-center flex text-5xl ">
                    <span class="mb-64">
                        ماژول های
                    </span>
                    <span class="text-cyan-600">
                       حسابرو
                    </span>
                    </h4>
            </div>
            <div class="overflow-auto h-48 md:h-56 lg:h-48 flex snap-x">
                <ModuleCard v-for="Module in modules" :key="Module.id" :title="Module.title" :desc="Module.desc" :src="Module.src"/>
            </div>
        </section>
        <section class="container mx-auto">
            <h4 class="font-IranYecan-extraBold text-2xl text-center my-5">
                مشتریان حسابرو
            </h4>
            <p class="text-center text-xs font-IranYecan-medium"> گروه مشتریان هدف حسابرو شامل تمامی کسب و کار های کوچک و متوسط می باشد شرکتهای فنی و مهندسی شرکت های مالی استارت آپ ها فروشندگان کالای دیجیتال و هایپر مارکت ها با ابعاد متوسط از جمله مشتریان حسابرو به شمار می آیند</p>
            <div class="flex flex-wrap justify-center  my-20">
                <div class="mx-10 text-center" v-for="customer in customers" :key="customer.id">
                    <a :href="customer.href" target="_blank">
                        <figure  class="mb-5">
                            <img class="w-24 h-24" :src="customer.src" alt=""/>
                        </figure>

                    </a>
                    <span class="text-center font-IranYecan-bold text-sm">{{customer.title}}</span>
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
    import ImgContainer from '@/components/imgContainer.component/ImgContainer.component.vue';
    import AdvCart from '@/components/imgContainer.component/advCart.component/AdvCart.component.vue';
    import OptionCom from '@/components/Options.component/Option.component.vue';
    import ModuleCard from '../../components/ModuleCard.component/ModuleCard.component.vue';
    import {toFarsiNumber} from '../../utilities/ConvertToPersian';
    import {advantages} from '@/config/tarefeh.data';
    import {modules} from '../../config/tarefeh.data';
    import {customers} from '../../config/tarefeh.data';
    

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
        ImgContainer,
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
 .test{
        scroll-snap-type: x mandatory;
    }
    ::-webkit-scrollbar {
  width: 20px;
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
::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}

</style>
