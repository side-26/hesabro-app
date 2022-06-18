<template lang="">
<div>
    <header class="bg-center relative bg-cover">
        <NavBar/>
            <section class="sm:px-24 px-10  sm:pt-20 pt-10 pb-32  flex  justify-start items-center">
                <div class="pb-20 sm:mb-0">
                    <h1  class="sm:text-4xl text-3xl font-IranYecan-extraBold sm:leading-loose leading-normal">حسابرو <br/> راهکار جامع مدیریت مالی <br/> و کسب کار شما</h1>
                    <p  class="font-IranYecan-bold  absolute sm:static sm:w-2/3 w-full md:w-2/4 right-0 -bottom-11  px-4 sm:px-0  bg-white sm:bg-transparent text-justify leading-6 text-gray-600 text-sm sm:py-0 sm:mt-10 py-10 ">سامانه یکپارچه حسابرو ، راهکاری نوین جهت راه اندازی و مدیریت کسب و کار هاست. حسابرو تمامی نیازهای یک کسب و کار را از امور حسابداری و مالی ، خرید و فروش ، انبارگردانی،فروشگاه اینترنتی و دیگر فرآیند ها را در بستری ساده و کم هزینه فراهم می آورد.</p>
                </div>
            </section>
    </header>
    <main></main>
    <Footer/>
</div>

    </template>
<script>
    import NavBar from '@/layout/navBar/NavBar.layout.vue';
    import Footer from '../../layout/footer/Footer.layout.vue';

export default {
    name:"home",
    components:{
        NavBar,
        Footer
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
