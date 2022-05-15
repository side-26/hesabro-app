<template lang="">
    <div>
        <section class="flex p-3 cursor-pointer justify-between  pb-3">
            <div class="flex justify-between items-center"><input type="checkbox" checked :name={{tarefehInfo.title}} id=""><h4>{{tarefehInfo.price}}</h4></div>
            <span>{{tarefehInfo.price}}</span>
        </section>
        <div class="py">
            <ul>
                <li v-for="item in tarefehInfo.items" ::key="item"></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:"tarefehCard",
    data() {
        return {
            checked:false
        }
    },
    methods: {
        handleCheck(){
            this.checked=!this.checked;
        },
        props:["tarefehInfo"]
    },
}
</script>
<style lang="">
    
</style>