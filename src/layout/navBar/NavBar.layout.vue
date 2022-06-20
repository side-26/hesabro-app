<template lang="">
  <nav class="relative z-30">
    <section class="sm:static relative container mx-auto py-3 flex items-center">
      <router-link to="/" class="flex items-center sm:pr-8">
        <figure class="mr-8 sm:mr-0 sm:ml-10 lg:ml-14">
            <img src="../../assets/img/hesabro.logo.svg" alt="logo" />
        </figure>
        <span class="font-IranYecan-bold sm:hidden mr-5  text-xl text-cyan-600 ">حسابرو</span>
      </router-link> 
      <button @click="handleShow()" class="sm:hidden ml-10 mr-auto w-10 text-cyan-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="{2}"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 10h16M4 14h16M4 18h16"
          />
        </svg>
        
      </button>
      <ul :class="{ 'scale-100': show,'scale-0':!show }" class="sm:bg-inherit bg-white sm:static sm:mt-0 mt-5 font-IranYekan-regular absolute sm:scale-100   transition-all z-30   overflow-hidden top-8 w-full text-center sm:flex-row flex-col flex justify-between sm:w-3/4 md:w-4/6 lg:w-6/12 xl:w-1/2 items-center text-slate-800">
        <li class="my-5 sm:my-0"><router-link @click="hanleShow()"  to="/" class="hover:text-cyan-600   transition-all">خانه</router-link></li>
        <li class="my-5 sm:my-0"><router-link @click="hanleShow()"  to="/tarefeha" class="hover:text-cyan-600 transition-all ">خدمات و راهکار ها</router-link></li>
        <li class="my-5 sm:my-0"><router-link @click="hanleShow()" to="/tarefeha" class="hover:text-cyan-600 transition-all ">تعرفه ها</router-link></li>
        <li class="my-5 sm:my-0"><router-link @click="hanleShow()"  to="/" class="hover:text-cyan-600   transition-all text-slate-800"> سوالات متداول</router-link></li>
        <li class="my-5 sm:my-0"><router-link @click="hanleShow()"  to="/" class="hover:text-cyan-600  transition-all text-slate-800"> ارتباط با ما</router-link></li>
      </ul>
    </section>
  </nav>
</template>
<script>
export default {
    data() {
        return {
            show:false,
        }
    },
    methods: {
        handleShow(){
            this.show=!this.show
        }
    },
}
</script>
<style lang=""></style>
