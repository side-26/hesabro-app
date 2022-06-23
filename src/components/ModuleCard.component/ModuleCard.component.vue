<template lang="">
    <div class="py-5  scroll-t h-full  snap-start min-w-full  md:min-w-2.7 lg:min-w-2.3">
        <section class="pl-5 py-4  h-full px-3 border-gray-300 bg-gray-50 border-l-2">
            <div class="flex">
                <figure class="w-6 h-6 ml-3">
                    <img :src="src" alt="title" class="w-full h-full"/>
                </figure>
                <h5 class="font-IranYecan-extraBold mb-3">{{title}}</h5>
            </div>
            <p class="mr-10 text-xs font-IranYekan-regular">{{desc}}</p>
        </section>
    </div>
</template>
<script>
export default {
    name:"ModuleCard",
    props:['title',"src","desc"]
}
</script>
<style lang="css">
   .scroll-snap-align{
    scroll-snap-align: start;
   }
    
</style>