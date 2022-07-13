<template lang="">
  <footer class="py-5 bg-gray-100 px-10 md:px-6 lg:px-24 2xl:px-0">
    <section class="flex flex-wrap pb-10 justify-between items-center relative after:absolute after:bottom-[7%] after:w-full after:h-[2px] after:bg-gray-200">
      <div class="flex items-center md:w-[60%] xl:w-[35%]">
        <router-link to="/">
          <figure class="w-16 h-16">
            <img class="w-full h-full" src="/img/hesabro.logo.svg" alt="hesabro-logo" />
          </figure>
        </router-link>
        <section class="my-5 md:mr-7 w-full">
          <h6 class="font-bold text-lg mb-10">دسترسی سریع</h6>
          <ul class="flex justify-between text-sm">
            <li><router-link class="text-slate-800 font-medium" to="/pricing">تعرفه ها</router-link></li>
            <li
              class="relative lg:after:absolute lg:after:w-[13px] lg:after:h-[13px] lg:after:rounded-full lg:after:bg-gray-300 lg:after:left-[-100%] lg:after:top-1 lg:before:absolute lg:before:w-[13px] lg:before:h-[13px] lg:before:rounded-full lg:before:bg-gray-300 lg:before:right-[-100%] lg:before:top-1"
            >
              <router-link :to="{ name: 'صفحه اصلی | حسابرو', hash: '#aboutUs' }" class="text-slate-800 md:mx-0 mx-3 font-medium">درباره ما</router-link>
            </li>
            <li><router-link class="text-slate-800 font-medium" :to="{ name: 'صفحه اصلی | حسابرو', hash: '#advantages' }">خدمات و راهکار ها</router-link></li>
          </ul>
        </section>
      </div>
      <section class="flex">
        <figure class="md:w-24 md:h-24 ml-5 w-20 h-20 cursor-pointer">
          <img class="w-full object-cover h-full" src="/img/etemad.png" alt="etemad-logo" />
        </figure>
        <figure class="md:w-24 md:h-24 ml-5 w-20 h-20 cursor-pointer">
          <img class="w-full object-cover h-full" src="/img/samandehi.png" alt="samandehi-logo" />
        </figure>
      </section>
    </section>
    <p class="text-sm font-IranYekan-regular text-slate-400 text-center">تمامی حقوق این وبسایت متعلق به <a target="_blank" class="hover:text-cyan-600 text-cyan-500 transition-all" href="https://avapardaz.vc/"> گروه فناوری آواپرداز </a>می باشد</p>
  </footer>
</template>
<script>
export default {
  name: 'Footer',
}
</script>
