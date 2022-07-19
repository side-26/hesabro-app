<template lang="">
  <footer class="py-1 bg-gray-100 px-10 md:px-6 lg:px-24 2xl:px-0">
    <section class="flex 2xl:container mx-auto flex-wrap pb-10 sm:pb-5 justify-between items-center relative after:absolute after:bottom-[7%] after:w-full after:h-[2px] after:bg-gray-200">
      <div class="flex items-center">
        <router-link class="hidden md:block" to="/">
          <figure class="w-16 h-16">
            <img class="w-full h-full" src="/img/hesabro.logo.svg" alt="hesabro-logo" />
          </figure>
        </router-link>
        <section class="my-5 md:mr-7 w-full">
          <div class="font-bold text-lg mb-5 sm:mb-10">دسترسی سریع</div>
          <ul class="flex flex-col sm:flex-row justify-between text-sm">
            <li class="flex">
              <router-link class="text-slate-800 font-medium" to="/pricing">تعرفه ها</router-link>
            </li>
            <li class="my-4 sm:my-0 flex items-center">
              <div class="rounded-full lg:mx-7 2xl:mx-8 w-3 h-3 bg-gray-300"></div>
              <router-link :to="{ name: 'صفحه اصلی | حسابرو', hash: '#aboutUs' }" class="text-slate-800 font-medium">درباره ما</router-link>
              <div class="rounded-full lg:mx-7 2xl:mx-8 w-3 h-3 bg-gray-300"></div>
            </li>
            <li><router-link class="text-slate-800 font-medium" :to="{ name: 'صفحه اصلی | حسابرو', hash: '#advantages' }">خدمات و راهکار ها</router-link></li>
          </ul>
        </section>
      </div>
      <section class="flex mx-auto sm:mx-0">
        <figure class="md:w-24 md:h-24 ml-5 w-20 h-20 cursor-pointer">
          <img class="w-full object-contain h-full" src="/img/etemad.png" alt="etemad-logo" />
        </figure>
        <figure class="md:w-24 md:h-24 ml-5 w-20 h-20 cursor-pointer">
          <img class="w-full object-contain h-full" src="/img/samandehi.png" alt="samandehi-logo" />
        </figure>
      </section>
    </section>
    <p class="text-sm pb-2 font-IranYekan-regular text-slate-400 text-center">تمامی حقوق این وبسایت متعلق به <a target="_blank" class="hover:text-cyan-600 text-cyan-500 transition-all" href="https://avapardaz.vc/"> گروه فناوری آواپرداز </a>می باشد</p>
  </footer>
</template>
<script>
export default {
  name: 'Footer',
}
</script>
