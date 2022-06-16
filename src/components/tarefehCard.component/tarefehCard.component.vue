<template lang="">
    <div @click="handleCheck(tarefehInfo.price)" :class="{'border-cyan-500 border-2':checked,'h-auto':!toggled,'h-fit':toggled}" class="bg-gray-100 cursor-pointer  p-3 md:p-5  flex-grow  mx-4 md:mx-0 rounded-lg transition-all   my-2">
        <section :class="{'text-cyan-500':checked,'mb-7':!toggled}" class="flex 0 transition-all flex-wrap  justify-between">
            <div class="flex justify-between flex-wrap items-center"><div  :class="{'border-gray-300':!checked,'border-cyan-500 bg-cyan-500 border-0  after:w-4 after:h-1.5 after:white after:absolute after:border-b-3 after:border-l-3':checked}"   class="ml-3 relative  border-2 w-5.5 h-5.5 rounded-md  after:-rotate-45 after:bottom-2  after:left-1"></div><h4 class="font-IranYecan-bold text-base">{{tarefehInfo.module_name}}</h4></div>
            <div class="items-center flex sm:mt-0 mt-5 text-center sm:text-left"><span class="font-IranYecan-bold">{{toPersian(seprateFu(tarefehInfo.price))}} تومان</span>
            <transition name="arrowBtn" mode="out-in">
                <button type="button" v-if="toggled" class="text-slate-900 mr-4" @click="handleToggle($event)">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                     </svg>
                    </button>
                    <button type="button" v-else class="text-slate-900 mr-4" @click="handleToggle($event)">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
                        </svg>
                    </button>
            </transition>
            
            
                </div>
        </section>
        <div class="py overflow-hidden" :class="{'h-0':toggled}">
            <ul>
                <li class="text-xs my-5 font-IranYecan-medium" v-for="(item,index) in itemArr" :key="item">{{toPersian(index+1)}}{{item}}
                </li>
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
            toggled:true,
            itemArr:this.convertToArray(this.tarefehInfo.description)
        }
    },
        props:["tarefehInfo","toPersian",'seprateFu'],
    methods: {
        handleCheck(price){
            this.checked=!this.checked;
            if(this.checked)
                this.$emit("handleTotalPrice",price,this.tarefehInfo.id,true)
            else
                this.$emit("handleTotalPrice",-price,this.tarefehInfo.id,false) 
            
        },
        handleToggle(evt){
            evt.stopPropagation();
            // this.checked=!this.checked;
            this.toggled=!this.toggled;
            
        },
        convertToArray(str){
            const arr=str.split(/\d+/);
            arr.shift();
            return arr;
        }
    },
    computed:{
    }
}
</script>
<style lang="css">
        .arrowBtn-enter-active,
    .arrowBtn-leave-active {
      transition: opacity 0.35s ease;
    }
    
    .arrowBtn-enter-from,
    .arrowBtn-leave-to {
      opacity: 0;
    }
    .checkboxx{
    position: absolute;
    right: 0;
    top: 0;
    /* background-color: red; */
    border: 2px solid red;
    width:20px;
    height: 20px;
}
.checkboxx::after{
    content: "";
    position: absolute;
    border: 1px solid blue;
    border-right-style: none;
    border-top-style: none;
    top: 0;
    left: 0;
    width: 15px;
    height: 8px;
    transform: rotate(-45deg);
}
    </style>