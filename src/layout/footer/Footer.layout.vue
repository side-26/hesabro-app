<template lang="">
    <footer class="py-10 bg-gray-100 px-10 md:px-6 lg:px-24">
        <section class="flex justify-between md:flex-row flex-col   mb-5">
            <div class="font-IranYecan-bold text-sm md:mt-0 mt-5">
                <router-link to="/">
                    <figure class="w-14 h-14">
                        <img class="w-full h-full" src="../../assets/img/hesabro.logo.svg" alt="hesabro-logo" />
                    </figure>
                </router-link>
                <h5 class=" text-gray-800 font-IranYecan-bold mt-4">
                    حسابرو، راهکار جامع مدیریت مالی کسب‌ و ‌کار شما
                </h5>
                <div class="my-8 ">
                    آدرس : <span class="text-slate-500">
                    کرمان ، میدان قرنی ، ساختمان پدر ، طبقه پنجم</span>
                </div>
                <div class=""> تلفن : <a class="text-slate-500" href="tel:+989981396467" data-v-461b212e="">09981396467</a></div>
                <div class="my-8 ">
                    شبکه های اجتماعی : <figure>
                        
                    </figure>
                </div>
            </div>
            <div class="">
                <div class="font-IranYecan-bold text-lg">
                    دسترسی ها
                </div>
                <div>
                    <ul class="text-sm text-slate-900">
                        <li class="my-6"><router-link class="text-slate-800 font-IranYekan-regular" to="/">خانه</router-link></li> 
                        <li class="my-6"><router-link class="text-slate-800 font-IranYekan-regular" to="/">خدمات و راهکار ها</router-link></li> 
                        <li class="my-6"><router-link class="text-slate-800 font-IranYekan-regular" to="/tarefeha">تعرفه ها</router-link></li> 
                        <li class="my-6"><router-link class="text-slate-800 font-IranYekan-regular" to="/">سوالات متداول</router-link></li> 
                        <li class="my-6"><router-link class="text-slate-800 font-IranYekan-regular" to="/">ارتباط با ما</router-link></li> 
                    </ul>
                </div>

            </div>
            <div class="flex flex-col items-center">
                <div class="font-IranYecan-bold mb-16">
                    مجوز های حسابرو
                </div>
                <div class="flex">
                    
                    <figure class="md:w-32 md:h-32 ml-5 w-20 h-20 cursor-pointer">
                        <img class="w-full h-full" src="../../assets/img/download.jfif" alt="etemad-logo"/>
                    </figure>
                        <figure class="md:w-32 md:h-32 ml-5 w-20 h-20 cursor-pointer">
                            <img class="w-full h-full" src="../../assets/img/samandehi.png" alt="samandehi-logo"/>
                        </figure>
                </div>
            </div>
        </section>
        <p class="text-sm font-IranYekan-regular text-slate-400 text-center">تمامی لوگو ها ، عکس ها و سایر محتوا های قرار داده شده با احترام متعلق به <a target="_blank" class="hover:text-cyan-600 text-cyan-500 transition-all" href="https://avapardaz.vc/">
        گروه فناوری آواپرداز
        </a> و امتیاز استفاده از این اطلاعات تنها برای <a target="_blank"  class="hover:text-cyan-600 text-cyan-500 transition-all" href="https://avapardaz.vc/">
        گروه فناوری آواپرداز
        </a> مجاز است</p>
    </footer>
</template>
<script>
export default {
    name:"Footer"
    ,
    props:[""]
}
</script>
<style lang="">
    
</style>