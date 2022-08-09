<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import NavBar from './layout/navBar/NavBar.layout.vue'
</script>

<template lang="">
  <router-view v-slot="{ Component }">
    <transition name="page">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<script>
export default {
  components: {
    NavBar,
  },
}
</script>
<style lang="css">
.page-enter-active,
.page-leave-active {
  transition: all 0.35s ease-in-out;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
