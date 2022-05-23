<template lang="">
    <section class="lg:w-2/3 md:w-4/5 w-full  mt-3 md:mt-0  md:mr-auto px-3">
        <form @submit.prevent="handleSubmit">
            <slot>

            </slot>
            <div>
                <button type="submit" class="rounded-xl font-IranYecan-bold mt-2 text-sm bg-cyan-500 hover:bg-cyan-600 transition-all py-3 text-white w-full">
                        ثبت سفارش
                </button>
            </div>
        </form>
    </section>
</template>
<script>
export default {
    name:"FormCo",
    methods: {
        handleSubmit(){
            alert("submited")
        }
    },
}
</script>