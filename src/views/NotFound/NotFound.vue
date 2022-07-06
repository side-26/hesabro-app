<template lang="">
  <div class="text-center">
    <div class="text-cyan-500 font-IranYecan-extraBold text-5xl mt-52">خطای 404</div>
    <div class="mt-20">صفحه مورد نظر پیدا نشد</div>
    <div class="my-8">ممکن است آدرس اشتباه وارد شده باشد یا صفحه پاک شده باشد</div>
    <button class="bg-cyan-500 py-4 text-sm font-IranYecan-bold text-white px-6 rounded-3xl" type="button" @click="this.$router.push('/')">صفحه اصلی</button>
  </div>
</template>
<script>
export default {
  name: 'NotFound',
}
</script>
