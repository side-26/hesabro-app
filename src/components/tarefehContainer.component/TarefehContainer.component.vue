<template lang="">
    <section class="bg-white shadow-md  pb-4  m-6  justify-center  md:justify-between overflow-hidden rounded-2xl flex sm:justify-center flex-wrap text-black">
        <Container_Header :title="title"/>
        <section class="grid sm:grid-cols-1 md:grid-cols-2  px-0 md:px-4">
            <slot name="body">
    
            </slot>
        </section>
        <slot name="footer">

        </slot>
    </section>
</template>
<script>
    import Container_Header from '../ContainerHeader.component/tarefehContainerHeader.component.vue';
export default {
    name:"TarefehContainer",
    components:{
Container_Header
    },
    props:["title"]
}
</script>