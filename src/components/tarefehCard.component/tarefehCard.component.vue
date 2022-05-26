<template lang="">
    <div @click="handleCheck(tarefehInfo.price)" :class="{'border-gray-200':!checked,'border-cyan-500':checked,'h-auto':!toggled,'h-fit':toggled}" class="bg-gray-100 cursor-pointer  p-3 md:p-5 border-2 flex-grow  mx-4 md:mx-0 rounded-lg transition-all   my-2">
        <section :class="{'text-cyan-500':checked,'mb-7':!toggled}" class="flex 0 transition-all flex-wrap  justify-between">
            <div class="flex justify-between flex-wrap items-center"><input  :class="{'border-gray-200':!checked,'border-cyan-500':checked}" :checked="checked"  class="ml-3 text-lg border-2 rounded-lg w-4 h-4" type="checkbox"   id=""><h4 class="font-IranYecan-bold text-base">{{tarefehInfo.title}}</h4></div>
            <div class="items-center flex sm:mt-0 mt-5 text-center sm:text-left"><span class="font-IranYecan-bold">{{toPersian(tarefehInfo.price)}} تومان</span>
            <transition-group name="arrowBtn">
                <button type="button" v-if="toggled" class="text-slate-900" @click="handleToggle($event)">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                     </svg>
                    </button>
                    <button type="button" v-else class="text-slate-900" @click="handleToggle($event)">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
                        </svg>
                    </button>
            </transition-group>
            
            
                </div>
        </section>
        <div class="py overflow-hidden" :class="{'h-0':toggled}">
            <ul>
                <li class="text-sm my-2" v-for="(item,index) in tarefehInfo.items" :key="item">{{toPersian(index+1)}}.{{item}}</li>
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
            toggled:true
        }
    },
        props:["tarefehInfo","toPersian"],
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
    }
}
</script>
<style lang="css">
        .arrowBtn-enter-active,
    .arrowBtn-leave-active {
      transition: opacity 0.5s ease;
    }
    
    .arrowBtn-enter-from,
    .arrowBtn-leave-to {
      opacity: 0;
    }
    </style>