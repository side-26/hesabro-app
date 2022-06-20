<template lang="">
<div>
    <header class="bg-center relative bg-cover bg-main-bg bg-fixed">
        <NavBar/>
            <section class="sm:px-24 px-10 relative z-20   sm:pt-20 pt-10 pb-32  flex  justify-start items-center">
                <div class="pb-20 sm:mb-0">
                    <h1  class="sm:text-4xl text-3xl font-IranYecan-extraBold sm:leading-loose leading-normal">حسابرو <br/> راهکار جامع مدیریت مالی <br/> و کسب کار شما</h1>
                    
                    <!-- <p  class="font-IranYecan-bold  absolute sm:static sm:w-2/3 w-full md:w-2/4 side-26 right-0 -bottom-11  px-4 sm:px-0  bg-white sm:bg-transparent text-justify leading-6 text-gray-600 text-sm sm:py-0 sm:mt-10 py-10 ">سامانه یکپارچه حسابرو ، راهکاری نوین جهت راه اندازی و مدیریت کسب و کار هاست. حسابرو تمامی نیازهای یک کسب و کار را از امور حسابداری و مالی ، خرید و فروش ، انبارگردانی،فروشگاه اینترنتی و دیگر فرآیند ها را در بستری ساده و کم هزینه فراهم می آورد.</p> -->
                    <button @click="handleNavigate(s)" class="bg-cyan-600 flex justify-between text-sm rounded-lg mt-5 text-white font-IranYekan-regular py-3 px-6">
                            مشاهده تعرفه ها <span class="rotate-90"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                     </svg></span>
                    </button>
                </div>
            </section>
            <div class="absolute bg-gradient-to-l from-white to-transparent   w-full h-full left-0 top-0">
            </div>
    </header>
    <main class="">
        <section class="mx-auto py-4 px-10 items-center">
            <ImgContainer v-for="item in advantagesData" :key="item.id">
                <AdvCart  :cardProperty="item"/>
            </ImgContainer>
        </section>
    </main>
    <Footer/>
</div>

    </template>
<script>
    import NavBar from '@/layout/navBar/NavBar.layout.vue';
    import Footer from '../../layout/footer/Footer.layout.vue';
    import ImgContainer from '../../components/imgContainer.component/ImgContainer.component.vue';
    import AdvCart from '../../components/imgContainer.component/advCart.component/AdvCart.component.vue'
    import {advantages} from '../../config/tarefeh.data';

export default {
    name:"home",
    data() {
        return {
            advantagesData:advantages
        }
    },
    components:{
        NavBar,
        Footer,
        ImgContainer,
        AdvCart
    },
    methods:{
        handleNavigate(){
            this.$router.push('/tarefeha')
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
</style>
