<template lang="">
    <div @click="handleCheck(tarefehInfo.price)" :class="{'border-gray-200':!checked,'border-cyan-500':checked,'h-auto':!toggled,'h-fit':toggled}" class="bg-gray-100 cursor-pointer  p-3 md:p-5 border-2 flex-grow   rounded-lg transition-all sm:m-2 mx-0 my-2">
        <section :class="{'text-cyan-500':checked,'mb-7':!toggled}" class="flex 0 transition-all flex-wrap  justify-between">
            <div class="flex justify-between flex-wrap items-center"><input  :class="{'border-gray-200':!checked,'border-cyan-500':checked}" :checked="checked"  class="ml-3 text-lg border-2 rounded-lg w-4 h-4" type="checkbox"   id=""><h4 class="font-IranYecan-bold text-base">{{tarefehInfo.title}}</h4></div>
            <div class="items-center    flex   sm:mt-0 mt-5 text-center sm:text-left"><span class="font-IranYecan-bold">{{tarefehInfo.price}} تومان</span>
            <button type="button" class="text-slate-900" @click="handleToggle($event)">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                 </svg>
                </button>
                </div>
        </section>
        <div class="py overflow-hidden" :class="{'h-0':toggled}">
            <ul>
                <li class="text-sm my-2" v-for="(item,index) in tarefehInfo.items" :key="item">{{index+1}}.{{item}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:"tarefehCard",
    data() {
        return {
            checked:false,
            toggled:false
        }
    },
        props:["tarefehInfo"],
    methods: {
        handleCheck(price){
                
            this.checked=!this.checked;
            if(this.checked)
                this.$emit("handleTotalPrice",price)
            else
                this.$emit("handleTotalPrice",-price) 
        },
        handleToggle(evt){
            evt.stopPropagation();
            // this.checked=!this.checked;
            this.toggled=!this.toggled;
            
        }
    },
    computed:{
        // btn(){
        //         return `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        //         <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        //         </svg>`
        // }
    }
}
</script>