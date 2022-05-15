
<template lang="">
    <header class="mb-10">
        <NavBar/>
    </header>
    <main class="container mx-auto sm:px-20 md:px-16 lg:px-40">
        <TarefehContainer>
            
        </TarefehContainer>
    </main>
</template>
<script>
import NavBar from '../../layout/navBar/NavBar.layout.vue';
import TarefehContainer from '../../components/tarefehContainer.component/TarefehContainer.component.vue'
export default {
    components:{
        NavBar,
        TarefehContainer
    }
}
</script>
<style lang="">
    
</style>