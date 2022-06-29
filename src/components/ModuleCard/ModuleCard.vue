<template lang="">
    <div class="py-2  scroll-t h-full bg-gray-50 snap-start  min-w-full  md:min-w-2.7 flex-wrap xl:min-w-2.3 relative after:absolute after:w-0 md:after:w-0.5 after:left-0 after:top-0 md:after:h-4/5 after:h-0 md:after:my-5 lg:after:my-4 after:bg-gray-200">
        <section class="pl-5 py-4 px-3">
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