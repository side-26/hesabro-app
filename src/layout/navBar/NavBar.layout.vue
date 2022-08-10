<template lang="">
  <!-- قسمت منو های سایت -->
  <nav class="bg-white sticky z-[60] top-0 overflow-hidden">
    <section class="sm:static relative container mx-auto 2xl:mx-0 py-3 flex items-center 2xl:mr-10">
      <router-link to="/" class="flex items-center sm:pr-8">
        <figure class="mr-8 sm:mr-0 sm:ml-10 lg:ml-14">
          <img src="/img/hesabro.logo.svg" alt="hesabro-logo" />
        </figure>
        <span class="font-bold sm:hidden mr-5 text-xl text-cyan-600">حسابرو</span>
      </router-link>
      <router-link v-if="currentURL.fullPath==='/'" to="/pricing" class="hover:text-cyan-600 font-IranYekan-bold md:hidden ml-8 mr-auto transition-all">تعرفه ها</router-link>
      <ul class="sm:bg-inherit hidden bg-white sm:static sm:mt-0 mt-5 font-IranYekan-regular absolute sm:scale-100 transition-all z-30 top-8 w-full text-center sm:flex-row flex-col md:flex justify-between sm:w-3/4 md:w-4/6 lg:w-6/12 xl:w-1/2 items-center text-slate-800">
        <li class="my-5 sm:my-0">
          <router-link :class="{'text-cyan-500 font-extrabold':currentPosition==='header'}"  :to="{name:`صفحه اصلی | حسابرو`,hash:'#header'}" class="hover:text-cyan-600 transition-all">خانه</router-link>
        </li>
        <li class="my-5 sm:my-0">
          <router-link  :class="{'text-cyan-500 font-extrabold':currentPosition==='advantages'}"  :to="{name:`صفحه اصلی | حسابرو`,hash:'#advantages'}" class="hover:text-cyan-600 transition-all">خدمات و راهکار ها</router-link>
        </li>
        <li class="pricing_navlink my-5 sm:my-0">
          <router-link  id="3" to="/pricing" :router-link-active="text-cyan-500" class="hover:text-cyan-500  transition-all">تعرفه ها</router-link>
        </li>
          <li class="my-5 sm:my-0">
            <router-link :class="{'text-cyan-500 font-extrabold':currentPosition==='aboutUs'}"  :to="{name:`صفحه اصلی | حسابرو`,hash:'#aboutUs'}" class="hover:text-cyan-600 transition-all">درباره ما</router-link>
          </li>
        <li class="my-5 sm:my-0">
          <router-link :class="{'text-cyan-500 font-extrabold':currentPosition==='customers'}"  :to="{name:`صفحه اصلی | حسابرو`,hash:'#customers'}" class="hover:text-cyan-600 transition-all"> مشتریان حسابرو</router-link>
        </li>
      </ul>
      
    </section>
  </nav>
  <!-- پایان منو های سایت -->
</template>
<script>
export default {
  data() {
    return {
      currentURL:this.$router.currentRoute
    }
  },
  props:['currentPosition']
}
</script>
<style lang="css" scoped>
.pricing_navlink>.router-link-active{
    color: #0891b2;
    font-weight: 800;
}
</style>