<template lang="">
    <div class="flex justify-between">
        <button @click="handleCounter(step)"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
</svg></button>
<span>0{{count}}</span>
<button @click="handleCounter(-step)"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
</svg></button>
    </div>
</template>
<script>
export default {
    name:"counter",
    props:["count","step"],
    methods: {
        handleCounter(step){
            if(this.count!==0&&step>0) 
               console.log(step)

        }
    },
}
</script>
