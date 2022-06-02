<template lang="">
<transition name="modal">
    <div class="flex  fixed w-full h-full left-0 top-0 items-center justify-center">
        <div class="bg-white rounded-lg px-4 w-80 relative z-20 py-2">
            <h6 class="font-IranYecan-bold text-sm py-3">{{title}}</h6>
            <p class="text-xs font-IranYekan-regular text-gray-600 leading-6">{{desc}}</p>
            <button @click.prevent="handelRegister(type)" :class="{
                'bg-red-500':type!=='success',
                'bg-cyan-500':type==='success',
            }" class="w-full my-3 font-IranYecan-medium py-2 rounded-lg transition-all hover:opacity-95 text-white">
                {{btnText}}
            </button>
        </div>
        <div class="absolute w-full h-full top-0 left-0 bg-black opacity-40">

        </div>
    </div>

</transition>
</template>
<script>
export default {
    name:"InfoModal",
    props:["descSuccessfull","btnText","title","type","descFailed"],
    
    computed:{
            desc(){
                return this.type==="success"? this.descSuccessfull : this.descFailed;
            }
    },
    methods:{
        handelRegister(success){
            if(success==="success")
                this.$router.push('/');
            else
               this.$emit('handleClose');
        }
    }

}

</script>
<style lang="css">
    .modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>