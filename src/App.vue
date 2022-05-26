<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Tarefeha from './views/Tarefeha.view/Tarefeha.view.vue';
import NavBar from './layout/navBar/NavBar.layout.vue'
</script>

<template lang="">
<router-view></router-view>
</template>
<script>
export default {
    components:{
        NavBar
    }
}
</script>